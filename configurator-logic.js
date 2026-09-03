/* =========================================================
   KONFIGURATOR — logika
   ========================================================= */

let selectedType = null;
let selectedModel = null; // objekat iz CONFIG_MODELS
let selectedMastType = "Duplex standard";
let selectedHeight = 300;

function fmtEUR(n){
  return n.toLocaleString('sr-RS', {minimumFractionDigits:0, maximumFractionDigits:2}) + ' €';
}

/* ---------- Korak 1: tip ---------- */
function initTypeButtons(){
  document.querySelectorAll('.cfg-type-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      document.querySelectorAll('.cfg-type-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      selectedType = btn.dataset.type;
      selectedModel = null;
      populateModelSelect();
      document.getElementById('cfgStep2').hidden = false;
      document.getElementById('cfgStep3').hidden = true;
      document.getElementById('cfgStep4').hidden = true;
      document.getElementById('cfgResult').hidden = true;
    });
  });
}

/* ---------- Korak 2: model ---------- */
function populateModelSelect(){
  const select = document.getElementById('cfgModelSelect');
  const models = CONFIG_MODELS[selectedType];
  select.innerHTML = '<option value="">— izaberite model —</option>' +
    models.map((m, i) => `<option value="${i}">${m.model} — ${m.variant} (${fmtEUR(m.price)})</option>`).join('');
}

function initModelSelect(){
  const select = document.getElementById('cfgModelSelect');
  select.addEventListener('change', ()=>{
    if(select.value === ''){
      selectedModel = null;
      document.getElementById('cfgStep3').hidden = true;
      document.getElementById('cfgStep4').hidden = true;
      document.getElementById('cfgResult').hidden = true;
      document.getElementById('cfgEmptyHint').hidden = false;
      return;
    }
    selectedModel = CONFIG_MODELS[selectedType][parseInt(select.value, 10)];
    selectedMastType = "Duplex standard";
    selectedHeight = 300;
    populateMastUI();
    document.getElementById('cfgStep3').hidden = false;
    document.getElementById('cfgStep4').hidden = false;
    document.getElementById('cfgResult').hidden = false;
    document.getElementById('cfgEmptyHint').hidden = true;
    updateResult();
  });
}

/* ---------- Korak 3: jarbol ---------- */
function populateMastUI(){
  const mastTypeSelect = document.getElementById('cfgMastType');
  mastTypeSelect.innerHTML = Object.keys(CONFIG_MASTS)
    .map(name => `<option value="${name}">${name}</option>`).join('');
  mastTypeSelect.value = selectedMastType;
  populateHeightSelect();
}

function populateHeightSelect(){
  const heightSelect = document.getElementById('cfgHeightSelect');
  const mast = CONFIG_MASTS[selectedMastType];
  const cls = selectedModel.weightClass;
  const isElectric = selectedType === 'elektro';

  heightSelect.innerHTML = mast.heights.map(h=>{
    const price = h[cls];
    const disabled = h.electricOnly && !isElectric;
    const label = h.cm + ' cm' + (price > 0 ? ` (+${fmtEUR(price)})` : ' (osnovna, uključeno)');
    return `<option value="${h.cm}" ${disabled ? 'disabled' : ''}>${label}${disabled ? ' — samo za elektro modele' : ''}</option>`;
  }).join('');

  // podrazumevano biramo prvu dostupnu (nedisabled) visinu
  const firstAvailable = mast.heights.find(h => !(h.electricOnly && !isElectric));
  selectedHeight = firstAvailable ? firstAvailable.cm : mast.heights[0].cm;
  heightSelect.value = selectedHeight;

  updateMastWarning();
}

function updateMastWarning(){
  const warning = document.getElementById('cfgMastWarning');
  const mast = CONFIG_MASTS[selectedMastType];
  const isElectric = selectedType === 'elektro';
  if(mast.onlyElectric700 && !isElectric){
    warning.hidden = false;
    warning.textContent = 'Napomena: visina od 700 cm kod Triplex Free jarbola dostupna je samo za električne (baterijske) viljuškare.';
  } else {
    warning.hidden = true;
  }
}

function initMastControls(){
  document.getElementById('cfgMastType').addEventListener('change', (e)=>{
    selectedMastType = e.target.value;
    populateHeightSelect();
    updateResult();
  });
  document.getElementById('cfgHeightSelect').addEventListener('change', (e)=>{
    selectedHeight = parseInt(e.target.value, 10);
    updateResult();
  });
}

/* ---------- Korak 4: dodatna oprema ---------- */
function initAddonControls(){
  document.querySelectorAll('.cfg-addon').forEach(cb=>{
    cb.addEventListener('change', updateResult);
  });
}

/* ---------- Rezultat ---------- */
function getMastPrice(){
  const mast = CONFIG_MASTS[selectedMastType];
  const h = mast.heights.find(x => x.cm === selectedHeight);
  if(!h) return 0;
  return h[selectedModel.weightClass];
}

function updateResult(){
  if(!selectedModel) return;

  document.getElementById('cfgAddonPureGume').nextElementSibling.textContent =
    `Pune gume (+${fmtEUR(selectedModel.pureGume)})`;
  document.getElementById('cfgAddonKabina').nextElementSibling.textContent =
    `Kabina sa grejanjem (+${fmtEUR(selectedModel.kabina)})`;
  document.getElementById('cfgAddonPozicioner').nextElementSibling.textContent =
    `Pozicioner (+${fmtEUR(selectedModel.pozicioner)})`;

  let total = selectedModel.price;
  let addonsTotal = 0;

  const mastPrice = getMastPrice();
  addonsTotal += mastPrice;

  if(document.getElementById('cfgAddonPureGume').checked) addonsTotal += selectedModel.pureGume;
  if(document.getElementById('cfgAddonKabina').checked) addonsTotal += selectedModel.kabina;
  if(document.getElementById('cfgAddonPozicioner').checked) addonsTotal += selectedModel.pozicioner;

  total += addonsTotal;
  const totalVat = total * 1.2;

  document.getElementById('cfgBasePrice').textContent = fmtEUR(selectedModel.price);
  document.getElementById('cfgMastLine').textContent =
    mastPrice > 0 ? `${selectedMastType}, ${selectedHeight} cm — ${fmtEUR(mastPrice)}` : `${selectedMastType}, ${selectedHeight} cm — uključeno`;
  document.getElementById('cfgAddonsPrice').textContent = fmtEUR(addonsTotal - mastPrice);
  document.getElementById('cfgTotalPrice').textContent = fmtEUR(total);
  document.getElementById('cfgTotalVat').textContent = fmtEUR(totalVat);
}

/* ---------- Slanje upita sa konfiguracijom ---------- */
function buildConfigSummary(){
  if(!selectedModel) return '';
  const parts = [];
  parts.push(`Tip: ${TYPE_LABELS[selectedType]}`);
  parts.push(`Model: ${selectedModel.model} (${selectedModel.variant})`);
  parts.push(`Jarbol: ${selectedMastType}, visina dizanja ${selectedHeight} cm`);

  const addons = [];
  if(document.getElementById('cfgAddonPureGume').checked) addons.push('pune gume');
  if(document.getElementById('cfgAddonKabina').checked) addons.push('kabina sa grejanjem');
  if(document.getElementById('cfgAddonPozicioner').checked) addons.push('pozicioner');
  if(addons.length) parts.push(`Dodaci: ${addons.join(', ')}`);

  parts.push(`Orijentaciona cena: ${document.getElementById('cfgTotalPrice').textContent} bez PDV-a`);
  return parts.join(' | ');
}

function initSendInquiry(){
  document.getElementById('cfgSendBtn').addEventListener('click', ()=>{
    const summary = buildConfigSummary();
    if(!summary) return;
    const url = 'index.html?model=' + encodeURIComponent(summary) + '#kontakt';
    window.location.href = url;
  });
}

document.addEventListener('DOMContentLoaded', ()=>{
  initTypeButtons();
  initModelSelect();
  initMastControls();
  initAddonControls();
  initSendInquiry();
});
