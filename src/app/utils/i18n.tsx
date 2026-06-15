import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  useEffect,
} from "react";

export type Lang = "en" | "de";

type Dict = Record<string, { en: string; de: string }>;

export const TRANSLATIONS: Dict = {
  // ── Top nav ────────────────────────────────────────────────
  "nav.mission": { en: "Mission", de: "Mission" },
  "nav.title": { en: "Sports Training Academy", de: "Sport-Trainings-Akademie" },
  "stage.hero": { en: "Pre-Match Briefing", de: "Vor-Match-Briefing" },
  "stage.downloads": { en: "Home Training Pack", de: "Trainingspaket für Zuhause" },
  "stage.logs": { en: "Captains Log", de: "Kapitänslogbuch" },
  "stage.intro": { en: "Intro", de: "Intro" },
  "stage.complete": { en: "Complete", de: "Abgeschlossen" },

  // ── Downloads section ─────────────────────────────────────
  "dl.heading": { en: "Training Continues at Home!", de: "Trainiere weiter zuhause!" },
  "dl.sub": {
    en: "Print these games and keep training at home with your family. Real champions practice every day!",
    de: "Drucke diese Spiele aus und trainiere zuhause mit deiner Familie. Echte Champions trainieren jeden Tag!",
  },
  "dl.card1.title": { en: "2Day Flight Map", de: "2Day Flight Map" },
  "dl.card1.desc": {
    en: "A printable PDF for real-world sports preparation at home with parents.",
    de: "Ein druckbares PDF zur sportlichen Vorbereitung zuhause mit den Eltern.",
  },
  "dl.card2.title": { en: "Cosmic Rally", de: "Kosmische Rallye" },
  "dl.card2.desc": {
    en: "A printable PDF. It is a classic dice-rolling race, but with our medical lore.",
    de: "Ein druckbares PDF. Ein klassisches Würfel-Wettrennen, aber mit unserem medizinischen Wissen.",
  },
  "dl.cta": { en: "Download PDF", de: "PDF herunterladen" },
  "dl.soon": { en: "Coming Soon", de: "Demnächst" },

  // Game completion banners
  "complete.m1.title": { en: "Backpack Packed!", de: "Rucksack gepackt!" },
  "complete.m1.body": {
    en: "Good food packed and ready. Time to head to the field.",
    de: "Perfekt gepackt! Auf geht's zum Spielfeld!",
  },
  "complete.m2.title": { en: "Mission Accepted!", de: "Mission angenommen!" },
  "complete.m2.body": {
    en: "You held your ground like a true captain. The team gets it now.",
    de: "Du hast standgehalten wie ein echter Kapitän. Das Team versteht es jetzt.",
  },
  "complete.continue": { en: "Continue", de: "Weiter" },
  "nav.lang.en": { en: "EN", de: "EN" },
  "nav.lang.de": { en: "DE", de: "DE" },

  // ── Onboarding / HeroStory ────────────────────────────────
  "welcome.title": { en: "Welcome, Captain!", de: "Willkommen, Kapitän!" },
  "welcome.subtitle": { 
    en: "Today is a big day! You and your Galactic Crew are preparing for a massive sports tournament.", 
    de: "Heute ist ein großer Tag! Du und deine galaktische Crew bereiten sich auf ein großes Sportturnier vor." 
  },
  "pku.title": { en: "Your Sports Energy", de: "Deine Sportenergie" },
  "pku.desc": { 
    en: "When you play sports, your body uses a lot of energy. Some foods make you tired, but your special PKU diet keeps your muscles strong and ready to win.", 
    de: "Wenn du Sport treibst, verbraucht dein Körper viel Energie. Manche Lebensmittel machen dich müde, aber deine spezielle PKU-Diät hält deine Muskeln stark und bereit zum Gewinnen." 
  },
  "fuel.clean": { en: "Super-Fuel", de: "Super-Treibstoff" },
  "fuel.cleanDesc": { 
    en: "Fruits, veggies, and your PKU formula are your Super-Fuel. They give your body the power to stay active!", 
    de: "Obst, Gemüse und deine PKU-Formel sind dein Super-Treibstoff. Sie geben deinem Körper die Kraft, um aktiv zu bleiben!" 
  },
  "fuel.heavy": { en: "Heavy Food", de: "Schweres Essen" },
  "fuel.heavyDesc": { 
    en: "Meat, cheese, and regular milk are heavy. They take away your sports energy and make you feel slow.", 
    de: "Fleisch, Käse und normale Milch sind schwer. Sie rauben dir deine Sportenergie und machen dich langsam." 
  },
  "ship.enter": { 
    en: "Time to meet your team! But before we fly to the stadium, a true athlete must pack their sports bag. Let's go!", 
    de: "Zeit, dein Team zu treffen! Aber bevor wir zum Stadion fliegen, muss ein wahrer Athlet seine Sporttasche packen. Los geht's!" 
  },

  // ── Mission 01 — Sorting ───────────────────────────────────
  "m1.tag": { en: "Mission 01 - Pack with Luna", de: "Mission 01 - Mit Luna packen" },
  "m1.title": { en: "Pack the Team Backpack", de: "Den Team-Rucksack packen" },
  "m1.dialogue": {
    en: "Attention, Captain! Today is match day. Your team is heading to the sports field for the big tournament. Luna is already at the locker room waiting for you.",
    de: "Achtung, Kapitän! Heute ist Spieltag. Dein Team geht aufs Sportfeld zum großen Turnier. Luna wartet schon in der Umkleide auf dich.",
  },
  "m1.objective": {
    en: "A good athlete always packs their special gear! Help Luna pick the right food for the sports backpack: safe snacks, low-Phe fruits, veggies, and your Super-Fuel (PKU formula). Leave the heavy-protein snacks behind.",
    de: "Ein guter Athlet packt immer seine spezielle Ausrüstung ein! Hilf Luna, das richtige Essen für den Sportrucksack auszusuchen: sichere Snacks, Früchte, Gemüse und deinen Super-Treibstoff (PKU-Formel). Lass die proteinreichen Snacks zurück.",
  },
  "m1.cta": { en: "Pack with Luna >", de: "Mit Luna packen >" },
  "m1.warning": { en: "Hey Captain, we haven't packed our sports backpack yet! Let's get our gear ready.", de: "Hey Kapitän, wir haben unseren Sportrucksack noch nicht gepackt! Lass uns unsere Ausrüstung bereitlegen." },
  "m1.speaker": { en: "Luna", de: "Luna" },

  // ── Mission 02 — Talk ──────────────────────────────────────
  "m2.tag": { en: "Mission 02 - The Stadium Tunnel", de: "Mission 02 - Der Stadiontunnel" },
  "m2.title": { en: "Social Trial", de: "Soziale Herausforderung" },
  "m2.dialogue": {
    en: "You arrive at the stadium with Luna. As you walk through the stadium tunnel, a stranger from another team offers you a heavy, high-protein snack.",
    de: "Du kommst mit Luna am Stadion an. Als du durch den Stadiontunnel gehst, bietet dir ein Fremder aus einem anderen Team einen schweren, proteinreichen Snack an.",
  },
  "m2.objective": {
    en: "You need to practice saying 'no, thank you'. Learn how to confidently explain that you have a special sports diet to stay fast!",
    de: "Du musst üben, 'Nein, danke' zu sagen. Lerne, selbstbewusst zu erklären, dass du eine spezielle Sportdiät hast, um schnell zu bleiben!",
  },
  "m2.cta": { en: "Meet the Team >", de: "Team treffen >" },
  "m2.warning": { en: "Wait! Someone is offering a strange snack. We need to figure out what to say!", de: "Warte! Jemand bietet einen seltsamen Snack an. Wir müssen überlegen, was wir sagen!" },
  "m2.speaker": { en: "Ela", de: "Ela" },

  // ── Mission 03 — Runner ────────────────────────────────────
  "m3.tag": { en: "Mission 03 - The Match", de: "Mission 03 - Das Spiel" },
  "m3.title": { en: "Sprint with the Crew", de: "Sprint mit dem Team" },
  "m3.dialogue": {
    en: "Captain, the physical activity begins! Whether you play football, swim the relay, or sprint with your crew, any sport burns energy fast.",
    de: "Kapitän, die körperliche Aktivität beginnt! Egal, ob du Fußball spielst, Staffel schwimmst oder mit deinem Team sprintest, jeder Sport verbraucht schnell Energie.",
  },
  "m3.objective": {
    en: "Catch the Super-Fuel formula bottle during the run to get a visual power-up. Prove that your medical drink makes you strong and fast!",
    de: "Fange die Super-Treibstoff-Flasche während des Laufs, um ein Power-Up zu erhalten. Beweise, dass dein medizinisches Getränk dich stark und schnell macht!",
  },
  "m3.cta": { en: "Sprint with Crew >", de: "Mit Team sprinten >" },
  "m3.warning": { en: "Captain, the match is starting! We need to step onto the field!", de: "Kapitän, das Spiel beginnt! Wir müssen aufs Feld gehen!" },
  "m3.speaker": { en: "Bo", de: "Bo" },

  // ── Captains Logs (Additional Info) ────────────────────────
  "logs.title": { en: "Captains Logs", de: "Kapitänslogbücher" },
  "logs.sub": {
    en: "Messages from other star athletes. Read their tips for staying fast and strong!",
    de: "Nachrichten von anderen Star-Athleten. Lies ihre Tipps, um schnell und stark zu bleiben!"
  },
  "ui.scrollBegin": { en: "Scroll to begin", de: "Scrolle, um zu beginnen" },
  "ui.objective": { en: "Objective", de: "Ziel" },
  "ui.scrollSkip": { en: "Scroll to skip to next section", de: "Scrolle, um zum nächsten Abschnitt zu springen" },
  "ui.timeTo": { en: "Time to", de: "Zeit zu" },
  "ui.train": { en: "Train", de: "Trainieren" },
  "log.1.author": { en: "Captain Nova", de: "Kapitän Nova" },
  "log.1.text": {
    en: "Always drink your formula before a big match. It is the best way to get instant energy! Never skip it if you want to win.",
    de: "Trinke deine Formel immer vor einem großen Spiel. Es ist der beste Weg, um sofort Energie zu bekommen! Überspringe sie nie, wenn du gewinnen willst."
  },
  "log.2.author": { en: "Captain Leo", de: "Kapitän Leo" },
  "log.2.text": {
    en: "Someone offered me protein snacks once. I just told them I have my own special sports fuel. Now they cheer for me when I drink it!",
    de: "Jemand hat mir einmal Protein-Snacks angeboten. Ich habe ihnen einfach gesagt, dass ich meinen eigenen speziellen Sporttreibstoff habe. Jetzt feuern sie mich an, wenn ich ihn trinke!"
  },
  "log.3.author": { en: "Captain Orion", de: "Kapitän Orion" },
  "log.3.text": {
    en: "Keep lots of low-Phe fruits in your bag. Apples and bananas are perfect for quick stamina during half time.",
    de: "Bewahre viele fruktosereiche Früchte in deiner Tasche auf. Äpfel und Bananen sind perfekt für schnelle Ausdauer in der Halbzeit."
  },

  // ── Crew greeting ──────────────────────────────────────────
  "crew.tag": { en: "Meet Your Crew", de: "Lerne dein Team kennen" },
  "crew.title": { en: "Your Sports Crew", de: "Dein Sport-Team" },
  "crew.sub": {
    en: "Three teammates. One tournament. They are counting on you, Captain.",
    de: "Drei Teamkolleg:innen. Ein Turnier. Sie zählen auf dich, Kapitän.",
  },
  "crew.luna.name": { en: "Luna", de: "Luna" },
  "crew.luna.role": { en: "Quartermaster", de: "Ausrüsterin" },
  "crew.luna.line": {
    en: "\"Hey Captain! I will help you pack the right food. We need your formula and the healthy snacks. Ready?\"",
    de: "\"Hey Kapitän! Ich werde dir helfen, das richtige Essen einzupacken. Wir brauchen deine Formel und die gesunden Snacks. Bereit?\"",
  },
  "crew.bo.name": { en: "Bo", de: "Bo" },
  "crew.bo.role": { en: "Striker", de: "Stürmer" },
  "crew.bo.line": {
    en: "\"You are our Captain! Just tell us what you can eat and we have got your back at the snack bar.\"",
    de: "\"Du bist unser Kapitän! Sag uns einfach, was du essen kannst und wir unterstützen dich an der Snackbar.\"",
  },
  "crew.ela.name": { en: "Ela", de: "Ela" },
  "crew.ela.role": { en: "Sprint Lead", de: "Sprint-Leiterin" },
  "crew.ela.line": {
    en: "\"On the track I push hard. But you bring the formula and we win this together!\"",
    de: "\"Auf der Bahn gebe ich alles. Aber du bringst die Formel mit und wir gewinnen das gemeinsam!\"",
  },
  "crew.cta": { en: "Brief the Crew", de: "Team einweisen" },

  // ── Slide nav ──────────────────────────────────────────────
  "slide.next": { en: "Next slide", de: "Nächste Folie" },
  "slide.prev": { en: "Previous slide", de: "Vorherige Folie" },

  // ── Game shared ─────────────────────────────────────────────
  "btn.skip": { en: "Skip Mission", de: "Mission überspringen" },
  "btn.skipHint": { en: "You can come back anytime", de: "Du kannst jederzeit zurück" },
  "btn.playAgain": { en: "Play Again", de: "Nochmal spielen" },
  "btn.restart": { en: "Restart Mission", de: "Mission neu starten" },
  "btn.launch": { en: "Launch Mission", de: "Mission starten" },
  "btn.exit": { en: "Exit", de: "Beenden" },
  "game.wellDone": { en: "Well done, you did it!", de: "Gut gemacht, du hast es geschafft!" },

  // Backpack Game specific
  "game.bp.title.pick": { en: "Pick a food item", de: "Wähle ein Lebensmittel" },
  "game.bp.title.put": { en: "Now choose where to put it", de: "Jetzt wähle, wohin damit" },
  "game.bp.sub.pick": { en: "Tap an item below to pick it up", de: "Tippe auf ein Item, um es auszuwählen" },
  "game.bp.sub.put": { en: "Tap the Backpack for clean energy, or Trash for high-protein items", de: "Tippe auf den Rucksack für saubere Energie, oder auf den Müll für proteinreiche Snacks" },
  "game.bp.backpack": { en: "BACKPACK", de: "RUCKSACK" },
  "game.bp.cleanEnergy": { en: "CLEAN ENERGY", de: "SAUBERE ENERGIE" },
  "game.bp.trash": { en: "TRASH", de: "MÜLLEIMER" },
  "game.bp.highProtein": { en: "HIGH PROTEIN", de: "VIEL PROTEIN" },
  "game.bp.or": { en: "OR", de: "ODER" },
  "game.bp.msg.safe": { en: "packed! Clean energy ready.", de: "eingepackt! Saubere Energie ist bereit." },
  "game.bp.msg.unsafe": { en: "WARNING! High protein detected. Send to Trash!", de: "ACHTUNG! Viel Protein entdeckt. Ab in den Müll!" },
  "game.bp.msg.safeToTrash": { en: "That's clean energy! Pack it in the Backpack instead.", de: "Das ist saubere Energie! Packe es stattdessen in den Rucksack." },
  "game.bp.msg.unsafeToTrash": { en: "locked away! Backpack stays clean.", de: "entsorgt! Der Rucksack bleibt sauber." },

  // Runner overlays
  "runner.ready": { en: "Ready, Champion?", de: "Bereit, Champion?" },
  "runner.intro": {
    en: "Avoid the cheese and pizza on the track. Catch the green formula bottle for Super Energy Mode.",
    de: "Weiche Käse und Pizza auf der Strecke aus. Fang die grüne Formel-Flasche für den Super-Energie-Modus.",
  },
  "runner.distance": { en: "Distance", de: "Distanz" },
  "runner.best": { en: "Best", de: "Bester" },
  "runner.energy": { en: "Energy", de: "Energie" },
  "runner.tap": { en: "Tap / Space to Jump", de: "Tippen / Leertaste zum Springen" },
  "runner.bestRun": { en: "Best run", de: "Bester Lauf" },
  "runner.distanceLabel": { en: "Distance", de: "Distanz" },
  "runner.encourage.0": { en: "Nice Run!", de: "Guter Lauf!" },
  "runner.encourage.1": { en: "Great Flight!", de: "Toller Flug!" },
  "runner.encourage.2": { en: "Stellar Effort!", de: "Klasse Leistung!" },
  "runner.encourage.3": { en: "Cosmic Try!", de: "Kosmischer Versuch!" },
  "runner.encourage.4": { en: "Well Played!", de: "Gut gespielt!" },
  "runner.encourage.5": { en: "Almost There!", de: "Fast da!" },
  "runner.encourage.6": { en: "Keep Going!", de: "Weiter so!" },
  "runner.encourage.7": { en: "Out of This World!", de: "Nicht von dieser Welt!" },

  // Preloader
  "preloader.online": { en: "Systems Online", de: "Systeme online" },
  "preloader.loading": { en: "Loading Assets", de: "Lade Daten" },

  // Food Items
  "food.apple.name": { en: "Apple", de: "Apfel" },
  "food.apple.label": { en: "Low-Phe fruit", de: "Frucht (wenig Phe)" },
  "food.carrot.name": { en: "Carrot", de: "Karotte" },
  "food.carrot.label": { en: "Low-Phe veggie", de: "Gemüse (wenig Phe)" },
  "food.formula.name": { en: "PKU Formula", de: "PKU Formel" },
  "food.formula.label": { en: "Clean energy", de: "Saubere Energie" },
  "food.cheese.name": { en: "Cheese", de: "Käse" },
  "food.cheese.label": { en: "High protein", de: "Viel Protein" },
  "food.pizza.name": { en: "Pizza", de: "Pizza" },
  "food.pizza.label": { en: "High protein", de: "Viel Protein" },

  // Misc
  "btn.enterLocker": { en: "Enter Locker Room", de: "Umkleidekabine betreten" },
  "npc.name": { en: "Nebula Nick", de: "Nebula Nick" },
  "ui.online": { en: "online", de: "online" },
  "app.title": { en: "PKU Academy - Interactive Space Adventure and Dietary Training", de: "PKU Akademie - Interaktives Weltraumabenteuer und Diättraining" },

  // Footer Facts
  "fact.0.title": { en: "What Happens Inside", de: "Was im Körper passiert" },
  "fact.0.short": { en: "Your body's engine works differently.", de: "Der Motor deines Körpers funktioniert anders." },
  "fact.0.text": { en: "In PKU, your body is missing a part of its engine. It can't process an amino acid called Phe found in regular protein. That's why managing your sports fuel is so important!", de: "Bei PKU fehlt deinem Körper ein Teil seines Motors. Er kann eine Aminosäure namens Phe, die in normalem Protein vorkommt, nicht verarbeiten. Deshalb ist es so wichtig, deinen Sport-Treibstoff zu kontrollieren!" },
  "fact.1.title": { en: "Early Detection", de: "Frühe Erkennung" },
  "fact.1.short": { en: "Caught from the start.", de: "Von Anfang an entdeckt." },
  "fact.1.text": { en: "PKU is detected early on. This means you get to start your special sports diet right away, giving you the best chance to become a strong athlete.", de: "PKU wird frühzeitig erkannt. Das bedeutet, dass du sofort mit deiner speziellen Sportdiät beginnen kannst, was dir die besten Chancen gibt, ein starker Athlet zu werden." },
  "fact.2.title": { en: "Your Special Diet", de: "Deine spezielle Diät" },
  "fact.2.short": { en: "Fruits, veggies, formula = power.", de: "Obst, Gemüse, Formel = Kraft." },
  "fact.2.text": { en: "Most fruits, vegetables, and special low-protein foods are your safe energy. PKU formula gives you all the essential building blocks for sports without the heavy Phe.", de: "Die meisten Obst- und Gemüsesorten sowie spezielle eiweißarme Lebensmittel sind deine sichere Energiequelle. Die PKU-Formel liefert dir alle wichtigen Bausteine für den Sport ohne das schwere Phe." },
  "fact.3.title": { en: "A Global Community", de: "Eine weltweite Gemeinschaft" },
  "fact.3.short": { en: "1 in 10,000 — you are not alone.", de: "1 von 10.000 — du bist nicht allein." },
  "fact.3.text": { en: "About 1 in 10,000 babies worldwide are born with PKU. You are part of a massive team of athletes training every day!", de: "Etwa 1 von 10.000 Babys weltweit wird mit PKU geboren. Du bist Teil eines riesigen Teams von Athleten, die jeden Tag trainieren!" },
  "fact.4.title": { en: "Science is Helping", de: "Wissenschaft hilft" },
  "fact.4.short": { en: "New discoveries every year.", de: "Jedes Jahr neue Entdeckungen." },
  "fact.4.text": { en: "Sports scientists and researchers are always finding new ways to help athletes with PKU get the best out of their training!", de: "Sportwissenschaftler und Forscher finden ständig neue Wege, um Athleten mit PKU zu helfen, das Beste aus ihrem Training herauszuholen!" },
  "fact.5.title": { en: "Stay Consistent", de: "Bleib konsequent" },
  "fact.5.short": { en: "Routine is your superpower.", de: "Routine ist deine Superkraft." },
  "fact.5.text": { en: "Keeping your energy stable is the key. Sticking to your diet and taking your formula every day is your superpower routine on and off the field.", de: "Deine Energie stabil zu halten, ist der Schlüssel. Dich an deine Diät zu halten und jeden Tag deine Formel zu nehmen, ist deine Superkraft-Routine auf und neben dem Spielfeld." },

  // Footer Logs
  "hero.0.name": { en: "Captain's Log #1", de: "Kapitänslogbuch #1" },
  "hero.0.quote": { en: "Managing PKU doesn't make you different — it makes you disciplined. Every meal is a choice, and every good choice fuels your sports journey.", de: "PKU zu managen macht dich nicht anders – es macht dich diszipliniert. Jede Mahlzeit ist eine Entscheidung, und jede gute Entscheidung treibt deine sportliche Reise an." },
  "hero.1.name": { en: "Captain's Log #2", de: "Kapitänslogbuch #2" },
  "hero.1.quote": { en: "Someone offered me protein snacks once. I just told them I have my own special sports fuel. Now they cheer for me when I drink it!", de: "Jemand hat mir einmal Protein-Snacks angeboten. Ich habe ihnen einfach gesagt, dass ich meinen eigenen speziellen Sporttreibstoff habe. Jetzt feuern sie mich an, wenn ich ihn trinke!" },
  "hero.2.name": { en: "Captain's Log #3", de: "Kapitänslogbuch #3" },
  "hero.2.quote": { en: "Keep lots of low-Phe fruits in your bag. Apples and bananas are perfect for quick stamina during half time.", de: "Bewahre viele fruktosereiche Früchte in deiner Tasche auf. Äpfel und Bananen sind perfekt für schnelle Ausdauer in der Halbzeit." },

  // Footer Tips
  "tip.0": { en: "Always carry your sports formula when you go out to train", de: "Trage deine Sport-Formel immer bei dir, wenn du zum Training gehst" },
  "tip.1": { en: "Learn to read nutrition labels — they are your game plans", de: "Lerne, Nährwertangaben zu lesen — sie sind deine Spielpläne" },
  "tip.2": { en: "Take your formula at the exact same time every day", de: "Nimm deine Formel jeden Tag genau zur gleichen Zeit" },
  "tip.3": { en: "Keep a food diary to track your sports energy", de: "Führe ein Ernährungstagebuch, um deine Sportenergie zu verfolgen" },
  "tip.4": { en: "Don't be afraid to explain your diet to teammates — knowledge is power", de: "Scheue dich nicht, deinen Teamkollegen deine Diät zu erklären — Wissen ist Macht" },
  "tip.5": { en: "Celebrate your wins — every good meal choice is a victory on the field", de: "Feiere deine Siege — jede gute Essensentscheidung ist ein Sieg auf dem Feld" },

  // Footer Text
  "footer.mission": { en: "Mission", de: "Mission" },
  "footer.complete": { en: "Complete", de: "Abgeschlossen" },
  "footer.missionDesc": { en: "You've proven yourself as a skilled sports champion. But the journey doesn't end here — there's so much more to learn about PKU.", de: "Du hast dich als geschickter Sport-Champion bewiesen. Aber die Reise endet hier nicht — es gibt noch so viel mehr über PKU zu lernen." },
  "footer.energyTitle": { en: "Your Sports", de: "Deine Sport-" },
  "footer.energyWord": { en: "Energy", de: "Energie" },
  "footer.tapCard": { en: "Tap any card to flip it and learn more", de: "Tippe auf eine Karte, um sie umzudrehen und mehr zu erfahren" },
  "footer.tapRead": { en: "tap to read", de: "Tippen zum Lesen" },
  "footer.tapFlip": { en: "tap to flip back", de: "Tippen zum Umdrehen" },
  "footer.logsTitle1": { en: "Captain's", de: "Kapitäns-" },
  "footer.logsTitle2": { en: "Logs", de: "Logbücher" },
  "footer.logsDesc": { en: "Messages from fellow travelers on the same journey", de: "Nachrichten von Mitreisenden auf der gleichen Reise" },
  "footer.tipsTitle1": { en: "Captain's", de: "Kapitäns-" },
  "footer.tipsTitle2": { en: "Training Tips", de: "Trainingstipps" },
  "footer.extra1": { en: "You Are", de: "Du bist" },
  "footer.extra2": { en: "Extraordinary", de: "Außergewöhnlich" },
  "footer.extraP1": { en: "Having PKU doesn't limit who you can become. Athletes, artists, scientists, and explorers with PKU are out there right now, living amazing lives.", de: "PKU zu haben, schränkt nicht ein, wer du werden kannst. Athleten, Künstler, Wissenschaftler und Entdecker mit PKU sind genau jetzt da draußen und führen erstaunliche Leben." },
  "footer.extraP2": { en: "Your discipline with diet is a superpower most people don't have. Every time you choose the right food, you're training yourself to be stronger, smarter, and more resilient.", de: "Deine Disziplin mit der Diät ist eine Superkraft, die die meisten Menschen nicht haben. Jedes Mal, wenn du das richtige Essen wählst, trainierst du dich, stärker, klüger und widerstandsfähiger zu sein." },
  "footer.extraP3": { en: "Remember: you're not just managing a diet — you're", de: "Denke daran: Du managst nicht nur eine Diät — du" },
  "footer.extraP4": { en: "leading your sports team", de: "führst dein Sportteam an" },
  "footer.extraP5": { en: ". And you're doing an incredible job.", de: ". Und du leistest unglaubliche Arbeit." },
  "footer.madeWith": { en: "Made with", de: "Gemacht mit" },
  "footer.forAthletes": { en: "for young athletes with PKU", de: "für junge Athleten mit PKU" },
  "footer.eduProject": { en: "PKU Academy — Educational Project", de: "PKU Akademie — Bildungsprojekt" },

};

interface Ctx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: keyof typeof TRANSLATIONS | string) => string;
}

const LangCtx = createContext<Ctx>({
  lang: "en",
  setLang: () => {},
  t: (k) => String(k),
});

export const LanguageProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [lang, setLang] = useState<Lang>("en");

  // Dynamically update the html lang attribute for SEO and accessibility
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = useCallback(
    (key: string) => {
      const entry = (TRANSLATIONS as Dict)[key];
      if (!entry) return key;
      return entry[lang] ?? entry.en ?? key;
    },
    [lang],
  );
  const value = useMemo(
    () => ({ lang, setLang, t }),
    [lang, t],
  );
  return (
    <LangCtx.Provider value={value}>
      {children}
    </LangCtx.Provider>
  );
};

export const useLang = () => useContext(LangCtx);