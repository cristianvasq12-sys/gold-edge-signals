// Gold Edge Signals - Trading Signals Frontend Logic

// Sample Data for Recent Trading Results
const tradingResults = [
  {
    date: '2026-07-10',
    pair: 'XAUUSD',
    type: 'BUY', // Will be rendered in BLUE
    entry: '2350.50',
    stopLoss: '2340.00',
    takeProfit: '2375.00',
    pips: '+245',
    status: 'WIN'
  },
  {
    date: '2026-07-09',
    pair: 'XAUUSD',
    type: 'SELL', // Must NOT use RED
    entry: '2365.20',
    stopLoss: '2375.00',
    takeProfit: '2342.00',
    pips: '+232',
    status: 'WIN'
  },
  {
    date: '2026-07-08',
    pair: 'GBPUSD',
    type: 'BUY', // Will be rendered in BLUE
    entry: '1.27200',
    stopLoss: '1.26800',
    takeProfit: '1.28100',
    pips: '+90',
    status: 'WIN'
  },
  {
    date: '2026-07-07',
    pair: 'EURUSD',
    type: 'SELL', // Must NOT use RED (Even though it is LOSS)
    entry: '1.08500',
    stopLoss: '1.08900',
    takeProfit: '1.07800',
    pips: '-70',
    status: 'LOSS'
  },
  {
    date: '2026-07-06',
    pair: 'XAUUSD',
    type: 'BUY', // Will be rendered in BLUE
    entry: '2322.00',
    stopLoss: '2332.00',
    takeProfit: '2300.00',
    pips: '-220',
    status: 'LOSS'
  },
  {
    date: '2026-07-05',
    pair: 'USDJPY',
    type: 'SELL', // Must NOT use RED
    entry: '158.20',
    stopLoss: '157.50',
    takeProfit: '159.80',
    pips: '+160',
    status: 'WIN'
  }
];

// Translation Dictionary (ES / EN)
const translations = {
  es: {
    // Nav
    "nav-home": "Inicio",
    "nav-about": "Nosotros",
    "nav-results": "Resultados",
    "nav-pricing": "Precios",
    "nav-testimonials": "Testimonios",
    "nav-faq": "FAQ",
    "nav-cta": "Comenzar",
    
    "mobile-nav-home": "Inicio",
    "mobile-nav-about": "Nosotros",
    "mobile-nav-results": "Resultados",
    "mobile-nav-pricing": "Precios",
    "mobile-nav-testimonials": "Testimonios",
    "mobile-nav-faq": "FAQ",
    "mobile-nav-cta": "Comenzar",
    
    // Hero
    "hero-tagline": '<i class="fa-solid fa-crown"></i> Motor de Trading Institucional',
    "hero-title": 'Domina el Mercado del Oro <br><span class="bg-gradient-to-r from-gold-soft via-gold to-gold-dark bg-clip-text text-transparent drop-shadow-md">Análisis de Nivel Experto</span>',
    "hero-subtitle": 'Obtén configuraciones de alta probabilidad en tiempo real, diseñadas para hacer crecer cuentas de bajo capital. Ejecución de nivel institucional, datos puros, gestión de riesgo estricta y seguimiento visual constante.',
    "hero-btn-join": 'Únete Ahora <i class="fa-solid fa-arrow-right ml-2"></i>',
    "hero-btn-results": 'Ver Resultados en Vivo',
    "stat-win": 'Tasa de Acierto Verificada',
    "stat-pips": 'Pips Mensuales',
    "stat-risk": 'Riesgo Beneficio Prom.',
    "stat-coverage": 'Cobertura de Mercado',

    // About Us
    "about-tagline": "Quiénes Somos",
    "about-title": "Traders Institucionales Experimentados",
    "about-desc": "Gold Edge Signals fue fundada por un equipo de traders profesionales de cuenta propia con una experiencia combinada de más de 12 años en los mercados de divisas y materias primas. No dependemos de indicadores minoristas; rastreamos los flujos bancarios globales y la liquidez del mercado.",
    "about-smc-title": "Conceptos de Dinero Inteligente",
    "about-smc-desc": "Trading basado en bloques de órdenes, vacíos de liquidez y rupturas de estructura de mercado.",
    "about-risk-title": "Gestión de Riesgo Rígida",
    "about-risk-desc": "Máximo 1% de riesgo por operación. Stop Loss claro y zonas de ganancias con objetivos múltiples.",
    "about-model-title": "Modelo de Análisis de Oro (XAUUSD)",
    "about-model-desc": "Detección de toma de liquidez en tiempo real en niveles psicológicos clave.",
    "about-model-tag": "Análisis de Mercado",

    // Results
    "results-tagline": "Transparencia Verificada",
    "results-title": "Resultados Recientes de Trading",
    "results-desc": "Publicamos cada configuración de trade que enviamos. A continuación se muestra nuestro diario dinámico que exhibe las operaciones recientes.",
    "results-feed": "Canal de Señales en Vivo",
    "results-count": "Mostrando los últimos 6 trades de alto volumen",
    "results-note": '<i class="fa-solid fa-lock text-gold"></i> Las posiciones de color azul están protegidas (ganancia visible solo para VIPs).',
    "results-disclaimer": '*Los resultados pasados no garantizan rendimientos futuros.',
    
    // Table headers
    "th-date": "Fecha",
    "th-pair": "Par",
    "th-type": "Tipo",
    "th-entry": "Entrada",
    "th-sl": "Stop Loss",
    "th-tp": "Take Profit",
    "th-pips": "Pips",
    "th-status": "Estado",
    
    // Pricing
    "pricing-tagline": "Planes de Precios",
    "pricing-title": "Planes Premium Asequibles",
    "pricing-desc": "Selecciona un paquete de precios que se adapte a tu presupuesto. Sin tarifas ocultas, acceso instantáneo al Telegram VIP.",
    
    // Pricing Cards
    "plan-m-title": "Mensual VIP",
    "plan-m-sub": "Promoción 60% OFF",
    "plan-m-billing": "USD / mes",
    "plan-m-savings": "Ahorra 60% (Antes $300 USD)",
    "plan-m-feat-1": "Señales de XAUUSD y Forex",
    "plan-m-feat-2": "Promedio de 3-5 señales por día",
    "plan-m-feat-3": "Análisis completo de riesgo",
    "plan-m-feat-4": "Acceso directo al Telegram VIP",
    "plan-m-feat-5": "Soporte al cliente 24/7",
    "plan-m-btn": "Seleccionar Mensual",
    "plan-m-value": "Promoción 60% OFF",
    
    "plan-l-title": "Permanente VIP",
    "plan-l-sub": "Promoción 60% OFF",
    "plan-l-billing": "USD / único pago",
    "plan-l-savings": "Ahorra 60% (Antes $750 USD)",
    "plan-l-feat-1": "Señales de XAUUSD y Forex",
    "plan-l-feat-2": "Promedio de 3-5 señales por día",
    "plan-l-feat-3": "Análisis completo de riesgo",
    "plan-l-feat-4": "Acceso directo al Telegram VIP",
    "plan-l-feat-5": "Soporte al cliente 24/7",
    "plan-l-btn": "Seleccionar Permanente",
    "plan-l-value": "Promoción 60% OFF",

    // Testimonials
    "test-tagline": "Reseñas",
    "test-title": "Lo Que Dicen Nuestros Miembros",
    "test-desc": "Comentarios reales de miembros activos que transformaron su trading con nosotros.",
    "test-1-text": '"Las señales de Oro son una locura. Ayer atrapamos 180 pips en la sesión de Londres. Entradas muy precisas y exactas."',
    "test-1-user": "Juan Delgado",
    "test-1-status": "Miembro VIP desde Julio 2026",
    "test-2-text": '"Me encanta su transparencia. Muestran los trades perdidos también, pero su win rate es tan sólido que el balance mensual siempre es positivo."',
    "test-2-user": "Sandra M.",
    "test-2-status": "Miembro VIP desde Julio 2026",
    "test-3-text": '"La opción de Binance Pay hace que sea muy fácil pagar en USDT. Obtuve mi enlace de Discord al instante. Recomiendo el Plan Anual."',
    "test-3-user": "Lars K.",
    "test-3-status": "Miembro VIP desde Julio 2026",
    "test-4-text": '"Es el mejor canal de señales que he probado. La gestión de riesgo del 1% me ha ayudado a proteger mi cuenta y crecer de forma constante."',
    "test-4-user": "Sofia Rodriguez",
    "test-4-status": "Miembro VIP desde Julio 2026",
    "test-5-text": '"Los análisis técnicos detallados que envían antes de cada operación son una mina de oro. He aprendido muchísimo en la comunidad VIP."',
    "test-5-user": "Mateo Gomez",
    "test-5-status": "Miembro VIP desde Julio 2026",
    "test-6-text": '"El soporte es excelente y las configuraciones de XAUUSD son muy limpias. Por fin encontré consistencia en mi trading."',
    "test-6-user": "Camila Torres",
    "test-6-status": "Miembro VIP desde Julio 2026",
    "test-7-text": '"Increíble comunidad. Las señales no son solo para copiar, sino que explican el porqué de cada entrada usando Smart Money Concepts."',
    "test-7-user": "Daniel Silva",
    "test-7-status": "Miembro VIP desde Julio 2026",
    "test-8-text": '"Había perdido dinero en otros canales antes, pero aquí la transparencia es real. Muy contenta con las ganancias de este mes."',
    "test-8-user": "Elena Rossi",
    "test-8-status": "Miembro VIP desde Julio 2026",

    // FAQ
    "faq-tagline": "Preguntas",
    "faq-title": "Preguntas Frecuentes",
    "faq-q1": "¿Cómo recibo las señales?",
    "faq-a1": "Todas las señales se transmiten en vivo a través de nuestro canal privado de Telegram VIP y Discord VIP. Proporcionamos precio de entrada, stop loss y tres objetivos de ganancia.",
    "faq-q2": "¿Qué métodos de pago aceptan?",
    "faq-a2": "Aceptamos oficialmente Binance Pay y transferencias directas de USDT a través de las redes TRC20 y BSC. Esto permite transacciones instantáneas y de bajo costo.",
    "faq-q3": "¿Puedo cancelar mi suscripción?",
    "faq-a3": "Sí, las suscripciones recurrentes se pueden cancelar en cualquier momento. Los pagos directos en criptomonedas no se renuevan automáticamente; solo pagas de nuevo si deseas extender tu acceso VIP.",

    // Contact Us
    "contact-tagline": "Contacto",
    "contact-title": "Contáctenos",
    "contact-desc": "¿Tienes preguntas? Nuestro equipo de éxito del cliente está listo para responder tus dudas.",
    "label-name": "Nombre Completo",
    "label-email": "Correo Electrónico",
    "label-subject": "Asunto",
    "label-message": "Mensaje",
    "btn-send-message": "Enviar Mensaje",
    "contact-success-msg": '<i class="fa-solid fa-circle-check mr-2"></i> ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.',

    // Footer
    "footer-copyright": "© 2026 Gold Edge Signals. Todos los derechos reservados. El trading de divisas y criptoactivos conlleva un alto riesgo.",

    // Checkout Modal
    "modal-checkout-title": "Escanea para Pagar",
    "modal-amount-prompt": "Monto exacto a enviar:",
    "modal-verify-btn": "Verificar Pago (Simular)",
    "modal-loading": "Verificando pago en la blockchain...",
    "modal-connecting": "Confirmando transacción...",
    "modal-steps-activation": "Pasos para activar acceso:",
    "modal-step-1": "1. Haz clic en el botón de abajo para unirte al canal de Telegram.",
    "modal-step-2-label": "2. El bot VIP verificará tu ID de transacción.",
    "modal-step-3": "3. Recibirás tu acceso VIP de forma instantánea.",
    "modal-telegram-btn": "Unirse al Telegram VIP"
  },
  en: {
    // Nav
    "nav-home": "Home",
    "nav-about": "About Us",
    "nav-results": "Results",
    "nav-pricing": "Pricing",
    "nav-testimonials": "Testimonials",
    "nav-faq": "FAQ",
    "nav-cta": "Get Started",
    
    "mobile-nav-home": "Home",
    "mobile-nav-about": "About Us",
    "mobile-nav-results": "Results",
    "mobile-nav-pricing": "Pricing",
    "mobile-nav-testimonials": "Testimonials",
    "mobile-nav-faq": "FAQ",
    "mobile-nav-cta": "Get Started",
    
    // Hero
    "hero-tagline": '<i class="fa-solid fa-crown"></i> Institutional Trading Engine',
    "hero-title": 'Master the Gold Market <br><span class="bg-gradient-to-r from-gold-soft via-gold to-gold-dark bg-clip-text text-transparent drop-shadow-md">Expert Level Analysis</span>',
    "hero-subtitle": 'Get high-probability, real-time setups designed to grow low-capital accounts. Institutional-level execution, pure data, strict risk management, and consistent visual tracking.',
    "hero-btn-join": 'Join Now <i class="fa-solid fa-arrow-right ml-2"></i>',
    "hero-btn-results": 'View Live Results',
    "stat-win": 'Verified Win Rate',
    "stat-pips": 'Monthly Pips',
    "stat-risk": 'Avg Risk Reward',
    "stat-coverage": 'Market Coverage',

    // About Us
    "about-tagline": "Who We Are",
    "about-title": "Experienced Institutional Traders",
    "about-desc": "Gold Edge Signals was founded by a team of professional proprietary traders with combined experience of over 12 years in the foreign exchange and commodities markets. We don't rely on retail indicators; we track global bank flows and market liquidity.",
    "about-smc-title": "Smart Money Concepts",
    "about-smc-desc": "Trading based on order blocks, liquidity voids, and market structure breaks.",
    "about-risk-title": "Rigid Risk Management",
    "about-risk-desc": "Max 1% risk per trade. Clear stop loss and multi-target profit zones.",
    "about-model-title": "Gold (XAUUSD) Analysis Model",
    "about-model-desc": "Real-time liquidity grab detection at major psychological levels.",
    "about-model-tag": "Market Analysis",

    // Results
    "results-tagline": "Verified Transparency",
    "results-title": "Recent Trading Results",
    "results-desc": "We post every trade setup we call. Below is our dynamic journal showcasing recent operations.",
    "results-feed": "Live Signal Feed",
    "results-count": "Displaying last 6 high-volume trades",
    "results-note": '<i class="fa-solid fa-lock text-gold"></i> Blue positions are protected (gain visible only for VIPs).',
    "results-disclaimer": '*Past results do not guarantee future returns.',
    
    // Table headers
    "th-date": "Date",
    "th-pair": "Pair",
    "th-type": "Type",
    "th-entry": "Entry",
    "th-sl": "Stop Loss",
    "th-tp": "Take Profit",
    "th-pips": "Pips",
    "th-status": "Status",
    
    // Pricing
    "pricing-tagline": "Pricing Plans",
    "pricing-title": "Affordable Premium Plans",
    "pricing-desc": "Select a pricing package that suits your budget. No hidden fees, instant VIP Telegram access.",
    
    // Pricing Cards
    "plan-m-title": "Monthly VIP",
    "plan-m-sub": "60% OFF Promo",
    "plan-m-billing": "USD / month",
    "plan-m-savings": "Save 60% (Was $300 USD)",
    "plan-m-feat-1": "All XAUUSD & Forex Signals",
    "plan-m-feat-2": "Average 3-5 signals per day",
    "plan-m-feat-3": "Full risk management analysis",
    "plan-m-feat-4": "Direct VIP Telegram access",
    "plan-m-feat-5": "24/7 client support team",
    "plan-m-btn": "Select Monthly",
    "plan-m-value": "60% OFF Promo",
    
    "plan-l-title": "Permanent VIP",
    "plan-l-sub": "60% OFF Promo",
    "plan-l-billing": "USD / one-time payment",
    "plan-l-savings": "Save 60% (Was $750 USD)",
    "plan-l-feat-1": "All XAUUSD & Forex Signals",
    "plan-l-feat-2": "Average 3-5 signals per day",
    "plan-l-feat-3": "Full risk management analysis",
    "plan-l-feat-4": "Direct VIP Telegram access",
    "plan-l-feat-5": "24/7 client support team",
    "plan-l-btn": "Select Permanent",
    "plan-l-value": "60% OFF Promo",

    // Testimonials
    "test-tagline": "Reviews",
    "test-title": "What Our Members Say",
    "test-desc": "Real feedback from active members who changed their trading career with us.",
    "test-1-text": '"The Gold signals are insane. Yesterday we caught 180 pips on the London Session liquidity sweep. Very accurate and precise entry calls."',
    "test-1-user": "Juan Delgado",
    "test-1-status": "VIP Member since July 2026",
    "test-2-text": '"I love their transparency. They show the losing trades too, but their win rate is so solid that the balance sheet is always green."',
    "test-2-user": "Sandra M.",
    "test-2-status": "VIP Member since July 2026",
    "test-3-text": '"Binance Pay option made it so easy to pay in USDT. Got my Discord link instantly. Totally recommend the Annual VIP package."',
    "test-3-user": "Lars K.",
    "test-3-status": "VIP Member since July 2026",
    "test-4-text": '"It\'s the best signals channel I\'ve tried. The 1% risk management has helped me protect my account and grow steadily."',
    "test-4-user": "Sofia Rodriguez",
    "test-4-status": "VIP Member since July 2026",
    "test-5-text": '"The detailed technical analysis they send before each trade is a gold mine. I\'ve learned so much in the VIP community."',
    "test-5-user": "Mateo Gomez",
    "test-5-status": "VIP Member since July 2026",
    "test-6-text": '"The support is excellent and the XAUUSD setups are very clean. I finally found consistency in my trading."',
    "test-6-user": "Camila Torres",
    "test-6-status": "VIP Member since July 2026",
    "test-7-text": '"Incredible community. The signals are not just for copying, they explain the reason behind every entry using Smart Money Concepts."',
    "test-7-user": "Daniel Silva",
    "test-7-status": "VIP Member since July 2026",
    "test-8-text": '"I had lost money in other channels before, but here transparency is real. Very happy with this month\'s profits."',
    "test-8-user": "Elena Rossi",
    "test-8-status": "VIP Member since July 2026",

    // FAQ
    "faq-tagline": "Questions",
    "faq-title": "Frequently Asked Questions",
    "faq-q1": "How do I receive the signals?",
    "faq-a1": "All signals are broadcast live through our private VIP Telegram channel and VIP Discord. We provide entry price, stop loss, and three take profit targets.",
    "faq-q2": "What forms of payment do you support?",
    "faq-a2": "We officially support Binance Pay and direct USDT transfers via TRC20 and BSC networks. This allows for instant, secure, and low-fee transactions.",
    "faq-q3": "Can I cancel my subscription?",
    "faq-a3": "Yes, subscription models can be canceled at any time. Direct crypto payments do not auto-renew; you will just pay again if you want to extend your VIP access.",

    // Contact Us
    "contact-tagline": "Get In Touch",
    "contact-title": "Contact Us",
    "contact-desc": "Have any questions? Our customer success team is ready to answer your inquiries.",
    "label-name": "Full Name",
    "label-email": "Email Address",
    "label-subject": "Subject",
    "label-message": "Message",
    "btn-send-message": "Send Message",
    "contact-success-msg": '<i class="fa-solid fa-circle-check mr-2"></i> Message sent successfully! We will get back to you shortly.',

    // Footer
    "footer-copyright": "© 2026 Gold Edge Signals. All rights reserved. Trading forex and crypto assets carries high risk.",

    // Checkout Modal
    "modal-checkout-title": "Scan to Pay",
    "modal-amount-prompt": "Exact amount to send:",
    "modal-verify-btn": "Verify Payment (Simulate)",
    "modal-loading": "Verifying blockchain transaction...",
    "modal-connecting": "Confirming transaction...",
    "modal-steps-activation": "Steps to activate access:",
    "modal-step-1": "1. Click the button below to join our Telegram channel.",
    "modal-step-2-label": "2. Our VIP bot will verify your transaction ID.",
    "modal-step-3": "3. You will receive your VIP access instantly.",
    "modal-telegram-btn": "Join VIP Telegram"
  }
};

let currentLanguage = 'es';

// Language switching logic
function initLanguage() {
  const savedLang = localStorage.getItem('preferredLanguage') || 'es';
  changeLanguage(savedLang);
}

function changeLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('preferredLanguage', lang);
  document.documentElement.lang = lang;

  // Apply translations to all matching IDs
  const dict = translations[lang];
  if (dict) {
    Object.keys(dict).forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = dict[id];
        } else {
          el.innerHTML = dict[id];
        }
      }
    });
  }

  // Update active status UI classes for switcher buttons
  updateLanguageButtons(lang);

  // Re-render table since headers and status badges are language dependent
  renderResultsTable();
}

function updateLanguageButtons(lang) {
  const esBtn = document.getElementById('btn-lang-es');
  const enBtn = document.getElementById('btn-lang-en');
  const mobileEsBtn = document.getElementById('mobile-btn-lang-es');
  const mobileEnBtn = document.getElementById('mobile-btn-lang-en');

  const activeClasses = ['text-gold', 'font-bold', 'scale-105'];
  const inactiveClasses = ['text-dark-textMuted', 'font-medium'];

  if (lang === 'es') {
    if (esBtn) {
      esBtn.classList.add(...activeClasses);
      esBtn.classList.remove(...inactiveClasses);
    }
    if (enBtn) {
      enBtn.classList.remove(...activeClasses);
      enBtn.classList.add(...inactiveClasses);
    }
    if (mobileEsBtn) {
      mobileEsBtn.classList.add('text-gold', 'font-bold');
      mobileEsBtn.classList.remove('text-dark-textMuted', 'font-medium');
    }
    if (mobileEnBtn) {
      mobileEnBtn.classList.remove('text-gold', 'font-bold');
      mobileEnBtn.classList.add('text-dark-textMuted', 'font-medium');
    }
  } else {
    if (esBtn) {
      esBtn.classList.remove(...activeClasses);
      esBtn.classList.add(...inactiveClasses);
    }
    if (enBtn) {
      enBtn.classList.add(...activeClasses);
      enBtn.classList.remove(...inactiveClasses);
    }
    if (mobileEsBtn) {
      mobileEsBtn.classList.remove('text-gold', 'font-bold');
      mobileEsBtn.classList.add('text-dark-textMuted', 'font-medium');
    }
    if (mobileEnBtn) {
      mobileEnBtn.classList.add('text-gold', 'font-bold');
      mobileEnBtn.classList.remove('text-dark-textMuted', 'font-medium');
    }
  }
}

// Document Ready Setup
document.addEventListener('DOMContentLoaded', () => {
  initLanguage(); // Will invoke renderResultsTable() automatically
  setupFAQ();
  setupMobileMenu();
  setupContactForm();
});

// Render Results Table based on Rules
function renderResultsTable() {
  const tableBody = document.getElementById('results-table-body');
  if (!tableBody) return;

  tableBody.innerHTML = '';

  tradingResults.forEach(row => {
    const tr = document.createElement('tr');
    tr.className = 'border-b border-dark-border/20 hover:bg-dark-card/20 transition-colors duration-150';

    // Rule: Identify blue positions.
    const isBluePosition = row.type === 'BUY';

    // 1. Date Cell
    const tdDate = document.createElement('td');
    tdDate.className = 'py-4 px-6 text-white/80';
    tdDate.textContent = row.date;
    tr.appendChild(tdDate);

    // 2. Pair Cell
    const tdPair = document.createElement('td');
    tdPair.className = 'py-4 px-6 font-bold text-white';
    tdPair.textContent = row.pair;
    tr.appendChild(tdPair);

    // 3. Type Cell (Strict formatting)
    const tdType = document.createElement('td');
    tdType.className = 'py-4 px-6';
    
    const typeBadge = document.createElement('span');
    typeBadge.className = 'px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ';
    
    if (isBluePosition) {
      typeBadge.className += 'bg-blue-500/10 text-blue-400 border border-blue-500/20';
      typeBadge.innerHTML = '<i class="fa-solid fa-arrow-trend-up mr-1 text-[10px]"></i> BUY';
    } else {
      typeBadge.className += 'bg-amber-500/10 text-amber-400 border border-amber-500/20';
      typeBadge.innerHTML = '<i class="fa-solid fa-arrow-trend-down mr-1 text-[10px]"></i> SELL';
    }
    
    tdType.appendChild(typeBadge);
    tr.appendChild(tdType);

    // 4. Entry Cell
    const tdEntry = document.createElement('td');
    tdEntry.className = 'py-4 px-6 text-white/90 font-mono';
    tdEntry.textContent = row.entry;
    tr.appendChild(tdEntry);

    // 5. Stop Loss Cell
    const tdSL = document.createElement('td');
    tdSL.className = 'py-4 px-6 text-white/60 font-mono';
    tdSL.textContent = row.stopLoss;
    tr.appendChild(tdSL);

    // 6. Take Profit Cell
    const tdTP = document.createElement('td');
    tdTP.className = 'py-4 px-6 text-white/90 font-mono';
    tdTP.textContent = row.takeProfit;
    tr.appendChild(tdTP);

    // 7. Pips Cell (Data Rule: For blue positions, hide the numbers representing the gain)
    const tdPips = document.createElement('td');
    tdPips.className = 'py-4 px-6 text-right font-semibold font-mono';
    
    if (isBluePosition) {
      const vipLabel = currentLanguage === 'es' ? 'SÓLO VIP' : 'VIP ONLY';
      tdPips.innerHTML = `
        <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-blue-500/10 text-blue-400 text-xs border border-blue-500/20">
          <i class="fa-solid fa-lock text-[9px]"></i> ${vipLabel}
        </span>
      `;
    } else {
      const isLoss = row.pips.startsWith('-');
      if (isLoss) {
        tdPips.className += ' text-orange-400';
        tdPips.textContent = `${row.pips} pips`;
      } else {
        tdPips.className += ' text-emerald-400';
        tdPips.textContent = `${row.pips} pips`;
      }
    }
    tr.appendChild(tdPips);

    // 8. Status Cell (Strict formatting: SELL positions must not use red even if they are LOSS)
    const tdStatus = document.createElement('td');
    tdStatus.className = 'py-4 px-6 text-center';
    
    const statusBadge = document.createElement('span');
    statusBadge.className = 'px-2.5 py-0.5 rounded text-xs font-bold ';
    
    const winText = currentLanguage === 'es' ? 'GANADA' : 'WIN';
    const lossText = currentLanguage === 'es' ? 'PÉRDIDA' : 'LOSS';

    if (row.status === 'WIN') {
      statusBadge.className += 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20';
      statusBadge.textContent = winText;
    } else {
      if (row.type === 'SELL') {
        statusBadge.className += 'bg-orange-500/10 text-orange-400 border border-orange-500/20';
        statusBadge.textContent = lossText;
      } else {
        statusBadge.className += 'bg-red-500/10 text-red-400 border border-red-500/20';
        statusBadge.textContent = lossText;
      }
    }
    
    tdStatus.appendChild(statusBadge);
    tr.appendChild(tdStatus);

    tableBody.appendChild(tr);
  });
}

// FAQ Accordion Toggle Logic
function setupFAQ() {
  const faqButtons = document.querySelectorAll('.faq-btn');
  
  faqButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      const icon = btn.querySelector('i');
      
      // Close other FAQs
      faqButtons.forEach(otherBtn => {
        if (otherBtn !== btn) {
          otherBtn.nextElementSibling.style.maxHeight = null;
          otherBtn.querySelector('i').classList.remove('rotate-180');
        }
      });

      // Toggle current FAQ
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        icon.classList.remove('rotate-180');
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        icon.classList.add('rotate-180');
      }
    });
  });
}

// Mobile Responsive Menu Toggle
function setupMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const links = document.querySelectorAll('.mobile-link');

  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
    });
  });
}

// Contact Form Simulation
function setupContactForm() {
  const form = document.getElementById('contact-form');
  const successAlert = document.getElementById('contact-success');
  
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simulate submission
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = currentLanguage === 'es' ? 'Enviando...' : 'Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
      form.reset();
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      
      // Show success
      successAlert.classList.remove('hidden');
      setTimeout(() => {
        successAlert.classList.add('hidden');
      }, 5000);
    }, 1500);
  });
}

// --- CHECKOUT & PAYMENT SYSTEM INTEGRATION ---

let currentPlanId = null;
let currentTransactionData = null;

// Initiate Payment Process (Triggers on Plan Select Button)
function initiatePayment(planId) {
  currentPlanId = planId;
  
  const planNames = {
    monthly: {
      es: { name: 'Plan VIP Mensual', price: '120.00' },
      en: { name: 'Monthly VIP Plan', price: '120.00' }
    },
    lifetime: {
      es: { name: 'Plan VIP Permanente', price: '300.00' },
      en: { name: 'Permanent VIP Plan', price: '300.00' }
    }
  };
  
  const selected = planNames[planId] ? planNames[planId][currentLanguage] : planNames.monthly[currentLanguage];
  
  const displayEl = document.getElementById('modal-amount-display');
  if (displayEl) {
    displayEl.textContent = parseInt(selected.price);
  }
  
  // Reset and display modal
  const modal = document.getElementById('payment-modal');
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden'; // Disable background scroll
  
  // Show Step 1: Scan & Pay
  showModalStep('payment-step-1');
}

// Close Payment Modal
function closePaymentModal() {
  const modal = document.getElementById('payment-modal');
  modal.classList.add('hidden');
  document.body.style.overflow = ''; // Restore scroll
}

// Navigation between modal screens
function showModalStep(stepId) {
  const steps = [
    'payment-step-1',
    'payment-step-loading',
    'payment-step-binance',
    'payment-step-usdt',
    'payment-step-success'
  ];
  
  steps.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      if (id === stepId) {
        el.classList.remove('hidden');
      } else {
        el.classList.add('hidden');
      }
    }
  });
}

// Go back to payment method screen
function backToStep1() {
  showModalStep('payment-step-1');
}

// Handle payment method click
function selectPaymentMethod(method) {
  // Update loading texts dynamically based on language
  const loadingTitle = document.getElementById('modal-loading');
  const connectingDesc = document.getElementById('modal-connecting');
  if (loadingTitle && connectingDesc) {
    loadingTitle.textContent = currentLanguage === 'es' ? 'Generando detalles de pago seguro...' : 'Generating secure payment details...';
    connectingDesc.textContent = currentLanguage === 'es' ? 'Conectando con la pasarela de pagos...' : 'Connecting to payment gateway...';
  }

  showModalStep('payment-step-loading');
  
  // Call local Express API to simulate checkout generation
  fetch('http://localhost:3000/api/pay', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      planId: currentPlanId,
      paymentMethod: method
    })
  })
  .then(res => {
    if (!res.ok) throw new Error('API Error');
    return res.json();
  })
  .then(data => {
    handlePaymentResponse(data, method);
  })
  .catch(err => {
    console.warn("Backend server unavailable. Generating simulated offline response.", err);
    // Fallback response for offline/static demo stability
    const mockTx = 'TXN-' + Math.floor(100000000 + Math.random() * 900000000);
    const mockPrices = { monthly: 120.00, lifetime: 300.00 };
    const mockPrice = mockPrices[currentPlanId] || 120.00;
    
    const fallbackData = {
      success: true,
      transactionId: mockTx,
      plan: currentPlanId,
      amount: mockPrice,
      currency: 'USDT',
      paymentMethod: method,
      checkoutUrl: `https://pay.binance.com/checkout?id=fallback-${mockTx}`
    };
    
    if (method === 'usdt_trc20') {
      const address = 'TX1a2B3c4D5e6F7g8H9i0J1k2L3m4N5o6P';
      fallbackData.walletAddress = address;
      fallbackData.qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(address)}`;
    } else if (method === 'usdt_bsc') {
      const address = '0x71C7656EC7ab88b098defB751B7401B5f6d8976F';
      fallbackData.walletAddress = address;
      fallbackData.qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(address)}`;
    }
    
    setTimeout(() => {
      handlePaymentResponse(fallbackData, method);
    }, 800);
  });
}

// Display API Response inside the modal steps
// Display API Response inside the modal steps
function handlePaymentResponse(data, method) {
  currentTransactionData = data;
  
  if (method === 'binance_pay') {
    // Populate Binance Pay elements
    document.getElementById('binance-tx-id').textContent = data.transactionId;
    document.getElementById('binance-amount').textContent = data.amount.toFixed(2);
    document.getElementById('binance-checkout-btn').href = data.checkoutUrl;
    
    showModalStep('payment-step-binance');
  } else {
    // Populate USDT TRC20 / BSC elements
    const isTrc20 = method === 'usdt_trc20';
    document.getElementById('usdt-network-name').textContent = isTrc20 ? 'TRC20' : 'BSC (BEP20)';
    document.getElementById('usdt-wallet-address').value = data.walletAddress;
    document.getElementById('usdt-amount').textContent = data.amount.toFixed(2);
    document.getElementById('usdt-tx-id').textContent = data.transactionId;
    document.getElementById('usdt-qr-img').src = data.qrCodeUrl;
    
    // Hide copied tooltip
    document.getElementById('copy-tooltip').classList.add('hidden');
    
    showModalStep('payment-step-usdt');
  }
}

// Copy USDT Wallet Address to Clipboard
function copyWalletAddress() {
  const addressInput = document.getElementById('usdt-wallet-address');
  addressInput.select();
  addressInput.setSelectionRange(0, 99999); // Mobile compatibility
  
  navigator.clipboard.writeText(addressInput.value)
    .then(() => {
      const tooltip = document.getElementById('copy-tooltip');
      const text = currentLanguage === 'es' ? 'Dirección copiada al portapapeles' : 'Address copied to clipboard';
      tooltip.textContent = text;
      tooltip.classList.remove('hidden');
      setTimeout(() => {
        tooltip.classList.add('hidden');
      }, 2000);
    })
    .catch(err => {
      console.error('Failed to copy text: ', err);
    });
}

// Simulate QR Payment Verification (Completes the flow)
function simulateQrPaymentVerification() {
  const isEs = currentLanguage === 'es';
  const loadingText = isEs ? 'Verificando pago en la blockchain...' : 'Verifying blockchain transaction...';
  const connectingText = isEs ? 'Confirmando transacción...' : 'Confirming transaction...';
  
  const loadingEl = document.getElementById('modal-loading');
  const connectingEl = document.getElementById('modal-connecting');
  if (loadingEl) loadingEl.textContent = loadingText;
  if (connectingEl) connectingEl.textContent = connectingText;
  
  // Show quick processing state
  showModalStep('payment-step-loading');
  
  // Generate random transaction ID for success display
  const mockTx = 'TXN-' + Math.floor(100000000 + Math.random() * 900000000);
  const txEl = document.getElementById('success-tx-id');
  if (txEl) txEl.textContent = mockTx;
  
  setTimeout(() => {
    showModalStep('payment-step-success');
  }, 1500);
}
