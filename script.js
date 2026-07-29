/* =========================================================
   PODACI O PROIZVODIMA
   Dodavanje novog modela = dodavanje novog objekta u niz.
   ========================================================= */
// Da dodaš pravu fotografiju za proizvod, dodaj polje: image: "images/proizvod-elektricni.jpg"
// Ako polje "image" ne postoji, automatski se prikazuje SVG placeholder.
const PRODUCTS = [
   {
    badge: "DIZEL",
    name: "Dizel viljuškari",
    desc: "Snažna rešenja za spoljni rad i teže terete.",
    features: ["Nosivost do 16 t", "Rad na neravnom terenu", "Visoka izdržljivost"],
    image: "images/dizel-viljuskari.webp",
    link: "dizel.html",
  },
  {
    badge: "ELEKTRIČNI",
    name: "Električni viljuškari",
    desc: "Tihi i ekoloski rad za zatvorene magacinske prostore.",
    features: ["Nosivost 1.0 – 3.5 t", "Bez emisije izduvnih gasova", "Niski troškovi rada"],
    image: "images/elektricni-viljuskari.webp",
    link: "elektricni.html",
  },
  {
    badge: "GAS / LPG",
    name: "Gasni viljuškari",
    desc: "Kombinuju snagu dizela sa čistijim radom u hali.",
    features: ["Nosivost 1.5 – 5 t", "Brzo dopunjavanje goriva", "Rad unutra i spolja"],
    image: "images/gasni-viljuskari.webp",
    link: "gasni.html",
    
  },
  {
    badge: "PALETARI",
    name: "Ručni i el. paletari",
    desc: "Za brzu manipulaciju paletama na kraćim relacijama.",
    features: ["Nosivost do 2.5 t", "Kompaktne dimenzije", "Jednostavno rukovanje"],
    image: "images/elektro-paletari.webp",
    link: "paletari.html",
  },
  {
   badge: "STAKERI",
    name: "Stakeri",
    desc: "Idealno rešenje za podizanje i slaganje robe u skladištima.",
    features: ["Visina dizanja do 6 m", "Optimizovano za uska skladišta", "Precizno pozicioniranje tereta"],
    image: "images/elektro-stakeri.webp",
    link: "stakeri.html",
  },
  {
    badge: "POLOVNI",
    name: "Polovni viljuškari",
    desc: "Pregledane i servisirane mašine provere ispravnosti.",
    features: ["Provereno stanje sati rada", "Povoljnija investicija", "Dostupna garancija"],
    image: "images/polovni-viljuskari.webp",
    link: "polovni.html",
  },
];

// Da dodaš pravu fotografiju, dodaj polje image: "images/galerija-1.jpg" uz caption.
const GALLERY = [
  { caption: "Lonking viljuškari na sajmu", image: "images/Jugosistem-na-sajmu-u-Nisu166.webp" },
  { caption: "Električni viljuškar sa kabinom", image: "images/Jugosistem-na-sajmu-u-Nisu180.webp" },
  { caption: "Lonking Dizel viljuškar", image: "images/Jugosistem na sajmu u Nisu95.webp" },
  { caption: "Elektro-viljuškar-olovna baterija", image: "images/Jugosistem na sajmu u Nisu81.webp" },
  { caption: "Viljuškari na sajmu u Nišu", image: "images/Jugosistem-na-sajmu-u-Nisu166.webp" },
];

/* =========================================================
   RENDER: PROIZVODI
   ========================================================= */
function renderProducts(){
  const grid = document.getElementById('productGrid');
  if(!grid) return;
  grid.innerHTML = PRODUCTS.map(p => `
    <article class="product-card reveal">
      <div class="ph-photo">
        <span class="card-badge">${p.badge}</span>
        ${p.image ? `
        <img src="${p.image}" alt="${p.name}" class="real-photo" loading="lazy">
        ` : `
        <svg viewBox="0 0 200 130" class="ph-illustration" style="width:55%">
          <rect x="70" y="60" width="6" height="45" fill="#FFB300"/>
          <rect x="80" y="55" width="6" height="50" fill="#FFB300"/>
          <rect x="86" y="80" width="24" height="20" fill="#E08E00"/>
          <rect x="110" y="58" width="20" height="28" rx="2" fill="#2A2E33"/>
          <circle cx="92" cy="108" r="8" fill="#0F1113" stroke="#F2F3F5" stroke-width="1.4"/>
          <circle cx="118" cy="108" r="8" fill="#0F1113" stroke="#F2F3F5" stroke-width="1.4"/>
        </svg>
        <span class="ph-caption">FOTOGRAFIJA: ${p.name.toUpperCase()}</span>
        `}
      </div>
      <div class="product-body">
        <h3>${p.name}</h3>
        <p class="desc">${p.desc}</p>
        <ul class="product-features">
          ${p.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
        <div class="product-actions">
          <a href="${p.link}" class="btn btn-amber">Pogledajte modele</a>
          <a href="#kontakt" class="btn btn-outline product-cta" data-model="${p.name}">Pošaljite upit</a>
        </div>
      </div>
    </article>
  `).join('');

  // popuni poruku sa nazivom modela kad se klikne "Posaljite upit"
  grid.querySelectorAll('.product-cta').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const poruka = document.getElementById('poruka');
      if(poruka && !poruka.value){
        poruka.value = `Zanima me model: ${btn.dataset.model}. Molim vas pošaljite mi više informacija.`;
      }
    });
  });
}

/* =========================================================
   RENDER: GALERIJA
   ========================================================= */
function renderGallery(){
  const grid = document.getElementById('galleryGrid');
  if(!grid) return;
  grid.innerHTML = GALLERY.map(g => `
    <div class="gallery-item reveal">
      <div class="ph-photo">
        ${g.image ? `
        <img src="${g.image}" alt="${g.caption}" class="real-photo" loading="lazy">
        ` : `
        <svg viewBox="0 0 100 100" class="ph-illustration" style="width:50%">
          <rect x="40" y="40" width="5" height="35" fill="#FFB300"/>
          <rect x="47" y="36" width="5" height="39" fill="#FFB300"/>
          <rect x="52" y="55" width="16" height="16" fill="#E08E00"/>
          <rect x="68" y="40" width="14" height="20" rx="2" fill="#2A2E33"/>
        </svg>
        `}
      </div>
      <div class="gcap">${g.caption}</div>
    </div>
  `).join('');
}

/* =========================================================
   PREFILL PORUKE IZ URL PARAMETRA (?model=...)
   Koristi se kad korisnik dođe sa stranice kategorije preko
   dugmeta "Pošalji upit" na konkretnom modelu.
   ========================================================= */
function prefillFromQuery(){
  const params = new URLSearchParams(window.location.search);
  const model = params.get('model');
  const poruka = document.getElementById('poruka');
  if(model && poruka){
    poruka.value = `Zanima me model: ${decodeURIComponent(model)}. Molim vas pošaljite mi više informacija i cenu.`;
  }
}

/* =========================================================
   RENDER: MODELI (stranice kategorija)
   Očekuje globalni niz window.MODELS definisan u <script> tagu
   na samoj stranici kategorije, i element #modelGrid.
   ========================================================= */
function renderModels(){
  const grid = document.getElementById('modelGrid');
  if(!grid || !window.MODELS) return;

  grid.innerHTML = window.MODELS.map(m => `
    <article class="model-card reveal">
      <div class="ph-photo">
        ${m.image ? `
        <img src="${m.image}" alt="${m.name}" class="real-photo" loading="lazy">
        ` : `
        <svg viewBox="0 0 200 130" class="ph-illustration" style="width:55%">
          <rect x="70" y="60" width="6" height="45" fill="#FFB300"/>
          <rect x="80" y="55" width="6" height="50" fill="#FFB300"/>
          <rect x="86" y="80" width="24" height="20" fill="#E08E00"/>
          <rect x="110" y="58" width="20" height="28" rx="2" fill="#2A2E33"/>
          <circle cx="92" cy="108" r="8" fill="#0F1113" stroke="#F2F3F5" stroke-width="1.4"/>
          <circle cx="118" cy="108" r="8" fill="#0F1113" stroke="#F2F3F5" stroke-width="1.4"/>
        </svg>
        <span class="ph-caption">FOTOGRAFIJA: ${m.name.toUpperCase()}</span>
        `}
        <span class="price-tag">${m.price}</span>
      </div>
      <div class="product-body">
        <h3>${m.name}</h3>
        <p class="desc">${m.desc}</p>
        <ul class="product-features">
          ${m.specs.map(s => `<li>${s}</li>`).join('')}
        </ul>
        <a href="index.html?model=${encodeURIComponent(m.name)}#kontakt" class="btn btn-amber btn-full">Pošaljite upit</a>
      </div>
    </article>
  `).join('');
}


function initNav(){
  const toggle = document.getElementById('menuToggle');
  const links = document.getElementById('navLinks');
  if(!toggle || !links) return;
  toggle.addEventListener('click', ()=>{
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  links.querySelectorAll('a').forEach(a=>{
    a.addEventListener('click', ()=>{
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded','false');
    });
  });
}

/* =========================================================
   SCROLL CUE (hero)
   ========================================================= */
function initScrollCue(){
  const cue = document.getElementById('scrollCue');
  if(!cue) return;
  cue.addEventListener('click', ()=>{
    document.getElementById('proizvodi')?.scrollIntoView({behavior:'smooth'});
  });
}

/* =========================================================
   SCROLL REVEAL
   ========================================================= */
function initReveal(){
  const items = document.querySelectorAll('.reveal');
  if(!items.length) return;
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, {threshold:.15, rootMargin:'0px 0px -40px 0px'});
  items.forEach(el => io.observe(el));
}

function markReveal(){
  document.querySelectorAll('.section-head, .trust-item, .why-item, .service-row, .onama-copy, .ph-onama')
    .forEach(el => el.classList.add('reveal'));
}

/* =========================================================
   ANIMIRANO BROJANJE (statistika u O nama sekciji)
   Broji od 0 do ciljne vrednosti (data-count) kad element
   udje u vidno polje, dodaje nazad "+" na kraju.
   ========================================================= */
function animateCount(el){
  const target = parseInt(el.dataset.count, 10);
  if(isNaN(target)) return;
  const duration = 1400;
  const startTime = performance.now();

  function tick(now){
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out
    const current = Math.round(eased * target);
    el.textContent = current + '+';
    if(progress < 1){
      requestAnimationFrame(tick);
    } else {
      el.textContent = target + '+';
    }
  }
  requestAnimationFrame(tick);
}

function initCounters(){
  const counters = document.querySelectorAll('[data-count]');
  if(!counters.length) return;
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        animateCount(entry.target);
        io.unobserve(entry.target);
      }
    });
  }, {threshold:.4});
  counters.forEach(el => io.observe(el));
}

/* =========================================================
   KONTAKT FORMA
   ========================================================= */
function initForm(){
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if(!form) return;

  form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const ime = document.getElementById('ime').value.trim();
    const telefon = document.getElementById('telefon').value.trim();
    const email = document.getElementById('email').value.trim();

    if(!ime || !telefon || !email){
      status.style.color = '#FF6B4A';
      status.textContent = 'Molimo popunite ime, telefon i email pre slanja.';
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    status.style.color = '#FFB300';
    status.textContent = 'Šaljemo vaš upit...';

    try{
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if(response.ok){
        status.textContent = 'Hvala! Vaš upit je poslat — javićemo se u toku dana.';
        form.reset();
      } else {
        status.style.color = '#FF6B4A';
        status.textContent = 'Došlo je do greške. Pokušajte ponovo ili nas pozovite direktno.';
      }
    } catch(err){
      status.style.color = '#FF6B4A';
      status.textContent = 'Nema internet konekcije. Pokušajte ponovo ili nas pozovite direktno.';
    } finally {
      submitBtn.disabled = false;
    }
  });
}

/* =========================================================
   INIT
   ========================================================= */
document.addEventListener('DOMContentLoaded', ()=>{
  renderProducts();
  renderGallery();
  renderModels();
  prefillFromQuery();
  initNav();
  initScrollCue();
  markReveal();
  initReveal();
  initCounters();
  initForm();
});
