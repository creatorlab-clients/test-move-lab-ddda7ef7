/* ═══════════════════════════════════════════════════════════════
   template-danza-002 — Move Lab
   Dark Urban · creative-dance-bold scroll · 151 frames · multi-page · pt-BR
   ═══════════════════════════════════════════════════════════════ */

// ── Vercel Blob CDN frames ─────────────────────────────────────
var FRAME_PATH   = 'https://8ispuxmgjxgu2r5q.public.blob.vercel-storage.com/templates/danza-002/frames/';
var FRAME_PREFIX = 'frame_';
var FRAME_PAD    = 4;
var FRAME_EXT    = '.webp';
var FRAME_COUNT  = 151;  // creative-dance-bold — HARD

// ── Image fallback ─────────────────────────────────────────────
window.__imgFallback = function (img, label) {
  var w = img.naturalWidth  || 600;
  var h = img.naturalHeight || 400;
  var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + w + '" height="' + h
    + '" viewBox="0 0 ' + w + ' ' + h + '">'
    + '<defs><linearGradient id="fbg" x1="0" y1="0" x2="1" y2="1">'
    + '<stop offset="0%" stop-color="#141414"/>'
    + '<stop offset="100%" stop-color="#0A0A0A"/>'
    + '</linearGradient></defs>'
    + '<rect width="100%" height="100%" fill="url(#fbg)"/>'
    + '<text x="50%" y="50%" font-family="\'Barlow\',sans-serif" font-size="13"'
    + ' font-weight="600" fill="#666666" text-anchor="middle" dominant-baseline="middle">'
    + (label || 'Move Lab')
    + '</text></svg>';
  img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  img.onerror = null;
};

// ── Phosphor Bold icons — stroke-width 16, viewBox 256 ────────
var PHOSPHOR_ICONS = {

  /* ─ Social / UI ─ */
  'WhatsappLogo': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" aria-hidden="true"><path d="M128,24A104,104,0,0,0,36.18,176.88L24.69,215.07a8,8,0,0,0,9.88,9.83l37.88-11.85A104,104,0,1,0,128,24Z"/><path d="M168.73,152c-3.27,6-7.94,10.5-14.14,13.07C144,169,134,168,120.27,160c-10.5-6-19.13-14-26.27-24C87.27,127.07,84,118,88,107.07c2.33-6,6.87-10.53,13-13.73"/><path d="M157.65,120.65l-24-6.32a8,8,0,0,0-8.24,2.57l-8,10.66a44,44,0,0,1-16.84-18.67l10.31-8.87a8,8,0,0,0,2.15-8.43l-7.34-23.36A8,8,0,0,0,98,72H80a8,8,0,0,0-8,8.27A96.09,96.09,0,0,0,168,176a8,8,0,0,0,8-8V150.31A8,8,0,0,0,157.65,120.65Z"/></svg>',

  'InstagramLogo': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" aria-hidden="true"><rect x="32" y="32" width="192" height="192" rx="48"/><circle cx="128" cy="128" r="40"/><circle cx="180" cy="76" r="10" fill="currentColor" stroke="none"/></svg>',

  'ArrowRight': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" aria-hidden="true"><line x1="40" y1="128" x2="216" y2="128"/><polyline points="144,56 216,128 144,200"/></svg>',

  'MapPin': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" aria-hidden="true"><circle cx="128" cy="104" r="32"/><path d="M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z"/></svg>',

  'Clock': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" aria-hidden="true"><circle cx="128" cy="128" r="96"/><polyline points="128,72 128,128 168,168"/></svg>',

  'CheckCircle': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" aria-hidden="true"><polyline points="88,136 112,160 168,104"/><circle cx="128" cy="128" r="96"/></svg>',

  'Star': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" aria-hidden="true"><polygon points="128,24 157.56,86.44 226.11,96.18 177.06,144.04 188.9,212.32 128,180.48 67.1,212.32 78.94,144.04 29.89,96.18 98.44,86.44"/></svg>',

  'Users': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" aria-hidden="true"><circle cx="88" cy="96" r="48"/><path d="M16,216a96,96,0,0,1,192,0"/><path d="M166,54a48,48,0,0,1,0,84"/><path d="M240,216a96,96,0,0,0-80-94.8"/></svg>',

  'ArrowsOut': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" aria-hidden="true"><polyline points="160,48 208,48 208,96"/><polyline points="96,208 48,208 48,160"/><line x1="208" y1="48" x2="152" y2="104"/><line x1="48" y1="208" x2="104" y2="152"/><polyline points="96,48 48,48 48,96"/><polyline points="160,208 208,208 208,160"/><line x1="48" y1="48" x2="104" y2="104"/><line x1="208" y1="208" x2="152" y2="152"/></svg>',

  /* ─ Dance disciplines ─ */
  'Lightning': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" aria-hidden="true"><path d="M96,240l48-112H80L160,16"/></svg>',

  'Wind': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" aria-hidden="true"><path d="M168,96a24,24,0,1,0-24-24"/><path d="M24,128H184a24,24,0,0,1,0,48H160"/><path d="M24,96H136"/></svg>',

  'MusicNote': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" aria-hidden="true"><circle cx="84" cy="176" r="28"/><circle cx="196" cy="152" r="28"/><polyline points="112,176 112,64 224,40 224,152"/><line x1="112" y1="104" x2="224" y2="80"/></svg>',

  'Spiral': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" aria-hidden="true"><path d="M128,80a48,48,0,1,0,48,48"/><path d="M128,32a96,96,0,1,1-96,96"/><path d="M128,128l80-80"/></svg>',

  'CalendarBlank': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" aria-hidden="true"><rect x="32" y="48" width="192" height="176" rx="8"/><line x1="176" y1="24" x2="176" y2="72"/><line x1="80" y1="24" x2="80" y2="72"/><line x1="32" y1="104" x2="224" y2="104"/></svg>',

  'Ticket': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" aria-hidden="true"><path d="M228,136a20,20,0,0,0,0-40V72a8,8,0,0,0-8-8H36a8,8,0,0,0-8,8v24a20,20,0,0,0,0,40v24a8,8,0,0,0,8,8H220a8,8,0,0,0,8-8Z"/><line x1="100" y1="64" x2="100" y2="88"/><line x1="100" y1="116" x2="100" y2="140"/><line x1="100" y1="168" x2="100" y2="192"/></svg>',

  'Trophy': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" aria-hidden="true"><path d="M56,56H24V96c0,19.9,14.3,36.7,32,40"/><path d="M200,56h32V96c0,19.9-14.3,36.7-32,40"/><path d="M56,168c0,0,16,8,72,8s72-8,72-8V56H56Z"/><line x1="128" y1="176" x2="128" y2="208"/><line x1="96" y1="208" x2="160" y2="208"/></svg>',

  'ChevronDown': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" aria-hidden="true"><polyline points="48,96 128,176 208,96"/></svg>'
};

(function () {
  'use strict';

  // ── Inject Phosphor Bold icons ────────────────────────────
  document.querySelectorAll('[data-icon]').forEach(function (el) {
    var name = el.getAttribute('data-icon');
    var svg  = PHOSPHOR_ICONS[name];
    if (svg) el.innerHTML = svg;
  });

  // ── Footer year ──────────────────────────────────────────
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // ── Navbar scroll class ──────────────────────────────────
  var navbar = document.querySelector('.navbar');
  if (navbar) {
    function onNavScroll() {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    }
    window.addEventListener('scroll', onNavScroll, { passive: true });
    onNavScroll();
  }

  // ── Mobile nav toggle ────────────────────────────────────
  var toggle   = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      document.body.classList.toggle('nav-mobile-open', !expanded);
      toggle.setAttribute('aria-label', expanded ? 'Abrir menu' : 'Fechar menu');
    });
    document.addEventListener('click', function (e) {
      if (!navbar.contains(e.target)) {
        navLinks.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Abrir menu');
        document.body.classList.remove('nav-mobile-open');
      }
    });
  }

  // ── Hero sequential fade-up ──────────────────────────────
  var heroFades = document.querySelectorAll('.hero-fade-up');
  if (heroFades.length) {
    setTimeout(function () {
      heroFades.forEach(function (el) { el.classList.add('is-visible'); });
    }, 80);
  }

  // ── IntersectionObserver — fade-up + stagger-card ────────
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.fade-up, .stagger-card').forEach(function (el) {
      observer.observe(el);
    });

    // Scroll overlay text reveal
    var overlayH   = document.querySelector('.scroll-overlay-headline');
    var overlaySub = document.querySelector('.scroll-overlay-sub');
    if (overlayH || overlaySub) {
      var overlayObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            if (overlayH)   overlayH.classList.add('visible');
            if (overlaySub) overlaySub.classList.add('visible');
          }
        });
      }, { threshold: 0.5 });
      var pin = document.querySelector('.scroll-anim-pin');
      if (pin) overlayObserver.observe(pin);
    }
  } else {
    document.querySelectorAll('.fade-up, .stagger-card').forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  // ── Schedule filter tabs (aulas.html) ────────────────────
  var filterTabs = document.querySelectorAll('.filter-tab');
  if (filterTabs.length) {
    filterTabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        filterTabs.forEach(function (t) { t.classList.remove('active'); });
        tab.classList.add('active');
        var style = tab.getAttribute('data-filter');
        var rows  = document.querySelectorAll('.schedule-row');
        rows.forEach(function (row) {
          if (style === 'all' || row.getAttribute('data-style') === style) {
            row.style.display = '';
          } else {
            row.style.display = 'none';
          }
        });
      });
    });
  }

  // ── Scroll animation — canvas COVER mode ─────────────────
  var section = document.querySelector('.scroll-animation');
  var canvas  = document.getElementById('scroll-canvas');
  if (!section || !canvas) return; /* guard — sub-pages without animation */

  var ctx     = canvas.getContext('2d');
  var DPR     = Math.min(window.devicePixelRatio || 1, 2);
  var pinEl   = section.querySelector('.scroll-anim-pin');
  var frames  = new Array(FRAME_COUNT);
  var loaded  = 0;
  var current = -1;

  function pad(n) {
    var s = String(n);
    while (s.length < FRAME_PAD) { s = '0' + s; }
    return s;
  }

  function setupCanvas() {
    var w = pinEl.clientWidth;
    var h = pinEl.clientHeight;
    canvas.width        = w * DPR;
    canvas.height       = h * DPR;
    canvas.style.width  = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  }

  function renderFrame(img) {
    var cw = canvas.width  / DPR;
    var ch = canvas.height / DPR;
    var iw = img.naturalWidth;
    var ih = img.naturalHeight;
    if (!iw || !ih) return;
    var scale = Math.max(cw / iw, ch / ih);  // COVER — obbligatorio
    var sw = iw * scale;
    var sh = ih * scale;
    var sx = (cw - sw) / 2;
    var sy = (ch - sh) / 2;
    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, sx, sy, sw, sh);
  }

  function showFrame(idx) {
    idx = Math.max(0, Math.min(FRAME_COUNT - 1, idx));
    if (idx === current) return;
    current = idx;
    if (frames[idx] && frames[idx].complete && frames[idx].naturalWidth) {
      renderFrame(frames[idx]);
    }
  }

  function onScroll() {
    var rect     = section.getBoundingClientRect();
    var total    = section.offsetHeight - window.innerHeight;
    var progress = Math.max(0, Math.min(1, -rect.top / (total || 1)));
    showFrame(Math.round(progress * (FRAME_COUNT - 1)));
  }

  function loadFrames() {
    for (var i = 0; i < FRAME_COUNT; i++) {
      (function (i) {
        var img   = new Image();
        img.onload = function () {
          loaded++;
          if (loaded === 1) { setupCanvas(); renderFrame(frames[0]); }
          if (i === current) renderFrame(img);
        };
        img.src    = FRAME_PATH + FRAME_PREFIX + pad(i + 1) + FRAME_EXT;
        frames[i]  = img;
      })(i);
    }
  }

  setupCanvas();
  loadFrames();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', function () {
    setupCanvas();
    if (frames[current] && frames[current].complete) renderFrame(frames[current]);
  }, { passive: true });
  onScroll();

})();
