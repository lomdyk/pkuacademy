import { proxy } from 'valtio';
import keyframesJson from '../utils/rocketKeyframes.json';

export const scrollState = proxy({
  progress: 0,
  isGameActive: false,
});

export interface Keyframe {
  p: number;
  position: [number, number, number];
  rotation: [number, number, number];
}

export const keyframes: Keyframe[] = keyframesJson as Keyframe[];
