// House of the Moon — minimal i18n (en / zh). Choice labels + 8 endings + intro.

type Locale = 'zh' | 'en';

const STORAGE_KEY = 'house_of_the_moon_locale';

function detectLocale(): Locale {
  if (typeof window === 'undefined') return 'en';
  try {
    const override = window.localStorage.getItem(STORAGE_KEY);
    if (override === 'zh' || override === 'en') return override;
  } catch {}
  const nav = (typeof navigator !== 'undefined' ? navigator.language : 'en') || 'en';
  return nav.toLowerCase().startsWith('zh') ? 'zh' : 'en';
}

const LOCALE: Locale = detectLocale();

const STRINGS: Record<Locale, Record<string, string>> = {
  en: {
    // ── Choices ────────────────────────────────────────────────────────────
    'choice.pour_wine':       'pour her wine',
    'choice.open_manuscript': 'open her manuscript',
    'choice.remove_coat':     'ask her to take off her coat',
    'choice.glass_to_wrist':  'touch the glass to her wrist',
    'choice.blood_in_ink':    'ask whose blood is in the ink',
    'choice.why_she_came':    'ask why she came',
    'choice.let_her_come':    'let her come to you',
    'choice.notice_no_body':  'watch the clothes fall',
    'choice.feel_pulse':      'feel for her pulse',
    'choice.no_pulse':        'wait. nothing moves.',
    'choice.gold_blood':      'lift the page to the candle',
    'choice.ten_years':       'ask how long she has been writing',
    'choice.release_me':      'ask what she wants released',
    'choice.the_toll':        'ask who waits on the far bank',

    // ── Endings ────────────────────────────────────────────────────────────
    'ending.AAA.title':   'the kiss',
    'ending.AAA.tagline': 'She walked to you. Her hair fell. The candle gave her your shadow.',

    'ending.AAB.title':   'empty clothes',
    'ending.AAB.tagline': "The coat fell. The kimono fell. There was no body inside. Her voice kept speaking from the air.",

    'ending.ABA.title':   'pulse, then stay',
    'ending.ABA.tagline': "The wine rippled in time with her wrist. She asked if she could stay. You did not say no.",

    'ending.ABB.title':   'no pulse since 1903',
    'ending.ABB.tagline': "The wine did not move. She said: I was there when you fell off the horse. That was 1903.",

    'ending.BAA.title':   'gold blood, nine tails',
    'ending.BAA.tagline': "A drop of her blood was gold. Nine tails unfolded behind her chair like a fan.",

    'ending.BAB.title':   'ten years of writing',
    'ending.BAB.tagline': "She took out the older manuscripts. Every page was about you. She was twelve when she saw you at the harbor.",

    'ending.BBA.title':   '1843, you do not remember',
    'ending.BBA.tagline': "She said: Beijing. You gave me a rose at the cathedral gate. I have been waiting for the rest of the sentence.",

    'ending.BBB.title':   'you are the toll',
    'ending.BBB.tagline': "She said: She is waiting across the river. The boatman accepts only bodies like yours. I am sorry.",

    // ── UI ─────────────────────────────────────────────────────────────────
    'ui.replay':         'open the door again',
    'ui.ending_label':   'ending',
    'ui.sensual_label':  'sensual',
    'ui.horror_label':   'wrong',
    'ui.brand_sig':      'alteru · after dark',

    // ── Intro ──────────────────────────────────────────────────────────────
    'intro.title':   'house of the moon',
    'intro.hint':    "Yokohama, 1920s. Midnight. Storm. A young writer has come to your study with a manuscript about you. Direct what she does — and what you find out. Tap the lights — or pick a phrase. None of the wrong endings are realistic.",
    'intro.cta':     'tap to begin',
  },

  zh: {
    'choice.pour_wine':       '给她倒酒',
    'choice.open_manuscript': '翻开她的手稿',
    'choice.remove_coat':     '让她把外套脱了',
    'choice.glass_to_wrist':  '把酒杯送到她手腕上',
    'choice.blood_in_ink':    '问这墨里掺的是谁的血',
    'choice.why_she_came':    '问她为什么来',
    'choice.let_her_come':    '让她走过来',
    'choice.notice_no_body':  '看着衣服落下',
    'choice.feel_pulse':      '感她的脉搏',
    'choice.no_pulse':        '等。什么都没动。',
    'choice.gold_blood':      '把那页对着烛火',
    'choice.ten_years':       '问她写了多久',
    'choice.release_me':      '问她要放下什么',
    'choice.the_toll':        '问河对岸是谁在等',

    'ending.AAA.title':   '吻',
    'ending.AAA.tagline': '她走过来。她的头发垂下。烛光把她的影子叠到了你身上。',

    'ending.AAB.title':   '空衣服',
    'ending.AAB.tagline': '外套落下。和服落下。里面没有身体。她的声音继续从空气里说话。',

    'ending.ABA.title':   '有脉, 然后留下',
    'ending.ABA.tagline': '酒里的涟漪和她的脉搏同步。她问: 我能留下来吗。你没说不。',

    'ending.ABB.title':   '1903 年起就没有脉了',
    'ending.ABB.tagline': '酒纹丝不动。她说: 你那年掉下马的时候我在场。那年是 1903。',

    'ending.BAA.title':   '金色的血, 九条尾',
    'ending.BAA.tagline': '一滴血落在桌面上, 是金色的。她椅背后慢慢张开九条尾巴。',

    'ending.BAB.title':   '十年的字',
    'ending.BAB.tagline': '她拿出了更旧的几摞手稿。每一页都写的是你。她说: 我十二岁那年在港口看到你下船。',

    'ending.BBA.title':   '1843, 你不记得',
    'ending.BBA.tagline': '她说: 北京。在大教堂门口你给了我一支玫瑰。我一直在等你说完那句没说完的话。',

    'ending.BBB.title':   '你是渡资',
    'ending.BBB.tagline': '她说: 她在河对岸等着。摆渡的人只收像你这样的躯壳。对不起。',

    'ui.replay':         '再开一次门',
    'ui.ending_label':   '结局',
    'ui.sensual_label':  '感官',
    'ui.horror_label':   '不对劲',
    'ui.brand_sig':      'alteru · after dark',

    'intro.title':   '月馆',
    'intro.hint':    '横滨, 1920 年代。午夜。雷雨。一个年轻女作家带着关于你的手稿来到你的书房。指导她做什么 — 也指导你听到什么。点亮灯 — 或选一句话。所有 wrong 结局都不写实。',
    'intro.cta':     '点屏幕开始',
  },
};

export function t(key: string): string {
  return STRINGS[LOCALE][key] ?? STRINGS.en[key] ?? key;
}

export function locale(): Locale { return LOCALE; }
