/**
 * 答案之书 | The Book of Answers | 答えの書
 */

// ============================================================================
// ANSWER DATABASE — 55 answers, 1:1 mapped across zh / en / ja
// ============================================================================
var answersDB = [
  { zh:'是的，毫无疑问',         en:'It is certain',                       ja:'はい、間違いなくその通りです' },
  { zh:'不要指望它',             en:'Don\'t count on it',                   ja:'期待しないでください' },
  { zh:'现在还不到时候',         en:'Not now',                              ja:'今はまだその時ではありません' },
  { zh:'跟随你的直觉',           en:'Follow your intuition',                ja:'あなたの直感に従いなさい' },
  { zh:'答案就在你心中',         en:'The answer lies within you',           ja:'答えはあなたの心の中にあります' },
  { zh:'保持耐心，一切自有安排',   en:'Be patient — all will unfold',         ja:'忍耐強くあれ——すべては明らかになるでしょう' },
  { zh:'毫无疑问地肯定',         en:'Without a doubt, yes',                 ja:'疑いの余地なく、その通りです' },
  { zh:'结果可能出乎意料',       en:'Expect the unexpected',                ja:'予想外の結果を覚悟してください' },
  { zh:'你需要更多时间思考',     en:'You need more time to reflect',        ja:'もう少し考える時間が必要です' },
  { zh:'勇敢去做吧',             en:'Go for it',                            ja:'思い切ってやってみなさい' },
  { zh:'谨慎行事',               en:'Proceed with caution',                 ja:'慎重に進みなさい' },
  { zh:'时间会给你答案',         en:'Time will reveal the answer',          ja:'時が答えを教えてくれるでしょう' },
  { zh:'相信这个过程',           en:'Trust the process',                    ja:'その過程を信じなさい' },
  { zh:'不要犹豫，行动吧',       en:'Do not hesitate — act now',             ja:'ためらわずに、今こそ行動しなさい' },
  { zh:'这是一个难得的机会',     en:'This is a rare opportunity',           ja:'これは稀な機会です' },
  { zh:'再等一等',               en:'Wait a little longer',                 ja:'もう少し待ちなさい' },
  { zh:'放手去做，不必顾虑',     en:'Let go and do it',                     ja:'迷わずにやり遂げなさい' },
  { zh:'是时候改变方向了',       en:'Change direction',                     ja:'方向を変えるべき時です' },
  { zh:'顺其自然就好',           en:'Let it flow naturally',                ja:'自然の流れに身を任せなさい' },
  { zh:'你会得到你想要的',       en:'You will get what you seek',           ja:'あなたは望むものを手に入れるでしょう' },
  { zh:'不要抱太大期望',         en:'Lower your expectations',              ja:'過度な期待は禁物です' },
  { zh:'重新考虑一下吧',         en:'Think twice',                          ja:'もう一度、考え直してみなさい' },
  { zh:'答案是否定的',           en:'The answer is no',                     ja:'答えはノーです' },
  { zh:'一切都会好起来的',       en:'Everything will be fine',              ja:'すべてはうまくいきます' },
  { zh:'相信你自己',             en:'Believe in yourself',                  ja:'自分自身を信じなさい' },
  { zh:'这值得冒险',             en:'It is worth the risk',                 ja:'そのリスクを取る価値はあります' },
  { zh:'保持冷静，不要冲动',     en:'Stay calm — do not rush',               ja:'冷静さを保ち、衝動的に動いてはいけません' },
  { zh:'时机尚未成熟',           en:'The time is not right',                ja:'時機が熟していません' },
  { zh:'接受现实吧',             en:'Accept reality as it is',              ja:'現実をあるがままに受け入れなさい' },
  { zh:'向前看，别回头',         en:'Look forward, not back',                ja:'前を向きなさい、振り返ってはいけません' },
  { zh:'命运会有它的安排',       en:'Destiny has a plan',                   ja:'運命には計画があります' },
  { zh:'不必强求',               en:'Do not force it',                      ja:'無理に求めてはいけません' },
  { zh:'现在正是最好的时机',     en:'Now is the perfect moment',            ja:'今こそ完璧な瞬間です' },
  { zh:'可能会有一些阻碍',       en:'Obstacles may appear',                 ja:'障害が立ちはだかるかもしれません' },
  { zh:'听从你内心的声音',       en:'Listen to your inner voice',           ja:'内なる声に耳を傾けなさい' },
  { zh:'千万不要放弃',           en:'Do not give up',                       ja:'決して諦めてはいけません' },
  { zh:'换个角度重新思考',       en:'See it from another angle',            ja:'別の角度から見つめ直しなさい' },
  { zh:'它会实现的',             en:'It will come true',                    ja:'それは実現するでしょう' },
  { zh:'你需要做出一个选择',     en:'You must make a choice',               ja:'あなたは選択をしなければなりません' },
  { zh:'保持信心，不要动摇',     en:'Keep the faith, unwavering',           ja:'信念を持ち続け、揺らいではいけません' },
  { zh:'结果会让你满意的',       en:'You will be pleased with the outcome', ja:'結果にきっと満足するでしょう' },
  { zh:'不要被表象迷惑',         en:'Look beyond the surface',              ja:'表面的なものに惑わされてはいけません' },
  { zh:'勇敢面对，不要逃避',     en:'Face it with courage',                 ja:'勇気を持って立ち向かいなさい' },
  { zh:'等待一个更好的时机',     en:'Wait for a better moment',             ja:'より良い瞬間を待ちなさい' },
  { zh:'这件事比你想象的更重要', en:'This matters more than you think',     ja:'これはあなたが思うよりずっと重要です' },
  { zh:'无所谓对错，去做就好',   en:'There is no right or wrong — just do it', ja:'正しいも間違いもありません——ただやりなさい' },
  { zh:'你已经知道答案了',       en:'You already know the answer',          ja:'あなたはもう答えを知っています' },
  { zh:'风险是可控的',           en:'The risk is manageable',               ja:'そのリスクは十分に制御可能です' },
  { zh:'珍惜当下这一刻',         en:'Cherish this very moment',             ja:'今この瞬間を、心から大切にしなさい' },
  { zh:'这一切终将过去',         en:'This too shall pass',                  ja:'これもまた、いつか過ぎ去るでしょう' },
  { zh:'静观其变',               en:'Watch and wait',                       ja:'静かに見守りなさい' },
  { zh:'主动出击，不要被动等待', en:'Take the initiative',                  ja:'自ら行動を起こしなさい' },
  { zh:'答案在风中飘荡',         en:'The answer is blowing in the wind',    ja:'答えは風に舞っています' },
  { zh:'力量就在你自己手中',     en:'The power is in your hands',           ja:'力はあなた自身の手の中にあります' },
  { zh:'星辰正为你指引方向',     en:'The stars are guiding your path',      ja:'星々があなたの道を照らしています' },
];

// ============================================================================
// ANSWER SENTIMENT — positive / neutral / negative
// ============================================================================
var answerSentiment = [
  'positive', // 0  是的，毫无疑问
  'negative', // 1  不要指望它
  'negative', // 2  现在还不到时候
  'positive', // 3  跟随你的直觉
  'positive', // 4  答案就在你心中
  'positive', // 5  保持耐心，一切自有安排
  'positive', // 6  毫无疑问地肯定
  'negative', // 7  结果可能出乎意料
  'negative', // 8  你需要更多时间思考
  'positive', // 9  勇敢去做吧
  'negative', // 10 谨慎行事
  'neutral',  // 11 时间会给你答案
  'neutral',  // 12 相信这个过程
  'positive', // 13 不要犹豫，行动吧
  'positive', // 14 这是一个难得的机会
  'negative', // 15 再等一等
  'positive', // 16 放手去做，不必顾虑
  'neutral',  // 17 是时候改变方向了
  'positive', // 18 顺其自然就好
  'positive', // 19 你会得到你想要的
  'negative', // 20 不要抱太大期望
  'negative', // 21 重新考虑一下吧
  'negative', // 22 答案是否定的
  'positive', // 23 一切都会好起来的
  'positive', // 24 相信你自己
  'positive', // 25 这值得冒险
  'neutral',  // 26 保持冷静，不要冲动
  'negative', // 27 时机尚未成熟
  'negative', // 28 接受现实吧
  'neutral',  // 29 向前看，别回头
  'positive', // 30 命运会有它的安排
  'negative', // 31 不必强求
  'positive', // 32 现在正是最好的时机
  'negative', // 33 可能会有一些阻碍
  'positive', // 34 听从你内心的声音
  'positive', // 35 千万不要放弃
  'neutral',  // 36 换个角度重新思考
  'positive', // 37 它会实现的
  'neutral',  // 38 你需要做出一个选择
  'positive', // 39 保持信心，不要动摇
  'positive', // 40 结果会让你满意的
  'neutral',  // 41 不要被表象迷惑
  'neutral',  // 42 勇敢面对，不要逃避
  'negative', // 43 等待一个更好的时机
  'neutral',  // 44 这件事比你想象的更重要
  'neutral',  // 45 无所谓对错，去做就好
  'positive', // 46 你已经知道答案了
  'positive', // 47 风险是可控的
  'positive', // 48 珍惜当下这一刻
  'neutral',  // 49 这一切终将过去
  'negative', // 50 静观其变
  'positive', // 51 主动出击，不要被动等待
  'neutral',  // 52 答案在风中飘荡
  'positive', // 53 力量就在你自己手中
  'positive', // 54 星辰正为你指引方向
];

// ============================================================================
// UI TEXT TRANSLATIONS
// ============================================================================
var uiText = {
  zh: {
    coverTitle: '答案之书',
    coverSubtitle: 'The Book of Answers',
    prompt: '在心中默念你的问题，打开答案之书吧',
    clickHint: '点击任意处合上书本',
  },
  en: {
    coverTitle: 'Book of Answers',
    coverSubtitle: 'Ask, and the truth shall be revealed',
    prompt: 'Hold your question in mind, then open the Book of Answers',
    clickHint: 'Tap anywhere to close the book',
  },
  ja: {
    coverTitle: '答えの書',
    coverSubtitle: 'The Book of Answers',
    prompt: '心の中で問いかけ、答えの書を開きましょう',
    clickHint: 'どこかをタップして本を閉じる',
  },
};

// ============================================================================
// APPLICATION STATE
// ============================================================================
var currentLang = 'zh';
var isOpen = false;
var isAnimating = false;
var currentAnswerIndex = -1;
var audioCtx = null;
var usedAnswerIndices = [];

// ============================================================================
// DOM REFERENCES
// ============================================================================
var bookEl        = document.getElementById('book');
var frontCoverEl  = document.getElementById('frontCover');
var sceneEl       = document.getElementById('scene');
var answerTextEl  = document.getElementById('answerText');
var answerWrapperEl = document.getElementById('answerWrapper');
var particlesEl   = document.getElementById('particles');
var promptEl      = document.getElementById('prompt');
var clickHintEl   = document.getElementById('clickHint');
var coverTitleEl  = document.getElementById('coverTitle');
var coverSubtitleEl = document.getElementById('coverSubtitle');
var langBtns      = document.querySelectorAll('.lang-btn');

// ============================================================================
// AUDIO ENGINE
// ============================================================================

function getAudioCtx() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function createNoiseBuffer(ctx, duration, decay, attack, amp) {
  var sampleRate = ctx.sampleRate;
  var len = Math.floor(sampleRate * duration);
  var buffer = ctx.createBuffer(1, len, sampleRate);
  var data = buffer.getChannelData(0);
  for (var i = 0; i < len; i++) {
    var t = i / sampleRate;
    var env = Math.exp(-t * decay) * (1 - Math.exp(-t * attack));
    data[i] = (Math.random() * 2 - 1) * env * amp;
  }
  return buffer;
}

/** Page-flip rustle. */
function playFlipSound() {
  try {
    var ctx = getAudioCtx();
    var now = ctx.currentTime;
    var dur = 0.35;
    var buf = createNoiseBuffer(ctx, dur, 14, 80, 0.6);
    var src = ctx.createBufferSource();
    src.buffer = buf;
    var flt = ctx.createBiquadFilter();
    flt.type = 'bandpass';
    flt.frequency.setValueAtTime(900, now);
    flt.frequency.linearRampToValueAtTime(1800, now + 0.15);
    flt.frequency.linearRampToValueAtTime(500, now + dur);
    flt.Q.value = 0.6;
    var gain = ctx.createGain();
    gain.gain.setValueAtTime(0.5, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + dur);
    src.connect(flt);
    flt.connect(gain);
    gain.connect(ctx.destination);
    src.start(now);
    src.stop(now + dur);
  } catch (_) {}
}

/** Answer reveal — C-E-G arpeggio with high overtone. */
function playRevealSound() {
  try {
    var ctx = getAudioCtx();
    var now = ctx.currentTime;
    var notes = [523.25, 659.25, 783.99];
    notes.forEach(function (freq, i) {
      var t = now + 0.5 + i * 0.18;
      var osc = ctx.createOscillator();
      var gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, t);
      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(0.22, t + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 1.8);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(t);
      osc.stop(t + 1.9);
    });
    var overtone = ctx.createOscillator();
    var og = ctx.createGain();
    overtone.type = 'sine';
    overtone.frequency.setValueAtTime(1046.5, now + 0.86);
    og.gain.setValueAtTime(0, now + 0.86);
    og.gain.linearRampToValueAtTime(0.08, now + 0.92);
    og.gain.exponentialRampToValueAtTime(0.001, now + 2.2);
    overtone.connect(og);
    og.connect(ctx.destination);
    overtone.start(now + 0.86);
    overtone.stop(now + 2.3);
  } catch (_) {}
}

/** Book-close thud. */
function playCloseSound() {
  try {
    var ctx = getAudioCtx();
    var now = ctx.currentTime;
    var dur = 0.25;
    var buf = createNoiseBuffer(ctx, dur, 18, 100, 0.4);
    var src = ctx.createBufferSource();
    src.buffer = buf;
    var flt = ctx.createBiquadFilter();
    flt.type = 'bandpass';
    flt.frequency.setValueAtTime(500, now);
    flt.frequency.linearRampToValueAtTime(300, now + dur);
    flt.Q.value = 0.5;
    var gain = ctx.createGain();
    gain.gain.setValueAtTime(0.35, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + dur);
    src.connect(flt);
    flt.connect(gain);
    gain.connect(ctx.destination);
    src.start(now);
    src.stop(now + dur);
  } catch (_) {}
}

/** Short click / tap tick for UI interactions. */
function playClickSound() {
  try {
    var ctx = getAudioCtx();
    var now = ctx.currentTime;
    var osc = ctx.createOscillator();
    var gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(1800, now);
    osc.frequency.exponentialRampToValueAtTime(1200, now + 0.06);
    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.1);
  } catch (_) {}
}

// ============================================================================
// PARTICLE SYSTEM
// ============================================================================

function spawnParticles(sentiment) {
  var container = particlesEl;
  container.innerHTML = '';

  var count = 22;
  var palettes = {
    positive: ['#C4A97D', '#D4BC8F', '#DFCDA0', '#E8D5A8', '#F0E0B8'],
    neutral:  ['#C4BDB6', '#D5CEC0', '#B8A88A', '#CCC4B8', '#D8D0C4'],
    negative: ['#9EA8AC', '#B0B8BB', '#8C9498', '#A0A4A8', '#B8BCC0'],
  };
  var colors = palettes[sentiment] || palettes.neutral;

  for (var i = 0; i < count; i++) {
    var p = document.createElement('div');
    p.className = 'particle';

    var angle = Math.random() * Math.PI * 2;
    var distance = 50 + Math.random() * 100;
    var dx = Math.cos(angle) * distance;
    var dy = Math.sin(angle) * distance - 30; // bias upward

    var size = 3 + Math.random() * 5;
    var delay = Math.random() * 0.25;
    var duration = 1.2 + Math.random() * 1.6;

    p.style.setProperty('--size', size + 'px');
    p.style.setProperty('--dx', dx + 'px');
    p.style.setProperty('--dy', dy + 'px');
    p.style.setProperty('--delay', delay + 's');
    p.style.setProperty('--duration', duration + 's');
    p.style.setProperty('--rot', (Math.random() * 360) + 'deg');
    p.style.setProperty('--color', colors[Math.floor(Math.random() * colors.length)]);

    // Random shape variety
    if (Math.random() < 0.3) {
      p.classList.add('diamond');
    }

    container.appendChild(p);

    // Auto-remove after animation
    (function (el) {
      var life = (delay + duration) * 1000 + 200;
      setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, life);
    })(p);
  }
}

// ============================================================================
// ANSWER SELECTION — random without repeat
// ============================================================================
function getRandomAnswerIndex() {
  if (usedAnswerIndices.length >= answersDB.length) {
    usedAnswerIndices = [];
  }
  var available = [];
  for (var i = 0; i < answersDB.length; i++) {
    if (usedAnswerIndices.indexOf(i) === -1) {
      available.push(i);
    }
  }
  var idx = available[Math.floor(Math.random() * available.length)];
  usedAnswerIndices.push(idx);
  return idx;
}

// ============================================================================
// UI TEXT UPDATE
// ============================================================================
function updateUIText() {
  var t = uiText[currentLang];
  coverTitleEl.textContent = t.coverTitle;
  coverSubtitleEl.textContent = t.coverSubtitle;
  promptEl.textContent = t.prompt;
  clickHintEl.textContent = t.clickHint;

  if (isOpen && currentAnswerIndex >= 0) {
    answerTextEl.textContent = answersDB[currentAnswerIndex][currentLang];
  }

  var langMap = { zh: 'zh-CN', en: 'en', ja: 'ja' };
  document.documentElement.lang = langMap[currentLang];
}

function setLang(lang) {
  if (lang === currentLang || isAnimating) return;
  currentLang = lang;

  langBtns.forEach(function (btn) {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  updateUIText();
  playClickSound();
}

// ============================================================================
// BOOK ANIMATION
// ============================================================================

function openBook() {
  if (isOpen || isAnimating) return;
  isAnimating = true;

  currentAnswerIndex = getRandomAnswerIndex();
  answerTextEl.textContent = answersDB[currentAnswerIndex][currentLang];

  bookEl.classList.remove('closing');
  frontCoverEl.classList.remove('closing');

  bookEl.classList.add('opening', 'open');
  promptEl.classList.add('hidden');
  clickHintEl.classList.add('visible');

  playFlipSound();

  // Reveal chime + particles after cover has started opening
  setTimeout(function () {
    playRevealSound();
    spawnParticles(answerSentiment[currentAnswerIndex]);
  }, 400);

  setTimeout(function () {
    isAnimating = false;
    isOpen = true;
    bookEl.classList.remove('opening');
  }, 1200);
}

function closeBook() {
  if (!isOpen || isAnimating) return;
  isAnimating = true;

  playCloseSound();

  // The cover starts closing; answer fades; spread stays visible during close
  bookEl.classList.add('closing');
  bookEl.classList.remove('open');
  promptEl.classList.remove('hidden');
  clickHintEl.classList.remove('visible');

  setTimeout(function () {
    bookEl.classList.remove('closing');
    isAnimating = false;
    isOpen = false;
    currentAnswerIndex = -1;
    // Clean up any remaining particles
    particlesEl.innerHTML = '';
  }, 900);
}

// ============================================================================
// EVENT BINDINGS
// ============================================================================

sceneEl.addEventListener('click', function () {
  if (isOpen) {
    closeBook();
  } else if (!isAnimating) {
    openBook();
  }
});

bookEl.addEventListener('click', function (e) {
  if (!isOpen && !isAnimating) {
    e.stopPropagation();
    openBook();
  }
});

langBtns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    setLang(btn.dataset.lang);
  });
});

document.addEventListener('keydown', function (e) {
  if (e.key === ' ' || e.code === 'Space') {
    e.preventDefault();
    if (isOpen && !isAnimating) {
      closeBook();
    } else if (!isOpen && !isAnimating) {
      openBook();
    }
  }
});

// ============================================================================
// INIT
// ============================================================================
updateUIText();
