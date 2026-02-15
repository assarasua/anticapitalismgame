const STORAGE_KEY = "economia-lab-v3";
const XP_PER_LEVEL = 100;
const USER_NAME = "Gurutz Gorrotxategi";
const SITE_NAME = "Juego para que Gurutz sea menos anticapitalista";

const videoCatalog = {
  econ_intro: {
    title: "Intro to Economics (Crash Course)",
    channel: "CrashCourse",
    embedUrl: "https://www.youtube.com/embed/3ez10ADR_gM",
  },
  market_equilibrium: {
    title: "Market Equilibrium (Khan Academy)",
    channel: "Khan Academy",
    embedUrl: "https://www.youtube.com/embed/PEMkfgrifDw",
  },
  law_of_demand: {
    title: "Law of Demand (Khan Academy)",
    channel: "Khan Academy",
    embedUrl: "https://www.youtube.com/embed/ShzPtU7IOXs",
  },
  law_of_supply: {
    title: "Law of Supply (Khan Academy)",
    channel: "Khan Academy",
    embedUrl: "https://www.youtube.com/embed/cuVoq2wcFEU",
  },
  state_capitalism: {
    title: "Corporatism: State Capitalism",
    channel: "Marginal Revolution University",
    embedUrl: "https://www.youtube.com/embed/uWul2ePyVes",
  },
};

const levelVideoMap = {
  1: ["econ_intro", "market_equilibrium"],
  2: ["law_of_demand", "law_of_supply"],
  3: ["state_capitalism", "econ_intro"],
  4: ["market_equilibrium", "state_capitalism"],
  5: ["econ_intro", "law_of_supply"],
};

const netflixRecommendations = [
  {
    title: "Money, Explained",
    why: "Muy parecida a lo que buscas: episodios cortos para entender dinero y decisiones financieras.",
    link: "https://www.justwatch.com/us/tv-show/money-explained",
  },
  {
    title: "Explained",
    why: "Mismo estilo divulgativo, con capítulos sobre economía, política pública y temas sociales.",
    link: "https://www.justwatch.com/us/tv-show/explained",
  },
  {
    title: "Dirty Money",
    why: "Documental sobre fraudes, corrupción y abusos corporativos con casos reales.",
    link: "https://www.justwatch.com/us/tv-show/dirty-money/season-1",
  },
];

const levels = [
  {
    id: 1,
    title: "Nivel 1: Incentivos y mercados",
    summary:
      "Cómo precios, beneficio y competencia pueden mover la innovación y la eficiencia.",
    content: {
      intro:
        "Idea base: cuando las empresas se pelean por clientes, tienen que mejorar y ajustar precios.",
      examples: [
        {
          text: "Corea del Sur (desde los años 60): rápido crecimiento con industria exportadora, empresas privadas e instituciones fuertes.",
          source: "Datos del Banco Mundial",
          url: "https://data.worldbank.org/country/korea-rep",
        },
        {
          text: "China tras 1978: reformas de mercado y actividad privada asociadas a una fuerte reducción de pobreza.",
          source: "Resumen del Banco Mundial",
          url: "https://www.worldbank.org/en/country/china/overview",
        },
        {
          text: "Sector tecnológico de EE. UU.: capital riesgo y competencia aceleraron innovación de producto.",
          source: "Indicadores de innovación de la OCDE",
          url: "https://www.oecd.org/sti/inno/",
        },
      ],
      caution:
        "Ojo: sin reglas claras, el mercado también puede generar desigualdad y efectos negativos.",
    },
    quizzes: [
      {
        q: "¿Por qué la competencia puede mejorar productos?",
        options: [
          "Porque las empresas compiten por atraer clientes",
          "Porque todos los precios son siempre justos",
          "Porque el Estado nunca interviene",
        ],
        answer: 0,
        explain:
          "La competencia recompensa a quien ofrece más valor, y eso empuja la innovación.",
      },
      {
        q: "¿Qué papel juega el beneficio en una economía de mercado?",
        options: [
          "Señala dónde hay demanda y oportunidad de invertir",
          "Hace imposible la innovación",
          "Sustituye por completo las instituciones públicas",
        ],
        answer: 0,
        explain:
          "El beneficio funciona como señal para reasignar recursos hacia actividades demandadas.",
      },
      {
        q: "¿Cuál es una limitación frecuente de los mercados sin regulación?",
        options: [
          "Pueden aparecer daños ambientales o abusos no incorporados en precios",
          "Nunca se producen desigualdades",
          "La productividad siempre cae",
        ],
        answer: 0,
        explain:
          "Los costes sociales no siempre se reflejan en precios si no hay reglas correctoras.",
      },
    ],
  },
  {
    id: 2,
    title: "Nivel 2: Límites de la planificación central",
    summary:
      "Casos donde la planificación muy centralizada acabó en escasez e ineficiencia.",
    content: {
      intro:
        "Idea base: desde un despacho central es difícil captar lo que pasa en cada mercado en tiempo real.",
      examples: [
        {
          text: "Unión Soviética: escaseces recurrentes y baja calidad en bienes de consumo pese a avances industriales.",
          source: "Resumen de Britannica",
          url: "https://www.britannica.com/place/Soviet-Union",
        },
        {
          text: "Venezuela (años 2010): controles de precios y gestión estatal asociados a escasez e inflación severa.",
          source: "Datos país del FMI",
          url: "https://www.imf.org/en/Countries/VEN",
        },
        {
          text: "Alemania Oriental vs Occidental: diferencias importantes de productividad y nivel de vida antes de la reunificación.",
          source: "Historia de la Reserva Federal",
          url: "https://www.federalreservehistory.org/essays/german-economic-miracle",
        },
      ],
      caution:
        "La coordinación estatal puede ser útil para bienes públicos, crisis e infraestructuras.",
    },
    quizzes: [
      {
        q: "¿Qué problema aparece a menudo en sistemas muy centralizados?",
        options: [
          "Dificultad para usar información dispersa y cambiante",
          "Incapacidad total para construir infraestructuras",
          "Eliminación automática de corrupción",
        ],
        answer: 0,
        explain:
          "La información local cambia rápido y es costoso centralizarla sin pérdidas.",
      },
      {
        q: "¿Cuál es una consecuencia típica de precios administrados rígidamente?",
        options: [
          "Puede haber escasez cuando el precio fijado no refleja oferta y demanda",
          "Siempre aumenta la producción",
          "La calidad sube de forma garantizada",
        ],
        answer: 0,
        explain:
          "Si el precio se desconecta de costes y demanda, pueden aparecer faltantes.",
      },
      {
        q: "¿Qué mejora la planificación cuando funciona mejor?",
        options: [
          "Objetivos acotados, buena información y evaluación continua",
          "Eliminar toda iniciativa privada",
          "Reducir al mínimo la transparencia",
        ],
        answer: 0,
        explain:
          "La planificación puede ayudar si es selectiva, medible y bien gobernada.",
      },
    ],
  },
  {
    id: 3,
    title: "Nivel 3: Economías mixtas",
    summary:
      "Modelos que mezclan mercado con red social y regulación.",
    content: {
      intro:
        "Idea base: a muchos países les funciona mezclar incentivos de mercado con políticas públicas bien hechas.",
      examples: [
        {
          text: "Países nórdicos: apertura de mercado junto a bienestar social y políticas laborales robustas.",
          source: "Cooperación Nórdica",
          url: "https://www.norden.org/en/information/nordic-model",
        },
        {
          text: "Alemania: economía social de mercado que combina competencia con protección al trabajador.",
          source: "Germany Trade and Invest",
          url: "https://www.gtai.de/en/invest/business-location-germany/economic-system",
        },
        {
          text: "Singapur: entorno proempresa con una presencia relevante de política pública.",
          source: "Perfil país del Banco Mundial",
          url: "https://www.worldbank.org/en/country/singapore/overview",
        },
      ],
      caution:
        "La calidad institucional y la ejecución pesan más que la etiqueta ideológica.",
    },
    quizzes: [
      {
        q: "¿Qué define mejor una economía mixta?",
        options: [
          "Mercados para producir y Estado para objetivos sociales concretos",
          "Estado dueño de toda empresa",
          "Ausencia total de impuestos y normas",
        ],
        answer: 0,
        explain:
          "El equilibrio entre mercado y Estado busca combinar eficiencia y cohesión.",
      },
      {
        q: "¿Qué riesgo tiene una economía mixta mal diseñada?",
        options: [
          "Acumular burocracia ineficiente sin buenos resultados",
          "Eliminar cualquier conflicto distributivo",
          "Garantizar crecimiento perpetuo",
        ],
        answer: 0,
        explain:
          "Sin buena gestión, puede aumentar coste público sin mejoras equivalentes.",
      },
      {
        q: "¿Qué factor suele explicar mejores resultados comparados?",
        options: [
          "Instituciones sólidas y políticas estables en el tiempo",
          "Cambios de reglas constantes",
          "Depender solo de una materia prima",
        ],
        answer: 0,
        explain:
          "La continuidad institucional permite invertir y planificar mejor.",
      },
    ],
  },
  {
    id: 4,
    title: "Nivel 4: Diseña tu política",
    summary:
      "Aplica lo aprendido y juega con los trade-offs entre crecimiento, equidad y estabilidad.",
    content: {
      intro:
        "Toda decisión económica tiene pros y contras. La clave es gestionar bien esas compensaciones.",
      examples: [
        {
          text: "Más competencia puede impulsar productividad, pero exige protección frente a abusos.",
          source: "Perspectiva de políticas OCDE",
          url: "https://www.oecd.org/economy/",
        },
        {
          text: "Más gasto social puede reducir pobreza, pero requiere base fiscal sostenible.",
          source: "Gasto social OCDE",
          url: "https://www.oecd.org/social/expenditure.htm",
        },
        {
          text: "Regulación inteligente reduce fallos de mercado sin frenar en exceso la inversión.",
          source: "World Bank Business Enabling Environment",
          url: "https://www.worldbank.org/en/programs/business-enabling-environment",
        },
      ],
      caution:
        "Sin controles anticorrupción y buena administración, cualquier modelo puede fallar.",
    },
    quizzes: [
      {
        q: "¿Qué conclusión es más sólida al comparar países?",
        options: [
          "La calidad institucional influye de forma decisiva",
          "Una ideología siempre funciona en todo contexto",
          "La política económica no implica trade-offs",
        ],
        answer: 0,
        explain:
          "El desempeño depende de reglas, capacidad estatal e incentivos bien alineados.",
      },
      {
        q: "¿Qué indica una política fiscal sostenible?",
        options: [
          "Que ingresos y gasto pueden mantenerse sin crisis recurrentes",
          "Que nunca existen impuestos",
          "Que todo gasto público es ineficiente",
        ],
        answer: 0,
        explain:
          "La sostenibilidad fiscal permite financiar servicios sin desestabilizar la economía.",
      },
      {
        q: "¿Qué busca una buena regulación económica?",
        options: [
          "Corregir fallos de mercado con el menor coste posible",
          "Multiplicar trámites sin objetivos",
          "Sustituir totalmente al mercado",
        ],
        answer: 0,
        explain:
          "La regulación efectiva protege derechos e incentivos sin bloquear innovación.",
      },
    ],
  },
  {
    id: 5,
    title: "Nivel 5: Modo desafío",
    summary:
      "Elige una mezcla de políticas, saca puntuación y revisa qué ganas y qué cedes.",
    content: {
      intro:
        "Desafío final: mezcla políticas y mira si te sale un combo equilibrado.",
      examples: [
        {
          text: "No existe una configuración universalmente perfecta: contexto e instituciones importan.",
          source: "Indicadores de gobernanza del Banco Mundial",
          url: "https://www.worldbank.org/en/publication/worldwide-governance-indicators",
        },
        {
          text: "Los sistemas más resilientes suelen mezclar dinamismo de mercado con protección social.",
          source: "Marco de política OCDE",
          url: "https://www.oecd.org/economy/",
        },
      ],
      caution:
        "La puntuación es una herramienta pedagógica, no un ranking absoluto de países reales.",
    },
    quizzes: [
      {
        q: "Antes del simulador: ¿qué principio es clave?",
        options: [
          "Toda política genera compensaciones que hay que gestionar",
          "Hay una receta universal para todos los países",
          "El contexto institucional no importa",
        ],
        answer: 0,
        explain:
          "El objetivo es elegir combinaciones coherentes con el contexto.",
      },
      {
        q: "¿Para qué sirve este desafío?",
        options: [
          "Para practicar evaluación de decisiones con trade-offs",
          "Para demostrar que un sistema gana siempre",
          "Para ignorar evidencia histórica",
        ],
        answer: 0,
        explain:
          "Es un ejercicio de aprendizaje comparado y razonamiento político-económico.",
      },
    ],
    challenge: {
      q: "Elige tu mezcla de políticas:",
      dimensions: [
        {
          key: "competition",
          label: "Competencia de mercado",
          options: [
            {
              value: "low",
              label: "Baja",
              score: 45,
              effect: "Más estabilidad inicial, pero menor presión innovadora.",
            },
            {
              value: "balanced",
              label: "Equilibrada",
              score: 85,
              effect: "Equilibra innovación, competencia y margen de corrección pública.",
            },
            {
              value: "high",
              label: "Alta",
              score: 70,
              effect: "Puede acelerar innovación, con mayor tensión distributiva.",
            },
          ],
        },
        {
          key: "social_spending",
          label: "Gasto social",
          options: [
            {
              value: "low",
              label: "Bajo",
              score: 50,
              effect: "Menor presión fiscal, pero redes de seguridad más débiles.",
            },
            {
              value: "balanced",
              label: "Equilibrado",
              score: 90,
              effect: "Puede reducir vulnerabilidad social con sostenibilidad razonable.",
            },
            {
              value: "high",
              label: "Alto",
              score: 70,
              effect: "Mejora cobertura social, pero exige ingresos estables y gestión rigurosa.",
            },
          ],
        },
        {
          key: "regulation",
          label: "Calidad regulatoria",
          options: [
            {
              value: "light",
              label: "Ligera",
              score: 60,
              effect: "Facilita inversión, pero puede dejar vacíos de protección.",
            },
            {
              value: "smart",
              label: "Inteligente",
              score: 92,
              effect: "Corrige fallos de mercado sin destruir incentivos de productividad.",
            },
            {
              value: "heavy",
              label: "Pesada",
              score: 55,
              effect: "Reduce algunos riesgos, pero puede frenar adaptación e iniciativa.",
            },
          ],
        },
      ],
    },
  },
];

const badges = [
  {
    id: "quiz",
    label: "Máquina de quizzes",
    check: (s) => Object.keys(s.quizPassed).length > 0,
  },
  {
    id: "finisher",
    label: "Explorador económico",
    check: (s) => s.completed.size >= 2,
  },
  {
    id: "challenger",
    label: "Modo desafío",
    check: (s) => s.challengePassed[5],
  },
  {
    id: "master",
    label: "Crack de políticas",
    check: (s) => s.completed.size === levels.length,
  },
];

const state = {
  unlocked: 1,
  completed: new Set(),
  activeLevel: null,
  quizPassed: {},
  challengePassed: {},
  challengeResults: {},
  xp: 0,
  uiPrefs: {
    sound: true,
    announcer: true,
    confetti: true,
  },
};

const levelsContainer = document.getElementById("levelsContainer");
const lessonPanel = document.getElementById("lessonPanel");
const lessonTitle = document.getElementById("lessonTitle");
const lessonSummary = document.getElementById("lessonSummary");
const lessonBody = document.getElementById("lessonBody");
const completeBtn = document.getElementById("completeBtn");
const startGameBtn = document.getElementById("startGameBtn");
const backToMapBtn = document.getElementById("backToMapBtn");
const resetBtn = document.getElementById("resetBtn");
const soundToggleBtn = document.getElementById("soundToggleBtn");
const announcerToggleBtn = document.getElementById("announcerToggleBtn");
const confettiToggleBtn = document.getElementById("confettiToggleBtn");
const screenIntro = document.getElementById("screenIntro");
const screenMap = document.getElementById("screenMap");
const screenLevel = document.getElementById("screenLevel");
const stageLabel = document.getElementById("stageLabel");
const stagePercent = document.getElementById("stagePercent");
const stageFill = document.getElementById("stageFill");
const cinematicOverlay = document.getElementById("cinematicOverlay");
const cinematicText = document.getElementById("cinematicText");
const unlockSplash = document.getElementById("unlockSplash");
const unlockTitle = document.getElementById("unlockTitle");
const unlockText = document.getElementById("unlockText");
const unlockCloseBtn = document.getElementById("unlockCloseBtn");
const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");
const progressBar = document.querySelector(".progress-bar");
const xpText = document.getElementById("xpText");
const rankText = document.getElementById("rankText");
const badgeList = document.getElementById("badgeList");
const friendNameHero = document.getElementById("friendNameHero");
const friendNameFooter = document.getElementById("friendNameFooter");
const confettiCanvas = document.getElementById("confettiCanvas");

let audioCtx = null;
let confettiRaf = null;
let activeScreen = "intro";
let unlockTimer = null;
let cinematicTimer = null;
let selectedVoice = null;

function initPersonalization() {
  document.title = SITE_NAME;
  if (friendNameHero) friendNameHero.textContent = USER_NAME;
  if (friendNameFooter) friendNameFooter.textContent = USER_NAME;
}

function getRankFromXp(xp) {
  if (xp >= 500) return "Jefe del juego";
  if (xp >= 400) return "Pro del análisis";
  if (xp >= 300) return "Analista";
  if (xp >= 200) return "Debatidor";
  if (xp >= 100) return "En racha";
  return "Novato";
}

function saveState() {
  const payload = {
    unlocked: state.unlocked,
    completed: Array.from(state.completed),
    quizPassed: state.quizPassed,
    challengePassed: state.challengePassed,
    challengeResults: state.challengeResults,
    xp: state.xp,
    uiPrefs: state.uiPrefs,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return;

  try {
    const parsed = JSON.parse(raw);
    state.unlocked = Number(parsed.unlocked) || 1;
    state.completed = new Set((parsed.completed || []).map((id) => Number(id)));
    state.quizPassed = parsed.quizPassed || {};
    state.challengePassed = parsed.challengePassed || {};
    state.challengeResults = parsed.challengeResults || {};
    state.xp = Number(parsed.xp) || 0;
    state.uiPrefs = {
      sound: parsed.uiPrefs?.sound ?? true,
      announcer: parsed.uiPrefs?.announcer ?? true,
      confetti: parsed.uiPrefs?.confetti ?? true,
    };
  } catch (error) {
    localStorage.removeItem(STORAGE_KEY);
  }
}

function resetState() {
  const currentPrefs = { ...state.uiPrefs };
  state.unlocked = 1;
  state.completed = new Set();
  state.activeLevel = null;
  state.quizPassed = {};
  state.challengePassed = {};
  state.challengeResults = {};
  state.xp = 0;
  state.uiPrefs = currentPrefs;
  localStorage.removeItem(STORAGE_KEY);
  saveState();
  lessonPanel.classList.add("hidden");
  renderAll();
}

function ensureAudioContext() {
  if (!state.uiPrefs.sound) return null;
  if (typeof window.AudioContext === "undefined" && typeof window.webkitAudioContext === "undefined") {
    return null;
  }
  if (!audioCtx) {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    audioCtx = new Ctx();
  }
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

function resolveSpanishVoice() {
  if (!("speechSynthesis" in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  if (!voices || voices.length === 0) return null;

  const preferred =
    voices.find((v) => v.lang && v.lang.toLowerCase().startsWith("es")) ||
    voices.find((v) => v.lang && v.lang.toLowerCase().startsWith("en")) ||
    voices[0];

  return preferred || null;
}

function stopSpeech() {
  if (!("speechSynthesis" in window)) return;
  if (window.speechSynthesis.speaking || window.speechSynthesis.pending) {
    window.speechSynthesis.cancel();
  }
}

function getAnnouncerProfile(mode, levelId = null) {
  const isBoss = levelId === 5;
  const base = { rate: 1.05, pitch: 1.02, volume: 0.95, prefix: "" };

  if (mode === "intro") {
    return { ...base, rate: 0.98, pitch: 0.95, prefix: "Atención, jugador." };
  }
  if (mode === "enter") {
    return isBoss
      ? { ...base, rate: 0.93, pitch: 0.85, prefix: "Alerta máxima." }
      : { ...base, rate: 1.0, pitch: 0.96, prefix: "Preparando misión." };
  }
  if (mode === "complete") {
    return isBoss
      ? { ...base, rate: 1.12, pitch: 1.12, prefix: "Victoria total." }
      : { ...base, rate: 1.08, pitch: 1.08, prefix: "Misión cumplida." };
  }
  if (mode === "back") {
    return { ...base, rate: 1.0, pitch: 0.92, prefix: "Retirada táctica." };
  }

  return base;
}

function speakCinematic(text, mode = "enter", levelId = null) {
  if (!state.uiPrefs.announcer) return;
  if (!("speechSynthesis" in window) || typeof window.SpeechSynthesisUtterance === "undefined") {
    return;
  }

  stopSpeech();
  if (!selectedVoice) {
    selectedVoice = resolveSpanishVoice();
  }

  const profile = getAnnouncerProfile(mode, levelId);
  const speech = profile.prefix ? `${profile.prefix} ${text}` : text;
  const utterance = new SpeechSynthesisUtterance(speech);
  utterance.lang = selectedVoice?.lang || "es-ES";
  if (selectedVoice) utterance.voice = selectedVoice;
  utterance.rate = profile.rate;
  utterance.pitch = profile.pitch;
  utterance.volume = profile.volume;
  window.speechSynthesis.speak(utterance);
}

function playTone({ frequency, duration, type = "sine", volume = 0.04, delay = 0 }) {
  if (!state.uiPrefs.sound) return;
  const ctx = ensureAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime + delay;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(frequency, now);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(volume, now + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(now);
  osc.stop(now + duration + 0.02);
}

function playSound(name) {
  if (!state.uiPrefs.sound) return;
  if (name === "click") {
    playTone({ frequency: 480, duration: 0.08, type: "triangle", volume: 0.025 });
  } else if (name === "success") {
    playTone({ frequency: 540, duration: 0.08, type: "triangle", volume: 0.03 });
    playTone({ frequency: 820, duration: 0.12, type: "triangle", volume: 0.04, delay: 0.08 });
  } else if (name === "wrong") {
    playTone({ frequency: 220, duration: 0.1, type: "sawtooth", volume: 0.03 });
  } else if (name === "levelup") {
    playTone({ frequency: 520, duration: 0.08, type: "triangle", volume: 0.03 });
    playTone({ frequency: 760, duration: 0.1, type: "triangle", volume: 0.04, delay: 0.08 });
    playTone({ frequency: 1020, duration: 0.14, type: "triangle", volume: 0.045, delay: 0.18 });
  }
}

function resizeConfettiCanvas() {
  if (!confettiCanvas) return;
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
}

function fireConfetti() {
  if (!state.uiPrefs.confetti || !confettiCanvas) return;
  resizeConfettiCanvas();
  const ctx = confettiCanvas.getContext("2d");
  if (!ctx) return;

  const colors = ["#ff5fa2", "#4ee7ff", "#b2ff66", "#ffd166", "#c77dff"];
  const pieces = Array.from({ length: 110 }, () => ({
    x: Math.random() * confettiCanvas.width,
    y: -20 - Math.random() * confettiCanvas.height * 0.2,
    vx: -2 + Math.random() * 4,
    vy: 2 + Math.random() * 4.2,
    size: 3 + Math.random() * 5,
    color: colors[Math.floor(Math.random() * colors.length)],
    rot: Math.random() * Math.PI,
    spin: -0.16 + Math.random() * 0.32,
  }));

  let start = null;
  const duration = 1200;

  const tick = (ts) => {
    if (!start) start = ts;
    const elapsed = ts - start;
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

    pieces.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.035;
      p.rot += p.spin;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
      ctx.restore();
    });

    if (elapsed < duration) {
      confettiRaf = window.requestAnimationFrame(tick);
    } else {
      ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
      confettiRaf = null;
    }
  };

  if (confettiRaf) {
    window.cancelAnimationFrame(confettiRaf);
  }
  confettiRaf = window.requestAnimationFrame(tick);
}

function updateFxButtons() {
  if (soundToggleBtn) {
    soundToggleBtn.textContent = `Sonido: ${state.uiPrefs.sound ? "ON" : "OFF"}`;
  }
  if (announcerToggleBtn) {
    announcerToggleBtn.textContent = `Voz: ${state.uiPrefs.announcer ? "ON" : "OFF"}`;
  }
  if (confettiToggleBtn) {
    confettiToggleBtn.textContent = `Confetti: ${state.uiPrefs.confetti ? "ON" : "OFF"}`;
  }
}

function switchScreen(nextScreen) {
  activeScreen = nextScreen;
  [screenIntro, screenMap, screenLevel].forEach((screen) => {
    if (!screen) return;
    screen.classList.remove("active-screen");
  });

  if (nextScreen === "intro" && screenIntro) {
    screenIntro.classList.add("active-screen");
  } else if (nextScreen === "map" && screenMap) {
    screenMap.classList.add("active-screen");
  } else if (nextScreen === "level" && screenLevel) {
    screenLevel.classList.add("active-screen");
  }

  updateStageProgress();
}

function updateStageProgress() {
  const stages = {
    intro: { label: "Paso 1 de 3: Briefing", percent: 33 },
    map: { label: "Paso 2 de 3: Mapa de niveles", percent: 66 },
    level: { label: "Paso 3 de 3: Misión en curso", percent: 100 },
  };
  const stage = stages[activeScreen] || stages.intro;
  if (stageLabel) stageLabel.textContent = stage.label;
  if (stagePercent) stagePercent.textContent = `${stage.percent}%`;
  if (stageFill) stageFill.style.width = `${stage.percent}%`;
}

function getCinematicMessage(action, levelId = null) {
  const byLevel = {
    1: {
      enter: "Abriendo laboratorio de mercados...",
      complete: "Misión 1 cerrada. Subiendo al mapa...",
      back: "Saliendo del laboratorio de mercados...",
    },
    2: {
      enter: "Entrando a la sala de planificación central...",
      complete: "Misión 2 completada. Recalculando ruta...",
      back: "Volviendo desde la sala de planificación...",
    },
    3: {
      enter: "Activando modo economías mixtas...",
      complete: "Misión 3 validada. Vamos al mapa...",
      back: "Saliendo del modo economías mixtas...",
    },
    4: {
      enter: "Cargando simulador de políticas...",
      complete: "Misión 4 cerrada. Guardando build económica...",
      back: "Saliendo del simulador de políticas...",
    },
    5: {
      enter: "Entrando al boss final: modo desafío...",
      complete: "Boss derrotado. Registrando puntuación final...",
      back: "Pausando boss final y volviendo al mapa...",
    },
  };

  const generic = {
    intro: "Iniciando partida...",
    enter: "Entrando en misión...",
    complete: "Subiendo progreso al mapa...",
    back: "Volviendo al mapa...",
  };

  if (!levelId || !byLevel[levelId]) return generic[action] || generic.enter;
  return byLevel[levelId][action] || generic[action] || generic.enter;
}

function playCinematic(message, nextScreen, duration = 820, mode = "enter", levelId = null) {
  if (!cinematicOverlay || !cinematicText) {
    switchScreen(nextScreen);
    return;
  }

  cinematicText.textContent = message;
  cinematicOverlay.classList.remove("hidden");
  speakCinematic(message, mode, levelId);

  if (cinematicTimer) {
    window.clearTimeout(cinematicTimer);
  }

  cinematicTimer = window.setTimeout(() => {
    stopSpeech();
    cinematicOverlay.classList.add("hidden");
    switchScreen(nextScreen);
    cinematicTimer = null;
  }, duration);
}

function hideUnlockSplash() {
  if (!unlockSplash) return;
  unlockSplash.classList.add("hidden");
}

function showUnlockSplash(levelId) {
  if (!unlockSplash || !unlockTitle || !unlockText) return;
  const nextLevel = levels.find((level) => level.id === levelId);
  if (!nextLevel) return;

  unlockTitle.textContent = `${nextLevel.title} desbloqueado`;
  unlockText.textContent = "Nuevo reto abierto. Dale al mapa y sigue subiendo de nivel.";
  unlockSplash.classList.remove("hidden");
  playSound("success");
  fireConfetti();

  if (unlockTimer) {
    window.clearTimeout(unlockTimer);
  }
  unlockTimer = window.setTimeout(() => {
    hideUnlockSplash();
    unlockTimer = null;
  }, 2200);
}

function updateProgress() {
  const percent = Math.round((state.completed.size / levels.length) * 100);
  progressFill.style.width = `${percent}%`;
  progressText.textContent = `${percent}%`;
  progressBar.setAttribute("aria-valuenow", String(percent));
}

function renderHud() {
  xpText.textContent = `${state.xp} XP`;
  rankText.textContent = `Rango: ${getRankFromXp(state.xp)}`;

  badgeList.innerHTML = "";
  badges.forEach((badge) => {
    const pill = document.createElement("span");
    const earned = badge.check(state);
    pill.className = `badge ${earned ? "earned" : ""}`;
    pill.textContent = badge.label;
    badgeList.appendChild(pill);
  });
}

function levelIsUnlocked(level) {
  return level.id <= state.unlocked;
}

function isQuizLevelPassed(level) {
  if (!level.quizzes || level.quizzes.length === 0) return true;
  const byLevel = state.quizPassed[level.id] || {};
  return level.quizzes.every((_, idx) => byLevel[idx]);
}

function canCompleteLevel(level) {
  const quizzesReady = isQuizLevelPassed(level);
  if (level.challenge) {
    return quizzesReady && !!state.challengePassed[level.id];
  }
  return quizzesReady;
}

function updateCompleteButton(level) {
  completeBtn.disabled = !canCompleteLevel(level);
}

function renderLevels() {
  levelsContainer.innerHTML = "";

  levels.forEach((level, idx) => {
    const card = document.createElement("article");
    card.className = "level-card";
    card.style.animationDelay = `${idx * 70}ms`;

    const isLocked = !levelIsUnlocked(level);
    const isComplete = state.completed.has(level.id);

    if (isLocked) card.classList.add("locked");
    if (isComplete) card.classList.add("complete");

    card.innerHTML = `
      <h3>${level.title}</h3>
      <p class="level-meta">${level.summary}</p>
      <p class="level-meta">Estado: ${
        isComplete ? "Hecho" : isLocked ? "Bloqueado" : "Disponible"
      }</p>
      <button ${isLocked ? "disabled" : ""} data-level-id="${level.id}">
        ${isComplete ? "Ver otra vez" : "Entrar"}
      </button>
    `;

    levelsContainer.appendChild(card);
  });
}

function renderQuizSet(level) {
  const wrapper = document.createElement("div");
  const quizState = state.quizPassed[level.id] || {};

  const solvedCount = Object.values(quizState).filter(Boolean).length;
  const tracker = document.createElement("p");
  tracker.className = "quiz-feedback";
  tracker.textContent = `Quizzes acertados: ${solvedCount}/${level.quizzes.length}`;
  wrapper.appendChild(tracker);

  const refreshTracker = () => {
    const current = state.quizPassed[level.id] || {};
    const done = Object.values(current).filter(Boolean).length;
    tracker.textContent = `Quizzes acertados: ${done}/${level.quizzes.length}`;
    updateCompleteButton(level);
  };

  level.quizzes.forEach((quiz, quizIndex) => {
    const block = document.createElement("div");
    block.className = "quiz-block";
    block.innerHTML = `<h4>Mini-quiz ${quizIndex + 1}</h4><p>${quiz.q}</p>`;

    const options = document.createElement("div");
    options.className = "quiz-options";

    const feedback = document.createElement("p");
    feedback.className = "quiz-feedback";

    const alreadySolved = !!quizState[quizIndex];
    if (alreadySolved) {
      feedback.textContent = `Ya lo tenías: ${quiz.explain}`;
    }

    const buttons = [];

    quiz.options.forEach((optionText, optionIndex) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = optionText;
      btn.disabled = alreadySolved;

      btn.addEventListener("click", () => {
        const correct = optionIndex === quiz.answer;
        if (correct) {
          btn.classList.add("correct");
          feedback.textContent = `Bien jugado: ${quiz.explain}`;
          playSound("success");
          if (!state.quizPassed[level.id]) state.quizPassed[level.id] = {};
          state.quizPassed[level.id][quizIndex] = true;
          buttons.forEach((b) => {
            b.disabled = true;
          });
          saveState();
          renderHud();
          refreshTracker();
        } else {
          btn.classList.add("wrong");
          feedback.textContent = "Casi. Prueba otra opción.";
          playSound("wrong");
        }
      });

      buttons.push(btn);
      options.appendChild(btn);
    });

    block.appendChild(options);
    block.appendChild(feedback);
    wrapper.appendChild(block);
  });

  return wrapper;
}

function renderLearningMedia(levelId) {
  const section = document.createElement("section");
  section.className = "media-section";

  const ids = levelVideoMap[levelId] || [];
  const videos = ids.map((id) => videoCatalog[id]).filter(Boolean);

  const videosMarkup = videos
    .map(
      (video) => `
        <article class="video-card">
          <h4>${video.title}</h4>
          <p class="video-meta">Canal: ${video.channel}</p>
          <iframe
            class="video-frame"
            src="${video.embedUrl}"
            title="${video.title}"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </article>
      `,
    )
    .join("");

  const netflixMarkup = netflixRecommendations
    .map(
      (item) => `
        <li>
          <strong>${item.title}</strong>: ${item.why}
          <a href="${item.link}" target="_blank" rel="noopener noreferrer">Ver disponibilidad</a>
        </li>
      `,
    )
    .join("");

  section.innerHTML = `
    <h3>Vídeos para aprender (YouTube)</h3>
    <div class="video-grid">${videosMarkup}</div>
    <h3>Para ver en Netflix (rollo Money, Explained)</h3>
    <p class="streaming-note">La disponibilidad puede cambiar por país y fecha. Enlaces verificados para EE. UU.</p>
    <ul class="netflix-list">${netflixMarkup}</ul>
  `;

  return section;
}

function getChallengeRating(totalScore) {
  if (totalScore >= 265) {
    return {
      label: "Mezcla de alto rendimiento",
      note: "Buena mezcla: incentivos, cohesión social y regulación con sentido.",
    };
  }
  if (totalScore >= 220) {
    return {
      label: "Competitiva pero desigual",
      note: "Tiene puntos fuertes, pero se te cuelan tensiones de desigualdad o estabilidad.",
    };
  }
  return {
    label: "Mezcla frágil",
    note: "Hay varias decisiones que pueden traerte poco crecimiento o más lío social.",
  };
}

function renderChallenge(level) {
  const block = document.createElement("div");
  block.className = "challenge-block";
  const existing = state.challengeResults[level.id];

  const controlsMarkup = level.challenge.dimensions
    .map((dimension) => {
      const options = dimension.options
        .map((option) => {
          const selected =
            existing && existing.selections[dimension.key] === option.value
              ? "selected"
              : "";
          return `<option value="${option.value}" ${selected}>${option.label}</option>`;
        })
        .join("");

      return `
        <label class="challenge-control" for="${dimension.key}">
          <span>${dimension.label}</span>
          <select id="${dimension.key}" data-key="${dimension.key}">
            ${options}
          </select>
        </label>
      `;
    })
    .join("");

  block.innerHTML = `
    <h4>Modo desafío</h4>
    <p>${level.challenge.q}</p>
    <div class="challenge-grid">${controlsMarkup}</div>
    <button type="button" class="btn" id="evaluateChallengeBtn">Ver cómo queda mi mezcla</button>
    <div class="challenge-summary" id="challengeSummary"></div>
  `;

  const evaluateBtn = block.querySelector("#evaluateChallengeBtn");
  const summaryNode = block.querySelector("#challengeSummary");

  const renderSummary = (result) => {
    if (!result) {
      summaryNode.innerHTML = "";
      return;
    }

    const breakdown = Object.entries(result.breakdown)
      .map(
        ([key, detail]) =>
          `<li><strong>${key}:</strong> ${detail.label} (${detail.score}) - ${detail.effect}</li>`,
      )
      .join("");

    summaryNode.innerHTML = `
      <p class="challenge-score">Tu puntuación: ${result.total}/300</p>
      <p class="challenge-rating"><strong>${result.rating.label}</strong> - ${result.rating.note}</p>
      <ul class="challenge-breakdown">${breakdown}</ul>
      <p class="challenge-note">Desafío superado. Ya puedes cerrar este nivel.</p>
    `;
  };

  if (existing) {
    renderSummary(existing);
  }

  evaluateBtn.addEventListener("click", () => {
    playSound("click");
    const selections = {};
    const breakdown = {};

    level.challenge.dimensions.forEach((dimension) => {
      const select = block.querySelector(`select[data-key="${dimension.key}"]`);
      const selected = dimension.options.find((opt) => opt.value === select.value);
      selections[dimension.key] = selected.value;
      breakdown[dimension.label] = {
        label: selected.label,
        score: selected.score,
        effect: selected.effect,
      };
    });

    const total = Object.values(breakdown).reduce((sum, item) => sum + item.score, 0);
    const rating = getChallengeRating(total);

    const result = {
      selections,
      breakdown,
      total,
      rating,
    };

    state.challengePassed[level.id] = true;
    state.challengeResults[level.id] = result;
    playSound("success");
    saveState();
    renderHud();
    renderSummary(result);
    updateCompleteButton(level);
  });

  return block;
}

function openLevel(levelId) {
  const level = levels.find((l) => l.id === levelId);
  if (!level || !levelIsUnlocked(level)) return;

  state.activeLevel = levelId;

  lessonTitle.textContent = level.title;
  lessonSummary.textContent = level.content.intro;

  const examples = level.content.examples
    .map(
      (example) =>
        `<li>${example.text} <a href="${example.url}" target="_blank" rel="noopener noreferrer">Fuente: ${example.source}</a></li>`,
    )
    .join("");

  lessonBody.innerHTML = `
    <h3>Casos reales</h3>
    <ul class="case-list">${examples}</ul>
    <p><strong>Ojo con esto:</strong> ${level.content.caution}</p>
  `;

  if (level.quizzes && level.quizzes.length) {
    lessonBody.appendChild(renderQuizSet(level));
  }

  lessonBody.appendChild(renderLearningMedia(level.id));

  if (level.challenge) {
    lessonBody.appendChild(renderChallenge(level));
  }

  lessonPanel.classList.remove("hidden");
  updateCompleteButton(level);
  playCinematic(getCinematicMessage("enter", level.id), "level", level.id === 5 ? 980 : 820, "enter", level.id);
}

function completeLevel() {
  if (!state.activeLevel) return;

  const id = state.activeLevel;
  const level = levels.find((item) => item.id === id);
  if (!canCompleteLevel(level)) return;

  const wasComplete = state.completed.has(id);
  state.completed.add(id);

  if (!wasComplete) {
    state.xp += XP_PER_LEVEL;
    playSound("levelup");
    fireConfetti();
  }

  if (id === state.unlocked && id < levels.length) {
    state.unlocked += 1;
    showUnlockSplash(state.unlocked);
  }

  saveState();
  renderAll();
  playCinematic(getCinematicMessage("complete", level.id), "map", 900, "complete", level.id);
}

function renderAll() {
  renderLevels();
  updateProgress();
  renderHud();
  updateFxButtons();
}

levelsContainer.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLButtonElement)) return;

  const id = Number(target.dataset.levelId);
  playSound("click");
  openLevel(id);
});

completeBtn.addEventListener("click", completeLevel);

if (startGameBtn) {
  startGameBtn.addEventListener("click", () => {
    playSound("click");
    playCinematic(getCinematicMessage("intro"), "map", 780, "intro");
  });
}

if (backToMapBtn) {
  backToMapBtn.addEventListener("click", () => {
    playSound("click");
    playCinematic(getCinematicMessage("back", state.activeLevel), "map", 700, "back", state.activeLevel);
  });
}

if (unlockCloseBtn) {
  unlockCloseBtn.addEventListener("click", () => {
    playSound("click");
    hideUnlockSplash();
  });
}

if (soundToggleBtn) {
  soundToggleBtn.addEventListener("click", () => {
    state.uiPrefs.sound = !state.uiPrefs.sound;
    saveState();
    updateFxButtons();
    if (state.uiPrefs.sound) {
      playSound("click");
    }
  });
}

if (announcerToggleBtn) {
  announcerToggleBtn.addEventListener("click", () => {
    state.uiPrefs.announcer = !state.uiPrefs.announcer;
    if (!state.uiPrefs.announcer) {
      stopSpeech();
    }
    saveState();
    updateFxButtons();
    playSound("click");
  });
}

if (confettiToggleBtn) {
  confettiToggleBtn.addEventListener("click", () => {
    state.uiPrefs.confetti = !state.uiPrefs.confetti;
    saveState();
    updateFxButtons();
    playSound("click");
  });
}

resetBtn.addEventListener("click", () => {
  playSound("click");
  const confirmed = window.confirm("¿Quieres reiniciar todo el progreso y XP?");
  if (confirmed) {
    resetState();
  }
});

window.addEventListener("resize", resizeConfettiCanvas);
window.addEventListener(
  "pointerdown",
  () => {
    ensureAudioContext();
  },
  { once: true },
);
window.speechSynthesis?.addEventListener?.("voiceschanged", () => {
  selectedVoice = resolveSpanishVoice();
});

loadState();
initPersonalization();
renderAll();
switchScreen("intro");
