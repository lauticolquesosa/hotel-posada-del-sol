/* Hotel Posada del Sol — lógica del sitio (vanilla JS) */
(function () {
  'use strict';

  var $ = function (id) { return document.getElementById(id); };
  var root = $('rootRef');
  if (!root) return;

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var lang = 'es';
  var origText = {};

  /* ---------- i18n (English dictionary) ---------- */
  var EN = {
    'nav.rooms': 'Rooms', 'nav.services': 'Services', 'nav.restaurant': 'Restaurant', 'nav.location': 'Location', 'nav.gallery': 'Gallery', 'nav.reviews': 'Reviews',
    'cta.book': 'Book direct', 'sticky.label': 'Book direct and pay less · no commissions', 'sticky.cta': 'Check availability',
    'hero.badge': '8.1 Very good · +2,000 reviews',
    'hero.title': 'In the heart of Salta, a step from everything.',
    'hero.sub': '3★ hotel in the historic centre. Book direct with us: better price, no middlemen.',
    'book.checkin': 'Check-in', 'book.checkout': 'Check-out', 'book.guests': 'Guests', 'book.cta': 'Check availability',
    'book.g1': '1 guest', 'book.g2': '2 guests', 'book.g3': '3 guests', 'book.g4': '4 guests', 'book.g5': '5+ guests',
    'ben1.t': 'Best price, no commissions', 'ben1.d': 'Booking direct saves you the platform commission.',
    'ben2.t': 'In the historic centre', 'ben2.d': 'Steps from the Alberdi pedestrian street and Plaza 9 de Julio — all on foot.',
    'ben3.t': 'Direct booking via WhatsApp', 'ben3.d': 'Real people answer, not a form. Book in one click.',
    'ben4.t': 'Buffet breakfast included', 'ben4.d': 'Buffet every morning at the Bávaro restaurant.',
    'loc.kicker': 'Our greatest asset', 'loc.title': 'The best starting point to explore Salta.',
    'loc.body': 'From the door, the historic city is yours. Two minutes on foot and you are on the pedestrian street; the rest of Salta starts right there.',
    'loc.p1': 'Alberdi pedestrian st.', 'loc.p2': 'Cathedral & MAAM', 'loc.p3': 'San Bernardo Cable Car', 'loc.p4': 'Balcarce nightlife', 'loc.p5': 'Salta Airport',
    'loc.cap1': 'Alvarado 646', 'loc.cap2': 'Historic centre of Salta · CP 4400',
    'rooms.kicker': 'Rooms', 'rooms.title': 'Warm spaces for a real rest.',
    'rooms.r1.name': 'Single', 'rooms.r1.cap': '1–2 guests', 'rooms.r1.desc': 'One double bed or two singles. Minibar, safe and private bathroom with hair dryer.',
    'rooms.r2.name': 'Twin Double', 'rooms.r2.cap': '2 guests', 'rooms.r2.desc': 'Two single beds with a work desk. Ideal for business trips.',
    'rooms.r3.name': 'Matrimonial Double', 'rooms.r3.cap': '2 guests', 'rooms.r3.desc': 'Double bed with desk, comfortable and bright for a couple.',
    'rooms.r4.name': 'Suite', 'rooms.r4.cap': '2 (+1) guests', 'rooms.r4.badge': 'More space', 'rooms.r4.desc': 'Queen bed 1.80 × 2 m with anteroom, 32" LCD, electric kettle and amenities. Extra bed option.',
    'rooms.r5.name': 'Quadruple', 'rooms.r5.cap': '4 (+1) guests', 'rooms.r5.desc': 'Two connected rooms (double + twin). Two units adapted for wheelchair access.',
    'amen.ac': 'A/C · Heating', 'amen.bath': 'Private bath', 'amen.tv': 'Cable TV', 'amen.minibar': 'Minibar', 'amen.desk': 'Work desk',
    'amen.anteroom': 'Anteroom', 'amen.lcd32': '32" LCD', 'amen.amenities': 'Amenities', 'amen.tworooms': '2 rooms', 'amen.access': 'Accessible',
    'rooms.book': 'Check availability',
    'serv.kicker': 'Services', 'serv.title': 'Everything you need for your stay.', 'serv.sub': 'Comforts designed so you only have to enjoy Salta.',
    'serv.s1': 'Air conditioning & heating', 'serv.s2': 'Wi-Fi throughout the hotel', 'serv.s3': 'Cable LCD TV', 'serv.s4': 'Buffet breakfast included',
    'serv.s5': '24-hour reception', 'serv.s6': 'Parking (extra fee)', 'serv.s7': 'Laundry (extra fee)', 'serv.s8': 'Digital safe',
    'serv.s9': 'Luggage storage', 'serv.s10': 'PC with internet · IDD/NDD', 'serv.s11': 'Wheelchair accessibility', 'serv.s12': 'Cribs on request',
    'rest.kicker': 'Bávaro Restaurant', 'rest.title': 'Flavours of the north and international cuisine.',
    'rest.body': 'On the ground floor of the hotel, the Bávaro offers regional specialities — empanadas, humitas and locro — plus international cuisine. À la carte, a weekday lunch set menu, half board and packed meals for excursions.',
    'rest.breakfast': 'Buffet breakfast included every morning.',
    'rest.cta': 'Book your stay',
    'gal.kicker': 'Gallery', 'gal.title': 'What you see is what you get.', 'gal.sub': 'Our own honest photos of our spaces.',
    'rev.stat1': 'Very good on Booking', 'rev.stat2': 'Real reviews', 'rev.stat3': 'Reception every day',
    'rev.q1': '"Unbeatable location, everything steps from the pedestrian street. The staff super attentive and the breakfast very complete."',
    'rev.q2': '"We booked directly and it was super fast. Better price than the platforms. We would come back without hesitation."',
    'rev.q3': '"Perfect for exploring Salta on foot. Comfortable, clean room and very friendly 24-hour reception."',
    'contact.kicker': 'How to get here', 'contact.title': 'We are waiting for you in central Salta.',
    'contact.addr.l': 'Address', 'contact.tel.l': 'Phone', 'contact.mail.l': 'Email', 'contact.rec.l': 'Reception', 'contact.rec.v': 'Open 24 hours', 'contact.cta': 'Message us on WhatsApp',
    'final.title': 'Book direct and pay less.', 'final.sub': 'The same hotel, better price: without the platform commission.',
    'final.cta1': 'Book direct', 'final.cta2': ' WhatsApp',
    'foot.tag': '3★ hotel in the historic heart of Salta, on Alvarado 646, steps from the pedestrian street and Plaza 9 de Julio.',
    'foot.group': 'Part of the group: Marilian Hotel · Apart Marilian',
    'foot.contact': 'Contact', 'foot.explore': 'Explore', 'foot.rights': 'All rights reserved.',
    'float.cta': 'Book direct'
  };

  // capture original ES text
  root.querySelectorAll('[data-i18n]').forEach(function (el) {
    var k = el.getAttribute('data-i18n');
    if (origText[k] == null) origText[k] = el.textContent;
  });

  function setLang(l) {
    lang = l;
    document.documentElement.lang = l;
    root.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      if (l === 'en') {
        if (EN[k] != null) el.textContent = EN[k];
      } else if (origText[k] != null) {
        el.textContent = origText[k];
      }
    });
    var on = { background: '#C0673B', color: '#FBF8F3' };
    var off = { background: 'transparent', color: 'inherit' };
    var es = $('langEsBtn'), en = $('langEnBtn');
    if (es && en) {
      Object.assign(es.style, l === 'es' ? on : off);
      Object.assign(en.style, l === 'en' ? on : off);
    }
  }

  /* ---------- mobile menu ---------- */
  function toggleMenu() {
    var m = $('mobileMenu');
    if (m) m.style.display = m.style.display === 'flex' ? 'none' : 'flex';
  }
  function closeMenu() {
    var m = $('mobileMenu');
    if (m) m.style.display = 'none';
  }

  /* ---------- WhatsApp booking ---------- */
  function buildWa(room) {
    var ci = $('ciRef') && $('ciRef').value;
    var co = $('coRef') && $('coRef').value;
    var g = ($('guestsRef') && $('guestsRef').value) || '2';
    var en = lang === 'en';
    var fmt = function (d) {
      if (!d) return en ? '(to confirm)' : '(a confirmar)';
      var parts = d.split('-');
      return parts[2] + '/' + parts[1] + '/' + parts[0];
    };
    var msg;
    if (en) {
      msg = "Hi! I'd like to book " + (room ? 'the ' + room : 'a room') + ' at Posada del Sol from ' + fmt(ci) + ' to ' + fmt(co) + ' for ' + g + ' guest(s).';
    } else {
      msg = 'Hola! Quiero reservar ' + (room ? room : 'una habitación') + ' en Posada del Sol del ' + fmt(ci) + ' al ' + fmt(co) + ' para ' + g + ' huésped(es).';
    }
    return 'https://wa.me/543875586105?text=' + encodeURIComponent(msg);
  }

  function validate() {
    var ci = $('ciRef') && $('ciRef').value;
    var co = $('coRef') && $('coRef').value;
    if (ci && co && new Date(co) <= new Date(ci)) {
      var el = $('coRef');
      el.style.borderColor = '#C0673B';
      if (el.setCustomValidity) el.setCustomValidity(lang === 'en' ? 'Check-out must be after check-in' : 'El check-out debe ser posterior al check-in');
      if (el.reportValidity) el.reportValidity();
      setTimeout(function () {
        if (el.setCustomValidity) el.setCustomValidity('');
        el.style.borderColor = '#E5DCCF';
      }, 2500);
      return false;
    }
    return true;
  }

  function submitHero(ev) {
    ev.preventDefault();
    if (!validate()) return;
    window.open(buildWa(lang === 'en' ? 'a room' : 'una habitación'), '_blank');
  }

  function bookRoom(ev) {
    var btn = ev.currentTarget;
    var room = lang === 'en' ? (btn.getAttribute('data-room-en') || btn.getAttribute('data-room')) : btn.getAttribute('data-room');
    if (!validate()) return;
    window.open(buildWa(room), '_blank');
  }

  /* ---------- lightbox ---------- */
  function openLightbox(ev) {
    var btn = ev.currentTarget;
    var src = btn.getAttribute('data-full');
    var lb = $('lightbox'), img = $('lightboxImg');
    if (!lb || !img || !src) return;
    img.src = src;
    lb.style.display = 'flex';
    requestAnimationFrame(function () {
      lb.style.opacity = '1';
      img.style.transform = 'scale(1)';
    });
  }
  function closeLightbox() {
    var lb = $('lightbox'), img = $('lightboxImg');
    if (!lb) return;
    lb.style.opacity = '0';
    if (img) img.style.transform = 'scale(.96)';
    setTimeout(function () { lb.style.display = 'none'; }, 300);
  }

  /* ---------- responsive ---------- */
  function applyResponsive() {
    var mobile = window.innerWidth <= 980;
    var nav = $('navRef'), burger = $('burgerBtn');
    var mbar = $('mobileBar'), fbtn = $('floatBtn');
    var form = $('heroForm');
    if (nav) nav.style.display = mobile ? 'none' : 'flex';
    if (burger) burger.style.display = mobile ? 'flex' : 'none';
    if (mbar) mbar.style.display = mobile ? 'flex' : 'none';
    if (fbtn) fbtn.style.display = mobile ? 'none' : 'inline-flex';
    var headCta = $('headerRef') && $('headerRef').querySelector('a[data-cta]');
    if (headCta) headCta.style.display = mobile ? 'none' : 'inline-flex';
    if (form) {
      form.style.gridTemplateColumns = mobile ? '1fr 1fr' : '1fr 1fr 1fr auto';
      form.style.bottom = mobile ? '70px' : '46px';
    }
    root.querySelectorAll('[data-grid]').forEach(function (g) {
      g.style.gridTemplateColumns = mobile ? (g.getAttribute('data-grid-m') || '1fr') : g.getAttribute('data-grid');
    });
  }

  /* ---------- scroll reveal ---------- */
  function setupReveal() {
    var reveals = root.querySelectorAll('[data-reveal]');
    if (reduce) {
      reveals.forEach(function (el) { el.style.opacity = '1'; el.style.transform = 'none'; });
      return;
    }
    reveals.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity .8s cubic-bezier(.16,1,.3,1), transform .8s cubic-bezier(.16,1,.3,1)';
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          var d = en.target.getAttribute('data-reveal');
          en.target.style.transitionDelay = (d && d !== '') ? d : '0ms';
          en.target.style.opacity = '1';
          en.target.style.transform = 'none';
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* ---------- image reveal on scroll (wipe + zoom, como la web real) ---------- */
  function setupImgReveal() {
    var imgs = root.querySelectorAll('.reveal-img');
    if (!imgs.length) return;
    if (reduce || !('IntersectionObserver' in window)) {
      imgs.forEach(function (el) { el.classList.add('is-revealed'); });
      return;
    }
    // red de seguridad: si algo falla, revelar todo al cargar la página
    window.addEventListener('load', function () {
      setTimeout(function () {
        imgs.forEach(function (el) {
          var r = el.getBoundingClientRect();
          if (r.top < window.innerHeight && r.bottom > 0) el.classList.add('is-revealed');
        });
      }, 1200);
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('is-revealed');
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.2, rootMargin: '0px 0px -6% 0px' });
    imgs.forEach(function (el) { io.observe(el); });
  }

  /* ---------- counters ---------- */
  function setupCounters() {
    var counters = root.querySelectorAll('[data-count]');
    if (!counters.length) return;
    var animateCount = function (el) {
      var target = parseFloat(el.getAttribute('data-count'));
      var dec = parseInt(el.getAttribute('data-decimals') || '0', 10);
      var fmtNum = function (v) {
        return v.toLocaleString('es-AR', { minimumFractionDigits: dec, maximumFractionDigits: dec });
      };
      if (reduce) { el.textContent = fmtNum(target); return; }
      var dur = 1600, start = performance.now();
      var step = function (now) {
        var p = Math.min(1, (now - start) / dur);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = fmtNum(target * eased);
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = fmtNum(target);
      };
      requestAnimationFrame(step);
    };
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { animateCount(en.target); cio.unobserve(en.target); }
      });
    }, { threshold: 0.5 });
    counters.forEach(function (c) { cio.observe(c); });
  }

  /* ---------- header + sticky bar + parallax ---------- */
  function setupScroll() {
    var header = $('headerRef');
    var sticky = $('stickyBar');
    var logoImg = $('logoImg');
    var langWrap = $('langWrap');
    var burger = $('burgerBtn');
    var navEls = $('navRef') ? $('navRef').querySelectorAll('a') : [];
    var parallaxEls = root.querySelectorAll('[data-parallax]');
    var ticking = false;

    function onScroll() {
      var y = window.scrollY;
      var solid = y > 60;
      if (header) {
        header.style.background = solid ? 'rgba(246,241,233,.92)' : 'transparent';
        header.style.boxShadow = solid ? '0 4px 24px rgba(42,38,34,.08)' : 'none';
        header.style.backdropFilter = solid ? 'blur(10px)' : 'none';
        header.style.webkitBackdropFilter = solid ? 'blur(10px)' : 'none';
        header.style.paddingTop = solid ? '12px' : '18px';
        header.style.paddingBottom = solid ? '12px' : '18px';
        header.style.color = solid ? '#2A2622' : '#FBF8F3';
      }
      if (logoImg && logoImg.dataset.solid !== String(solid)) {
        logoImg.src = solid ? 'assets/logo-dark.png' : 'assets/logo-light.png';
        logoImg.dataset.solid = String(solid);
      }
      if (langWrap) {
        langWrap.style.background = solid ? '#F6F1E9' : 'rgba(255,255,255,.14)';
        langWrap.style.borderColor = solid ? '#E5DCCF' : 'rgba(255,255,255,.25)';
      }
      navEls.forEach(function (a) { a.style.color = solid ? '#2A2622' : '#FBF8F3'; });
      if (burger) burger.style.color = solid ? '#2A2622' : '#FBF8F3';
      if (sticky) {
        var past = y > window.innerHeight * 0.92;
        sticky.style.transform = past ? 'translateY(0)' : 'translateY(-120%)';
      }
      if (!reduce) {
        parallaxEls.forEach(function (el) {
          var r = el.parentElement.getBoundingClientRect();
          var speed = parseFloat(el.getAttribute('data-parallax')) || 0.1;
          var off = (r.top + r.height / 2 - window.innerHeight / 2) * -speed;
          el.style.transform = 'translate3d(0,' + off.toFixed(1) + 'px,0)';
        });
      }
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
    }, { passive: true });
    onScroll();
  }

  /* ---------- generic hover / focus from data attributes ---------- */
  function parseDecls(css) {
    var out = [];
    css.split(';').forEach(function (decl) {
      var i = decl.indexOf(':');
      if (i < 0) return;
      var prop = decl.slice(0, i).trim();
      var val = decl.slice(i + 1).trim();
      if (prop) out.push([prop, val]);
    });
    return out;
  }

  function setupHover() {
    root.querySelectorAll('[data-hover]').forEach(function (el) {
      var decls = parseDecls(el.getAttribute('data-hover'));
      el.addEventListener('mouseenter', function () {
        decls.forEach(function (d) { el.style.setProperty(d[0], d[1]); });
      });
      el.addEventListener('mouseleave', function () {
        decls.forEach(function (d) { el.style.removeProperty(d[0]); });
      });
    });
  }

  function setupFocus() {
    root.querySelectorAll('[data-focus]').forEach(function (el) {
      var decls = parseDecls(el.getAttribute('data-focus'));
      el.addEventListener('focus', function () {
        decls.forEach(function (d) { el.style.setProperty(d[0], d[1]); });
      });
      el.addEventListener('blur', function () {
        decls.forEach(function (d) { el.style.removeProperty(d[0]); });
      });
    });
  }

  /* ---------- wire actions ---------- */
  var actions = {
    setLangEs: function () { setLang('es'); },
    setLangEn: function () { setLang('en'); },
    toggleMenu: toggleMenu,
    closeMenu: closeMenu,
    bookRoom: bookRoom,
    openLightbox: openLightbox,
    closeLightbox: closeLightbox
  };

  function wireActions() {
    root.querySelectorAll('[data-action]').forEach(function (el) {
      var name = el.getAttribute('data-action');
      var fn = actions[name];
      if (fn) el.addEventListener('click', fn);
    });
    var form = $('heroForm');
    if (form) form.addEventListener('submit', submitHero);
  }

  /* ---------- init ---------- */
  function init() {
    document.documentElement.classList.add('js-anim');
    if ($('guestsRef')) $('guestsRef').value = '2';
    wireActions();
    setupHover();
    setupFocus();
    setupReveal();
    setupImgReveal();
    setupCounters();
    setupScroll();
    applyResponsive();
    window.addEventListener('resize', applyResponsive);
    window.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { closeLightbox(); closeMenu(); }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
