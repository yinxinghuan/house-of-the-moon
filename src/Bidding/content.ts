// House of the Moon — node tree (15 nodes, 8 endings).
//
//   root: Kirie 站在你书房, 浑身湿透, 手里捧着手稿; 你在桌后, 烛光, 雷雨
//   ├── A "pour her wine"         🍷 酒线
//   │   ├── AA "remove the coat"
//   │   │   ├── AAA "the kiss"            → 💖 sensual
//   │   │   └── AAB "empty clothes"       → 👹 horror 超现实 (鬼魂)
//   │   └── AB "glass to her wrist"
//   │       ├── ABA "pulse, then stay"    → 💖 sensual
//   │       └── ABB "no pulse since 1903" → 👹 horror 超现实 (亡者)
//   └── B "open her manuscript"   📖 手稿线
//       ├── BA "whose blood in the ink"
//       │   ├── BAA "gold blood, nine tails" → 👹 horror 超现实 (狐仙)
//       │   └── BAB "ten years of writing"   → 💖 sensual
//       └── BB "why she came"
//           ├── BBA "release me"             → 👹 horror 超现实 (前世)
//           └── BBB "you are the toll"        → 👹 horror 超现实 (使者)

import type { EndingType, NodeDef, ChoiceDef } from './types';

export const ROOT_ID = 'root';

function parentOf(id: string): string | null {
  if (id === 'root') return null;
  if (id.length === 1) return 'root';
  return id.slice(0, -1);
}

function posterFor(id: string): string {
  const p = parentOf(id);
  return p ? `${p}_end.png` : 'root_start.png';
}

function branch(id: string, a: ChoiceDef, b: ChoiceDef): NodeDef {
  return {
    id,
    video: `${id}.mp4`,
    posterFrame: posterFor(id),
    endFrame: `${id}_end.png`,
    choices: [a, b],
  };
}

function ending(id: string, type: EndingType, hasSubtitle = false): NodeDef {
  return {
    id,
    video: `${id}.mp4`,
    posterFrame: posterFor(id),
    endFrame: `${id}_end.png`,
    isEnding: true,
    endingType: type,
    endingTitleKey: `ending.${id}.title`,
    endingTaglineKey: `ending.${id}.tagline`,
    ...(hasSubtitle && { subtitleKey: `subtitle.${id}` }),
  };
}

const ch = (labelKey: string, nextId: string, pinX: number, pinY: number): ChoiceDef =>
  ({ labelKey, nextId, pinX, pinY });

export const NODES: Record<string, NodeDef> = {
  // root: Kirie facing you. A pin = wine bottle; B pin = the manuscript she holds.
  root: branch('root',
    ch('choice.pour_wine',       'A', 35, 70),
    ch('choice.open_manuscript', 'B', 55, 50),
  ),

  // A: wine poured. AA = ask remove coat. AB = touch glass to wrist.
  A: branch('A',
    ch('choice.remove_coat',     'AA', 50, 38),
    ch('choice.glass_to_wrist',  'AB', 45, 55),
  ),

  // B: manuscript open. BA = whose blood in ink. BB = why she came.
  B: branch('B',
    ch('choice.blood_in_ink',    'BA', 50, 55),
    ch('choice.why_she_came',    'BB', 50, 30),
  ),

  // AA: coat coming off. AAA = the kiss. AAB = empty clothes.
  AA: branch('AA',
    ch('choice.let_her_come',    'AAA', 50, 40),
    ch('choice.notice_no_body',  'AAB', 50, 55),
  ),

  // AB: glass on her wrist. ABA = pulse then stay. ABB = no pulse since 1903.
  AB: branch('AB',
    ch('choice.feel_pulse',      'ABA', 45, 55),
    ch('choice.no_pulse',        'ABB', 45, 55),
  ),

  // BA: blood in ink. BAA = gold blood / nine tails. BAB = ten years of writing.
  BA: branch('BA',
    ch('choice.gold_blood',      'BAA', 50, 60),
    ch('choice.ten_years',       'BAB', 40, 45),
  ),

  // BB: why she came. BBA = release me (past life). BBB = you are the toll.
  BB: branch('BB',
    ch('choice.release_me',      'BBA', 50, 38),
    ch('choice.the_toll',        'BBB', 50, 50),
  ),

  // Layer 3 — endings (8): 3 sensual (kiss / pulse-stay / ten-years) + 5 surreal horror
  AAA: ending('AAA', 'sensual'),
  AAB: ending('AAB', 'horror'),
  ABA: ending('ABA', 'sensual', true),
  ABB: ending('ABB', 'horror', true),
  BAA: ending('BAA', 'horror'),
  BAB: ending('BAB', 'sensual', true),
  BBA: ending('BBA', 'horror', true),
  BBB: ending('BBB', 'horror', true),
};
