const btnHesaplama = document.getElementById("btnHesaplama");
const pazaryeri = document.getElementById("pazaryeri");
const pazaryeriTrendyol = document.getElementById("pazaryeriTrendyol");
const pazaryeriHepsiburada = document.getElementById("pazaryeriHepsiburada");
const pazaryeriCiceksepeti = document.getElementById("pazaryeriCiceksepeti");
const pazaryeriN11 = document.getElementById("pazaryeriN11");
const pazaryeriAmazon = document.getElementById("pazaryeriAmazon");
const kategori = document.getElementById("kategori");
const satisInput = document.getElementById("satisInput");
const alisInput = document.getElementById("alisInput");
const sonucListesi = document.getElementById("sonucListesi");
const sonuc = document.createElement("ul");
sonucListesi.appendChild(sonuc);
// console.log(k2.textContent);
// console.log(kategori.textContent);
pazaryeri.addEventListener("click", () => {
  if (pazaryeri.value == pazaryeriTrendyol.value) {
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // ---------------TRENDYOL------------------------------
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    kategori.innerHTML = `<option id="1" value="Altın (işlenmemiş)">Altın (işlenmemiş)</option>
      <option id="2" value="Atkı, Atkı, Bere, Boyunluk, Eldiven">
        Atkı, Atkı, Bere, Boyunluk, Eldiven
      </option>
      <option
        id="3"
        value="Abiye Çanta, Bel Çantası, Beslenme Çantası, Çanta Aksesuarları, El
        Çantası, Laptop Çantası, Okul Çantası, Omuz Çantası, Plaj Çantası,
        Çanta, Postacı Çantası, Sırt Çantası, Spor Çantası, Cüzdan, Kartlık"
      >
        Abiye Çanta, Bel Çantası, Beslenme Çantası, Çanta Aksesuarları, El
        Çantası, Laptop Çantası, Okul Çantası, Omuz Çantası, Plaj Çantası,
        Çanta, Postacı Çantası, Sırt Çantası, Spor Çantası, Cüzdan, Kartlık
      </option>
      <option
        id="4"
        value="Kemer, Saç Aksesuarı, Pantolon Askısı, Kol Düğmesi, Şapka, Halhal Ayak
        Aksesuarları, Bijuteri Bileklik, Çelik Bileklik, Gümüş Bileklik, Choker,
        Bijuteri Kolye, Çelik Kolye, Gümüş Küpe, Gümüş Kolye"
      >
        Kemer, Saç Aksesuarı, Pantolon Askısı, Kol Düğmesi, Şapka, Halhal Ayak
        Aksesuarları, Bijuteri Bileklik, Çelik Bileklik, Gümüş Bileklik, Choker,
        Bijuteri Kolye, Çelik Kolye, Gümüş Küpe, Gümüş Kolye
      </option>
      <option id="5" value="Gözlük, Saat, Mücevher">
        Gözlük, Saat, Mücevher
      </option>
      <option id="6" value="Valiz ve Bavul">Valiz ve Bavul</option>
      <option id="7" value="Ayakkabı">Ayakkabı</option>
      <option id="8" value="Aydınlatma">Aydınlatma</option>
      <option
        id="9"
        value="Bebek Banyo Aksesuarları, Bebek Küveti, Klozet Adaptörü"
      >
        Bebek Banyo Aksesuarları, Bebek Küveti, Klozet Adaptörü
      </option>
      <option id="10" value="Bebek Havlu, Bornoz">Bebek Havlu, Bornoz</option>
      <option id="11" value="Oda Aksesuarları">Oda Aksesuarları</option>
      <option
        id="12"
        value="Ana Kucağı, Yürüteç, Portbebe, Bebek Arabası/Puset, Telsiz, Kamera,
        Dedektör"
      >
        Ana Kucağı, Yürüteç, Portbebe, Bebek Arabası/Puset, Telsiz, Kamera,
        Dedektör
      </option>
      <option id="13" value="Akülü Araçlar">Akülü Araçlar</option>
      <option id="14" value="Çocuk Kutu Oyunları, Bebek/Okul Öncesi Oyuncaklar">
        Çocuk Kutu Oyunları, Bebek/Okul Öncesi Oyuncaklar
      </option>
      <option id="15" value="Çocuk Puzzle / Yapboz">
        Çocuk Puzzle / Yapboz
      </option>
      <option
        id="16"
        value="Çocuk Bisikleti, Pateni, Scooterı,Spor Oyuncakları, Şişme Havuz &
        Aksesuarları, Deniz Malzemeleri, Plaj Oyuncakları"
      >
        Çocuk Bisikleti, Pateni, Scooterı,Spor Oyuncakları, Şişme Havuz &
        Aksesuarları, Deniz Malzemeleri, Plaj Oyuncakları
      </option>
      <option
        id="17"
        value="Ankastre, Aspiratörler, Davlumbazlar, Fırınlar, Ocaklar, Su Sebili"
      >
        Ankastre, Aspiratörler, Davlumbazlar, Fırınlar, Ocaklar, Su Sebili
      </option>
      <option id="18" value="Beyaz Eşya Yedek Parça">
        Beyaz Eşya Yedek Parça
      </option>
      <option
        id="19"
        value="Bulaşık Makineleri, Buzdolapları, Çamaşır Makineleri, Derin
        Dondurucular, Kurutma Makineleri"
      >
        Bulaşık Makineleri, Buzdolapları, Çamaşır Makineleri, Derin
        Dondurucular, Kurutma Makineleri
      </option>
      <option id="20" value="Ağ Modem, Akıllı Ev, E-Kitap Okuyucu">
        Ağ Modem, Akıllı Ev, E-Kitap Okuyucu
      </option>
      <option
        id="21"
        value="Anakart, Bellek (RAM), Bilgisayar Kasası, Bilgisayar Yedek Parça, Ekran
        Kartı, İşlemci, Optik Sürücü, Power Supply (PSU), Ses Kartı, Soğutucu ve
        Overclock, UPS ve Akü, Notebook Soğutucu, Monitor, Hafıza Kartı, Oyuncu
        Monitör, TV Kartları"
      >
        Anakart, Bellek (RAM), Bilgisayar Kasası, Bilgisayar Yedek Parça, Ekran
        Kartı, İşlemci, Optik Sürücü, Power Supply (PSU), Ses Kartı, Soğutucu ve
        Overclock, UPS ve Akü, Notebook Soğutucu, Monitor, Hafıza Kartı, Oyuncu
        Monitör, TV Kartları
      </option>
      <option id="22" value="Yazılım Ürünleri">Yazılım Ürünleri</option>
      <option id="23" value="Bilgisayar ve Tablet Aksesuarları">
        Bilgisayar ve Tablet Aksesuarları
      </option>
      <option
        id="24"
        value="Dizüstü Bilgisayar, Tablet, Grafik Tablet, Oyuncu Dizüstü Bilgisayarı,
        All-in-One Monitor PC"
      >
        Dizüstü Bilgisayar, Tablet, Grafik Tablet, Oyuncu Dizüstü Bilgisayarı,
        All-in-One Monitor PC
      </option>
      <option
        id="25"
        value="Oyuncu Kulaklıkları, Oyuncu Mouseları, Oyuncu Mousepad, Oyuncu Klavyesi,
        Hoparlör, Kablo / Adaptör, Klavye, Media Player, Mouse & Mousepad, Çoklu
        Depolama Ünitesi, Taşınabilir Hard Disk, Taşınabilir SSD, USB"
      >
        Oyuncu Kulaklıkları, Oyuncu Mouseları, Oyuncu Mousepad, Oyuncu Klavyesi,
        Hoparlör, Kablo / Adaptör, Klavye, Media Player, Mouse & Mousepad, Çoklu
        Depolama Ünitesi, Taşınabilir Hard Disk, Taşınabilir SSD, USB
      </option>
      <option
        id="26"
        value="Sabit Disk, SSD (Solid State Drive), Server Donanımı"
      >
        Sabit Disk, SSD (Solid State Drive), Server Donanımı
      </option>
      <option id="27" value="Oyuncu Masaüstü Bilgisayarı, Masaüstü Bilgisayar">
        Oyuncu Masaüstü Bilgisayarı, Masaüstü Bilgisayar
      </option>
      <option id="28" value="Dijital Kod & Ürünler">
        Dijital Kod & Ürünler
      </option>
      <option
        id="29"
        value="Dikiş Makineleri, Fritöz, Ekmek / Yoğurt Yapma Makinesi, Blender/Blender
        Seti, Çay/Kahve Makineleri, Diğer Elektrikli Pişiriciler, Ekmek Kızartma
        Makinesi, Doğrayıcı/Rondo, Meyve/Sebze Sıkacağı, Mikrodalga Fırın,
        Mikser/MikserSeti, Mini / Midi Fırın, Su Isıtıcı/Kettle, Tartı, Tost
        Makinesi"
      >
        Dikiş Makineleri, Fritöz, Ekmek / Yoğurt Yapma Makinesi, Blender/Blender
        Seti, Çay/Kahve Makineleri, Diğer Elektrikli Pişiriciler, Ekmek Kızartma
        Makinesi, Doğrayıcı/Rondo, Meyve/Sebze Sıkacağı, Mikrodalga Fırın,
        Mikser/MikserSeti, Mini / Midi Fırın, Su Isıtıcı/Kettle, Tartı, Tost
        Makinesi
      </option>
      <option
        id="30"
        value=" Süpürge, Ütü, Aksiyon Kameraları, Sualtı Fotoğraf Makineleri, Foto &
        Kamera Aksesuarları"
      >
        Süpürge, Ütü, Aksiyon Kameraları, Sualtı Fotoğraf Makineleri, Foto &
        Kamera Aksesuarları
      </option>
      <option
        id="31"
        value="Aynasız Kompakt SLR Makineleri, SLR Fotoğraf Makineleri, Dijital
        Fotoğraf Makineleri, Video Kameralar"
      >
        Aynasız Kompakt SLR Makineleri, SLR Fotoğraf Makineleri, Dijital
        Fotoğraf Makineleri, Video Kameralar
      </option>
      <option
        id="32"
        value="Akıllı Bileklik, Akıllı Saat, Sanal Gerçeklik Gözlükleri"
      >
        Akıllı Bileklik, Akıllı Saat, Sanal Gerçeklik Gözlükleri
      </option>
      <option id="33" value="Kişisel Bakım Aletleri">
        Kişisel Bakım Aletleri
      </option>
      <option
        id="34"
        value="Hava Perdeleri, Şofbenler, Termosifonlar, Isıtıcı ve Soğutucu"
      >
        Hava Perdeleri, Şofbenler, Termosifonlar, Isıtıcı ve Soğutucu
      </option>
      <option
        id="35"
        value="Bilgisayar Oyunları, Nintendo Oyunları, Playstation Oyunları, Xbox
        Oyunları, PSP / Vita Oyunları, Konsol Aksesuarları, Diğer Oyun
        Konsolları, PSP / Vita Konsolları, Nintendo Konsolları, Playstation
        Konsolları, Xbox Konsolları"
      >
        Bilgisayar Oyunları, Nintendo Oyunları, Playstation Oyunları, Xbox
        Oyunları, PSP / Vita Oyunları, Konsol Aksesuarları, Diğer Oyun
        Konsolları, PSP / Vita Konsolları, Nintendo Konsolları, Playstation
        Konsolları, Xbox Konsolları
      </option>
      <option id="36" value="Akıllı Cep Telefonu">Akıllı Cep Telefonu</option>
      <option
        id="37"
        value="Araç içi Telefon Tutucular, Bluetooth Araç Kiti, Powerbank, Şarj
        Cihazları ve Kabloları"
      >
        Araç içi Telefon Tutucular, Bluetooth Araç Kiti, Powerbank, Şarj
        Cihazları ve Kabloları
      </option>
      <option
        id="38"
        value="Batarya, Ekran, Kamera, Telefon Kasası, Tuş Takımı, Kapak & Kılıf, Ekran
        Koruyucu"
      >
        Batarya, Ekran, Kamera, Telefon Kasası, Tuş Takımı, Kapak & Kılıf, Ekran
        Koruyucu
      </option>
      <option id="39" value="Telsiz/Masaüstü Telefonları">
        Telsiz/Masaüstü Telefonları
      </option>
      <option id="40" value="Tuşlu, Yenilenmiş Cep Telefonu">
        Tuşlu, Yenilenmiş Cep Telefonu
      </option>
      <option id="41" value="Dijital Yayın Paketleri">
        Dijital Yayın Paketleri
      </option>
      <option
        id="42"
        value="DVD & Blu – Ray Oynatıcılar, Ev Sinema Hoparlörleri, Ev Sinema
        Sistemleri, Projeksiyon, Bluetooth Wireless Hoparlörler"
      >
        DVD & Blu – Ray Oynatıcılar, Ev Sinema Hoparlörleri, Ev Sinema
        Sistemleri, Projeksiyon, Bluetooth Wireless Hoparlörler
      </option>
      <option
        id="43"
        value="Güvenlik Sistemleri, Kablo & Sarf Malzemeler, Bluetooth Kulaklık,
        Kulakiçi Kulaklık, Kulaküstü Kulaklık, Mikrofon, MP Player / Ses Kayıt
        Cihazı, Müzik Sistemleri"
      >
        Güvenlik Sistemleri, Kablo & Sarf Malzemeler, Bluetooth Kulaklık,
        Kulakiçi Kulaklık, Kulaküstü Kulaklık, Mikrofon, MP Player / Ses Kayıt
        Cihazı, Müzik Sistemleri
      </option>
      <option id="44" value="Projeksiyon Aksesuarları, TV Aksesuarları">
        Projeksiyon Aksesuarları, TV Aksesuarları
      </option>
      <option id="45" value="Televizyon">Televizyon</option>
      <option
        id="46"
        value="Lazer Yazıcılar, Mürekkep Püskürtmeli Yazıcılar, Tanklı Yazıcılar,
        Tarayıcılar, Yazıcı Sarf Malzemeleri"
      >
        Lazer Yazıcılar, Mürekkep Püskürtmeli Yazıcılar, Tanklı Yazıcılar,
        Tarayıcılar, Yazıcı Sarf Malzemeleri
      </option>
      <option id="47" value="Bahçe & Balkon Isıtma, Bahçe Makine Yağları">
        Bahçe & Balkon Isıtma, Bahçe Makine Yağları
      </option>
      <option id="48" value="Bahçe Aydınlatması">Bahçe Aydınlatması</option>
      <option
        id="49"
        value="Bahçe Dekorasyonu, Bahçe Makineleri, Dekoratif Ürünler"
      >
        Bahçe Dekorasyonu, Bahçe Makineleri, Dekoratif Ürünler
      </option>
      <option
        id="50"
        value="Küçük El Aletleri, Elektrikli El Aletleri, Manuel El Aletleri, Havuz
        Ürünleri"
      >
        Küçük El Aletleri, Elektrikli El Aletleri, Manuel El Aletleri, Havuz
        Ürünleri
      </option>
      <option id="51" value="Banyo Aksesuarları, Havlu & Bornoz, Klozet Takımı">
        Banyo Aksesuarları, Havlu & Bornoz, Klozet Takımı
      </option>
      <option id="52" value="Dekoratif Ürünler">Dekoratif Ürünler</option>
      <option id="53" value="Mutfak Tekstili, Diğer Ev Gereçleri">
        Mutfak Tekstili, Diğer Ev Gereçleri
      </option>
      <option id="54" value="Ütü Masası & Kurutmalık, Çöp Kovası, Halı">
        Ütü Masası & Kurutmalık, Çöp Kovası, Halı
      </option>
      <option id="55" value="Perde">Perde</option>
      <option
        id="56"
        value="Perde Aksesuarları, Yatak Odası Tekstili, Bebek&Çocuk, Nevresim Takımı,
        Bebek&Çocuk Pike, Bebek&Çocuk Uyku Seti, Bebek&Çocuk Yatak Örtüsü"
      >
        Perde Aksesuarları, Yatak Odası Tekstili, Bebek&Çocuk, Nevresim Takımı,
        Bebek&Çocuk Pike, Bebek&Çocuk Uyku Seti, Bebek&Çocuk Yatak Örtüsü
      </option>
      <option id="57" value="Drone Aksesuarı">Drone Aksesuarı</option>
      <option
        id="58"
        value="Müzik Alet ve Ekipmanları, Müzik Albümü, Drone, Film, Pikap & Gramofon"
      >
        Müzik Alet ve Ekipmanları, Müzik Albümü, Drone, Film, Pikap & Gramofon
      </option>
      <option id="59" value="Parti ve Yılbaşı Ürünleri">
        Parti ve Yılbaşı Ürünleri
      </option>
      <option
        id="60"
        value="Yetişkin Hobi ve Oyun, Boya Malzemeleri, Sanatsal Malzemeler, Sanatsal
        Kağıtlar & Kalemler"
      >
        Yetişkin Hobi ve Oyun, Boya Malzemeleri, Sanatsal Malzemeler, Sanatsal
        Kağıtlar & Kalemler
      </option>
      <option
        id="61"
        value="Oto Aksesuar, Akü ve Akü Takviye Kabloları, Elektrikli Araçlar,
        Motosiklet Çanta ve Kasklar, Oto Ses Görüntü Sistemleri, Otomobil Yedek
        Parça & Oto Krom Aksesuar, Basınçlı Yıkama ve Köpük Makineleri, Jantlar&
        Jant Kapakları"
      >
        Oto Aksesuar, Akü ve Akü Takviye Kabloları, Elektrikli Araçlar,
        Motosiklet Çanta ve Kasklar, Oto Ses Görüntü Sistemleri, Otomobil Yedek
        Parça & Oto Krom Aksesuar, Basınçlı Yıkama ve Köpük Makineleri, Jantlar&
        Jant Kapakları
      </option>
      <option id="62" value="Yağ ve Motor Katkıları">
        Yağ ve Motor Katkıları
      </option>
      <option id="63" value="Oto ve Motosiklet Lastikleri">
        Oto ve Motosiklet Lastikleri
      </option>
      <option id="64" value="Bakım & Temizlik Ürünleri, Motor Bakım Ürünleri">
        Bakım & Temizlik Ürünleri, Motor Bakım Ürünleri
      </option>
      <option
        id="65"
        value="Motosiklet Aksesuarları, Motosiklet Koruma Ekipmanları, Motosiklet
        Bakım, Motosiklet Ekipmanları, Motosiklet Giyim, Motosiklet Yedek Parça"
      >
        Motosiklet Aksesuarları, Motosiklet Koruma Ekipmanları, Motosiklet
        Bakım, Motosiklet Ekipmanları, Motosiklet Giyim, Motosiklet Yedek Parça
      </option>
      <option
        id="66"
        value="Oto Bakım / Temizlik Ürünleri, Lastik Bakım Ürünleri"
      >
        Oto Bakım / Temizlik Ürünleri, Lastik Bakım Ürünleri
      </option>
      <option id="67" value="Mutfak Gereçleri-Pişirme-Hazırlama">
        Mutfak Gereçleri-Pişirme-Hazırlama
      </option>
      <option id="68" value="Servis ve sunum ürünleri">
        Servis ve sunum ürünleri
      </option>
      <option id="69" value="Yemek takımları & çay-kahve gereçleri">
        Yemek takımları & çay-kahve gereçleri
      </option>
      <option
        id="70"
        value="Banyo Yapı Malzemeleri, Elektrikli El Aletleri ve Aksesuarları, Güvenlik
        Ürünleri, Hırdavat, İnşaat Malzemeleri, Küçük El Aletleri, Elektrikli El
        Aletleri, Manuel El Aletleri"
      >
        Banyo Yapı Malzemeleri, Elektrikli El Aletleri ve Aksesuarları, Güvenlik
        Ürünleri, Hırdavat, İnşaat Malzemeleri, Küçük El Aletleri, Elektrikli El
        Aletleri, Manuel El Aletleri
      </option>
      <option id="71" value="Elektrik ve Aydınlatma">
        Elektrik ve Aydınlatma
      </option>
      <option id="72" value="Jeneratör">Jeneratör</option>
      <option id="73" value="Alt Giyim, Dış Giyim, İç Giyim, Mayo, Üst Giyim">
        Alt Giyim, Dış Giyim, İç Giyim, Mayo, Üst Giyim
      </option>
      <option id="74" value="Spor Giyim">Spor Giyim</option>
      <option
        id="75"
        value="Ağız Bakım, Banyo & Duş Ürünleri, Deodorant & Kolonya, Deodorant &
        Kolonya, Ayak Bakımı, El & Tırnak Bakımı, Vücut Spreyi, Kadın Hijyen"
      >
        Ağız Bakım, Banyo & Duş Ürünleri, Deodorant & Kolonya, Deodorant &
        Kolonya, Ayak Bakımı, El & Tırnak Bakımı, Vücut Spreyi, Kadın Hijyen
      </option>
      <option id="76" value="Cilt Bakım, Saç Bakım, Saç Şekillendirici, Makyaj">
        Cilt Bakım, Saç Bakım, Saç Şekillendirici, Makyaj
      </option>
      <option id="77" value="Parfüm, Parfüm Seti">Parfüm, Parfüm Seti</option>
      <option
        id="78"
        value="Cinsel Sağlık, Genel Sağlık, Gıda Takviyeleri/Vitaminler, Sporcu
        Besinleri, Supplementler, Hasta Bezi ve Temizlik"
      >
        Cinsel Sağlık, Genel Sağlık, Gıda Takviyeleri/Vitaminler, Sporcu
        Besinleri, Supplementler, Hasta Bezi ve Temizlik
      </option>
      <option id="79" value="Medikal Maske">Medikal Maske</option>
      <option id="80" value="Ağda & Tüy Dökücüler">Ağda & Tüy Dökücüler</option>
      <option id="81" value="Epilasyon Ürünleri, Tıraş Ürünleri">
        Epilasyon Ürünleri, Tıraş Ürünleri
      </option>
      <option
        id="82"
        value="Kampçılık, Kayak, Outdoor Ekipman ve Aksesuarları, Balıkçılık"
      >
        Kampçılık, Kayak, Outdoor Ekipman ve Aksesuarları, Balıkçılık
      </option>
      <option
        id="83"
        value="Koşu bandı, kondisyon bisikleti, Vücut Geliştirme Aletleri, Vücut
        Geliştirme Ekipmanları, Bisiklet ve Bisiklet, Aksesuarları,
        Kaykay/Paten/Scooter"
      >
        Koşu bandı, kondisyon bisikleti, Vücut Geliştirme Aletleri, Vücut
        Geliştirme Ekipmanları, Bisiklet ve Bisiklet, Aksesuarları,
        Kaykay/Paten/Scooter
      </option>
      <option
        id="84"
        value="Yoga & Pilates Aksesuarları, Fitness, Spor, Yüzme Aksesuarları"
      >
        Yoga & Pilates Aksesuarları, Fitness, Spor, Yüzme Aksesuarları
      </option>
      <option
        id="85"
        value="Göğüs Ucu Kremi, Vücut Kremleri, Göğüs Pedleri/Koruyucular"
      >
        Göğüs Ucu Kremi, Vücut Kremleri, Göğüs Pedleri/Koruyucular
      </option>
      <option
        id="86"
        value="Alt Açma Minderi, Bebek Bakım Çantası, Kozmetik, Bebek Sağlık Ürünleri,
        Diğer Bebek Bakım Ürünleri"
      >
        Alt Açma Minderi, Bebek Bakım Çantası, Kozmetik, Bebek Sağlık Ürünleri,
        Diğer Bebek Bakım Ürünleri
      </option>
      <option
        id="87"
        value="Bebek Bezi, Islak Mendil, Havlu, Bebek Maması, Süt Arttırıcı İçecekler"
      >
        Bebek Bezi, Islak Mendil, Havlu, Bebek Maması, Süt Arttırıcı İçecekler
      </option>
      <option id="88" value="Kağıt Ürünleri, Deterjan, Temizlik Ürünleri">
        Kağıt Ürünleri, Deterjan, Temizlik Ürünleri
      </option>
      <option id="89" value="Gıda & İçecek">Gıda & İçecek</option>
      <option
        id="90"
        value="Petshop Ürünleri, Kedi Mamaları, Köpek Mamaları, Kedi Ürünleri, Köpek
        Ürünleri"
      >
        Petshop Ürünleri, Kedi Mamaları, Köpek Mamaları, Kedi Ürünleri, Köpek
        Ürünleri
      </option>
      <option
        id="91"
        value="Alıştırma Bardakları, Beslenme Aksesuarları, Biberon Isıtıcı &
        Sterilizatör, Biberon, Emzik, Saklama Aksesuarları, Mama Isıtıcı ve
        Hazırlayıcılar, Emzirme Örtüsü, Emzirme Yastığı, Mama Önlüğü"
      >
        Alıştırma Bardakları, Beslenme Aksesuarları, Biberon Isıtıcı &
        Sterilizatör, Biberon, Emzik, Saklama Aksesuarları, Mama Isıtıcı ve
        Hazırlayıcılar, Emzirme Örtüsü, Emzirme Yastığı, Mama Önlüğü
      </option>`;
  } else if (pazaryeri.value == pazaryeriHepsiburada.value) {
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // -----------------HEPSİBURADA-------------------------
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    kategori.innerHTML = `<option
        value="Gram Altın, Tam Altın, Yarım Altın, Çeyrek Altın, Hesaba Altın
"
        id="hpsbrdk1"
      >
        Gram Altın, Tam Altın, Yarım Altın, Çeyrek Altın, Hesaba Altın
      </option>
      <option
        value="Cilt Bakımı, Güneş Ürünleri, Saç Bakım Ürünleri
"
        id="hpsbrdk2"
      >
        Cilt Bakımı, Güneş Ürünleri, Saç Bakım Ürünleri
      </option>
      <option
        value="Valiz, bavul, seyahat çantası
"
        id="hpsbrdk3"
      >
        Valiz, bavul, seyahat çantası
      </option>
      <option
        value="Spor Çanta, Sırt Çantası, Abiye Çanta, Günlük Çanta, Plaj Çantası, Dağcılık ve Kamp Çantası
"
        id="hpsbrdk4"
      >
        Spor Çanta, Sırt Çantası, Abiye Çanta, Günlük Çanta, Plaj Çantası,
        Dağcılık ve Kamp Çantası
      </option>
      <option
        value="Erkek Ayakkabı, Kadın Ayakkabı, Spor Ayakkabı, Babet, Terlik,Bot, Çizme, Outdoor Ayakkabı
"
        id="hpsbrdk5"
      >
        Erkek Ayakkabı, Kadın Ayakkabı, Spor Ayakkabı, Babet, Terlik,Bot, Çizme,
        Outdoor Ayakkabı
      </option>
      <option
        value="Giyim
"
        id="hpsbrdk6"
      >
        Giyim
      </option>
      <option
        value="Kadın Parfüm, Erkek Parfüm, Parfüm Seti
"
        id="hpsbrdk7"
      >
        Kadın Parfüm, Erkek Parfüm, Parfüm Seti
      </option>
      <option
        value="Outdoor Ekipmanları, Deniz Ekipmanları, Tekne Ürünleri, Deniz Motoru, Aksiyon Kameralar, Elektronik GPS Dürbünler
"
        id="hpsbrdk8"
      >
        Outdoor Ekipmanları, Deniz Ekipmanları, Tekne Ürünleri, Deniz Motoru,
        Aksiyon Kameralar, Elektronik GPS Dürbünler
      </option>
      <option
        value="Fitwear, Termal Eşofmanlar, Spor Şortu, Bisiklet Giyim
"
        id="hpsbrdk9"
      >
        Fitwear, Termal Eşofmanlar, Spor Şortu, Bisiklet Giyim
      </option>
      <option
        value="Koşu bandı, Kondisyon Bisikleti, Spor & Kardiyo Aletleri, Fitness Kondisyon Aletleri, Vücut Geliştirme Aletleri, Vücut Geliştirme Ekipmanları, Fitness ve Kondisyon Ekipmanları, Pilates Topu, Dumble
"
        id="hpsbrdk10"
      >
        Koşu bandı, Kondisyon Bisikleti, Spor & Kardiyo Aletleri, Fitness
        Kondisyon Aletleri, Vücut Geliştirme Aletleri, Vücut Geliştirme
        Ekipmanları, Fitness ve Kondisyon Ekipmanları, Pilates Topu, Dumble
      </option>
      <option
        value="Bisiklet ve Bisiklet Aksesuarları,Kaykay/Paten, Elektrikli Scooterlar
"
        id="hpsbrdk11"
      >
        Bisiklet ve Bisiklet Aksesuarları,Kaykay/Paten, Elektrikli Scooterlar
      </option>
      <option
        value="Futbol, Basketbol, Tenis, Yüzme, Atletizm, Binicilik, Voleybol, Diğer Spor Branşları
"
        id="hpsbrdk12"
      >
        Futbol, Basketbol, Tenis, Yüzme, Atletizm, Binicilik, Voleybol, Diğer
        Spor Branşları
      </option>
      <option
        value="Taraftar Ürünleri (Giyim, Aksesuar, Hediyelik)
"
        id="hpsbrdk13"
      >
        Taraftar Ürünleri (Giyim, Aksesuar, Hediyelik)
      </option>
      <option
        value="Android Telefonlar, Iphone, Cep Telefonları
"
        id="hpsbrdk14"
      >
        Android Telefonlar, Iphone, Cep Telefonları
      </option>
      <option
        value="Tabletler, Ipad, Galaxy Tab
"
        id="hpsbrdk15"
      >
        Tabletler, Ipad, Galaxy Tab
      </option>
      <option
        value="Taşınabilir Bilgisayar, Monitör PC (All-in-One), Mini PC
"
        id="hpsbrdk16"
      >
        Taşınabilir Bilgisayar, Monitör PC (All-in-One), Mini PC
      </option>
      <option
        value="Masaüstü Bilgisayar, Bilgisayar Kasaları,LCD Monitör, Ekran Kartı,İşlemciler, Veri Depolama, SSD, Ram, Anakart, Power Supply,UPS, Soğutucular, TV Kartları, Optik Sürücü, Ses Kartı, Disk, Server
"
        id="hpsbrdk17"
      >
        Masaüstü Bilgisayar, Bilgisayar Kasaları,LCD Monitör, Ekran
        Kartı,İşlemciler, Veri Depolama, SSD, Ram, Anakart, Power Supply,UPS,
        Soğutucular, TV Kartları, Optik Sürücü, Ses Kartı, Disk, Server
      </option>
      <option
        value="Yazıcılar, Yazıcı Yedek Parça & Aksesuarları, Yazıcı Sarf Malzemeleri, Kartuş, Toner Drumler, Fotokopi ve Baskı Kağıtları
"
        id="hpsbrdk18"
      >
        Yazıcılar, Yazıcı Yedek Parça & Aksesuarları, Yazıcı Sarf Malzemeleri,
        Kartuş, Toner Drumler, Fotokopi ve Baskı Kağıtları
      </option>
      <option
        value="Taşınabilir Diskler, Mouse, Klavye, Disk, Sarf Malzemeleri,Kablolar, Bilgisayar (Diğer)
"
        id="hpsbrdk19"
      >
        Taşınabilir Diskler, Mouse, Klavye, Disk, Sarf Malzemeleri,Kablolar,
        Bilgisayar (Diğer)
      </option>
      <option
        value="Projeksiyon Cihazları & Aksesuarları
"
        id="hpsbrdk20"
      >
        Projeksiyon Cihazları & Aksesuarları
      </option>
      <option
        value="Modemler, Network Aksesuarları, Wireless Adaptör"
        id="hpsbrdk21"
      >
        Modemler, Network Aksesuarları, Wireless Adaptör
      </option>
      <option
        value="Yazılım, Online Lisans, Antivirüs, Microsoft Yazılımlar, Office Yazılımları, Ticari Yazılımlar
"
        id="hpsbrdk22"
      >
        Yazılım, Online Lisans, Antivirüs, Microsoft Yazılımlar, Office
        Yazılımları, Ticari Yazılımlar
      </option>
      <option
        value="Aynasız SLR Fotoğraf Makineleri
"
        id="hpsbrdk23"
      >
        Aynasız SLR Fotoğraf Makineleri
      </option>
      <option
        value="SLR Dijital Fotoğraf Makinası, Dijital Fotoğraf Makinası, Filmli Fotoğraf Makineleri, Video Kameralar, Aksiyon Kameralar, Lensler, Fotoğraf Çerçeveleri, Fotoğraf Filmi & Kağıtları, Fotoğraf ve Kamera Aksesuarları, Objektifler, Filtreler, Pil ve Şarj Cihazları, SLR Lensleri, Tripod, Taşıma Çantaları, Sualtı Kılıfları, Foto-Kamera (Diğer)
"
        id="hpsbrdk24"
      >
        SLR Dijital Fotoğraf Makinası, Dijital Fotoğraf Makinası, Filmli
        Fotoğraf Makineleri, Video Kameralar, Aksiyon Kameralar, Lensler,
        Fotoğraf Çerçeveleri, Fotoğraf Filmi & Kağıtları, Fotoğraf ve Kamera
        Aksesuarları, Objektifler, Filtreler, Pil ve Şarj Cihazları, SLR
        Lensleri, Tripod, Taşıma Çantaları, Sualtı Kılıfları, Foto-Kamera
        (Diğer)
      </option>
      <option
        value="Drone, Multikopter, Drone Aksesuarları, Taşıma Çantası, Drone Yedek Parçaları
"
        id="hpsbrdk25"
      >
        Drone, Multikopter, Drone Aksesuarları, Taşıma Çantası, Drone Yedek
        Parçaları
      </option>
      <option
        value="Akü ve Akü Takviye Kabloları, Elektrikli Araçlar, Şarj Cihazları, Oto Ses Görüntü Sistemleri, Cd-Mp3 Çalar, Transmitter
"
        id="hpsbrdk26"
      >
        Akü ve Akü Takviye Kabloları, Elektrikli Araçlar, Şarj Cihazları, Oto
        Ses Görüntü Sistemleri, Cd-Mp3 Çalar, Transmitter
      </option>
      <option
        value="Anahtarlıklar, Araç İçi Aksesuarları, Koltuk Kılıfları, Koltuk Minderleri, Oto Buzdolapları, Oto Elektrik, Oto Kokuları,Paspaslar, Seyehat Ürünleri, Trafik Setleri, Yangın Söndürücüler, Oto Aksesuar (Diğer)
"
        id="hpsbrdk27"
      >
        Anahtarlıklar, Araç İçi Aksesuarları, Koltuk Kılıfları, Koltuk
        Minderleri, Oto Buzdolapları, Oto Elektrik, Oto Kokuları,Paspaslar,
        Seyehat Ürünleri, Trafik Setleri, Yangın Söndürücüler, Oto Aksesuar
        (Diğer)
      </option>
      <option
        value="Araç Bakım Temizlik Ürünleri, Araç Dış Aksesuar, Aydınlatma Ürünleri, Brandalar, Cam ve Güneşlik Ürünleri, Kışlık Ürünler,Silecekler
"
        id="hpsbrdk28"
      >
        Araç Bakım Temizlik Ürünleri, Araç Dış Aksesuar, Aydınlatma Ürünleri,
        Brandalar, Cam ve Güneşlik Ürünleri, Kışlık Ürünler,Silecekler
      </option>
      <option
        value="Motosiklet Lastikleri, Oto Lastik
"
        id="hpsbrdk29"
      >
        Motosiklet Lastikleri, Oto Lastik
      </option>
      <option
        value="Traktör Lastikleri
"
        id="hpsbrdk30"
      >
        Traktör Lastikleri
      </option>
      <option
        value="Ateşleme sistemi, Yürüyen aksam, Kaporta, Filtre, Elektrik aksam,Debriyaj, Mekanik aksam, Motor aksamı, Ayna, İş makinesi&Traktör yedek parçaları
"
        id="hpsbrdk31"
      >
        Ateşleme sistemi, Yürüyen aksam, Kaporta, Filtre, Elektrik
        aksam,Debriyaj, Mekanik aksam, Motor aksamı, Ayna, İş makinesi&Traktör
        yedek parçaları
      </option>
      <option
        value="Süpürgeler, Ütüler, Halı Yıkama Makinası, Buharlı Temizlik Makinesi, Sulu Süpürge
"
        id="hpsbrdk32"
      >
        Süpürgeler, Ütüler, Halı Yıkama Makinası, Buharlı Temizlik Makinesi,
        Sulu Süpürge
      </option>
      <option
        value="Süpürge Aksesuarları, Elektrikli Mutfak Aleti Yedek Parça, Dikiş Makinesi Aksesuarları
"
        id="hpsbrdk33"
      >
        Süpürge Aksesuarları, Elektrikli Mutfak Aleti Yedek Parça, Dikiş
        Makinesi Aksesuarları
      </option>
      <option
        value="Blender, Çay Makineleri, Tost Makinesi, Kahve Makineleri ve Aksesuarlari, Dikiş Makinaları, Endüstriyel Mutfak Ürünleri, Su Isıtıcıları, Fritözler, Meyve Sıkıcılar, Mini-Midi Fırınlar, Basküller, Mikser, Doğrayıcı / Rondo, Elektikli Izgara-Barbekü, Mutfak Robotları, Ekmek Kızartma, Ekmek Yapma Makinesi, Kahve Öğütücü, Mutfak Tartıları, Kıyma Makineleri, Elektrikli Tencere/Tavalar, Elektrikli Mutfak Aleti Yedek Parça & Aksesuar\ Hava Temizleme & Nemlendirme Cihazları
"
        id="hpsbrdk34"
      >
        Blender, Çay Makineleri, Tost Makinesi, Kahve Makineleri ve
        Aksesuarlari, Dikiş Makinaları, Endüstriyel Mutfak Ürünleri, Su
        Isıtıcıları, Fritözler, Meyve Sıkıcılar, Mini-Midi Fırınlar, Basküller,
        Mikser, Doğrayıcı / Rondo, Elektikli Izgara-Barbekü, Mutfak Robotları,
        Ekmek Kızartma, Ekmek Yapma Makinesi, Kahve Öğütücü, Mutfak Tartıları,
        Kıyma Makineleri, Elektrikli Tencere/Tavalar, Elektrikli Mutfak Aleti
        Yedek Parça & Aksesuar\ Hava Temizleme & Nemlendirme Cihazları
      </option>
      <option
        value="Saç Sakal Düzeltme Makineleri, Tıraş Makineleri, Epilatörler, Saç Kurutma Makineleri, Tıraş Makinesi Yedek Parçaları, Kişisel Bakım Aletleri (Diğer)
"
        id="hpsbrdk35"
      >
        Saç Sakal Düzeltme Makineleri, Tıraş Makineleri, Epilatörler, Saç
        Kurutma Makineleri, Tıraş Makinesi Yedek Parçaları, Kişisel Bakım
        Aletleri (Diğer)
      </option>
      <option
        value="Bulaşık Makinesi, Buzdolabı, Çamaşır Makinesi, Derin Dondurucu,Kurutma Makinesi
"
        id="hpsbrdk36"
      >
        Bulaşık Makinesi, Buzdolabı, Çamaşır Makinesi, Derin Dondurucu,Kurutma
        Makinesi
      </option>
      <option
        value="Klima, Hava Perdeleri, Kombiler, Portatif Soğutucular, Sobalar & Isıtıcılar, Şofbenler, Termoboyler, Termosifonlar, Vantilatörler,Isıtma Soğutma (Diğer)
"
        id="hpsbrdk37"
      >
        Klima, Hava Perdeleri, Kombiler, Portatif Soğutucular, Sobalar &
        Isıtıcılar, Şofbenler, Termoboyler, Termosifonlar, Vantilatörler,Isıtma
        Soğutma (Diğer)
      </option>
      <option
        value="Ankastre Setler, Aspiratör, Davlumbaz, Fırınlar, Mikrodalga Fırın,Ocaklar, Su Sebili, Ev Gereçleri
"
        id="hpsbrdk38"
      >
        Ankastre Setler, Aspiratör, Davlumbaz, Fırınlar, Mikrodalga
        Fırın,Ocaklar, Su Sebili, Ev Gereçleri
      </option>
      <option
        value="Beyaz Eşya Yedek Parça & Aksesuar, Ek Güvence Paketleri
"
        id="hpsbrdk39"
      >
        Beyaz Eşya Yedek Parça & Aksesuar, Ek Güvence Paketleri
      </option>
      <option
        value="LCD Televizyon, LED Televizyon, Smart TV
"
        id="hpsbrdk40"
      >
        LCD Televizyon, LED Televizyon, Smart TV
      </option>
      <option
        value="Anne Bakım Ürünleri, Bebek Bakım Ürünleri, Islak Mendiller, Bebek Bezleri,Bebek Odası Takımları, Beşikler,Yataklar,Oyun parkları, Oyun Halı&Matı, Bebek Arabası, Oto Koltuğu
"
        id="hpsbrdk41"
      >
        Anne Bakım Ürünleri, Bebek Bakım Ürünleri, Islak Mendiller, Bebek
        Bezleri,Bebek Odası Takımları, Beşikler,Yataklar,Oyun parkları, Oyun
        Halı&Matı, Bebek Arabası, Oto Koltuğu
      </option>
      <option
        value="Cilt Bakımı, Güneş Ürünleri, Saç Bakım Ürünleri
"
        id="hpsbrdk42"
      >
        Cilt Bakımı, Güneş Ürünleri, Saç Bakım Ürünleri
      </option>
      <option
        value="Oje, Ruj, Eyeliner, Rimel, Fondoten, Pudra, Allık, Highlighter, Far ve Far Paletleri, Makyaj Temizleme Ürünleri, Maskara
"
        id="hpsbrdk43"
      >
        Oje, Ruj, Eyeliner, Rimel, Fondoten, Pudra, Allık, Highlighter, Far ve
        Far Paletleri, Makyaj Temizleme Ürünleri, Maskara
      </option>
      <option
        value="Kedi Maması, Köpek Maması, Yem, Bisküvi, Kraker, Ödül, Vitamin
"
        id="hpsbrdk44"
      >
        Kedi Maması, Köpek Maması, Yem, Bisküvi, Kraker, Ödül, Vitamin
      </option>
      <option
        value="Kedi Kumu, Kedi Bakım Ürünleri, Kedi Tuvalet Kabı ve Aksesuarları, Tırmalama Tahtası, Balık, Tuzlu Su Akvaryum Malzemeleri, Akvaryum Filtreleri, Hamster Ürünleri, Tavşan Ürünleri, Kaplumbağa Ürünleri, Diğer Petshop Ürünleri
"
        id="hpsbrdk45"
      >
        Kedi Kumu, Kedi Bakım Ürünleri, Kedi Tuvalet Kabı ve Aksesuarları,
        Tırmalama Tahtası, Balık, Tuzlu Su Akvaryum Malzemeleri, Akvaryum
        Filtreleri, Hamster Ürünleri, Tavşan Ürünleri, Kaplumbağa Ürünleri,
        Diğer Petshop Ürünleri
      </option>
      <option
        value="Diş Fırçaları, Diş İpleri, Gargara, Diş Macunu
"
        id="hpsbrdk46"
      >
        Diş Fırçaları, Diş İpleri, Gargara, Diş Macunu
      </option>
      <option
        value="Sağlık Ürünleri, Aile Planlaması Ürünleri, Yetişkin Ürünler +18, Besin Takviyeleri, Duş ve Banyo Ürünleri, Deodorant, Medikal Ürünler, Kadın Pedleri & Hijyen Ürünleri, Sporcu Besinleri
"
        id="hpsbrdk47"
      >
        Sağlık Ürünleri, Aile Planlaması Ürünleri, Yetişkin Ürünler +18, Besin
        Takviyeleri, Duş ve Banyo Ürünleri, Deodorant, Medikal Ürünler, Kadın
        Pedleri & Hijyen Ürünleri, Sporcu Besinleri
      </option>
      <option
        value="Güzellik Salonu & Kuaför Ürünleri, Ayak & Tırnak Bakımı, Tıraş, Ağda ve Epilasyon, Erkek Tıraş Ürünleri
"
        id="hpsbrdk48"
      >
        Güzellik Salonu & Kuaför Ürünleri, Ayak & Tırnak Bakımı, Tıraş, Ağda ve
        Epilasyon, Erkek Tıraş Ürünleri
      </option>
      <option
        value="Yüzey Temizleyiciler, Bulaşık Deterjanları, Çamaşır Deterjanları & Kapsülleri, Yumuşatıcı, Leke Çıkarıcı, Toz Deterjan, Sıvı Deterjan
"
        id="hpsbrdk49"
      >
        Yüzey Temizleyiciler, Bulaşık Deterjanları, Çamaşır Deterjanları &
        Kapsülleri, Yumuşatıcı, Leke Çıkarıcı, Toz Deterjan, Sıvı Deterjan
      </option>
      <option
        value="Peçete, Kağıt Havlu, Tuvalet Kağıdı, Kullan At Ürünler
"
        id="hpsbrdk50"
      >
        Peçete, Kağıt Havlu, Tuvalet Kağıdı, Kullan At Ürünler
      </option>
      <option
        value="Çay, Kahve, Gazlı İçecekler, Şuruplar, Soslar, Hazır Yemek, Konserve, Bisküvi, Kraker, Beslenme Diyet Ürünler
"
        id="hpsbrdk51"
      >
        Çay, Kahve, Gazlı İçecekler, Şuruplar, Soslar, Hazır Yemek, Konserve,
        Bisküvi, Kraker, Beslenme Diyet Ürünler
      </option>
      <option
        value="Kovan Dezenfektan Pompası, Arıcı Maskesi, Arıcı Tulumu, Körük, Arı Kapanı, Arıcı Eldiveni, Bal Tenekesi
"
        id="hpsbrdk52"
      >
        Kovan Dezenfektan Pompası, Arıcı Maskesi, Arıcı Tulumu, Körük, Arı
        Kapanı, Arıcı Eldiveni, Bal Tenekesi
      </option>
      <option
        value="Bahçe Dekorasyonu, Bahçe Kovucular, Çiçek Bakımı & Bitki Yetiştirme, Havuz Ürünleri
"
        id="hpsbrdk53"
      >
        Bahçe Dekorasyonu, Bahçe Kovucular, Çiçek Bakımı & Bitki Yetiştirme,
        Havuz Ürünleri
      </option>
      <option
        value="Bahçe Makineleri, Havuz Ürünleri, Küçük El Aletleri, Elektrikli El Aletleri, Manuel El Aletleri
"
        id="hpsbrdk54"
      >
        Bahçe Makineleri, Havuz Ürünleri, Küçük El Aletleri, Elektrikli El
        Aletleri, Manuel El Aletleri
      </option>
      <option
        value="Bahçe Masası, Bahçe Sandalyesi, Bahçe Salıncağı, Bahçe Oturma Grubu, Puf, Minder, Şezlong, Hamak
"
        id="hpsbrdk55"
      >
        Bahçe Masası, Bahçe Sandalyesi, Bahçe Salıncağı, Bahçe Oturma Grubu,
        Puf, Minder, Şezlong, Hamak
      </option>
      <option
        value="Bungalov Ev,  Ahşap Çocuk Oyun Evi
"
        id="hpsbrdk56"
      >
        Bungalov Ev,  Ahşap Çocuk Oyun Evi
      </option>
      <option
        value="Mangal / Barbekü, Mangal Aksesuarları, Piknik Seti
"
        id="hpsbrdk57"
      >
        Mangal / Barbekü, Mangal Aksesuarları, Piknik Seti
      </option>
      <option
        value="Banyo Yapı Malzemeleri, Elektrikli El Aletleri ve Aksesuarları, Güvenlik Ürünleri, Hırdavat, İnşaat Malzemeleri, Küçük El Aletleri, Elektrikli El Aletleri, Manuel El Aletleri
"
        id="hpsbrdk58"
      >
        Banyo Yapı Malzemeleri, Elektrikli El Aletleri ve Aksesuarları, Güvenlik
        Ürünleri, Hırdavat, İnşaat Malzemeleri, Küçük El Aletleri, Elektrikli El
        Aletleri, Manuel El Aletleri
      </option>
      <option
        value="Elektrik ve aydınlatma ürünleri, Plafoyerler, Abarjurlar, Avizeler,Sarkıt Avizeler, Aplikler, Lambaderler, Masa Lambaları, Gece Lambaları, Dekoratif Aydınlatmalar, Yılbaşı Aydınlatmaları, Çocuk Odası Aydınlatmaları"
        id="hpsbrdk59"
      >
        Elektrik ve aydınlatma ürünleri, Plafoyerler, Abarjurlar,
        Avizeler,Sarkıt Avizeler, Aplikler, Lambaderler, Masa Lambaları, Gece
        Lambaları, Dekoratif Aydınlatmalar, Yılbaşı Aydınlatmaları, Çocuk Odası
        Aydınlatmaları
      </option>
      <option
        value="Benzinli ve Dizel Jeneratörler
"
        id="hpsbrdk60"
      >
        Benzinli ve Dizel Jeneratörler
      </option>
      <option
        value="Yataklar, Perdeler, Nevresim Takımları, Yastıklar, Yorganlar, Yatak Örtüleri, Pike Takımları, Alez, Battaniyeler, Koltuk Örtüleri, Uyku Setleri, Çarşaf ve Yastık Kılıfı, Dekoratif Kırtlentler,
"
        id="hpsbrdk61"
      >
        Yataklar, Perdeler, Nevresim Takımları, Yastıklar, Yorganlar, Yatak
        Örtüleri, Pike Takımları, Alez, Battaniyeler, Koltuk Örtüleri, Uyku
        Setleri, Çarşaf ve Yastık Kılıfı, Dekoratif Kırtlentler,
      </option>
      <option
        value="Halı, Kilim, Yer Paspasları, Yolluklar
"
        id="hpsbrdk62"
      >
        Halı, Kilim, Yer Paspasları, Yolluklar
      </option>
      <option
        value="Bornoz Setleri, Banyo Klozet Takımları, Havlular
"
        id="hpsbrdk63"
      >
        Bornoz Setleri, Banyo Klozet Takımları, Havlular
      </option>
      <option
        value="Mutfak Tekstili, Masa Örtüleri, Fırın Eldivenleri, Runner
"
        id="hpsbrdk64"
      >
        Mutfak Tekstili, Masa Örtüleri, Fırın Eldivenleri, Runner
      </option>
      <option
        value="Dekorasyon, Tekstil Saklama Ürünleri
"
        id="hpsbrdk65"
      >
        Dekorasyon, Tekstil Saklama Ürünleri
      </option>
      <option
        value="Ofis Masası, Ofis Sandalyesi, Bekleme Koltukları, Ofis Çöp Kovası,Dosya Dolapları
"
        id="hpsbrdk66"
      >
        Ofis Masası, Ofis Sandalyesi, Bekleme Koltukları, Ofis Çöp Kovası,Dosya
        Dolapları
      </option>
      <option
        value="Mobilya, Sandalyeler, Koltuklar, Tabureler
"
        id="hpsbrdk67"
      >
        Mobilya, Sandalyeler, Koltuklar, Tabureler
      </option>
      <option
        value="Yatak Odası Takımları, Genç Odası Takımları
"
        id="hpsbrdk68"
      >
        Yatak Odası Takımları, Genç Odası Takımları
      </option>
      <option
        value="Sofra Mutfak  Gereçleri, Tencereler, Tavalar, Düdüklü Tencelere, Ev Gereçleri, Yemek Takımı, Cam Ürünleri, Porselenler, Çatal / Katış / Bıçak Takımları, Çaydanlık & Cezveler, Servis Tabakları,Pratik Ev Gereçleri
"
        id="hpsbrdk69"
      >
        Sofra Mutfak  Gereçleri, Tencereler, Tavalar, Düdüklü Tencelere, Ev
        Gereçleri, Yemek Takımı, Cam Ürünleri, Porselenler, Çatal / Katış /
        Bıçak Takımları, Çaydanlık & Cezveler, Servis Tabakları,Pratik Ev
        Gereçleri
      </option>
      <option
        value="Bebekler, Akülü Araçlar, Araba, Müzik Kutuları, Pedallı Araçlar, Oyun Hamurları, Ahşap Oyuncaklar, Bebek Oyuncakları, Çocuk Bisikletleri, Çocuk Scooterları
"
        id="hpsbrdk70"
      >
        Bebekler, Akülü Araçlar, Araba, Müzik Kutuları, Pedallı Araçlar, Oyun
        Hamurları, Ahşap Oyuncaklar, Bebek Oyuncakları, Çocuk Bisikletleri,
        Çocuk Scooterları
      </option>
      <option
        value="Araç içi Telefon Tutucular, Bluetooth Araç Kiti, Powerbank, Şarj Cihazları & Kabloları,  Bluetooth Kulaklıklar
"
        id="hpsbrdk71"
      >
        Araç içi Telefon Tutucular, Bluetooth Araç Kiti, Powerbank, Şarj
        Cihazları & Kabloları,  Bluetooth Kulaklıklar
      </option>
      <option
        value="Kapak & Kılıf, Ekran Koruyucu Film,  Oyun Aksesuarları,  Selfie Çubuğu, Kablolar, Multimedya Ürünleri, Diğer Aksesuarlar
"
        id="hpsbrdk72"
      >
        Kapak & Kılıf, Ekran Koruyucu Film,  Oyun Aksesuarları,  Selfie Çubuğu,
        Kablolar, Multimedya Ürünleri, Diğer Aksesuarlar
      </option>
      <option
        value="Cep tel kulaklık, Kulaklık, Bluetooth Kulaklık, Kulaklık Aksesuarları
"
        id="hpsbrdk73"
      >
        Cep tel kulaklık, Kulaklık, Bluetooth Kulaklık, Kulaklık Aksesuarları
      </option>
      <option
        value="Notebook Aksesuarları, Tablet Aksesuarları, Notebook Çantası, Data Kabloları
"
        id="hpsbrdk74"
      >
        Notebook Aksesuarları, Tablet Aksesuarları, Notebook Çantası, Data
        Kabloları
      </option>
      <option
        value="Batarya, Ekran, Kamera, Telefon Kasası, Tuş Takımı, Ahize
"
        id="hpsbrdk75"
      >
        Batarya, Ekran, Kamera, Telefon Kasası, Tuş Takımı, Ahize
      </option>
      <option
        value="Giyilebilir Teknoloji, Akıllı Saatler, Akıllı Bileklikler, Sanal Gerçeklik Gözlüğü, Giyilebilir Teknoloji Aksesuarları
"
        id="hpsbrdk76"
      >
        Giyilebilir Teknoloji, Akıllı Saatler, Akıllı Bileklikler, Sanal
        Gerçeklik Gözlüğü, Giyilebilir Teknoloji Aksesuarları
      </option>
      <option
        value="Telsiz Telefonlar, Masaüstü Telefonlar, Konferans Telefonları,Lisanssız Telsizler
"
        id="hpsbrdk77"
      >
        Telsiz Telefonlar, Masaüstü Telefonlar, Konferans Telefonları,Lisanssız
        Telsizler
      </option>
      <option
        value="Film, Sinema Bileti, Poster
"
        id="hpsbrdk78"
      >
        Film, Sinema Bileti, Poster
      </option>
      <option
        value="Edebiyat, Eğitim, Akademik Kitaplar, Hobi Kitapları, Çocuk Kitapları, Kitap Ayraçları, E-Kitap, Online Eğitim, Ön Ödemeli Kartlar
"
        id="hpsbrdk79"
      >
        Edebiyat, Eğitim, Akademik Kitaplar, Hobi Kitapları, Çocuk Kitapları,
        Kitap Ayraçları, E-Kitap, Online Eğitim, Ön Ödemeli Kartlar
      </option>
      <option
        value="Amfi, Bateriler, Davullar, Kabin, Hoparlör, Monitör, Kayıt Teknolojileri, Kulaklık, Mikrofon, Mixer, Akordiyonlar, Stüdyo & DJ Ekipmanları, Pikap, Plak, Telli Çalgılar, Orglar, Piyanolar,Gitarlar, Müzik (Diğer)
"
        id="hpsbrdk80"
      >
        Amfi, Bateriler, Davullar, Kabin, Hoparlör, Monitör, Kayıt
        Teknolojileri, Kulaklık, Mikrofon, Mixer, Akordiyonlar, Stüdyo & DJ
        Ekipmanları, Pikap, Plak, Telli Çalgılar, Orglar, Piyanolar,Gitarlar,
        Müzik (Diğer)
      </option>
      <option
        value="Albüm, Işık Sistemleri, Müzik Ekipmanları – Aksesuarları, Müzikal Hediyelikler, Nefesli Çalgılar, Vurmalı Çalgılar – Perküsyon, Yaylı Çalgılar
"
        id="hpsbrdk81"
      >
        Albüm, Işık Sistemleri, Müzik Ekipmanları – Aksesuarları, Müzikal
        Hediyelikler, Nefesli Çalgılar, Vurmalı Çalgılar – Perküsyon, Yaylı
        Çalgılar
      </option>
      <option
        value="Ofis Makineleri, Yazar Kasa POS
"
        id="hpsbrdk82"
      >
        Ofis Makineleri, Yazar Kasa POS
      </option>
      <option
        value="Fotokopi Kağıtları, A4 Kağıtlar, A3 Kağıtlar
"
        id="hpsbrdk83"
      >
        Fotokopi Kağıtları, A4 Kağıtlar, A3 Kağıtlar
      </option>
      <option
        value="Kalem ve Yazı Ürünleri, Kırtasiye Ürünleri, Dosyalar, Ayraçlar, Sanatsal Malzemeler, Akrilik Boya, Yağlı Boya, Tuvaller, Resim Kalemleri
"
        id="hpsbrdk84"
      >
        Kalem ve Yazı Ürünleri, Kırtasiye Ürünleri, Dosyalar, Ayraçlar, Sanatsal
        Malzemeler, Akrilik Boya, Yağlı Boya, Tuvaller, Resim Kalemleri
      </option>
      <option
        value="PS4 Konsol, PS3 Konsol, Xbox 360 Konsol, Xbox One Konsol, Nintendo Konsol, Diğer Konsollar
"
        id="hpsbrdk85"
      >
        PS4 Konsol, PS3 Konsol, Xbox 360 Konsol, Xbox One Konsol, Nintendo
        Konsol, Diğer Konsollar
      </option>
      <option
        value="PS4 Oyunları, PS3 Oyunları, Xbox 360 Oyunları, Xbox One Oyunları, Nintendo Oyunları,Bilgisayar Oyunları, PSP Oyunları, Diğer Oyunlar
"
        id="hpsbrdk86"
      >
        PS4 Oyunları, PS3 Oyunları, Xbox 360 Oyunları, Xbox One Oyunları,
        Nintendo Oyunları,Bilgisayar Oyunları, PSP Oyunları, Diğer Oyunlar
      </option>
      <option
        value="PS4 Aksesuarlar, Playstation 4 VR, PS3 Aksesuarlar, Xbox 360 Aksesuarları, Xbox One Aksesuarları, Nintendo Aksesuarları, PSP Aksesuarları, PS2 Aksesuarlar, PC Oyun Aksesuar, Simülasyon Aksesuarları
"
        id="hpsbrdk87"
      >
        PS4 Aksesuarlar, Playstation 4 VR, PS3 Aksesuarlar, Xbox 360
        Aksesuarları, Xbox One Aksesuarları, Nintendo Aksesuarları, PSP
        Aksesuarları, PS2 Aksesuarlar, PC Oyun Aksesuar, Simülasyon Aksesuarları
      </option>
      <option
        value="Dijital Oyun Kartları, Oyun Ödeme Kartları, Dijital Bilgisayar Oyunları, Dijital Konsol Oyunları
"
        id="hpsbrdk88"
      >
        Dijital Oyun Kartları, Oyun Ödeme Kartları, Dijital Bilgisayar Oyunları,
        Dijital Konsol Oyunları
      </option>
      <option
        value="Hobi, Oyun Eğlence Ürünleri, Kutu Oyunları, Puzzle, Akıl Oyunları,Uzaktan Kumandalı Arabalar, İlginç Ürünler, Kostüm ve Aksesuarları, Maket, Oyun Takımları, Fırsat Menüler, Gezi & Tatil Turu
"
        id="hpsbrdk89"
      >
        Hobi, Oyun Eğlence Ürünleri, Kutu Oyunları, Puzzle, Akıl
        Oyunları,Uzaktan Kumandalı Arabalar, İlginç Ürünler, Kostüm ve
        Aksesuarları, Maket, Oyun Takımları, Fırsat Menüler, Gezi & Tatil Turu
      </option>
      <option
        value="Kablolar, Switchbox ve Çoklayıcılar, Ses ve Görüntü Kabloları, Akım Koruyucu, Temizlik Ürünleri, Kablo & Soketler, Uydu Alıcıları ve Aksesuarlari, Uzaktan Kumandalar, Alarm Saatli Radyolar, Monitör Aksesuarları, CD/DVD Aksesuarları, 3D TV gözlükleri, Ses Kayıt Cihazı, Dokunmatik Pos PC, Mikrofonlar, Dvd vcd oynatıcı, MP3 Player, CD / DVD Çantaları, Elektronik Sözlük, Kablosuz Ses ve Görüntü Aktarıcıları, HDD/CD-ROM Kutuları,Yedekleme Kartuş,Çizici (Plotter), Optik Ürünleri, Ekran Temizleme Ürünleri, Hoparlör Ayakları & Askıları, TV askı aparatları, CD/DVD Baskı Yazıcıları, TV Ekran Koruyucular
"
        id="hpsbrdk90"
      >
        Kablolar, Switchbox ve Çoklayıcılar, Ses ve Görüntü Kabloları, Akım
        Koruyucu, Temizlik Ürünleri, Kablo & Soketler, Uydu Alıcıları ve
        Aksesuarlari, Uzaktan Kumandalar, Alarm Saatli Radyolar, Monitör
        Aksesuarları, CD/DVD Aksesuarları, 3D TV gözlükleri, Ses Kayıt Cihazı,
        Dokunmatik Pos PC, Mikrofonlar, Dvd vcd oynatıcı, MP3 Player, CD / DVD
        Çantaları, Elektronik Sözlük, Kablosuz Ses ve Görüntü Aktarıcıları,
        HDD/CD-ROM Kutuları,Yedekleme Kartuş,Çizici (Plotter), Optik Ürünleri,
        Ekran Temizleme Ürünleri, Hoparlör Ayakları & Askıları, TV askı
        aparatları, CD/DVD Baskı Yazıcıları, TV Ekran Koruyucular
      </option>
      <option
        value="Ek Güvence Paketleri TV, Dijital Yayın Paketleri
"
        id="hpsbrdk91"
      >
        Ek Güvence Paketleri TV, Dijital Yayın Paketleri
      </option>
      <option
        value="Ev Sinema Sistemleri, 3D Televizyon Gözlükleri, DVD&VCD Oynatıcı, DVR Kayıt Cihazı, Kablosuz Ses ve Görüntü Aktarıcılar, Müzik Setleri, Portatif Sistemler, Stereo Amfi, Taşınabilir Amfi Hoparlör, Receiver Amfi, Soundbar, Subwoorfer, Speaker
"
        id="hpsbrdk92"
      >
        Ev Sinema Sistemleri, 3D Televizyon Gözlükleri, DVD&VCD Oynatıcı, DVR
        Kayıt Cihazı, Kablosuz Ses ve Görüntü Aktarıcılar, Müzik Setleri,
        Portatif Sistemler, Stereo Amfi, Taşınabilir Amfi Hoparlör, Receiver
        Amfi, Soundbar, Subwoorfer, Speaker
      </option>
      <option
        value="Güvenlik Kamerası, Dedektör, Alarm Sistemleri, Alarm Sistemleri,Aksesuarları, Webcam
"
        id="hpsbrdk93"
      >
        Güvenlik Kamerası, Dedektör, Alarm Sistemleri, Alarm
        Sistemleri,Aksesuarları, Webcam
      </option>
      <option
        value="Dijital Dergi,E-kitap,Etkinlik, Aktivite,Fırsat Menüleri,Online Lisans,Sinema Bileti,Spor Hizmet Online Eğitimler,Oyun Pinleri,Dijital Oyunlar
"
        id="hpsbrdk94"
      >
        Dijital Dergi,E-kitap,Etkinlik, Aktivite,Fırsat Menüleri,Online
        Lisans,Sinema Bileti,Spor Hizmet Online Eğitimler,Oyun Pinleri,Dijital
        Oyunlar
      </option>
      <option
        value="Film, Dizi, Yayın Paketleri,Gezi & Tatil Turları,Kuru Temizleme,Sesli Kitap
"
        id="hpsbrdk95"
      >
        Film, Dizi, Yayın Paketleri,Gezi & Tatil Turları,Kuru Temizleme,Sesli
        Kitap
      </option>`;
  } else if (pazaryeri.value == pazaryeriN11.value) {
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // --------------------N11------------------------------
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    kategori.innerHTML = `<option
        value="2. El Antika & Koleksiyon
"
        id="n11k1"
      >
        2. El Antika & Koleksiyon
      </option>
      <option
        value="3 Tekerlekli Bebek Arabası
"
        id="n11k2"
      >
        3 Tekerlekli Bebek Arabası
      </option>
      <option
        value="Ağda, Epilasyon Tüy Alma
"
        id="n11k3"
      >
        Ağda, Epilasyon Tüy Alma
      </option>
      <option
        value="Ağız, Diş ve Banyo Ürünleri
"
        id="n11k4"
      >
        Ağız, Diş ve Banyo Ürünleri
      </option>
      <option
        value="Ağrı Giderici & Tens Cihazları
"
        id="n11k5"
      >
        Ağrı Giderici & Tens Cihazları
      </option>
      <option
        value="Akıllı Ev Sistemleri
"
        id="n11k6"
      >
        Akıllı Ev Sistemleri
      </option>
      <option
        value="Aksesuar
"
        id="n11k7"
      >
        Aksesuar
      </option>
      <option
        value="Aksesuar & Yedek Parça
"
        id="n11k8"
      >
        Aksesuar & Yedek Parça
      </option>
      <option
        value="Akülü Vidalama	12%	n11
"
        id="n11k9"
      >
        Akülü Vidalama 12% n11
      </option>
      <option
        value="Alt Açma Pedi & Minderi
"
        id="n11k10"
      >
        Alt Açma Pedi & Minderi
      </option>
      <option
        value="Altın Takılar	20%	n11
"
        id="n11k11"
      >
        Altın Takılar 20% n11
      </option>
      <option
        value="Ankastre	8%	n11
"
        id="n11k12"
      >
        Ankastre
      </option>
      <option
        value="Antre
"
        id="n11k13"
      >
        Antre
      </option>
      <option
        value="Asistans
"
        id="n11k14"
      >
        Asistans
      </option>
      <option
        value="Aspiratör
"
        id="n11k15"
      >
        Aspiratör
      </option>
      <option
        value="Ateş Ölçer
"
        id="n11k16"
      >
        Ateş Ölçer
      </option>
      <option
        value="Ayakkabı Bakım Ürünleri
"
        id="n11k17"
      >
        Ayakkabı Bakım Ürünleri
      </option>
      <option
        value="Aydınlatma
"
        id="n11k18"
      >
        Aydınlatma
      </option>
      <option
        value="Ayna
"
        id="n11k19"
      >
        Ayna
      </option>
      <option
        value="Bahçe Makineleri
"
        id="n11k20"
      >
        Bahçe Makineleri
      </option>
      <option
        value="Bahçe Mobilyası
"
        id="n11k21"
      >
        Bahçe Mobilyası
      </option>
      <option
        value="Bahçe Sulama
"
        id="n11k22"
      >
        Bahçe Sulama
      </option>
      <option
        value="Bahçe ve Çiçek
"
        id="n11k23"
      >
        Bahçe ve Çiçek
      </option>
      <option
        value="Balık
"
        id="n11k24"
      >
        Balık
      </option>
      <option
        value="Balık Bulucu
"
        id="n11k25"
      >
        Balık Bulucu
      </option>
      <option
        value="Balıkçı Kıyafetleri
"
        id="n11k26"
      >
        Balıkçı Kıyafetleri
      </option>
      <option
        value="Banyo Mobilyası
"
        id="n11k27"
      >
        Banyo Mobilyası
      </option>
      <option
        value="Banyo Seti
"
        id="n11k28"
      >
        Banyo Seti
      </option>
      <option
        value="Banyo Süngeri & Kese
"
        id="n11k29"
      >
        Banyo Süngeri & Kese
      </option>
      <option
        value="Banyo Tekstili
"
        id="n11k30"
      >
        Banyo Tekstili
      </option>
      <option
        value="Banyo Ürünleri
"
        id="n11k31"
      >
        Banyo Ürünleri
      </option>
      <option
        value="Banyo ve Aksesuarları
"
        id="n11k32"
      >
        Banyo ve Aksesuarları
      </option>
      <option
        value="Baskül
"
        id="n11k33"
      >
        Baskül
      </option>
      <option
        value="Baston Pusetler
"
        id="n11k34"
      >
        Baston Pusetler
      </option>
      <option
        value="Bavul & Valiz
"
        id="n11k35"
      >
        Bavul & Valiz
      </option>
      <option
        value="Bebek Arabası Aksesuar
"
        id="n11k36"
      >
        Bebek Arabası Aksesuar
      </option>
      <option
        value="Bebek Bezi
"
        id="n11k37"
      >
        Bebek Bezi
      </option>
      <option
        value="Bebek Maması
"
        id="n11k38"
      >
        Bebek Maması
      </option>
      <option
        value="Bebek Odası Dekorasyon
"
        id="n11k39"
      >
        Bebek Odası Dekorasyon
      </option>
      <option
        value="Bebek Odası Mobilyası
"
        id="n11k40"
      >
        Bebek Odası Mobilyası
      </option>
      <option
        value="Bebek Odası Tekstili
"
        id="n11k41"
      >
        Bebek Odası Tekstili
      </option>
      <option
        value="Bebek Oyuncakları
"
        id="n11k42"
      >
        Bebek Oyuncakları
      </option>
      <option
        value="Bebek Telsizi & Kamera
"
        id="n11k43"
      >
        Bebek Telsizi & Kamera
      </option>
      <option
        value="Beşik, Park, Yatak, Salıncak
"
        id="n11k44"
      >
        Beşik, Park, Yatak, Salıncak
      </option>
      <option
        value="Beyaz Eşya Setleri
"
        id="n11k45"
      >
        Beyaz Eşya Setleri
      </option>
      <option
        value="Biberon
"
        id="n11k46"
      >
        Biberon
      </option>
      <option
        value="Bijuteri Takılar
"
        id="n11k47"
      >
        Bijuteri Takılar
      </option>
      <option
        value="Bilgisayar Bileşenleri
"
        id="n11k48"
      >
        Bilgisayar Bileşenleri
      </option>
      <option
        value="Bireysel Takım Sporları
"
        id="n11k49"
      >
        Bireysel Takım Sporları
      </option>
      <option
        value="Bisiklet ve Scooter
"
        id="n11k50"
      >
        Bisiklet ve Scooter
      </option>
      <option
        value="Boya ve Boya Malzemeleri
"
        id="n11k51"
      >
        Boya ve Boya Malzemeleri
      </option>
      <option
        value="Bulaşık Makinası
"
        id="n11k52"
      >
        Bulaşık Makinası
      </option>
      <option
        value="Buzdolabı
"
        id="n11k53"
      >
        Buzdolabı
      </option>
      <option
        value="Cep Telefonu
"
        id="n11k54"
      >
        Cep Telefonu
      </option>
      <option
        value="Cep Telefonu Aksesuarları
"
        id="n11k55"
      >
        Cep Telefonu Aksesuarları
      </option>
      <option
        value="Cep Telefonu Yedek Parça
"
        id="n11k56"
      >
        Cep Telefonu Yedek Parça
      </option>
      <option
        value="Cinsel Sağlık Ürünleri
"
        id="n11k57"
      >
        Cinsel Sağlık Ürünleri
      </option>
      <option
        value="Çamaşır Makinası
"
        id="n11k58"
      >
        Çamaşır Makinası
      </option>
      <option
        value="Çanta & Kılıf
"
        id="n11k59"
      >
        Çanta & Kılıf
      </option>
      <option
        value="Çelik Takılar
"
        id="n11k60"
      >
        Çelik Takılar
      </option>
      <option
        value="Çevre Birimleri
"
        id="n11k61"
      >
        Çevre Birimleri
      </option>
      <option
        value="Çeyiz Setleri
"
        id="n11k62"
      >
        Çeyiz Setleri
      </option>
      <option
        value="Çift Yönlü Bebek Arabası
"
        id="n11k63"
      >
        Çift Yönlü Bebek Arabası
      </option>
      <option
        value="Çocuk & Genç Odası
"
        id="n11k64"
      >
        Çocuk & Genç Odası
      </option>
      <option
        value="Çocuk Ayakkabı
"
        id="n11k65"
      >
        Çocuk Ayakkabı
      </option>
      <option
        value="Çocuk Bisikleti & Scooter
"
        id="n11k66"
      >
        Çocuk Bisikleti & Scooter
      </option>
      <option
        value="Çocuk Giyim
"
        id="n11k67"
      >
        Çocuk Giyim
      </option>
      <option
        value="Deodorant & Roll-On
"
        id="n11k68"
      >
        Deodorant & Roll-On
      </option>
      <option
        value="Derin Dondurucu
"
        id="n11k69"
      >
        Derin Dondurucu
      </option>
      <option
        value="Deterjan & Temizlik
"
        id="n11k70"
      >
        Deterjan & Temizlik
      </option>
      <option
        value="Dış Giyim
"
        id="n11k71"
      >
        Dış Giyim
      </option>
      <option
        value="Diğer
"
        id="n11k72"
      >
        Diğer
      </option>
      <option
        value="Dijital Kart & Kuponlar
"
        id="n11k73"
      >
        Dijital Kart & Kuponlar
      </option>
      <option
        value="Dijital Oyunlar
"
        id="n11k74"
      >
        Dijital Oyunlar
      </option>
      <option
        value="Dijital Üyelikler
"
        id="n11k75"
      >
        Dijital Üyelikler
      </option>
      <option
        value="Dikiş Makinesi
"
        id="n11k76"
      >
        Dikiş Makinesi
      </option>
      <option
        value="Diş Kaşıyıcı & Çıngırak
"
        id="n11k77"
      >
        Diş Kaşıyıcı & Çıngırak
      </option>
      <option
        value="Dizüstü Bilgisayar
"
        id="n11k78"
      >
        Dizüstü Bilgisayar
      </option>
      <option
        value="Duvar Kağıdı
"
        id="n11k79"
      >
        Duvar Kağıdı
      </option>
      <option
        value="Düğün, Davet Organizasyon
"
        id="n11k80"
      >
        Düğün, Davet Organizasyon
      </option>
      <option
        value="DVD, BluRay, Medya Oynatıcı
"
        id="n11k81"
      >
        DVD, BluRay, Medya Oynatıcı
      </option>
      <option
        value="Egzoz
"
        id="n11k82"
      >
        Egzoz
      </option>
      <option
        value="El Aletleri
"
        id="n11k83"
      >
        El Aletleri
      </option>
      <option
        value="El, Ayak, Tırnak Bakımı
"
        id="n11k84"
      >
        El, Ayak, Tırnak Bakımı
      </option>
      <option
        value="Elektrik & Aydınlatma
"
        id="n11k85"
      >
        Elektrik & Aydınlatma
      </option>
      <option
        value="Elektrikli Aletler
"
        id="n11k86"
      >
        Elektrikli Aletler
      </option>
      <option
        value="Elektrikli Mutfak Aletleri
"
        id="n11k87"
      >
        Elektrikli Mutfak Aletleri
      </option>
      <option
        value="Elektrikli Süpürge & Yıkama
"
        id="n11k88"
      >
        Elektrikli Süpürge & Yıkama
      </option>
      <option
        value="Emzik ve Aksesuarları
"
        id="n11k89"
      >
        Emzik ve Aksesuarları
      </option>
      <option
        value="Emzirme Sütyeni
"
        id="n11k90"
      >
        Emzirme Sütyeni
      </option>
      <option
        value="Erkek Ayakkabı
"
        id="n11k91"
      >
        Erkek Ayakkabı
      </option>
      <option
        value="Erkek Bebek
"
        id="n11k92"
      >
        Erkek Bebek
      </option>
      <option
        value="Erkek Çanta
"
        id="n11k93"
      >
        Erkek Çanta
      </option>
      <option
        value="Erkek Giyim ve Aksesuar
"
        id="n11k94"
      >
        Erkek Giyim ve Aksesuar
      </option>
      <option
        value="Erkek Parfüm
"
        id="n11k95"
      >
        Erkek Parfüm
      </option>
      <option
        value="Ev & Dekorasyon
"
        id="n11k96"
      >
        Ev & Dekorasyon
      </option>
      <option
        value="Ev & Dekotarif Aksesuarlar
"
        id="n11k97"
      >
        Ev & Dekotarif Aksesuarlar
      </option>
      <option
        value="Ev Gereçleri & Düzenleme
"
        id="n11k98"
      >
        Ev Gereçleri & Düzenleme
      </option>
      <option
        value="Ev Güvenlik Ürünleri
"
        id="n11k99"
      >
        Ev Güvenlik Ürünleri
      </option>
      <option
        value="Ev Tekstili
"
        id="n11k100"
      >
        Ev Tekstili
      </option>
      <option
        value="Ev Tipi Ana Kucağı
"
        id="n11k101"
      >
        Ev Tipi Ana Kucağı
      </option>
      <option
        value="Fantezi Giyim
"
        id="n11k102"
      >
        Fantezi Giyim
      </option>
      <option
        value="Far & Aydınlatma
"
        id="n11k103"
      >
        Far & Aydınlatma
      </option>
      <option
        value="Film
"
        id="n11k104"
      >
        Film
      </option>
      <option
        value="Fitness ve Kondisyon
"
        id="n11k105"
      >
        Fitness ve Kondisyon
      </option>
      <option
        value="Fotoğraf Makinesi
"
        id="n11k106"
      >
        Fotoğraf Makinesi
      </option>
      <option
        value="Fotoğraf Makinesi Aksesuarları
"
        id="n11k107"
      >
        Fotoğraf Makinesi Aksesuarları
      </option>
      <option
        value="Gardırop
"
        id="n11k108"
      >
        Gardırop
      </option>
      <option
        value="Genital Ürünler
"
        id="n11k109"
      >
        Genital Ürünler
      </option>
      <option
        value="Gıda & Şekerleme
"
        id="n11k110"
      >
        Gıda & Şekerleme
      </option>
      <option
        value="Giyilebilir Teknoloji
"
        id="n11k111"
      >
        Giyilebilir Teknoloji
      </option>
      <option
        value="Göğüs Kremi,Aksesuarları
"
        id="n11k112"
      >
        Göğüs Kremi,Aksesuarları
      </option>
      <option
        value="Gümüş Takılar
"
        id="n11k113"
      >
        Gümüş Takılar
      </option>
      <option
        value="Güneş Gözlüğü
"
        id="n11k114"
      >
        Güneş Gözlüğü
      </option>
      <option
        value="Güneş ve Bronzluk Ürünleri
"
        id="n11k115"
      >
        Güneş ve Bronzluk Ürünleri
      </option>
      <option
        value="Güzellik Salonu ve Kuaför Ürünleri
"
        id="n11k116"
      >
        Güzellik Salonu ve Kuaför Ürünleri
      </option>
      <option
        value="Halı & Kilim
"
        id="n11k117"
      >
        Halı & Kilim
      </option>
      <option
        value="Hava Nemlendiriciler
"
        id="n11k118"
      >
        Hava Nemlendiriciler
      </option>
      <option
        value="Hava Temizleme Cihazları
"
        id="n11k1119"
      >
        Hava Temizleme Cihazları
      </option>
      <option
        value="Hediyelik Eşya
"
        id="n11k120"
      >
        Hediyelik Eşya
      </option>
      <option
        value="Hoparlörler
"
        id="n11k121"
      >
        Hoparlörler
      </option>
      <option
        value="Ipad & Tablet
"
        id="n11k122"
      >
        Ipad & Tablet
      </option>
      <option
        value="Isıtma Soğutma
"
        id="n11k123"
      >
        Isıtma Soğutma
      </option>
      <option
        value="Islak Mendil & Havlu
"
        id="n11k124"
      >
        Islak Mendil & Havlu
      </option>
      <option
        value="İç Giyim
"
        id="n11k125"
      >
        İç Giyim
      </option>
      <option
        value="İçecek
"
        id="n11k126"
      >
        İçecek
      </option>
      <option
        value="İğne, Fırdöndü, Kurşun
"
        id="n11k127"
      >
        İğne, Fırdöndü, Kurşun
      </option>
      <option
        value="İkinci El & Yenilenmiş Dizüstü Bilgisayarlar
"
        id="n11k128"
      >
        İkinci El & Yenilenmiş Dizüstü Bilgisayarlar
      </option>
      <option
        value="İkinci El & Yenilenmiş Telefonlar
"
        id="n11k129"
      >
        İkinci El & Yenilenmiş Telefonlar
      </option>
      <option
        value="İkinci El Araç
"
        id="n11k130"
      >
        İkinci El Araç
      </option>
      <option
        value="İkinci El Yenilenmiş Konsol
"
        id="n11k131"
      >
        İkinci El Yenilenmiş Konsol
      </option>
      <option
        value="İkinci El Yenilenmiş Konsol Aksesuarları
"
        id="n11k132"
      >
        İkinci El Yenilenmiş Konsol Aksesuarları
      </option>
      <option
        value="İkinci El Yenilenmiş Konsol Oyunları
"
        id="n11k133"
      >
        İkinci El Yenilenmiş Konsol Oyunları
      </option>
      <option
        value="İkiz Bebek Arabası
"
        id="n11k134"
      >
        İkiz Bebek Arabası
      </option>
      <option
        value="İlk Yardım ve Medikal Ürünler
"
        id="n11k135"
      >
        İlk Yardım ve Medikal Ürünler
      </option>
      <option
        value="Jeneratör
"
        id="n11k136"
      >
        Jeneratör
      </option>
      <option
        value="Kadın Ayakkabı
"
        id="n11k137"
      >
        Kadın Ayakkabı
      </option>
      <option
        value="Kadın Çanta
"
        id="n11k138"
      >
        Kadın Çanta
      </option>
      <option
        value="Kadın Giyim ve Aksesuar
"
        id="n11k139"
      >
        Kadın Giyim ve Aksesuar
      </option>
      <option
        value="Kadın Parfüm
"
        id="n11k140"
      >
        Kadın Parfüm
      </option>
      <option
        value="Kağıt Ürünleri
"
        id="n11k141"
      >
        Kağıt Ürünleri
      </option>
      <option
        value="Kalem ve Yazı Gereçleri
"
        id="n11k142"
      >
        Kalem ve Yazı Gereçleri
      </option>
      <option
        value="Kamp Malzemeleri
"
        id="n11k143"
      >
        Kamp Malzemeleri
      </option>
      <option
        value="Kanguru
"
        id="n11k144"
      >
        Kanguru
      </option>
      <option
        value="Kara Avı
"
        id="n11k145"
      >
        Kara Avı
      </option>
      <option
        value="Karavan ve Ekipmanları
"
        id="n11k146"
      >
        Karavan ve Ekipmanları
      </option>
      <option
        value="Karyola, Yatak, Baza
"
        id="n11k147"
      >
        Karyola, Yatak, Baza
      </option>
      <option
        value="Kask
"
        id="n11k148"
      >
        Kask
      </option>
      <option
        value="Kedi
"
        id="n11k149"
      >
        Kedi
      </option>
      <option
        value="Kemirgen
"
        id="n11k150"
      >
        Kemirgen
      </option>
      <option
        value="Kepçe & Livar
"
        id="n11k151"
      >
        Kepçe & Livar
      </option>
      <option
        value="Kırtasiye & Ofis
"
        id="n11k152"
      >
        Kırtasiye & Ofis
      </option>
      <option
        value="Kış Sporları
"
        id="n11k153"
      >
        Kış Sporları
      </option>
      <option
        value="Kıyafet ve Ekipman
"
        id="n11k154"
      >
        Kıyafet ve Ekipman
      </option>
      <option
        value="Kız Bebek
"
        id="n11k155"
      >
        Kız Bebek
      </option>
      <option
        value="Kilit & Köşe Koruyucusu
"
        id="n11k156"
      >
        Kilit & Köşe Koruyucusu
      </option>
      <option
        value="Kitap
"
        id="n11k157"
      >
        Kitap
      </option>
      <option
        value="Kitaplık & Raf
"
        id="n11k158"
      >
        Kitaplık & Raf
      </option>
      <option
        value="Komodin & Şifonyer
"
        id="n11k159"
      >
        Komodin & Şifonyer
      </option>
      <option
        value="Konsol Aksesuarları
"
        id="n11k160"
      >
        Konsol Aksesuarları
      </option>
      <option
        value="Konsol Oyunları
"
        id="n11k161"
      >
        Konsol Oyunları
      </option>
      <option
        value="Krom Aksesuar
"
        id="n11k162"
      >
        Krom Aksesuar
      </option>
      <option
        value="Kurutma Makinası
"
        id="n11k163"
      >
        Kurutma Makinası
      </option>
      <option
        value="Kuş
"
        id="n11k164"
      >
        Kuş
      </option>
      <option
        value="Küçük Mutfak Gereçleri
"
        id="n11k165"
      >
        Küçük Mutfak Gereçleri
      </option>
      <option
        value="Kültür Turları
"
        id="n11k166"
      >
        Kültür Turları
      </option>
      <option
        value="Lastik ve Jant
"
        id="n11k167"
      >
        Lastik ve Jant
      </option>
      <option
        value="Lens, Objektif, Filtre
"
        id="n11k168"
      >
        Lens, Objektif, Filtre
      </option>
      <option
        value="Maketler
"
        id="n11k169"
      >
        Maketler
      </option>
      <option
        value="Makyaj
"
        id="n11k170"
      >
        Makyaj
      </option>
      <option
        value="Mama Önlükleri & Ağız Bezleri
"
        id="n11k171"
      >
        Mama Önlükleri & Ağız Bezleri
      </option>
      <option
        value="Mama Tabağı & Kaşık
"
        id="n11k172"
      >
        Mama Tabağı & Kaşık
      </option>
      <option
        value="Mangal ve Barbekü
"
        id="n11k173"
      >
        Mangal ve Barbekü
      </option>
      <option
        value="Masaj Aletleri & Şilteleri
"
        id="n11k174"
      >
        Masaj Aletleri & Şilteleri
      </option>
      <option
        value="Masalar
"
        id="n11k175"
      >
        Masalar
      </option>
      <option
        value="Masaüstü Bilgisayar
"
        id="n11k176"
      >
        Masaüstü Bilgisayar
      </option>
      <option
        value="Maşrapa & Kova
"
        id="n11k177"
      >
        Maşrapa & Kova
      </option>
      <option
        value="Matkap ve Matkap Ucu
"
        id="n11k178"
      >
        Matkap ve Matkap Ucu
      </option>
      <option
        value="Meyve & Sebze
"
        id="n11k179"
      >
        Meyve & Sebze
      </option>
      <option
        value="Misinalar
"
        id="n11k180"
      >
        Misinalar
      </option>
      <option
        value="Mobilya
"
        id="n11k181"
      >
        Mobilya
      </option>
      <option
        value="Modem ve Ağ Ürünleri
"
        id="n11k182"
      >
        Modem ve Ağ Ürünleri
      </option>
      <option
        value="Motosiklet Modelleri
"
        id="n11k183"
      >
        Motosiklet Modelleri
      </option>
      <option
        value="MP3 & MP4 Çalar & Aksesuar
"
        id="n11k184"
      >
        MP3 & MP4 Çalar & Aksesuar
      </option>
      <option
        value="Mutfak Mobilyası
"
        id="n11k185"
      >
        Mutfak Mobilyası
      </option>
      <option
        value="Mutfak Tekstili
"
        id="n11k186"
      >
        Mutfak Tekstili
      </option>
      <option
        value="Müzik Aletleri
"
        id="n11k187"
      >
        Müzik Aletleri
      </option>
      <option
        value="Müzik Sistemleri
"
        id="n11k188"
      >
        Müzik Sistemleri
      </option>
      <option
        value="Nakliye & Montaj
"
        id="n11k189"
      >
        Nakliye & Montaj
      </option>
      <option
        value="Nalburiye & Hırdavat
"
        id="n11k190"
      >
        Nalburiye & Hırdavat
      </option>
      <option
        value="Nebulizatör
"
        id="n11k191"
      >
        Nebulizatör
      </option>
      <option
        value="OEM Yedek Parça
"
        id="n11k192"
      >
        OEM Yedek Parça
      </option>
      <option
        value="Ofis Elektroniği
"
        id="n11k193"
      >
        Ofis Elektroniği
      </option>
      <option
        value="Ofis Kırtasiyeleri
"
        id="n11k194"
      >
        Ofis Kırtasiyeleri
      </option>
      <option
        value="Ofis Makineleri
"
        id="n11k195"
      >
        Ofis Makineleri
      </option>
      <option
        value="Ofis Mobilyası
"
        id="n11k196"
      >
        Ofis Mobilyası
      </option>
      <option
        value="Olta & Kamışlar
"
        id="n11k197"
      >
        Olta & Kamışlar
      </option>
      <option
        value="Onarım ve Servis
"
        id="n11k198"
      >
        Onarım ve Servis
      </option>
      <option
        value="Ortopedik Ürünler
"
        id="n11k199"
      >
        Ortopedik Ürünler
      </option>
      <option
        value="Oto Bakım,Aksesuar
"
        id="n11k200"
      >
        Oto Bakım,Aksesuar
      </option>
      <option
        value="Oto Güvenlik Ürünleri
"
        id="n11k201"
      >
        Oto Güvenlik Ürünleri
      </option>
      <option
        value="Oto Koltuğu
"
        id="n11k202"
      >
        Oto Koltuğu
      </option>
      <option
        value="Oturma Grupları
"
        id="n11k203"
      >
        Oturma Grupları
      </option>
      <option
        value="Outdoor Ayakkabı & Bot
"
        id="n11k204"
      >
        Outdoor Ayakkabı & Bot
      </option>
      <option
        value="Outdoor Giyim, Ekipmanlar
"
        id="n11k205"
      >
        Outdoor Giyim, Ekipmanlar
      </option>
      <option
        value="Oyun & Yazılım
"
        id="n11k206"
      >
        Oyun & Yazılım
      </option>
      <option
        value="Oyun Halısı
"
        id="n11k207"
      >
        Oyun Halısı
      </option>
      <option
        value="Oyun Konsolları
"
        id="n11k208"
      >
        Oyun Konsolları
      </option>
      <option
        value="Pano ve Aksesuarları
"
        id="n11k209"
      >
        Pano ve Aksesuarları
      </option>
      <option
        value="Paspas & Bagaj Havuzu
"
        id="n11k210"
      >
        Paspas & Bagaj Havuzu
      </option>
      <option
        value="Perde ve Aksesuarları
"
        id="n11k211"
      >
        Perde ve Aksesuarları
      </option>
      <option
        value="Pırlanta Takılar
"
        id="n11k212"
      >
        Pırlanta Takılar
      </option>
      <option
        value="Pil
"
        id="n11k213"
      >
        Pil
      </option>
      <option
        value="Pişirme Grubu
"
        id="n11k214"
      >
        Pişirme Grubu
      </option>
      <option
        value="Plaklar
"
        id="n11k215"
      >
        Plaklar
      </option>
      <option
        value="Portbebe
"
        id="n11k216"
      >
        Portbebe
      </option>
      <option
        value="Priz Emniyeti
"
        id="n11k217"
      >
        Priz Emniyeti
      </option>
      <option
        value="Projeksiyon ve Aksesuarları
"
        id="n11k218"
      >
        Projeksiyon ve Aksesuarları
      </option>
      <option
        value="Saat
"
        id="n11k219"
      >
        Saat
      </option>
      <option
        value="Sabun
"
        id="n11k220"
      >
        Sabun
      </option>
      <option
        value="Saç & Sakal Kesme Makinesi
"
        id="n11k221"
      >
        Saç & Sakal Kesme Makinesi
      </option>
      <option
        value="Saç Düzleştirici-Maşası
"
        id="n11k222"
      >
        Saç Düzleştirici-Maşası
      </option>
      <option
        value="Sağlık Ürünleri
"
        id="n11k223"
      >
        Sağlık Ürünleri
      </option>
      <option
        value="Saklama Kapları ve Düzenleme
"
        id="n11k224"
      >
        Saklama Kapları ve Düzenleme
      </option>
      <option
        value="Salon Tekstili
"
        id="n11k225"
      >
        Salon Tekstili
      </option>
      <option
        value="Sanatsal Malzemeler
"
        id="n11k226"
      >
        Sanatsal Malzemeler
      </option>
      <option
        value="Sandalyeler
"
        id="n11k227"
      >
        Sandalyeler
      </option>
      <option
        value="Servis Parçaları
"
        id="n11k228"
      >
        Servis Parçaları
      </option>
      <option
        value="Ses Sistemleri ve Navigasyon
"
        id="n11k229"
      >
        Ses Sistemleri ve Navigasyon
      </option>
      <option
        value="Seyahat Ürünleri
"
        id="n11k230"
      >
        Seyahat Ürünleri
      </option>
      <option
        value="Sim Kart & Hat
"
        id="n11k231"
      >
        Sim Kart & Hat
      </option>
      <option
        value="Sofra
"
        id="n11k232"
      >
        Sofra
      </option>
      <option
        value="Spor Giyim ve Ayakkabı
"
        id="n11k233"
      >
        Spor Giyim ve Ayakkabı
      </option>
      <option
        value="Su Sebili
"
        id="n11k234"
      >
        Su Sebili
      </option>
      <option
        value="Su Sporları
"
        id="n11k235"
      >
        Su Sporları
      </option>
      <option
        value="Sunucu ve Aksesuarları
"
        id="n11k236"
      >
        Sunucu ve Aksesuarları
      </option>
      <option
        value="Sürüngen
"
        id="n11k237"
      >
        Sürüngen
      </option>
      <option
        value="Süt Arttırıcılar
"
        id="n11k238"
      >
        Süt Arttırıcılar
      </option>
      <option
        value="Süt Saklama Poşet & Kapları
"
        id="n11k239"
      >
        Süt Saklama Poşet & Kapları
      </option>
      <option
        value="Şamandıra
"
        id="n11k240"
      >
        Şamandıra
      </option>
      <option
        value="Şampuan
"
        id="n11k241"
      >
        Şampuan
      </option>
      <option
        value="Şampuan & Krem
"
        id="n11k242"
      >
        Şampuan & Krem
      </option>
      <option
        value="Tablo
"
        id="n11k243"
      >
        Tablo
      </option>
      <option
        value="Taşıyıcılar
"
        id="n11k244"
      >
        Taşıyıcılar
      </option>
      <option
        value="Tek Yönlü Bebek Arabası
"
        id="n11k245"
      >
        Tek Yönlü Bebek Arabası
      </option>
      <option
        value="Tekne ve Yat Malzemeleri
"
        id="n11k246"
      >
        Tekne ve Yat Malzemeleri
      </option>
      <option
        value="Telefon & Tablet Aksesuarları
"
        id="n11k247"
      >
        Telefon & Tablet Aksesuarları
      </option>
      <option
        value="Televizyon
"
        id="n11k248"
      >
        Televizyon
      </option>
      <option
        value="Televizyon Aksesuarları
"
        id="n11k249"
      >
        Televizyon Aksesuarları
      </option>
      <option
        value="Telsiz & Masaüstü Telefon
"
        id="n11k250"
      >
        Telsiz & Masaüstü Telefon
      </option>
      <option
        value="Termos ve Alıştırma Bardakları
"
        id="n11k251"
      >
        Termos ve Alıştırma Bardakları
      </option>
      <option
        value="Tıraş Bıçağı & Yedekleri
"
        id="n11k252"
      >
        Tıraş Bıçağı & Yedekleri
      </option>
      <option
        value="Tıraş Makinesi
"
        id="n11k253"
      >
        Tıraş Makinesi
      </option>
      <option
        value="Trafik & Emniyet Ürünleri
"
        id="n11k254"
      >
        Trafik & Emniyet Ürünleri
      </option>
      <option
        value="Traktör Aksesuarları
"
        id="n11k255"
      >
        Traktör Aksesuarları
      </option>
      <option
        value="Traktör Yedek Parçaları
"
        id="n11k256"
      >
        Traktör Yedek Parçaları
      </option>
      <option
        value="Travel Sistem Bebek Arabası
"
        id="n11k257"
      >
        Travel Sistem Bebek Arabası
      </option>
      <option
        value="Tripod & Monopod
"
        id="n11k258"
      >
        Tripod & Monopod
      </option>
      <option
        value="Tuşlu Telefon
"
        id="n11k259"
      >
        Tuşlu Telefon
      </option>
      <option
        value="Tuvalet Eğitimi
"
        id="n11k260"
      >
        Tuvalet Eğitimi
      </option>
      <option
        value="TV Ünitesi & TV Sehpası
"
        id="n11k261"
      >
        TV Ünitesi & TV Sehpası
      </option>
      <option
        value="Uçak Bileti
"
        id="n11k262"
      >
        Uçak Bileti
      </option>
      <option
        value="Uydu Sistemleri
"
        id="n11k263"
      >
        Uydu Sistemleri
      </option>
      <option
        value="Ütü
"
        id="n11k264"
      >
        Ütü
      </option>
      <option
        value="Video Kamera
"
        id="n11k265"
      >
        Video Kamera
      </option>
      <option
        value="Video Kamera Aksesuarları
"
        id="n11k266"
      >
        Video Kamera Aksesuarları
      </option>
      <option
        value="Yabancı Albümler
"
        id="n11k267"
      >
        Yabancı Albümler
      </option>
      <option
        value="Yağlar
"
        id="n11k268"
      >
        Yağlar
      </option>
      <option
        value="Yapay Yemler
"
        id="n11k269"
      >
        Yapay Yemler
      </option>
      <option
        value="Yapı Malzemeleri
"
        id="n11k270"
      >
        Yapı Malzemeleri
      </option>
      <option
        value="Yaşam & Etkinlik
"
        id="n11k271"
      >
        Yaşam & Etkinlik
      </option>
      <option
        value="Yatak Odası Tekstili
"
        id="n11k272"
      >
        Yatak Odası Tekstili
      </option>
      <option
        value="Yatırımlık Altın & Gümüş
"
        id="n11k273"
      >
        Yatırımlık Altın & Gümüş
      </option>
      <option
        value="Yazıcı, Tarayıcı ve Aksesuarları
"
        id="n11k274"
      >
        Yazıcı, Tarayıcı ve Aksesuarları
      </option>
      <option
        value="Yedek Parça & Aksesuar
"
        id="n11k275"
      >
        Yedek Parça & Aksesuar
      </option>
      <option
        value="Yedek Parça & Aksesuar
"
        id="n11k276"
      >
        Yedek Parça & Aksesuar
      </option>
      <option
        value="Yedekleme Ürünleri
"
        id="n11k277"
      >
        Yedekleme Ürünleri
      </option>
      <option
        value="Yemek Odası
"
        id="n11k278"
      >
        Yemek Odası
      </option>
      <option
        value="Yemek Pişirme
"
        id="n11k279"
      >
        Yemek Pişirme
      </option>
      <option
        value="Yerli Albümler
"
        id="n11k280"
      >
        Yerli Albümler
      </option>
      <option
        value="Yükseltici & Aksesuar
"
        id="n11k281"
      >
        Yükseltici & Aksesuar
      </option>
      <option
        value="Yürüme Yardımcıları
"
        id="n11k282"
      >
        Yürüme Yardımcıları
      </option>
      <option
        value="Yüz ve Vücut Bakımı
"
        id="n11k283"
      >
        Yüz ve Vücut Bakımı
      </option>
      <option
        value="Zıpkın
"
        id="n11k284"
      >
        Zıpkın
      </option>`;
  } else if (pazaryeri.value == pazaryeriCiceksepeti.value) {
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // -----------------ÇİÇEK SEPETİ------------------------
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    kategori.innerHTML = `<option
        value="Aksesuar
"
        id="ciceksptk1"
      >
        Aksesuar
      </option>
      <option
        value="Altın Takı
"
        id="ciceksptk2"
      >
        Altın Takı
      </option>
      <option
        value="Anne & Bebek
"
        id="ciceksptk3"
      >
        Anne & Bebek
      </option>
      <option
        value="Beyaz Eşya
"
        id="ciceksptk4"
      >
        Beyaz Eşya
      </option>
      <option
        value="Bijuteri
"
        id="ciceksptk5"
      >
        Bijuteri
      </option>
      <option
        value="Bilgisayar, Tablet
"
        id="ciceksptk6"
      >
        Bilgisayar, Tablet
      </option>
      <option
        value="Cep Telefonu
"
        id="ciceksptk7"
      >
        Cep Telefonu
      </option>
      <option
        value="Ev & Yaşam
"
        id="ciceksptk8"
      >
        Ev & Yaşam
      </option>
      <option
        value="Fotoğraf Makinesi
"
        id="ciceksptk9"
      >
        Fotoğraf Makinesi
      </option>
      <option
        value="Gümüş Takı
"
        id="ciceksptk10"
      >
        Gümüş Takı
      </option>
      <option
        value="Hobi
"
        id="ciceksptk11"
      >
        Hobi
      </option>
      <option
        value="Moda
"
        id="ciceksptk12"
      >
        Moda
      </option>
      <option
        value="MP Food
"
        id="ciceksptk13"
      >
        MP Food
      </option>
      <option
        value="Ofis, Kırtasiye
"
        id="ciceksptk14"
      >
        Ofis, Kırtasiye
      </option>
      <option
        value="Oto Aksesuar
"
        id="ciceksptk15"
      >
        Oto Aksesuar
      </option>
      <option
        value="Oyuncak
"
        id="ciceksptk16"
      >
        Oyuncak
      </option>
      <option
        value="Parfüm
"
        id="ciceksptk17"
      >
        Parfüm
      </option>
      <option
        value="Petshop
"
        id="ciceksptk18"
      >
        Petshop
      </option>
      <option
        value="Saat
"
        id="ciceksptk19"
      >
        Saat
      </option>
      <option
        value="Sağlık Medikal
"
        id="ciceksptk20"
      >
        Sağlık Medikal
      </option>
      <option
        value="Spor & Outdoor
"
        id="ciceksptk21"
      >
        Spor & Outdoor
      </option>
      <option
        value="Süpermarket
"
        id="ciceksptk22"
      >
        Süpermarket
      </option>
      <option
        value="Takı
"
        id="ciceksptk23"
      >
        Takı
      </option>
      <option
        value="Tasarım Çiçek
"
        id="ciceksptk24"
      >
        Tasarım Çiçek
      </option>
      <option
        value="Televizyon
"
        id="ciceksptk25"
      >
        Televizyon
      </option>
      <option
        value="Video Oyun Konsol
"
        id="ciceksptk26"
      >
        Video Oyun Konsol
      </option>
      <option
        value="Yapı Market & Hırdavat
"
        id="ciceksptk27"
      >
        Yapı Market & Hırdavat
      </option>`;
  } else if (pazaryeri.value == pazaryeriAmazon.value) {
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // -----------------AMAZON------------------------------
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    kategori.innerHTML = `<option id="amznk1" value="Fotoğraf Makinesi">Fotoğraf Makinesi</option>
      <option id="amznk2" value="Cep Telefonu">Cep Telefonu</option>
      <option id="amznk3" value="Giyim">Giyim</option>
      <option id="amznk4" value="Bilgisayar">Bilgisayar</option>
      <option id="amznk5" value="Elektronik">Elektronik</option>
      <option id="amznk6" value="Elektronik Aksesuarlar">
        Elektronik Aksesuarlar
      </option>
      <option id="amznk7" value="Kişisel Bakım Cihazları">
        Kişisel Bakım Cihazları
      </option>
      <option id="amznk8" value="Yapı Market, Mutfak Eşyaları ve Dekorasyon">
        Yapı Market, Mutfak Eşyaları ve Dekorasyon
      </option>
      <option id="amznk9" value="Mutfak (Küçük Ev Aletleri)">
        Mutfak (Küçük Ev Aletleri)
      </option>
      <option id="amznk10" value="Oyuncaklar ve Oyunlar">
        Oyuncaklar ve Oyunlar
      </option>
      <option id="amznk11" value="Kitaplar">Kitaplar</option>
      <option id="amznk12" value="Bebek Ürünleri (Giyim hariç)">
        Bebek Ürünleri (Giyim hariç)
      </option>
      <option id="amznk13" value="Ofis Ürünleri">Ofis Ürünleri</option>
      <option id="amznk14" value="Spor">Spor</option>
      <option
        id="amznk15"
        value="Ayakkabılar, Kol Çantaları ve Ayakkabı Aksesuarları"
      >
        Ayakkabılar, Kol Çantaları ve Ayakkabı Aksesuarları
      </option>`;
  }
  let komisyon = "";
  btnHesaplama.addEventListener("click", () => {
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
    // !!!!!!!!!!!!!!!!!!!!!!!!!!
    //-----------HEPSİBURADA-----
    // !!!!!!!!!!!!!!!!!!!!!!!!!!
    const hpsbrdk1 = document.getElementById("hpsbrdk1");
    const hpsbrdk2 = document.getElementById("hpsbrdk2");
    const hpsbrdk3 = document.getElementById("hpsbrdk3");
    const hpsbrdk4 = document.getElementById("hpsbrdk4");
    const hpsbrdk5 = document.getElementById("hpsbrdk5");
    const hpsbrdk6 = document.getElementById("hpsbrdk6");
    const hpsbrdk7 = document.getElementById("hpsbrdk7");
    const hpsbrdk8 = document.getElementById("hpsbrdk8");
    const hpsbrdk9 = document.getElementById("hpsbrdk9");
    const hpsbrdk10 = document.getElementById("hpsbrdk10");
    const hpsbrdk11 = document.getElementById("hpsbrdk11");
    const hpsbrdk12 = document.getElementById("hpsbrdk12");
    const hpsbrdk13 = document.getElementById("hpsbrdk13");
    const hpsbrdk14 = document.getElementById("hpsbrdk14");
    const hpsbrdk15 = document.getElementById("hpsbrdk15");
    const hpsbrdk16 = document.getElementById("hpsbrdk16");
    const hpsbrdk17 = document.getElementById("hpsbrdk17");
    const hpsbrdk18 = document.getElementById("hpsbrdk18");
    const hpsbrdk19 = document.getElementById("hpsbrdk19");
    const hpsbrdk20 = document.getElementById("hpsbrdk20");
    const hpsbrdk21 = document.getElementById("hpsbrdk21");
    const hpsbrdk22 = document.getElementById("hpsbrdk22");
    const hpsbrdk23 = document.getElementById("hpsbrdk23");
    const hpsbrdk24 = document.getElementById("hpsbrdk24");
    const hpsbrdk25 = document.getElementById("hpsbrdk25");
    const hpsbrdk26 = document.getElementById("hpsbrdk26");
    const hpsbrdk27 = document.getElementById("hpsbrdk27");
    const hpsbrdk28 = document.getElementById("hpsbrdk28");
    const hpsbrdk29 = document.getElementById("hpsbrdk29");
    const hpsbrdk30 = document.getElementById("hpsbrdk30");
    const hpsbrdk31 = document.getElementById("hpsbrdk31");
    const hpsbrdk32 = document.getElementById("hpsbrdk32");
    const hpsbrdk33 = document.getElementById("hpsbrdk33");
    const hpsbrdk34 = document.getElementById("hpsbrdk34");
    const hpsbrdk35 = document.getElementById("hpsbrdk35");
    const hpsbrdk36 = document.getElementById("hpsbrdk36");
    const hpsbrdk37 = document.getElementById("hpsbrdk37");
    const hpsbrdk38 = document.getElementById("hpsbrdk38");
    const hpsbrdk39 = document.getElementById("hpsbrdk39");
    const hpsbrdk40 = document.getElementById("hpsbrdk40");
    const hpsbrdk41 = document.getElementById("hpsbrdk41");
    const hpsbrdk42 = document.getElementById("hpsbrdk42");
    const hpsbrdk43 = document.getElementById("hpsbrdk43");
    const hpsbrdk44 = document.getElementById("hpsbrdk44");
    const hpsbrdk45 = document.getElementById("hpsbrdk45");
    const hpsbrdk46 = document.getElementById("hpsbrdk46");
    const hpsbrdk47 = document.getElementById("hpsbrdk47");
    const hpsbrdk48 = document.getElementById("hpsbrdk48");
    const hpsbrdk49 = document.getElementById("hpsbrdk49");
    const hpsbrdk50 = document.getElementById("hpsbrdk50");
    const hpsbrdk51 = document.getElementById("hpsbrdk51");
    const hpsbrdk52 = document.getElementById("hpsbrdk52");
    const hpsbrdk53 = document.getElementById("hpsbrdk53");
    const hpsbrdk54 = document.getElementById("hpsbrdk54");
    const hpsbrdk55 = document.getElementById("hpsbrdk55");
    const hpsbrdk56 = document.getElementById("hpsbrdk56");
    const hpsbrdk57 = document.getElementById("hpsbrdk57");
    const hpsbrdk58 = document.getElementById("hpsbrdk58");
    const hpsbrdk59 = document.getElementById("hpsbrdk59");
    const hpsbrdk60 = document.getElementById("hpsbrdk60");
    const hpsbrdk61 = document.getElementById("hpsbrdk61");
    const hpsbrdk62 = document.getElementById("hpsbrdk62");
    const hpsbrdk63 = document.getElementById("hpsbrdk63");
    const hpsbrdk64 = document.getElementById("hpsbrdk64");
    const hpsbrdk65 = document.getElementById("hpsbrdk65");
    const hpsbrdk66 = document.getElementById("hpsbrdk66");
    const hpsbrdk67 = document.getElementById("hpsbrdk67");
    const hpsbrdk68 = document.getElementById("hpsbrdk68");
    const hpsbrdk69 = document.getElementById("hpsbrdk69");
    const hpsbrdk70 = document.getElementById("hpsbrdk70");
    const hpsbrdk71 = document.getElementById("hpsbrdk71");
    const hpsbrdk72 = document.getElementById("hpsbrdk72");
    const hpsbrdk73 = document.getElementById("hpsbrdk73");
    const hpsbrdk74 = document.getElementById("hpsbrdk74");
    const hpsbrdk75 = document.getElementById("hpsbrdk75");
    const hpsbrdk76 = document.getElementById("hpsbrdk76");
    const hpsbrdk77 = document.getElementById("hpsbrdk77");
    const hpsbrdk78 = document.getElementById("hpsbrdk78");
    const hpsbrdk79 = document.getElementById("hpsbrdk79");
    const hpsbrdk80 = document.getElementById("hpsbrdk80");
    const hpsbrdk81 = document.getElementById("hpsbrdk81");
    const hpsbrdk82 = document.getElementById("hpsbrdk82");
    const hpsbrdk83 = document.getElementById("hpsbrdk83");
    const hpsbrdk84 = document.getElementById("hpsbrdk84");
    const hpsbrdk85 = document.getElementById("hpsbrdk85");
    const hpsbrdk86 = document.getElementById("hpsbrdk86");
    const hpsbrdk87 = document.getElementById("hpsbrdk87");
    const hpsbrdk88 = document.getElementById("hpsbrdk88");
    const hpsbrdk89 = document.getElementById("hpsbrdk89");
    const hpsbrdk90 = document.getElementById("hpsbrdk90");
    const hpsbrdk91 = document.getElementById("hpsbrdk91");
    const hpsbrdk92 = document.getElementById("hpsbrdk92");
    const hpsbrdk93 = document.getElementById("hpsbrdk93");
    const hpsbrdk94 = document.getElementById("hpsbrdk94");
    const hpsbrdk95 = document.getElementById("hpsbrdk95");
    // !!!!!!!!!!!!!!!!!!!!!!!!!!
    //-------------N11-----------
    // !!!!!!!!!!!!!!!!!!!!!!!!!!
    const n11k1 = document.getElementById("n11k1");
    const n11k2 = document.getElementById("n11k2");
    const n11k3 = document.getElementById("n11k3");
    const n11k4 = document.getElementById("n11k4");
    const n11k5 = document.getElementById("n11k5");
    const n11k6 = document.getElementById("n11k6");
    const n11k7 = document.getElementById("n11k7");
    const n11k8 = document.getElementById("n11k8");
    const n11k9 = document.getElementById("n11k9");
    const n11k10 = document.getElementById("n11k10");
    const n11k11 = document.getElementById("n11k11");
    const n11k12 = document.getElementById("n11k12");
    const n11k13 = document.getElementById("n11k13");
    const n11k14 = document.getElementById("n11k14");
    const n11k15 = document.getElementById("n11k15");
    const n11k16 = document.getElementById("n11k16");
    const n11k17 = document.getElementById("n11k17");
    const n11k18 = document.getElementById("n11k18");
    const n11k19 = document.getElementById("n11k19");
    const n11k20 = document.getElementById("n11k20");
    const n11k21 = document.getElementById("n11k21");
    const n11k22 = document.getElementById("n11k22");
    const n11k23 = document.getElementById("n11k23");
    const n11k24 = document.getElementById("n11k24");
    const n11k25 = document.getElementById("n11k25");
    const n11k26 = document.getElementById("n11k26");
    const n11k27 = document.getElementById("n11k27");
    const n11k28 = document.getElementById("n11k28");
    const n11k29 = document.getElementById("n11k29");
    const n11k30 = document.getElementById("n11k30");
    const n11k31 = document.getElementById("n11k31");
    const n11k32 = document.getElementById("n11k32");
    const n11k33 = document.getElementById("n11k33");
    const n11k34 = document.getElementById("n11k34");
    const n11k35 = document.getElementById("n11k35");
    const n11k36 = document.getElementById("n11k36");
    const n11k37 = document.getElementById("n11k37");
    const n11k38 = document.getElementById("n11k38");
    const n11k39 = document.getElementById("n11k39");
    const n11k40 = document.getElementById("n11k40");
    const n11k41 = document.getElementById("n11k41");
    const n11k42 = document.getElementById("n11k42");
    const n11k43 = document.getElementById("n11k43");
    const n11k44 = document.getElementById("n11k44");
    const n11k45 = document.getElementById("n11k45");
    const n11k46 = document.getElementById("n11k46");
    const n11k47 = document.getElementById("n11k47");
    const n11k48 = document.getElementById("n11k48");
    const n11k49 = document.getElementById("n11k49");
    const n11k50 = document.getElementById("n11k50");
    const n11k51 = document.getElementById("n11k51");
    const n11k52 = document.getElementById("n11k52");
    const n11k53 = document.getElementById("n11k53");
    const n11k54 = document.getElementById("n11k54");
    const n11k55 = document.getElementById("n11k55");
    const n11k56 = document.getElementById("n11k56");
    const n11k57 = document.getElementById("n11k57");
    const n11k58 = document.getElementById("n11k58");
    const n11k59 = document.getElementById("n11k59");
    const n11k60 = document.getElementById("n11k60");
    const n11k61 = document.getElementById("n11k61");
    const n11k62 = document.getElementById("n11k62");
    const n11k63 = document.getElementById("n11k63");
    const n11k64 = document.getElementById("n11k64");
    const n11k65 = document.getElementById("n11k65");
    const n11k66 = document.getElementById("n11k66");
    const n11k67 = document.getElementById("n11k67");
    const n11k68 = document.getElementById("n11k68");
    const n11k69 = document.getElementById("n11k69");
    const n11k70 = document.getElementById("n11k70");
    const n11k71 = document.getElementById("n11k71");
    const n11k72 = document.getElementById("n11k72");
    const n11k73 = document.getElementById("n11k73");
    const n11k74 = document.getElementById("n11k74");
    const n11k75 = document.getElementById("n11k75");
    const n11k76 = document.getElementById("n11k76");
    const n11k77 = document.getElementById("n11k77");
    const n11k78 = document.getElementById("n11k78");
    const n11k79 = document.getElementById("n11k79");
    const n11k80 = document.getElementById("n11k80");
    const n11k81 = document.getElementById("n11k81");
    const n11k82 = document.getElementById("n11k82");
    const n11k83 = document.getElementById("n11k83");
    const n11k84 = document.getElementById("n11k84");
    const n11k85 = document.getElementById("n11k85");
    const n11k86 = document.getElementById("n11k86");
    const n11k87 = document.getElementById("n11k87");
    const n11k88 = document.getElementById("n11k88");
    const n11k89 = document.getElementById("n11k89");
    const n11k90 = document.getElementById("n11k90");
    const n11k91 = document.getElementById("n11k91");
    const n11k92 = document.getElementById("n11k92");
    const n11k93 = document.getElementById("n11k93");
    const n11k94 = document.getElementById("n11k94");
    const n11k95 = document.getElementById("n11k95");
    const n11k96 = document.getElementById("n11k96");
    const n11k97 = document.getElementById("n11k97");
    const n11k98 = document.getElementById("n11k98");
    const n11k99 = document.getElementById("n11k99");
    const n11k100 = document.getElementById("n11k100");
    const n11k101 = document.getElementById("n11k101");
    const n11k102 = document.getElementById("n11k102");
    const n11k103 = document.getElementById("n11k103");
    const n11k104 = document.getElementById("n11k104");
    const n11k105 = document.getElementById("n11k105");
    const n11k106 = document.getElementById("n11k106");
    const n11k107 = document.getElementById("n11k107");
    const n11k108 = document.getElementById("n11k108");
    const n11k109 = document.getElementById("n11k109");
    const n11k110 = document.getElementById("n11k110");
    const n11k111 = document.getElementById("n11k111");
    const n11k112 = document.getElementById("n11k112");
    const n11k113 = document.getElementById("n11k113");
    const n11k114 = document.getElementById("n11k114");
    const n11k115 = document.getElementById("n11k115");
    const n11k116 = document.getElementById("n11k116");
    const n11k117 = document.getElementById("n11k117");
    const n11k118 = document.getElementById("n11k118");
    const n11k119 = document.getElementById("n11k119");
    const n11k120 = document.getElementById("n11k120");
    const n11k121 = document.getElementById("n11k121");
    const n11k122 = document.getElementById("n11k122");
    const n11k123 = document.getElementById("n11k123");
    const n11k124 = document.getElementById("n11k124");
    const n11k125 = document.getElementById("n11k125");
    const n11k126 = document.getElementById("n11k126");
    const n11k127 = document.getElementById("n11k127");
    const n11k128 = document.getElementById("n11k128");
    const n11k129 = document.getElementById("n11k129");
    const n11k130 = document.getElementById("n11k130");
    const n11k131 = document.getElementById("n11k131");
    const n11k132 = document.getElementById("n11k132");
    const n11k133 = document.getElementById("n11k133");
    const n11k134 = document.getElementById("n11k134");
    const n11k135 = document.getElementById("n11k135");
    const n11k136 = document.getElementById("n11k136");
    const n11k137 = document.getElementById("n11k137");
    const n11k138 = document.getElementById("n11k138");
    const n11k139 = document.getElementById("n11k139");
    const n11k140 = document.getElementById("n11k140");
    const n11k141 = document.getElementById("n11k141");
    const n11k142 = document.getElementById("n11k142");
    const n11k143 = document.getElementById("n11k143");
    const n11k144 = document.getElementById("n11k144");
    const n11k145 = document.getElementById("n11k145");
    const n11k146 = document.getElementById("n11k146");
    const n11k147 = document.getElementById("n11k147");
    const n11k148 = document.getElementById("n11k148");
    const n11k149 = document.getElementById("n11k149");
    const n11k150 = document.getElementById("n11k150");
    const n11k151 = document.getElementById("n11k151");
    const n11k152 = document.getElementById("n11k152");
    const n11k153 = document.getElementById("n11k153");
    const n11k154 = document.getElementById("n11k154");
    const n11k155 = document.getElementById("n11k155");
    const n11k156 = document.getElementById("n11k156");
    const n11k157 = document.getElementById("n11k157");
    const n11k158 = document.getElementById("n11k158");
    const n11k159 = document.getElementById("n11k159");
    const n11k160 = document.getElementById("n11k160");
    const n11k161 = document.getElementById("n11k161");
    const n11k162 = document.getElementById("n11k162");
    const n11k163 = document.getElementById("n11k163");
    const n11k164 = document.getElementById("n11k164");
    const n11k165 = document.getElementById("n11k165");
    const n11k166 = document.getElementById("n11k166");
    const n11k167 = document.getElementById("n11k167");
    const n11k168 = document.getElementById("n11k168");
    const n11k169 = document.getElementById("n11k169");
    const n11k170 = document.getElementById("n11k170");
    const n11k171 = document.getElementById("n11k171");
    const n11k172 = document.getElementById("n11k172");
    const n11k173 = document.getElementById("n11k173");
    const n11k174 = document.getElementById("n11k174");
    const n11k175 = document.getElementById("n11k175");
    const n11k176 = document.getElementById("n11k176");
    const n11k177 = document.getElementById("n11k177");
    const n11k178 = document.getElementById("n11k178");
    const n11k179 = document.getElementById("n11k179");
    const n11k180 = document.getElementById("n11k180");
    const n11k181 = document.getElementById("n11k181");
    const n11k182 = document.getElementById("n11k182");
    const n11k183 = document.getElementById("n11k183");
    const n11k184 = document.getElementById("n11k184");
    const n11k185 = document.getElementById("n11k185");
    const n11k186 = document.getElementById("n11k186");
    const n11k187 = document.getElementById("n11k187");
    const n11k188 = document.getElementById("n11k188");
    const n11k189 = document.getElementById("n11k189");
    const n11k190 = document.getElementById("n11k190");
    const n11k191 = document.getElementById("n11k191");
    const n11k192 = document.getElementById("n11k192");
    const n11k193 = document.getElementById("n11k193");
    const n11k194 = document.getElementById("n11k194");
    const n11k195 = document.getElementById("n11k195");
    const n11k196 = document.getElementById("n11k196");
    const n11k197 = document.getElementById("n11k197");
    const n11k198 = document.getElementById("n11k198");
    const n11k199 = document.getElementById("n11k199");
    const n11k200 = document.getElementById("n11k200");
    const n11k201 = document.getElementById("n11k201");
    const n11k202 = document.getElementById("n11k202");
    const n11k203 = document.getElementById("n11k203");
    const n11k204 = document.getElementById("n11k204");
    const n11k205 = document.getElementById("n11k205");
    const n11k206 = document.getElementById("n11k206");
    const n11k207 = document.getElementById("n11k207");
    const n11k208 = document.getElementById("n11k208");
    const n11k209 = document.getElementById("n11k209");
    const n11k210 = document.getElementById("n11k210");
    const n11k211 = document.getElementById("n11k211");
    const n11k212 = document.getElementById("n11k212");
    const n11k213 = document.getElementById("n11k213");
    const n11k214 = document.getElementById("n11k214");
    const n11k215 = document.getElementById("n11k215");
    const n11k216 = document.getElementById("n11k216");
    const n11k217 = document.getElementById("n11k217");
    const n11k218 = document.getElementById("n11k218");
    const n11k219 = document.getElementById("n11k219");
    const n11k220 = document.getElementById("n11k220");
    const n11k221 = document.getElementById("n11k221");
    const n11k222 = document.getElementById("n11k222");
    const n11k223 = document.getElementById("n11k223");
    const n11k224 = document.getElementById("n11k224");
    const n11k225 = document.getElementById("n11k225");
    const n11k226 = document.getElementById("n11k226");
    const n11k227 = document.getElementById("n11k227");
    const n11k228 = document.getElementById("n11k228");
    const n11k229 = document.getElementById("n11k229");
    const n11k230 = document.getElementById("n11k230");
    const n11k231 = document.getElementById("n11k231");
    const n11k232 = document.getElementById("n11k232");
    const n11k233 = document.getElementById("n11k233");
    const n11k234 = document.getElementById("n11k234");
    const n11k235 = document.getElementById("n11k235");
    const n11k236 = document.getElementById("n11k236");
    const n11k237 = document.getElementById("n11k237");
    const n11k238 = document.getElementById("n11k238");
    const n11k239 = document.getElementById("n11k239");
    const n11k240 = document.getElementById("n11k240");
    const n11k241 = document.getElementById("n11k241");
    const n11k242 = document.getElementById("n11k242");
    const n11k243 = document.getElementById("n11k243");
    const n11k244 = document.getElementById("n11k244");
    const n11k245 = document.getElementById("n11k245");
    const n11k246 = document.getElementById("n11k246");
    const n11k247 = document.getElementById("n11k247");
    const n11k248 = document.getElementById("n11k248");
    const n11k249 = document.getElementById("n11k249");
    const n11k250 = document.getElementById("n11k250");
    const n11k251 = document.getElementById("n11k251");
    const n11k252 = document.getElementById("n11k252");
    const n11k253 = document.getElementById("n11k253");
    const n11k254 = document.getElementById("n11k254");
    const n11k255 = document.getElementById("n11k255");
    const n11k256 = document.getElementById("n11k256");
    const n11k257 = document.getElementById("n11k257");
    const n11k258 = document.getElementById("n11k258");
    const n11k259 = document.getElementById("n11k259");
    const n11k260 = document.getElementById("n11k260");
    const n11k261 = document.getElementById("n11k261");
    const n11k262 = document.getElementById("n11k262");
    const n11k263 = document.getElementById("n11k263");
    const n11k264 = document.getElementById("n11k264");
    const n11k265 = document.getElementById("n11k265");
    const n11k266 = document.getElementById("n11k266");
    const n11k267 = document.getElementById("n11k267");
    const n11k268 = document.getElementById("n11k268");
    const n11k269 = document.getElementById("n11k269");
    const n11k270 = document.getElementById("n11k270");
    const n11k271 = document.getElementById("n11k271");
    const n11k272 = document.getElementById("n11k272");
    const n11k273 = document.getElementById("n11k273");
    const n11k274 = document.getElementById("n11k274");
    const n11k275 = document.getElementById("n11k275");
    const n11k276 = document.getElementById("n11k276");
    const n11k277 = document.getElementById("n11k277");
    const n11k278 = document.getElementById("n11k278");
    const n11k279 = document.getElementById("n11k279");
    const n11k280 = document.getElementById("n11k280");
    const n11k281 = document.getElementById("n11k281");
    const n11k282 = document.getElementById("n11k282");
    const n11k283 = document.getElementById("n11k283");
    const n11k284 = document.getElementById("n11k284");
    // !!!!!!!!!!!!!!!!!!!!!!!!!!
    //---------ÇİÇEK SEPETİ-----
    // !!!!!!!!!!!!!!!!!!!!!!!!!!
    const ciceksptk1 = document.getElementById("ciceksptk1");
    const ciceksptk2 = document.getElementById("ciceksptk2");
    const ciceksptk3 = document.getElementById("ciceksptk3");
    const ciceksptk4 = document.getElementById("ciceksptk4");
    const ciceksptk5 = document.getElementById("ciceksptk5");
    const ciceksptk6 = document.getElementById("ciceksptk6");
    const ciceksptk7 = document.getElementById("ciceksptk7");
    const ciceksptk8 = document.getElementById("ciceksptk8");
    const ciceksptk9 = document.getElementById("ciceksptk9");
    const ciceksptk10 = document.getElementById("ciceksptk10");
    const ciceksptk11 = document.getElementById("ciceksptk11");
    const ciceksptk12 = document.getElementById("ciceksptk12");
    const ciceksptk13 = document.getElementById("ciceksptk13");
    const ciceksptk14 = document.getElementById("ciceksptk14");
    const ciceksptk15 = document.getElementById("ciceksptk15");
    const ciceksptk16 = document.getElementById("ciceksptk16");
    const ciceksptk17 = document.getElementById("ciceksptk17");
    const ciceksptk18 = document.getElementById("ciceksptk18");
    const ciceksptk19 = document.getElementById("ciceksptk19");
    const ciceksptk20 = document.getElementById("ciceksptk20");
    const ciceksptk21 = document.getElementById("ciceksptk21");
    const ciceksptk22 = document.getElementById("ciceksptk22");
    const ciceksptk23 = document.getElementById("ciceksptk23");
    const ciceksptk24 = document.getElementById("ciceksptk24");
    const ciceksptk25 = document.getElementById("ciceksptk25");
    const ciceksptk26 = document.getElementById("ciceksptk26");
    const ciceksptk27 = document.getElementById("ciceksptk27");
    // !!!!!!!!!!!!!!!!!!!!!!!!!!
    //-----------AMAZON-----------
    // !!!!!!!!!!!!!!!!!!!!!!!!!!
    const amznk1 = document.getElementById("amznk1");
    const amznk2 = document.getElementById("amznk2");
    const amznk3 = document.getElementById("amznk3");
    const amznk4 = document.getElementById("amznk4");
    const amznk5 = document.getElementById("amznk5");
    const amznk6 = document.getElementById("amznk6");
    const amznk7 = document.getElementById("amznk7");
    const amznk8 = document.getElementById("amznk8");
    const amznk9 = document.getElementById("amznk9");
    const amznk10 = document.getElementById("amznk10");
    const amznk11 = document.getElementById("amznk11");
    const amznk12 = document.getElementById("amznk12");
    const amznk13 = document.getElementById("amznk13");
    const amznk14 = document.getElementById("amznk14");
    const amznk15 = document.getElementById("amznk15");
    //!!
    //********* TRENDYOL ************//
    //!!
    if (pazaryeri.value == pazaryeriTrendyol.value) {
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
    } else if (pazaryeri.value == pazaryeriHepsiburada.value) {
      //!!
      //********* HEPSİBURADA ************//
      //!!
      if (kategori.value == hpsbrdk1.value) {
        komisyon = 0.04;
      } else if (kategori.value == hpsbrdk2.value) {
        komisyon = 0.15;
      } else if (kategori.value == hpsbrdk3.value) {
        komisyon = 0.18;
      } else if (kategori.value == hpsbrdk4.value) {
        komisyon = 0.18;
      } else if (kategori.value == hpsbrdk5.value) {
        komisyon = 0.18;
      } else if (kategori.value == hpsbrdk6.value) {
        komisyon = 0.18;
      } else if (kategori.value == hpsbrdk7.value) {
        komisyon = 0.17;
      } else if (kategori.value == hpsbrdk8.value) {
        komisyon = 0.13;
      } else if (kategori.value == hpsbrdk9.value) {
        komisyon = 0.13;
      } else if (kategori.value == hpsbrdk10.value) {
        komisyon = 0.1;
      } else if (kategori.value == hpsbrdk11.value) {
        komisyon = 0.1;
      } else if (kategori.value == hpsbrdk12.value) {
        komisyon = 0.13;
      } else if (kategori.value == hpsbrdk13.value) {
        komisyon = 0.18;
      } else if (kategori.value == hpsbrdk14.value) {
        komisyon = 0.06;
      } else if (kategori.value == hpsbrdk15.value) {
        komisyon = 0.07;
      } else if (kategori.value == hpsbrdk16.value) {
        komisyon = 0.07;
      } else if (kategori.value == hpsbrdk17.value) {
        komisyon = 0.1;
      } else if (kategori.value == hpsbrdk18.value) {
        komisyon = 0.12;
      } else if (kategori.value == hpsbrdk19.value) {
        komisyon = 0.1;
      } else if (kategori.value == hpsbrdk20.value) {
        komisyon = 0.115;
      } else if (kategori.value == hpsbrdk21.value) {
        komisyon = 0.075;
      } else if (kategori.value == hpsbrdk22.value) {
        komisyon = 0.1;
      } else if (kategori.value == hpsbrdk23.value) {
        komisyon = 0.05;
      } else if (kategori.value == hpsbrdk24.value) {
        komisyon = 0.085;
      } else if (kategori.value == hpsbrdk25.value) {
        komisyon = 0.15;
      } else if (kategori.value == hpsbrdk26.value) {
        komisyon = 0.12;
      } else if (kategori.value == hpsbrdk27.value) {
        komisyon = 0.18;
      } else if (kategori.value == hpsbrdk28.value) {
        komisyon = 0.18;
      } else if (kategori.value == hpsbrdk29.value) {
        komisyon = 0.09;
      } else if (kategori.value == hpsbrdk30.value) {
        komisyon = 0.12;
      } else if (kategori.value == hpsbrdk31.value) {
        komisyon = 0.2;
      } else if (kategori.value == hpsbrdk32.value) {
        komisyon = 0.13;
      } else if (kategori.value == hpsbrdk33.value) {
        komisyon = 0.18;
      } else if (kategori.value == hpsbrdk34.value) {
        komisyon = 0.1;
      } else if (kategori.value == hpsbrdk35.value) {
        komisyon = 0.15;
      } else if (kategori.value == hpsbrdk36.value) {
        komisyon = 0.1;
      } else if (kategori.value == hpsbrdk37.value) {
        komisyon = 0.1;
      } else if (kategori.value == hpsbrdk38.value) {
        komisyon = 0.12;
      } else if (kategori.value == hpsbrdk39.value) {
        komisyon = 0.085;
      } else if (kategori.value == hpsbrdk40.value) {
        komisyon = 0.07;
      } else if (kategori.value == hpsbrdk41.value) {
        komisyon = 0.18;
      } else if (kategori.value == hpsbrdk42.value) {
        komisyon = 0.17;
      } else if (kategori.value == hpsbrdk43.value) {
        komisyon = 0.135;
      } else if (kategori.value == hpsbrdk44.value) {
        komisyon = 0.14;
      } else if (kategori.value == hpsbrdk45.value) {
        komisyon = 0.17;
      } else if (kategori.value == hpsbrdk46.value) {
        komisyon = 0.17;
      } else if (kategori.value == hpsbrdk47.value) {
        komisyon = 0.17;
      } else if (kategori.value == hpsbrdk48.value) {
        komisyon = 0.17;
      } else if (kategori.value == hpsbrdk49.value) {
        komisyon = 0.15;
      } else if (kategori.value == hpsbrdk50.value) {
        komisyon = 0.1;
      } else if (kategori.value == hpsbrdk51.value) {
        komisyon = 0.17;
      } else if (kategori.value == hpsbrdk52.value) {
        komisyon = 0.18;
      } else if (kategori.value == hpsbrdk53.value) {
        komisyon = 0.125;
      } else if (kategori.value == hpsbrdk54.value) {
        komisyon = 0.12;
      } else if (kategori.value == hpsbrdk55.value) {
        komisyon = 0.125;
      } else if (kategori.value == hpsbrdk56.value) {
        komisyon = 0.09;
      } else if (kategori.value == hpsbrdk57.value) {
        komisyon = 0.15;
      } else if (kategori.value == hpsbrdk58.value) {
        komisyon = 0.125;
      } else if (kategori.value == hpsbrdk59.value) {
        komisyon = 0.17;
      } else if (kategori.value == hpsbrdk60.value) {
        komisyon = 0.12;
      } else if (kategori.value == hpsbrdk61.value) {
        komisyon = 0.16;
      } else if (kategori.value == hpsbrdk62.value) {
        komisyon = 0.18;
      } else if (kategori.value == hpsbrdk63.value) {
        komisyon = 0.18;
      } else if (kategori.value == hpsbrdk64.value) {
        komisyon = 0.18;
      } else if (kategori.value == hpsbrdk65.value) {
        komisyon = 0.16;
      } else if (kategori.value == hpsbrdk66.value) {
        komisyon = 0.18;
      } else if (kategori.value == hpsbrdk67.value) {
        komisyon = 0.18;
      } else if (kategori.value == hpsbrdk68.value) {
        komisyon = 0.18;
      } else if (kategori.value == hpsbrdk69.value) {
        komisyon = 0.16;
      } else if (kategori.value == hpsbrdk70.value) {
        komisyon = 0.125;
      } else if (kategori.value == hpsbrdk71.value) {
        komisyon = 0.15;
      } else if (kategori.value == hpsbrdk72.value) {
        komisyon = 0.25;
      } else if (kategori.value == hpsbrdk73.value) {
        komisyon = 0.12;
      } else if (kategori.value == hpsbrdk74.value) {
        komisyon = 0.2;
      } else if (kategori.value == hpsbrdk75.value) {
        komisyon = 0.25;
      } else if (kategori.value == hpsbrdk76.value) {
        komisyon = 0.15;
      } else if (kategori.value == hpsbrdk77.value) {
        komisyon = 0.15;
      } else if (kategori.value == hpsbrdk78.value) {
        komisyon = 0.085;
      } else if (kategori.value == hpsbrdk79.value) {
        komisyon = 0.15;
      } else if (kategori.value == hpsbrdk80.value) {
        komisyon = 0.12;
      } else if (kategori.value == hpsbrdk81.value) {
        komisyon = 0.14;
      } else if (kategori.value == hpsbrdk82.value) {
        komisyon = 0.1;
      } else if (kategori.value == hpsbrdk83.value) {
        komisyon = 0.05;
      } else if (kategori.value == hpsbrdk84.value) {
        komisyon = 0.14;
      } else if (kategori.value == hpsbrdk85.value) {
        komisyon = 0.06;
      } else if (kategori.value == hpsbrdk86.value) {
        komisyon = 0.1;
      } else if (kategori.value == hpsbrdk87.value) {
        komisyon = 0.1;
      } else if (kategori.value == hpsbrdk88.value) {
        komisyon = 0.085;
      } else if (kategori.value == hpsbrdk89.value) {
        komisyon = 0.18;
      } else if (kategori.value == hpsbrdk90.value) {
        komisyon = 0.17;
      } else if (kategori.value == hpsbrdk91.value) {
        komisyon = 0.2;
      } else if (kategori.value == hpsbrdk92.value) {
        komisyon = 0.12;
      } else if (kategori.value == hpsbrdk93.value) {
        komisyon = 0.14;
      } else if (kategori.value == hpsbrdk94.value) {
        komisyon = 0.085;
      } else if (kategori.value == hpsbrdk95.value) {
        komisyon = 0.1;
      }
    } else if (pazaryeri.value == pazaryeriN11.value) {
      //!!
      //********* N11 ************//
      //!!
      if (kategori.value == n11k1.value) {
        komisyon = 0.1;
      } else if (kategori.value == n11k2.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k3.value) {
        komisyon = 0.105;
      } else if (kategori.value == n11k4.value) {
        komisyon = 0.105;
      } else if (kategori.value == n11k5.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k6.value) {
        komisyon = 0.1;
      } else if (kategori.value == n11k7.value) {
        komisyon = 0.17;
      } else if (kategori.value == n11k8.value) {
        komisyon = 0.13;
      } else if (kategori.value == n11k9.value) {
        komisyon = 0.12;
      } else if (kategori.value == n11k10.value) {
        komisyon = 0.1;
      } else if (kategori.value == n11k11.value) {
        komisyon = 0.2;
      } else if (kategori.value == n11k12.value) {
        komisyon = 0.08;
      } else if (kategori.value == n11k13.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k14.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k15.value) {
        komisyon = 0.08;
      } else if (kategori.value == n11k16.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k17.value) {
        komisyon = 0.17;
      } else if (kategori.value == n11k18.value) {
        komisyon = 0.152;
      } else if (kategori.value == n11k19.value) {
        komisyon = 0.18;
      } else if (kategori.value == n11k20.value) {
        komisyon = 0.12;
      } else if (kategori.value == n11k21.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k22.value) {
        komisyon = 0.12;
      } else if (kategori.value == n11k23.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k24.value) {
        komisyon = 0.151;
      } else if (kategori.value == n11k25.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k26.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k27.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k28.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k29.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k30.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k31.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k32.value) {
        komisyon = 0.1512;
      } else if (kategori.value == n11k33.value) {
        komisyon = 0.1;
      } else if (kategori.value == n11k34.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k35.value) {
        komisyon = 0.17;
      } else if (kategori.value == n11k36.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k37.value) {
        komisyon = 0.1;
      } else if (kategori.value == n11k38.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k39.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k40.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k41.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k42.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k43.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k44.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k45.value) {
        komisyon = 0.08;
      } else if (kategori.value == n11k46.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k47.value) {
        komisyon = 0.2;
      } else if (kategori.value == n11k48.value) {
        komisyon = 0.06;
      } else if (kategori.value == n11k49.value) {
        komisyon = 0.12;
      } else if (kategori.value == n11k50.value) {
        komisyon = 0.12;
      } else if (kategori.value == n11k51.value) {
        komisyon = 0.12;
      } else if (kategori.value == n11k52.value) {
        komisyon = 0.08;
      } else if (kategori.value == n11k53.value) {
        komisyon = 0.08;
      } else if (kategori.value == n11k54.value) {
        komisyon = 0.05;
      } else if (kategori.value == n11k55.value) {
        komisyon = 0.105;
      } else if (kategori.value == n11k56.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k57.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k58.value) {
        komisyon = 0.08;
      } else if (kategori.value == n11k59.value) {
        komisyon = 0.1;
      } else if (kategori.value == n11k60.value) {
        komisyon = 0.2;
      } else if (kategori.value == n11k61.value) {
        komisyon = 0.06;
      } else if (kategori.value == n11k62.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k63.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k64.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k65.value) {
        komisyon = 0.17;
      } else if (kategori.value == n11k66.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k67.value) {
        komisyon = 0.2;
      } else if (kategori.value == n11k68.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k69.value) {
        komisyon = 0.08;
      } else if (kategori.value == n11k70.value) {
        komisyon = 0.1;
      } else if (kategori.value == n11k71.value) {
        komisyon = 0.2;
      } else if (kategori.value == n11k72.value) {
        komisyon = 0.08;
      } else if (kategori.value == n11k73.value) {
        komisyon = 0.03;
      } else if (kategori.value == n11k74.value) {
        komisyon = 0.075;
      } else if (kategori.value == n11k75.value) {
        komisyon = 0.1;
      } else if (kategori.value == n11k76.value) {
        komisyon = 0.1;
      } else if (kategori.value == n11k77.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k78.value) {
        komisyon = 0.055;
      } else if (kategori.value == n11k79.value) {
        komisyon = 0.25;
      } else if (kategori.value == n11k80.value) {
        komisyon = 0.2;
      } else if (kategori.value == n11k81.value) {
        komisyon = 0.1;
      } else if (kategori.value == n11k82.value) {
        komisyon = 0.12;
      } else if (kategori.value == n11k83.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k84.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k85.value) {
        komisyon = 0.12;
      } else if (kategori.value == n11k86.value) {
        komisyon = 0.12;
      } else if (kategori.value == n11k87.value) {
        komisyon = 0.1;
      } else if (kategori.value == n11k88.value) {
        komisyon = 0.1;
      } else if (kategori.value == n11k89.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k90.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k91.value) {
        komisyon = 0.17;
      } else if (kategori.value == n11k92.value) {
        komisyon = 0.2;
      } else if (kategori.value == n11k93.value) {
        komisyon = 0.17;
      } else if (kategori.value == n11k94.value) {
        komisyon = 0.2;
      } else if (kategori.value == n11k95.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k96.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k97.value) {
        komisyon = 0.2515;
      } else if (kategori.value == n11k98.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k99.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k100.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k101.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k102.value) {
        komisyon = 0.2;
      } else if (kategori.value == n11k103.value) {
        komisyon = 0.12;
      } else if (kategori.value == n11k104.value) {
        komisyon = 0.1;
      } else if (kategori.value == n11k105.value) {
        komisyon = 0.12;
      } else if (kategori.value == n11k106.value) {
        komisyon = 0.055;
      } else if (kategori.value == n11k107.value) {
        komisyon = 0.1;
      } else if (kategori.value == n11k108.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k109.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k110.value) {
        komisyon = 0.1;
      } else if (kategori.value == n11k111.value) {
        komisyon = 0.071;
      } else if (kategori.value == n11k112.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k113.value) {
        komisyon = 0.2;
      } else if (kategori.value == n11k114.value) {
        komisyon = 0.2;
      } else if (kategori.value == n11k115.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k116.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k117.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k118.value) {
        komisyon = 0.1;
      } else if (kategori.value == n11k119.value) {
        komisyon = 0.1;
      } else if (kategori.value == n11k120.value) {
        komisyon = 0.2;
      } else if (kategori.value == n11k121.value) {
        komisyon = 0.1;
      } else if (kategori.value == n11k122.value) {
        komisyon = 0.055;
      } else if (kategori.value == n11k123.value) {
        komisyon = 0.08;
      } else if (kategori.value == n11k124.value) {
        komisyon = 0.1;
      } else if (kategori.value == n11k125.value) {
        komisyon = 0.2;
      } else if (kategori.value == n11k126.value) {
        komisyon = 0.1;
      } else if (kategori.value == n11k127.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k128.value) {
        komisyon = 0.08;
      } else if (kategori.value == n11k129.value) {
        komisyon = 0.1;
      } else if (kategori.value == n11k130.value) {
        komisyon = 0;
      } else if (kategori.value == n11k131.value) {
        komisyon = 0.05;
      } else if (kategori.value == n11k132.value) {
        komisyon = 0.1;
      } else if (kategori.value == n11k133.value) {
        komisyon = 0.08;
      } else if (kategori.value == n11k134.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k135.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k136.value) {
        komisyon = 0.12;
      } else if (kategori.value == n11k137.value) {
        komisyon = 0.17;
      } else if (kategori.value == n11k138.value) {
        komisyon = 0.17;
      } else if (kategori.value == n11k139.value) {
        komisyon = 0.2;
      } else if (kategori.value == n11k140.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k141.value) {
        komisyon = 0.155;
      } else if (kategori.value == n11k142.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k143.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k144.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k145.value) {
        komisyon = 0.12;
      } else if (kategori.value == n11k146.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k147.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k148.value) {
        komisyon = 0.1;
      } else if (kategori.value == n11k149.value) {
        komisyon = 0.151;
      } else if (kategori.value == n11k150.value) {
        komisyon = 0.151;
      } else if (kategori.value == n11k151.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k152.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k153.value) {
        komisyon = 0.12;
      } else if (kategori.value == n11k154.value) {
        komisyon = 0.1;
      } else if (kategori.value == n11k155.value) {
        komisyon = 0.2;
      } else if (kategori.value == n11k156.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k157.value) {
        komisyon = 0.1;
      } else if (kategori.value == n11k158.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k159.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k160.value) {
        komisyon = 0.1;
      } else if (kategori.value == n11k161.value) {
        komisyon = 0.08;
      } else if (kategori.value == n11k162.value) {
        komisyon = 0.1;
      } else if (kategori.value == n11k163.value) {
        komisyon = 0.08;
      } else if (kategori.value == n11k164.value) {
        komisyon = 0.151;
      } else if (kategori.value == n11k165.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k166.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k167.value) {
        komisyon = 0.1;
      } else if (kategori.value == n11k168.value) {
        komisyon = 0.1;
      } else if (kategori.value == n11k169.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k170.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k171.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k172.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k173.value) {
        komisyon = 0.12;
      } else if (kategori.value == n11k174.value) {
        komisyon = 0.1;
      } else if (kategori.value == n11k175.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k176.value) {
        komisyon = 0.06;
      } else if (kategori.value == n11k177.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k178.value) {
        komisyon = 0.12;
      } else if (kategori.value == n11k179.value) {
        komisyon = 0.1;
      } else if (kategori.value == n11k180.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k181.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k182.value) {
        komisyon = 0.07;
      } else if (kategori.value == n11k183.value) {
        komisyon = 0.06;
      } else if (kategori.value == n11k184.value) {
        komisyon = 0.108;
      } else if (kategori.value == n11k185.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k186.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k187.value) {
        komisyon = 0.065;
      } else if (kategori.value == n11k188.value) {
        komisyon = 0.1;
      } else if (kategori.value == n11k189.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k190.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k191.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k192.value) {
        komisyon = 0.12;
      } else if (kategori.value == n11k193.value) {
        komisyon = 0.1;
      } else if (kategori.value == n11k194.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k195.value) {
        komisyon = 0.151;
      } else if (kategori.value == n11k196.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k197.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k198.value) {
        komisyon = 0.1012;
      } else if (kategori.value == n11k199.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k200.value) {
        komisyon = 0.1;
      } else if (kategori.value == n11k201.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k202.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k203.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k204.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k205.value) {
        komisyon = 0.1512;
      } else if (kategori.value == n11k206.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k207.value) {
        komisyon = 0.1;
      } else if (kategori.value == n11k208.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k209.value) {
        komisyon = 0.05;
      } else if (kategori.value == n11k210.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k211.value) {
        komisyon = 0.1;
      } else if (kategori.value == n11k212.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k213.value) {
        komisyon = 0.2;
      } else if (kategori.value == n11k214.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k215.value) {
        komisyon = 0.08;
      } else if (kategori.value == n11k216.value) {
        komisyon = 0.1;
      } else if (kategori.value == n11k217.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k218.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k219.value) {
        komisyon = 0.106;
      } else if (kategori.value == n11k220.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k221.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k222.value) {
        komisyon = 0.1;
      } else if (kategori.value == n11k223.value) {
        komisyon = 0.1;
      } else if (kategori.value == n11k224.value) {
        komisyon = 0.13;
      } else if (kategori.value == n11k225.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k226.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k227.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k228.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k229.value) {
        komisyon = 0.1;
      } else if (kategori.value == n11k230.value) {
        komisyon = 0.1;
      } else if (kategori.value == n11k231.value) {
        komisyon = 0.1;
      } else if (kategori.value == n11k232.value) {
        komisyon = 0.06;
      } else if (kategori.value == n11k233.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k234.value) {
        komisyon = 0.12;
      } else if (kategori.value == n11k235.value) {
        komisyon = 0.08;
      } else if (kategori.value == n11k236.value) {
        komisyon = 0.12;
      } else if (kategori.value == n11k237.value) {
        komisyon = 0.106;
      } else if (kategori.value == n11k238.value) {
        komisyon = 0.151;
      } else if (kategori.value == n11k239.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k240.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k241.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k242.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k243.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k244.value) {
        komisyon = 0.25;
      } else if (kategori.value == n11k245.value) {
        komisyon = 0.1;
      } else if (kategori.value == n11k246.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k247.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k248.value) {
        komisyon = 0.1;
      } else if (kategori.value == n11k249.value) {
        komisyon = 0.0615;
      } else if (kategori.value == n11k250.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k251.value) {
        komisyon = 0.1;
      } else if (kategori.value == n11k252.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k253.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k254.value) {
        komisyon = 0.1;
      } else if (kategori.value == n11k255.value) {
        komisyon = 0.1;
      } else if (kategori.value == n11k256.value) {
        komisyon = 0.12;
      } else if (kategori.value == n11k257.value) {
        komisyon = 0.12;
      } else if (kategori.value == n11k258.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k259.value) {
        komisyon = 0.1;
      } else if (kategori.value == n11k260.value) {
        komisyon = 0.1;
      } else if (kategori.value == n11k261.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k262.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k263.value) {
        komisyon = 0.08;
      } else if (kategori.value == n11k264.value) {
        komisyon = 0.1;
      } else if (kategori.value == n11k265.value) {
        komisyon = 0.055;
      } else if (kategori.value == n11k266.value) {
        komisyon = 0.1;
      } else if (kategori.value == n11k267.value) {
        komisyon = 0.1;
      } else if (kategori.value == n11k268.value) {
        komisyon = 0.1;
      } else if (kategori.value == n11k269.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k270.value) {
        komisyon = 0.1512;
      } else if (kategori.value == n11k271.value) {
        komisyon = 0.17;
      } else if (kategori.value == n11k272.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k273.value) {
        komisyon = 0.05;
      } else if (kategori.value == n11k274.value) {
        komisyon = 0.106;
      } else if (kategori.value == n11k275.value) {
        komisyon = 0.08;
      } else if (kategori.value == n11k276.value) {
        komisyon = 0.1;
      } else if (kategori.value == n11k277.value) {
        komisyon = 0.06;
      } else if (kategori.value == n11k278.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k279.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k280.value) {
        komisyon = 0.1;
      } else if (kategori.value == n11k281.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k282.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k283.value) {
        komisyon = 0.15;
      } else if (kategori.value == n11k284.value) {
        komisyon = 0.15;
      }
    } else if (pazaryeri.value == pazaryeriCiceksepeti.value) {
      //!!
      //********* Çiçek Sepeti ************//
      //!!
      if (kategori.value == ciceksptk1.value) {
        komisyon = 0.15;
      } else if (kategori.value == ciceksptk2.value) {
        komisyon = 0.15;
      } else if (kategori.value == ciceksptk3.value) {
        komisyon = 0.15;
      } else if (kategori.value == ciceksptk4.value) {
        komisyon = 0.08;
      } else if (kategori.value == ciceksptk5.value) {
        komisyon = 0.2;
      } else if (kategori.value == ciceksptk6.value) {
        komisyon = 0.06;
      } else if (kategori.value == ciceksptk7.value) {
        komisyon = 0.05;
      } else if (kategori.value == ciceksptk8.value) {
        komisyon = 0.16;
      } else if (kategori.value == ciceksptk9.value) {
        komisyon = 0.1;
      } else if (kategori.value == ciceksptk10.value) {
        komisyon = 0.15;
      } else if (kategori.value == ciceksptk11.value) {
        komisyon = 0.1;
      } else if (kategori.value == ciceksptk12.value) {
        komisyon = 0.15;
      } else if (kategori.value == ciceksptk13.value) {
        komisyon = 0.25;
      } else if (kategori.value == ciceksptk14.value) {
        komisyon = 0.15;
      } else if (kategori.value == ciceksptk15.value) {
        komisyon = 0.1;
      } else if (kategori.value == ciceksptk16.value) {
        komisyon = 0.15;
      } else if (kategori.value == ciceksptk17.value) {
        komisyon = 0.18;
      } else if (kategori.value == ciceksptk18.value) {
        komisyon = 0.1;
      } else if (kategori.value == ciceksptk19.value) {
        komisyon = 0.15;
      } else if (kategori.value == ciceksptk20.value) {
        komisyon = 0.1;
      } else if (kategori.value == ciceksptk21.value) {
        komisyon = 0.15;
      } else if (kategori.value == ciceksptk22.value) {
        komisyon = 0.1;
      } else if (kategori.value == ciceksptk23.value) {
        komisyon = 0.2;
      } else if (kategori.value == ciceksptk24.value) {
        komisyon = 0.3;
      } else if (kategori.value == ciceksptk25.value) {
        komisyon = 0.06;
      } else if (kategori.value == ciceksptk26.value) {
        komisyon = 0.1;
      } else if (kategori.value == ciceksptk27.value) {
        komisyon = 0.15;
      }
    } else {
      // !!!!!!!!!!!!!!!!!!!!!!!!!!
      //-----------AMAZON-----------
      // !!!!!!!!!!!!!!!!!!!!!!!!!!
      if (kategori.value == amznk1.value) {
        komisyon = 0.06;
      } else if (kategori.value == amznk2.value) {
        komisyon = 0.06;
      } else if (kategori.value == amznk3.value) {
        komisyon = 0.1;
      } else if (kategori.value == amznk4.value) {
        komisyon = 0.06;
      } else if (kategori.value == amznk5.value) {
        komisyon = 0.06;
      } else if (kategori.value == amznk6.value) {
        komisyon = 0.1;
      } else if (kategori.value == amznk7.value) {
        komisyon = 0.1;
      } else if (kategori.value == amznk8.value) {
        komisyon = 0.1;
      } else if (kategori.value == amznk9.value) {
        komisyon = 0.06;
      } else if (kategori.value == amznk10.value) {
        komisyon = 0.1;
      } else if (kategori.value == amznk11.value) {
        komisyon = 0.1;
      } else if (kategori.value == amznk12.value) {
        komisyon = 0.1;
      } else if (kategori.value == amznk13.value) {
        komisyon = 0.1;
      } else if (kategori.value == amznk14.value) {
        komisyon = 0.1;
      } else if (kategori.value == amznk15.value) {
        komisyon = 0.1;
      }
    }
    // console.log(komisyon);
    // console.log(satisInput.value);
    let kdv = 0.18;
    let KDVsiz_fiyat = satisInput.value / (1 + kdv);
    let komisyonHesaplama = KDVsiz_fiyat * komisyon;
    let netKar = KDVsiz_fiyat - alisInput.value - komisyonHesaplama;
    sonuc.innerHTML = `<h4>Seçilen Kategori</h4>
  <h5>${kategori.value}</h5>
  <li>Komisyon oranı :%  ${(komisyon * 100).toFixed(1)}</li>
  <li>Satış Fiyatı (KDV Dahil) : ${satisInput.value} TL</li>
  <li>Satış Fiyatı (KDV Hariç) : ${KDVsiz_fiyat.toFixed(2)} TL</li>
  <li id="kesilen">Alış Fiyatı : ${alisInput.value} TL</li>
  <li id="kesilen">Komisyon kesintisi : ${komisyonHesaplama.toFixed(2)} TL</li>
  <li id="kar">Net Kâr : ${netKar.toFixed(2)} TL</li>`;
  });
});
