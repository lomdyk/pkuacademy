import { proxy, snapshot } from 'valtio';
import { supabase } from '../utils/supabaseClient';
import { v4 as uuidv4 } from 'uuid';

export interface TestSession {
  id: string;
  completed: boolean;
  
  // Pre-test
  age_group: string;
  pku_knowledge: string;
  
  // Metrics
  language: string;
  is_mobile: boolean;
  time_spent_total: number;
  time_spent_m1: number;
  time_spent_m2: number;
  time_spent_m3: number;
  max_scroll_depth: string;
  games_completed: string[];
  game_start_method: Record<string, string>; // e.g. { m1: 'overlay', m2: 'button' }
  
  // Post-test
  rating_design: number;
  rating_clarity: number;
  learned_new: boolean | null;
  feedback: string;
}

const initialState: TestSession = {
  id: '',
  completed: false,
  age_group: '',
  pku_knowledge: '',
  language: 'en',
  is_mobile: false,
  time_spent_total: 0,
  time_spent_m1: 0,
  time_spent_m2: 0,
  time_spent_m3: 0,
  max_scroll_depth: 'hero',
  games_completed: [],
  game_start_method: {},
  rating_design: 0,
  rating_clarity: 0,
  learned_new: null,
  feedback: '',
};

export const metricsState = proxy<TestSession>({ ...initialState });

let activeMissionId: 'main' | 'm1' | 'm2' | 'm3' = 'main';

export const metricsActions = {
  setActiveMission(mission: 'main' | 'm1' | 'm2' | 'm3') {
    activeMissionId = mission;
  },

  initSession(ageGroup: string, pkuKnowledge: string, language: string) {
    metricsState.id = uuidv4();
    metricsState.age_group = ageGroup;
    metricsState.pku_knowledge = pkuKnowledge;
    metricsState.language = language;
    metricsState.is_mobile = window.innerWidth < 768;
    
    // Initial insert
    this.syncToDb(true);
  },
  
  updateScrollDepth(sectionId: string) {
    const depths = ['hero', 'crew-greeting', 'mission-1', 'mission-2', 'mission-3', 'downloads', 'footer'];
    const currentIndex = depths.indexOf(metricsState.max_scroll_depth);
    const newIndex = depths.indexOf(sectionId);
    if (newIndex > currentIndex) {
      metricsState.max_scroll_depth = sectionId;
      this.syncToDb(); // Sync immediately when reaching a new section
    }
  },
  
  recordGameStart(missionId: string, method: 'overlay' | 'text_button') {
    if (!metricsState.game_start_method[missionId]) {
      metricsState.game_start_method[missionId] = method;
      this.syncToDb();
    }
  },
  
  recordGameComplete(missionId: string) {
    if (!metricsState.games_completed.includes(missionId)) {
      metricsState.games_completed.push(missionId);
      this.syncToDb(); // sync whenever they finish a game
    }
  },
  
  addTime(category: 'total' | 'm1' | 'm2' | 'm3', seconds: number) {
    if (category === 'total') metricsState.time_spent_total += seconds;
    if (category === 'm1') metricsState.time_spent_m1 += seconds;
    if (category === 'm2') metricsState.time_spent_m2 += seconds;
    if (category === 'm3') metricsState.time_spent_m3 += seconds;
  },

  async syncToDb(isInitial = false) {
    if (!metricsState.id) return;
    
    // Get a plain JS object from the proxy to avoid serialization issues with Supabase
    const state = snapshot(metricsState);
    
    try {
      if (isInitial) {
        const { error } = await supabase.from('test_sessions').insert([
          {
            id: state.id,
            age_group: state.age_group,
            pku_knowledge: state.pku_knowledge,
            language: state.language,
            is_mobile: state.is_mobile,
            max_scroll_depth: state.max_scroll_depth,
          }
        ]);
        if (error) console.error("Insert error:", error);
      } else {
        const { error } = await supabase.from('test_sessions').update({
          time_spent_total: state.time_spent_total,
          time_spent_m1: state.time_spent_m1,
          time_spent_m2: state.time_spent_m2,
          time_spent_m3: state.time_spent_m3,
          max_scroll_depth: state.max_scroll_depth,
          games_completed: [...state.games_completed],
          game_start_method: state.game_start_method,
          completed: state.completed,
          rating_design: state.rating_design,
          rating_clarity: state.rating_clarity,
          learned_new: state.learned_new,
          feedback: state.feedback,
        }).eq('id', state.id);
        
        if (error) {
          console.error("Update error:", error);
          // Only alert once so it doesn't spam every 5 seconds
          if (!metricsState.completed && state.time_spent_total < 15) {
            alert("Database Error: " + error.message);
          }
        }
      }
    } catch (err) {
      console.error('Failed to sync metrics:', err);
    }
  },

  finishSession(design: number, clarity: number, learned: boolean, feedback: string) {
    metricsState.rating_design = design;
    metricsState.rating_clarity = clarity;
    metricsState.learned_new = learned;
    metricsState.feedback = feedback;
    metricsState.completed = true;
    
    return this.syncToDb();
  }
};

// Periodically save total time
setInterval(() => {
  if (metricsState.id && !metricsState.completed) {
    metricsActions.addTime('total', 5); // add 5 seconds
    if (activeMissionId !== 'main') {
      metricsActions.addTime(activeMissionId, 5);
    }
    
    // Sync every 5 seconds to ensure we capture drop-offs
    metricsActions.syncToDb();
  }
}, 5000);
