/* =========================================================
   PODACI — MODELI (Cenovnik_Lonking_2026_Srbija_01072026.xlsx)
   weightClass: "light" = 1,5-2,5t | "heavy" = 3-3,8t (LG50 takodje "heavy")
   Doplate (pureGume, kabina, pozicioner) su specificne po modelu.
   ========================================================= */
const CONFIG_MODELS = {
  elektro: [
    { model:"LG16BE", variant:"Olovna baterija 80V/250AH", price:17150, weightClass:"light", pureGume:300, kabina:1150, pozicioner:790 },
    { model:"LG18BE", variant:"Olovna baterija 80V/250AH", price:17330, weightClass:"light", pureGume:300, kabina:1150, pozicioner:790 },
    { model:"LG20BE", variant:"Olovna baterija 80V/250AH", price:17560, weightClass:"light", pureGume:300, kabina:1150, pozicioner:790 },
    { model:"LG16BE", variant:"Li-ion baterija 80V/205AH", price:17330, weightClass:"light", pureGume:300, kabina:1150, pozicioner:790 },
    { model:"LG18BE", variant:"Li-ion baterija 80V/205AH", price:17530, weightClass:"light", pureGume:300, kabina:1150, pozicioner:790 },
    { model:"LG20BE", variant:"Li-ion baterija 80V/205AH", price:17770, weightClass:"light", pureGume:300, kabina:1150, pozicioner:790 },
    { model:"LG15B",  variant:"Olovna baterija 80V/230AH", price:14200, weightClass:"light", pureGume:300, kabina:1150, pozicioner:790 },
    { model:"LG18B",  variant:"Olovna baterija 80V/230AH", price:14490, weightClass:"light", pureGume:300, kabina:1150, pozicioner:790 },
    { model:"LG20B",  variant:"Olovna baterija 80V/300AH", price:15200, weightClass:"light", pureGume:300, kabina:1150, pozicioner:790 },
    { model:"LG25B",  variant:"Olovna baterija 80V/300AH", price:15500, weightClass:"light", pureGume:300, kabina:1150, pozicioner:790 },
    { model:"LG30B",  variant:"Olovna baterija 80V/420AH", price:17490, weightClass:"heavy", pureGume:390, kabina:1150, pozicioner:790 },
    { model:"LG35B",  variant:"Olovna baterija 80V/420AH", price:17690, weightClass:"heavy", pureGume:390, kabina:1150, pozicioner:790 },
    { model:"LG50B",  variant:"Olovna baterija 80V/700AH", price:31120, weightClass:"heavy", pureGume:700, kabina:1670, pozicioner:1040 },
    { model:"CPDX20", variant:"Li-ion baterija 80V/205AH", price:14560, weightClass:"light", pureGume:300, kabina:1150, pozicioner:790 },
    { model:"CPDX25", variant:"Li-ion baterija 80V/205AH", price:14832, weightClass:"light", pureGume:300, kabina:1150, pozicioner:790 },
    { model:"CPDX30", variant:"Li-ion baterija 80V/205AH", price:15520, weightClass:"heavy", pureGume:390, kabina:1150, pozicioner:790 },
    { model:"CPDX35", variant:"Li-ion baterija 80V/205AH", price:15790, weightClass:"heavy", pureGume:390, kabina:1150, pozicioner:790 },
    { model:"LG15B",  variant:"Li-ion baterija 80V/205AH", price:14090, weightClass:"light", pureGume:300, kabina:1150, pozicioner:790 },
    { model:"LG18B",  variant:"Li-ion baterija 80V/205AH", price:14300, weightClass:"light", pureGume:300, kabina:1150, pozicioner:790 },
    { model:"LG20B",  variant:"Li-ion baterija 80V/205AH", price:14740, weightClass:"light", pureGume:300, kabina:1150, pozicioner:790 },
    { model:"LG25B",  variant:"Li-ion baterija 80V/205AH", price:15010, weightClass:"light", pureGume:300, kabina:1150, pozicioner:790 },
    { model:"LG30B",  variant:"Li-ion baterija 80V/280AH", price:17310, weightClass:"heavy", pureGume:390, kabina:1150, pozicioner:790 },
    { model:"LG35B",  variant:"Li-ion baterija 80V/280AH", price:17580, weightClass:"heavy", pureGume:390, kabina:1670, pozicioner:790 },
    { model:"LG30B N2", variant:"Li-ion baterija 80V/410AH", price:19280, weightClass:"heavy", pureGume:390, kabina:1150, pozicioner:790 },
    { model:"LG35B N2", variant:"Li-ion baterija 80V/410AH", price:19550, weightClass:"heavy", pureGume:390, kabina:1150, pozicioner:790 },
    { model:"LG50B",  variant:"Li-ion baterija 80V/410AH", price:31030, weightClass:"heavy", pureGume:700, kabina:1670, pozicioner:1040 },
  ],
  dizel: [
    { model:"LG20DT", variant:"Xinchai C490BPG-47", price:12200, weightClass:"light", pureGume:320, kabina:770, pozicioner:790 },
    { model:"LG20DT", variant:"Isuzu C240", price:13930, weightClass:"light", pureGume:320, kabina:770, pozicioner:790 },
    { model:"LG25DT", variant:"Xinchai A498BT1-48", price:12650, weightClass:"light", pureGume:320, kabina:770, pozicioner:790 },
    { model:"LG25DT", variant:"Isuzu C240", price:14240, weightClass:"light", pureGume:320, kabina:770, pozicioner:790 },
    { model:"LG30DT", variant:"Xinchai A498BT1-58", price:13150, weightClass:"heavy", pureGume:420, kabina:770, pozicioner:790 },
    { model:"LG30DT", variant:"Mitsubishi S4S-474", price:14750, weightClass:"heavy", pureGume:420, kabina:770, pozicioner:790 },
    { model:"LG35DT", variant:"Xinchai A498BT1-48", price:13650, weightClass:"heavy", pureGume:420, kabina:770, pozicioner:790 },
    { model:"LG35DT", variant:"Mitsubishi S4S-474", price:15120, weightClass:"heavy", pureGume:420, kabina:770, pozicioner:790 },
    { model:"LG50DT", variant:"Xinchai 4DX-23", price:24990, weightClass:"heavy", pureGume:700, kabina:1280, pozicioner:1040 },
  ],
  gas: [
    { model:"LG20GLT", variant:"Nissan K21", price:14390, weightClass:"light", pureGume:320, kabina:770, pozicioner:790 },
    { model:"LG25GLT", variant:"Nissan K21", price:14880, weightClass:"light", pureGume:320, kabina:770, pozicioner:790 },
    { model:"LG30GLT", variant:"Nissan K25", price:15800, weightClass:"heavy", pureGume:420, kabina:770, pozicioner:790 },
    { model:"LG35GLT", variant:"Nissan K25", price:16460, weightClass:"heavy", pureGume:420, kabina:770, pozicioner:790 },
  ],
};

/* =========================================================
   PODACI — JARBOLI (Cenovnik_jarbola_Lonking_2026.xlsx)
   Doplata na osnovnu cenu (300cm standardni duplex = 0, ukljuceno).
   Triplex Free 700cm dostupan SAMO za elektro modele.
   ========================================================= */
const CONFIG_MASTS = {
  "Duplex standard": {
    onlyElectric700: false,
    heights: [
      { cm:300, light:0,    heavy:0 },
      { cm:330, light:140,  heavy:170 },
      { cm:350, light:230,  heavy:280 },
      { cm:370, light:320,  heavy:390 },
      { cm:375, light:370,  heavy:440 },
      { cm:400, light:460,  heavy:550 },
      { cm:425, light:600,  heavy:720 },
      { cm:450, light:690,  heavy:830 },
      { cm:475, light:830,  heavy:990 },
      { cm:500, light:920,  heavy:1100 },
      { cm:550, light:1150, heavy:1380 },
      { cm:600, light:1380, heavy:1660 },
    ],
  },
  "Duplex free": {
    onlyElectric700: false,
    heights: [
      { cm:300, light:0,    heavy:0 },
      { cm:330, light:790,  heavy:1000 },
      { cm:350, light:880,  heavy:1120 },
      { cm:370, light:980,  heavy:1220 },
      { cm:375, light:1020, heavy:1290 },
      { cm:400, light:1100, heavy:1400 },
      { cm:425, light:1250, heavy:1560 },
      { cm:450, light:1340, heavy:1670 },
      { cm:475, light:1470, heavy:1840 },
      { cm:500, light:1570, heavy:1950 },
      { cm:550, light:1810, heavy:2230 },
      { cm:600, light:2040, heavy:2490 },
    ],
  },
  "Triplex free": {
    onlyElectric700: true, // 700cm opcija dostupna samo za elektro modele
    heights: [
      { cm:360, light:1180,   heavy:1430 },
      { cm:400, light:1360,   heavy:1640 },
      { cm:435, light:1540,   heavy:1850 },
      { cm:450, light:1580,   heavy:1910 },
      { cm:470, light:1680,   heavy:2020 },
      { cm:480, light:1729.6, heavy:2080 },
      { cm:500, light:1810,   heavy:2190 },
      { cm:540, light:2000,   heavy:2400 },
      { cm:600, light:2280,   heavy:2740 },
      { cm:650, light:2510,   heavy:3020 },
      { cm:700, light:2740,   heavy:3290, electricOnly:true },
    ],
  },
};

const TYPE_LABELS = { elektro:"Električni", dizel:"Dizel", gas:"Gasni" };
