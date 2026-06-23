/* ============================================================
   Hotel Posada del Sol — main.js
   Vanilla JS · sin dependencias
   ============================================================ */
(() => {
  'use strict';

  const doc = document;
  const $ = (sel, ctx = doc) => ctx.querySelector(sel);
  const $$ = (sel, ctx = doc) => Array.from(ctx.querySelectorAll(sel));
  const WHATSAPP = '543875586105';
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  doc.documentElement.classList.add('js');

  /* ---------- i18n ---------- */
  const EN = {
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

  let lang = 'es';
  const original = new Map();
  $$('[data-i18n]').forEach((el) => original.set(el, el.textContent));

  function setLang(next) {
    lang = next;
    doc.documentElement.lang = next;
    $$('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      el.textContent = next === 'en' ? (EN[key] ?? original.get(el)) : original.get(el);
    });
    $$('.lang__btn').forEach((b) => b.classList.toggle('is-active', b.dataset.lang === next));
  }

  $$('.lang__btn').forEach((b) => b.addEventListener('click', () => setLang(b.dataset.lang)));

  /* ---------- Mobile menu ---------- */
  const menu = $('#mobileMenu');
  const burger = $('#burger');
  const openMenu = () => { menu.classList.add('is-open'); burger.setAttribute('aria-expanded', 'true'); doc.body.style.overflow = 'hidden'; };
  const closeMenu = () => { menu.classList.remove('is-open'); burger.setAttribute('aria-expanded', 'false'); doc.body.style.overflow = ''; };
  burger?.addEventListener('click', openMenu);
  $$('[data-close-menu]').forEach((el) => el.addEventListener('click', closeMenu));

  /* ---------- Header solid + sticky bar on scroll ---------- */
  const header = $('#header');
  const stickyBar = $('#stickyBar');
  let ticking = false;
  function onScroll() {
    const y = window.scrollY;
    header.classList.toggle('is-solid', y > 60);
    stickyBar.classList.toggle('is-visible', y > innerHeight * 0.92);
    ticking = false;
  }
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  onScroll();

  /* ---------- Scroll reveal (texto + imágenes) ---------- */
  function setupReveal() {
    const items = $$('.reveal, .reveal-img');
    if (!items.length) return;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('is-in'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add('is-in'); io.unobserve(entry.target); }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
    items.forEach((el) => io.observe(el));
  }

  /* ---------- Counters ---------- */
  function setupCounters() {
    const counters = $$('[data-count]');
    if (!counters.length || !('IntersectionObserver' in window)) {
      counters.forEach((el) => { el.textContent = format(parseFloat(el.dataset.count), +el.dataset.decimals || 0); });
      return;
    }
    const run = (el) => {
      const target = parseFloat(el.dataset.count);
      const dec = +el.dataset.decimals || 0;
      if (reduceMotion) { el.textContent = format(target, dec); return; }
      const dur = 1500, start = performance.now();
      const step = (now) => {
        const p = Math.min(1, (now - start) / dur);
        el.textContent = format(target * (1 - Math.pow(1 - p, 3)), dec);
        if (p < 1) requestAnimationFrame(step); else el.textContent = format(target, dec);
      };
      requestAnimationFrame(step);
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { run(e.target); io.unobserve(e.target); } });
    }, { threshold: 0.5 });
    counters.forEach((el) => io.observe(el));
  }
  // helper visible para el fallback de arriba
  function format(v, d) { return v.toLocaleString('es-AR', { minimumFractionDigits: d, maximumFractionDigits: d }); }

  /* ---------- Lightbox ---------- */
  const lightbox = $('#lightbox');
  const lightboxImg = $('#lightboxImg');
  function openLightbox(src) {
    lightboxImg.src = src;
    lightbox.classList.add('is-open');
    requestAnimationFrame(() => { lightbox.style.opacity = '1'; lightboxImg.style.transform = 'scale(1)'; });
  }
  function closeLightbox() {
    lightbox.style.opacity = '0';
    lightboxImg.style.transform = 'scale(.96)';
    setTimeout(() => lightbox.classList.remove('is-open'), 300);
  }
  $$('[data-lightbox]').forEach((btn) => btn.addEventListener('click', () => openLightbox(btn.dataset.lightbox)));
  lightbox?.addEventListener('click', closeLightbox);

  /* ---------- Reservas por WhatsApp ---------- */
  const checkin = $('#checkin'), checkout = $('#checkout'), guests = $('#guests');
  const fmtDate = (d) => {
    if (!d) return lang === 'en' ? '(to confirm)' : '(a confirmar)';
    const [y, m, day] = d.split('-');
    return `${day}/${m}/${y}`;
  };
  function validate() {
    const ci = checkin.value, co = checkout.value;
    if (ci && co && new Date(co) <= new Date(ci)) {
      checkout.setCustomValidity(lang === 'en' ? 'Check-out must be after check-in' : 'El check-out debe ser posterior al check-in');
      checkout.reportValidity();
      setTimeout(() => checkout.setCustomValidity(''), 2500);
      return false;
    }
    return true;
  }
  function waLink(room) {
    const g = guests.value || '2';
    const msg = lang === 'en'
      ? `Hi! I'd like to book ${room ? 'the ' + room : 'a room'} at Posada del Sol from ${fmtDate(checkin.value)} to ${fmtDate(checkout.value)} for ${g} guest(s).`
      : `Hola! Quiero reservar ${room || 'una habitación'} en Posada del Sol del ${fmtDate(checkin.value)} al ${fmtDate(checkout.value)} para ${g} huésped(es).`;
    return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
  }
  $('#bookingForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validate()) open(waLink(lang === 'en' ? 'a room' : 'una habitación'), '_blank');
  });
  $$('[data-book]').forEach((btn) => btn.addEventListener('click', () => {
    const room = lang === 'en' ? (btn.dataset.roomEn || btn.dataset.room) : btn.dataset.room;
    if (validate()) open(waLink(room), '_blank');
  }));

  /* ---------- Teclado ---------- */
  addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeLightbox(); closeMenu(); }
  });

  /* ---------- Init ---------- */
  setupReveal();
  setupCounters();
})();
