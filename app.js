const k1 = document.getElementById("1");
const k2 = document.getElementById("2");
const k3 = document.getElementById("3");
const k4 = document.getElementById("4");
const k5 = document.getElementById("5");
const k6 = document.getElementById("6");
const k7 = document.getElementById("7");
const k8 = document.getElementById("8");
const k9 = document.getElementById("9");
const k10 = document.getElementById("10");
const k11 = document.getElementById("11");
const k12 = document.getElementById("12");
const k13 = document.getElementById("13");
const k14 = document.getElementById("14");
const k15 = document.getElementById("15");
const k16 = document.getElementById("16");
const k17 = document.getElementById("17");
const k18 = document.getElementById("18");
const k19 = document.getElementById("19");
const k20 = document.getElementById("20");
const k21 = document.getElementById("21");
const k22 = document.getElementById("22");
const k23 = document.getElementById("23");
const k24 = document.getElementById("24");
const k25 = document.getElementById("25");
const k26 = document.getElementById("26");
const k27 = document.getElementById("27");
const k28 = document.getElementById("28");
const k29 = document.getElementById("29");
const k30 = document.getElementById("30");
const k31 = document.getElementById("31");
const k32 = document.getElementById("32");
const k33 = document.getElementById("33");
const k34 = document.getElementById("34");
const k35 = document.getElementById("35");
const k36 = document.getElementById("36");
const k37 = document.getElementById("37");
const k38 = document.getElementById("38");
const k39 = document.getElementById("39");
const k40 = document.getElementById("40");
const k41 = document.getElementById("41");
const k42 = document.getElementById("42");
const k43 = document.getElementById("43");
const k44 = document.getElementById("44");
const k45 = document.getElementById("45");
const k46 = document.getElementById("46");
const k47 = document.getElementById("47");
const k48 = document.getElementById("48");
const k49 = document.getElementById("49");
const k50 = document.getElementById("50");
const k51 = document.getElementById("51");
const k52 = document.getElementById("52");
const k53 = document.getElementById("53");
const k54 = document.getElementById("54");
const k55 = document.getElementById("55");
const k56 = document.getElementById("56");
const k57 = document.getElementById("57");
const k58 = document.getElementById("58");
const k59 = document.getElementById("59");
const k60 = document.getElementById("60");
const k61 = document.getElementById("61");
const k62 = document.getElementById("62");
const k63 = document.getElementById("63");
const k64 = document.getElementById("64");
const k65 = document.getElementById("65");
const k66 = document.getElementById("66");
const k67 = document.getElementById("67");
const k68 = document.getElementById("68");
const k69 = document.getElementById("69");
const k70 = document.getElementById("70");
const k71 = document.getElementById("71");
const k72 = document.getElementById("72");
const k73 = document.getElementById("73");
const k74 = document.getElementById("74");
const k75 = document.getElementById("75");
const k76 = document.getElementById("76");
const k77 = document.getElementById("77");
const k78 = document.getElementById("78");
const k79 = document.getElementById("79");
const k80 = document.getElementById("80");
const k81 = document.getElementById("81");
const k82 = document.getElementById("82");
const k83 = document.getElementById("83");
const k84 = document.getElementById("84");
const k85 = document.getElementById("85");
const k86 = document.getElementById("86");
const k87 = document.getElementById("87");
const k88 = document.getElementById("88");
const k89 = document.getElementById("89");
const k90 = document.getElementById("90");
const k91 = document.getElementById("91");
const btnHesaplama = document.getElementById("btnHesaplama");
const kategori = document.getElementById("kategori");
const satisInput = document.getElementById("satisInput");
const alisInput = document.getElementById("alisInput");
const sonucListesi = document.getElementById("sonucListesi");
const sonuc = document.createElement("ul");
sonucListesi.appendChild(sonuc);
// console.log(k2.textContent);
// console.log(kategori.textContent);
let komisyon = "";
btnHesaplama.addEventListener("click", () => {
  if (kategori.value == k1.value) {
    komisyon = 0.05;
  }
  if (kategori.value == k2.value) {
    komisyon = 0.21;
  }
  if (kategori.value == k3.value) {
    komisyon = 0.21;
  }
  if (kategori.value == k4.value) {
    komisyon = 0.22;
  }
  if (kategori.value == k5.value) {
    komisyon = 0.2;
  }
  if (kategori.value == k6.value) {
    komisyon = 0.21;
  }
  if (kategori.value == k7.value) {
    komisyon = 0.23;
  }
  if (kategori.value == k8.value) {
    komisyon = 0.16;
  }
  if (kategori.value == k9.value) {
    komisyon = 0.15;
  }
  if (kategori.value == k10.value) {
    komisyon = 0.18;
  }
  if (kategori.value == k11.value) {
    komisyon = 0.16;
  }
  if (kategori.value == k12.value) {
    komisyon = 0.15;
  }
  if (kategori.value == k13.value) {
    komisyon = 0.13;
  }
  if (kategori.value == k14.value) {
    komisyon = 0.15;
  }
  if (kategori.value == k15.value) {
    komisyon = 0.14;
  }
  if (kategori.value == k16.value) {
    komisyon = 0.08;
  }
  if (kategori.value == k17.value) {
    komisyon = 0.12;
  }
  if (kategori.value == k18.value) {
    komisyon = 0.14;
  }
  if (kategori.value == k19.value) {
    komisyon = 0.1;
  }
  if (kategori.value == k20.value) {
    komisyon = 0.1;
  }
  if (kategori.value == k21.value) {
    komisyon = 0.2;
  }
  if (kategori.value == k22.value) {
    komisyon = 0.12;
  }
  if (kategori.value == k23.value) {
    komisyon = 0.15;
  }
  if (kategori.value == k24.value) {
    komisyon = 0.15;
  }
  if (kategori.value == k25.value) {
    komisyon = 0.15;
  }
  if (kategori.value == k26.value) {
    komisyon = 0.1;
  }
  if (kategori.value == k27.value) {
    komisyon = 0.15;
  }
  if (kategori.value == k28.value) {
    komisyon = 0.1;
  }
  if (kategori.value == k29.value) {
    komisyon = 0.13;
  }
  if (kategori.value == k30.value) {
    komisyon = 0.13;
  }
  if (kategori.value == k31.value) {
    komisyon = 0.06;
  }
  if (kategori.value == k32.value) {
    komisyon = 0.15;
  }
  if (kategori.value == k33.value) {
    komisyon = 0.15;
  }
  if (kategori.value == k34.value) {
    komisyon = 0.12;
  }
  if (kategori.value == k35.value) {
    komisyon = 0.1;
  }
  if (kategori.value == k36.value) {
    komisyon = 0.05;
  }
  if (kategori.value == k37.value) {
    komisyon = 0.15;
  }
  if (kategori.value == k38.value) {
    komisyon = 0.25;
  }
  if (kategori.value == k39.value) {
    komisyon = 0.15;
  }
  if (kategori.value == k40.value) {
    komisyon = 0.08;
  }
  if (kategori.value == k41.value) {
    komisyon = 0.1;
  }
  if (kategori.value == k42.value) {
    komisyon = 0.12;
  }
  if (kategori.value == k43.value) {
    komisyon = 0.11;
  }
  if (kategori.value == k44.value) {
    komisyon = 0.13;
  }
  if (kategori.value == k45.value) {
    komisyon = 0.07;
  }
  if (kategori.value == k46.value) {
    komisyon = 0.1;
  }
  if (kategori.value == k47.value) {
    komisyon = 0.1;
  }
  if (kategori.value == k48.value) {
    komisyon = 0.19;
  }
  if (kategori.value == k49.value) {
    komisyon = 0.15;
  }
  if (kategori.value == k50.value) {
    komisyon = 0.165;
  }
  if (kategori.value == k51.value) {
    komisyon = 0.18;
  }
  if (kategori.value == k52.value) {
    komisyon = 0.22;
  }
  if (kategori.value == k53.value) {
    komisyon = 0.2;
  }
  if (kategori.value == k54.value) {
    komisyon = 0.18;
  }
  if (kategori.value == k55.value) {
    komisyon = 0.15;
  }
  if (kategori.value == k56.value) {
    komisyon = 0.2;
  }
  if (kategori.value == k57.value) {
    komisyon = 0.175;
  }
  if (kategori.value == k58.value) {
    komisyon = 0.14;
  }
  if (kategori.value == k59.value) {
    komisyon = 0.18;
  }
  if (kategori.value == k60.value) {
    komisyon = 0.17;
  }
  if (kategori.value == k61.value) {
    komisyon = 0.125;
  }
  if (kategori.value == k62.value) {
    komisyon = 0.125;
  }
  if (kategori.value == k63.value) {
    komisyon = 0.125;
  }
  if (kategori.value == k64.value) {
    komisyon = 0.125;
  }
  if (kategori.value == k65.value) {
    komisyon = 0.13;
  }
  if (kategori.value == k66.value) {
    komisyon = 0.12;
  }
  if (kategori.value == k67.value) {
    komisyon = 0.18;
  }
  if (kategori.value == k68.value) {
    komisyon = 0.2;
  }
  if (kategori.value == k69.value) {
    komisyon = 0.18;
  }
  if (kategori.value == k70.value) {
    komisyon = 0.15;
  }
  if (kategori.value == k71.value) {
    komisyon = 0.15;
  }
  if (kategori.value == k72.value) {
    komisyon = 0.14;
  }
  if (kategori.value == k73.value) {
    komisyon = 0.21;
  }
  if (kategori.value == k74.value) {
    komisyon = 0.17;
  }
  if (kategori.value == k75.value) {
    komisyon = 0.15;
  }
  if (kategori.value == k76.value) {
    komisyon = 0.16;
  }
  if (kategori.value == k77.value) {
    komisyon = 0.16;
  }
  if (kategori.value == k78.value) {
    komisyon = 0.16;
  }
  if (kategori.value == k79.value) {
    komisyon = 0.07;
  }
  if (kategori.value == k80.value) {
    komisyon = 0.16;
  }
  if (kategori.value == k81.value) {
    komisyon = 0.16;
  }
  if (kategori.value == k82.value) {
    komisyon = 0.1;
  }
  if (kategori.value == k83.value) {
    komisyon = 0.11;
  }
  if (kategori.value == k84.value) {
    komisyon = 0.14;
  }
  if (kategori.value == k85.value) {
    komisyon = 0.15;
  }
  if (kategori.value == k86.value) {
    komisyon = 0.15;
  }
  if (kategori.value == k87.value) {
    komisyon = 0.1;
  }
  if (kategori.value == k88.value) {
    komisyon = 0.12;
  }
  if (kategori.value == k89.value) {
    komisyon = 0.17;
  }
  if (kategori.value == k90.value) {
    komisyon = 0.17;
  }
  if (kategori.value == k91.value) {
    komisyon = 0.15;
  }
  console.log(komisyon);
  console.log(satisInput.value);
  let kdv = 0.18;
  let KDVsiz_fiyat = satisInput.value * (1 - kdv);
  let komisyonHesaplama = KDVsiz_fiyat * komisyon;
  let netKar = KDVsiz_fiyat - alisInput.value - komisyonHesaplama;
  sonuc.innerHTML = `<h4>Seçilen Kategori</h4>
  <h5>${kategori.value}</h5>
  <li>Komisyon oranı :%  ${(komisyon * 100).toFixed(1)}</li>
  <li>Satış Fiyatı (KDV Dahil) : ${satisInput.value} TL</li>
  <li>Satış Fiyatı (KDV Hariç) : ${KDVsiz_fiyat.toFixed(2)} TL</li>
  <li id="kesilen">Alış Fiyatı : ${alisInput.value} TL</li>
  <li id="kesilen">Komisyon kesintisi : ${komisyonHesaplama.toFixed(2)} TL</li>
  <li id="kar">Net Kâr : ${netKar.toFixed(2)} TL</li>
  `;
});
