import { Service, PortfolioItem, Testimonial, FAQItem, BlogArticle } from './types';

// Image paths mapped to generated assets
export const IMAGES = {
  heroBanner: '/images/hero_banner_1782493008962.jpg',
  renovasiRumah: '/images/renovasi_rumah_1782493024818.jpg',
  pasangPlafon: '/images/pasang_plafon_1782493038468.jpg',
  pasangKeramik: '/images/pasang_keramik_1782493052113.jpg',
  instalasiListrik: '/images/instalasi_listrik_1782493067396.jpg',
  kanopiBaja: '/images/kanopi_baja_1782493078805.jpg',
  pengecatan: '/images/pengecatan_1782493094241.jpg',
  bongkarBangunan: '/images/bongkar_bangunan_1782493109366.jpg',
  ctaBg: '/images/cta_bg_1782493122114.jpg',
};

export const CONTACT_INFO = {
  companyName: 'PT Mitra Tukang Surabaya',
  tagline: 'Solusi Lengkap Renovasi, Perbaikan & Pembangunan Properti Profesional',
  phone: '+62 823-3194-9283',
  phoneRaw: '6282331949283',
  manager: 'Hadi Asemrowo',
  address: 'Jl. Tambak Dalam Baru 1A No.64, Asemrowo, Surabaya, Jawa Timur',
  operationalHours: '24 Jam • 7 Hari Seminggu',
  areas: [
    'Surabaya',
    'Sidoarjo',
    'Gresik',
    'Mojokerto',
    'Pasuruan',
    'Lamongan',
    'Seluruh Jawa Timur'
  ]
};

export const KEUNGGULAN = [
  {
    title: 'Berpengalaman Bertahun-tahun',
    description: 'Telah dipercaya menangani ratusan proyek perumahan, perkantoran, ruko, dan komersial dengan hasil memuaskan.',
    icon: 'Briefcase'
  },
  {
    title: 'Tukang Profesional',
    description: 'Dikerjakan langsung oleh tukang ahli bersertifikat dan berdedikasi tinggi di bidang keahliannya masing-masing.',
    icon: 'Users'
  },
  {
    title: 'Harga Transparan',
    description: 'RAB dirinci secara detail sebelum pekerjaan dimulai. Tanpa biaya siluman atau tambahan tak terduga.',
    icon: 'DollarSign'
  },
  {
    title: 'Survey Gratis',
    description: 'Layanan survey lokasi dan estimasi biaya secara gratis tanpa dipungut biaya sepeser pun.',
    icon: 'Eye'
  },
  {
    title: 'Tepat Waktu',
    description: 'Komitmen penuh pada timeline pengerjaan yang disepakati bersama demi kepuasan klien.',
    icon: 'Clock'
  },
  {
    title: 'Material Berkualitas',
    description: 'Penggunaan material berstandar SNI sesuai spesifikasi kesepakatan untuk ketahanan jangka panjang.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Bergaransi',
    description: 'Kami memberikan jaminan garansi pemeliharaan tertulis setelah serah terima hasil pekerjaan.',
    icon: 'Award'
  },
  {
    title: 'Layanan 24 Jam',
    description: 'Tim kami siap melayani kebutuhan darurat perbaikan atau konsultasi kapan pun Anda membutuhkan.',
    icon: 'Activity'
  }
];

export const LAYANAN: Service[] = [
  {
    id: 'renov-rumah',
    title: 'Renovasi Rumah Tinggal',
    description: 'Transformasi total maupun parsial rumah lama menjadi hunian modern, nyaman, dan kokoh sesuai tren arsitektur terkini dengan pengerjaan rapi.',
    category: 'Renovasi',
    iconName: 'Home',
    image: IMAGES.renovasiRumah
  },
  {
    id: 'renov-kantor',
    title: 'Renovasi Kantor & Ruko',
    description: 'Pengerjaan interior dan eksterior ruang komersial untuk menciptakan suasana kerja yang ergonomis, efisien, modern, dan profesional.',
    category: 'Renovasi',
    iconName: 'Building2',
    image: IMAGES.heroBanner
  },
  {
    id: 'plafon-gypsum',
    title: 'Pemasangan Plafon Gypsum & PVC',
    description: 'Pemasangan atap plafon modern tahan bocor, anti rayap, drop ceiling elegan, serta berbagai motif minimalis artistik.',
    category: 'Plafon',
    iconName: 'Layers',
    image: IMAGES.pasangPlafon
  },
  {
    id: 'pasang-keramik',
    title: 'Pemasangan Keramik & Granit',
    description: 'Pemasangan lantai granit 60x60, 80x80, marmer, dan keramik dinding kamar mandi presisi tinggi dengan level laser (waterpass).',
    category: 'Finishing',
    iconName: 'LayoutGrid',
    image: IMAGES.pasangKeramik
  },
  {
    id: 'instal-listrik',
    title: 'Instalasi Listrik & MEP',
    description: 'Pemasangan jalur kabel baru berstandar SNI, pembagian grup MCB seimbang, perbaikan korsleting, serta penataan titik lampu fitting.',
    category: 'Kelistrikan',
    iconName: 'Zap',
    image: IMAGES.instalasiListrik
  },
  {
    id: 'kanopi-baja',
    title: 'Kanopi & Atap Baja Ringan',
    description: 'Konstruksi kanopi minimalis dan rangka atap baja ringan kokoh anti karat berspesifikasi SNI dengan pilihan atap premium.',
    category: 'Konstruksi',
    iconName: 'Maximize2',
    image: IMAGES.kanopiBaja
  },
  {
    id: 'pengecatan',
    title: 'Pengecatan Interior & Eksterior',
    description: 'Pengecatan dinding luar dan dalam dengan produk cat weatherproof premium anti jamur dan anti pudar untuk hunian tropis.',
    category: 'Finishing',
    iconName: 'Paintbrush',
    image: IMAGES.pengecatan
  },
  {
    id: 'bongkar-bangunan',
    title: 'Bongkar Bangunan & Puing',
    description: 'Pekerjaan meruntuhkan dinding, sekat, atap, atau bangunan tua secara tertib, aman, serta pembuangan puing tuntas dengan dump truck.',
    category: 'Konstruksi',
    iconName: 'Hammer',
    image: IMAGES.bongkarBangunan
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 'port-1',
    title: 'Pembangunan Atap Baja Ringan & Kanopi Alderon',
    category: 'Baja Ringan',
    location: 'Citraland, Surabaya Barat',
    image: IMAGES.kanopiBaja,
    description: 'Pengerjaan atap utama rumah tinggal seluas 180m2 berstruktur baja ringan SNI gording presisi serta kanopi carport Alderon double layer.'
  },
  {
    id: 'port-2',
    title: 'Renovasi Total Rumah Tinggal 2 Lantai Minimalis',
    category: 'Renovasi Rumah',
    location: 'Rungkut, Surabaya Timur',
    image: IMAGES.renovasiRumah,
    description: 'Transformasi hunian klasik tahun 90an menjadi hunian modern berlantai dua dengan open space konsep, pengerjaan struktur beton pondasi cakar ayam kokoh.'
  },
  {
    id: 'port-3',
    title: 'Instalasi Plafon Gypsum Bertingkat & Lampu Gantung',
    category: 'Plafon',
    location: 'Gresik Kota Baru, Gresik',
    image: IMAGES.pasangPlafon,
    description: 'Pembuatan drop ceiling mewah berbahan Gypsum Jayaboard dikombinasikan dengan concealed strip LED warna warm white untuk kesan berkelas.'
  },
  {
    id: 'port-4',
    title: 'Pemasangan Granit Lantai Utama 80x80 Seamless',
    category: 'Keramik',
    location: 'Pondok Jati, Sidoarjo',
    image: IMAGES.pasangKeramik,
    description: 'Pemasangan lantai granit homogen ukuran besar seluas 120m2 dengan pengerjaan level laser presisi tinggi menghasilkan nat super rapat dan rata.'
  },
  {
    id: 'port-5',
    title: 'Renovasi Eksterior Kantor & Pengecatan Weather Shield',
    category: 'Renovasi Kantor',
    location: 'Basuki Rahmat, Surabaya Pusat',
    image: IMAGES.pengecatan,
    description: 'Pengecatan ulang dinding luar gedung kantor 3 lantai setinggi 12 meter menggunakan cat khusus elastomeric anti bocor serta perbaikan retak rambut eksterior.'
  },
  {
    id: 'port-6',
    title: 'Instalasi Listrik 3 Phase & Panel Pembagi Gedung',
    category: 'Instalasi Listrik',
    location: 'Kawasan Industri SIER, Surabaya',
    image: IMAGES.instalasiListrik,
    description: 'Peremajaan seluruh jaringan kabel listrik, pemasangan panel pembagi MCB kelompok, serta instalasi proteksi grounding penangkal petir.'
  },
  {
    id: 'port-7',
    title: 'Kanopi Minimalis Kaca Solarflat Rangka Besi Hollow',
    category: 'Kanopi',
    location: 'Graha Family, Surabaya Barat',
    image: IMAGES.kanopiBaja,
    description: 'Pembuatan kanopi modern transparan dengan lembaran Solarflat anti pecah dipadukan rangka besi hollow finishing powder coating hitam doff.'
  },
  {
    id: 'port-8',
    title: 'Pengecatan Interior & Kamar Anak Tema Scandinavian',
    category: 'Pengecatan',
    location: 'Pakuwon City, Surabaya',
    image: IMAGES.pengecatan,
    description: 'Finishing dinding dalam menggunakan cat premium bebas bau (Zero VOC) dengan kombinasi warna pastel pastel matte yang elegan.'
  },
  {
    id: 'port-9',
    title: 'Bongkar Tuntas Gudang Lama & Pembersihan Lahan',
    category: 'Bongkar Bangunan',
    location: 'Margomulyo, Surabaya Utara',
    image: IMAGES.bongkarBangunan,
    description: 'Peruntukan gudang logistik tua semi permanen berstruktur baja berat. Pekerjaan rapi, pembuangan puing tuntas dengan dump truck besar, siap bangun.'
  }
];

export const PROSES_KERJA = [
  {
    step: '01',
    title: 'Konsultasi Gratis',
    description: 'Hubungi kami via WhatsApp atau form online. Sampaikan ide, kebutuhan, serta perkiraan budget renovasi Anda secara mendetail.'
  },
  {
    step: '02',
    title: 'Survey Lokasi Gratis',
    description: 'Tim estimator kami akan datang langsung ke lokasi Anda di wilayah Jawa Timur untuk mengukur dan menganalisis kondisi lapangan secara presisi.'
  },
  {
    step: '03',
    title: 'Penawaran Harga (RAB)',
    description: 'Kami membuatkan Rencana Anggaran Biaya (RAB) tertulis yang transparan, merinci spesifikasi material, upah tukang, dan durasi proyek.'
  },
  {
    step: '04',
    title: 'Pengerjaan Proyek',
    description: 'Setelah kontrak disepakati, tukang profesional kami langsung beraksi diawasi oleh pengawas lapangan berpengalaman agar sesuai standar teknis.'
  },
  {
    step: '05',
    title: 'Quality Control',
    description: 'Pemeriksaan ketat di setiap tahapan penyelesaian proyek untuk memastikan kerapian pengerjaan, kekokohan struktur, dan kebersihan hasil akhir.'
  },
  {
    step: '06',
    title: 'Serah Terima & Garansi',
    description: 'Penandatanganan berita acara serah terima pekerjaan (BAST). Kami berikan sertifikat garansi pemeliharaan sebagai jaminan kualitas pasca-proyek.'
  }
];

export const TESTIMONI: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Budi Hartono',
    role: 'Pemilik Rumah Tinggal',
    location: 'Sidoarjo',
    text: 'Sangat puas dengan renovasi ruang keluarga dan pasang plafon gypsum di rumah saya. Tukangnya sopan, hasil pengerjaan rapi sekali, dan yang terpenting pengerjaannya selesai 2 hari lebih cepat dari jadwal. Sangat direkomendasikan!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
  },
  {
    id: 'test-2',
    name: 'Rina Kusuma',
    role: 'Pengusaha Ruko Kuliner',
    location: 'Rungkut, Surabaya',
    text: 'Awalnya ragu cari tukang borongan lewat internet, tapi PT Mitra Tukang membuktikan profesionalitasnya. Ruko saya direnovasi eksteriornya, dipasang kanopi baja ringan, dan dicat ulang. Harganya transparan, RAB-nya rinci sesuai kenyataan.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
  },
  {
    id: 'test-3',
    name: 'Irwan Prasetyo',
    role: 'HRD Manager PT Surya Jaya',
    location: 'SIER, Surabaya',
    text: 'Kami memesan jasa partisi gypsum dan instalasi listrik kantor tambahan di kawasan pabrik. Pengerjaan dilakukan malam hari agar tidak mengganggu operasional kantor utama. Kerja cepat, bersih, dan sesuai standar K3. Top markotop!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150'
  },
  {
    id: 'test-4',
    name: 'Megawati S.',
    role: 'Ibu Rumah Tangga',
    location: 'Citraland, Surabaya',
    text: 'Sangat terbantu dengan layanan perbaikan talang bocor dan perbaikan tembok rembes pas hujan lebat kemarin. Hubungi admin jam 9 malam, pagi harinya tim survey langsung datang dan langsung dikerjakan. Pelayanan 24 jam yang nyata kualitasnya!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150'
  },
  {
    id: 'test-5',
    name: 'Dwi Cahyono',
    role: 'Pemilik Toko Grosir',
    location: 'Gresik',
    text: 'Proses pembongkaran ruko lama di sebelah toko kami berjalan lancar berkat PT Mitra Tukang. Sangat tertib lingkungan, debunya dikontrol disiram air terus, tetangga tidak ada yang komplain. Bersih tuntas sampai tanah rata siap bangun kembali.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150'
  },
  {
    id: 'test-6',
    name: 'Andi Wijaya',
    role: 'Arsitek & Kontraktor Swasta',
    location: 'Mojokerto',
    text: 'Sering bekerja sama dengan tim PT Mitra Tukang untuk pengerjaan finishing keramik granit 80x80 dan marmer di proyek klien saya. Levelingnya mantap, nat lurus, potongannya bersih. Mitra sub-kontraktor yang sangat bisa diandalkan kualitasnya.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Apakah survey lokasi dan konsultasi benar-benar gratis?',
    answer: 'Ya, 100% GRATIS! Kami melayani survey lokasi langsung dan konsultasi estimasi anggaran biaya (RAB) tanpa dipungut biaya sepeser pun untuk area Surabaya, Sidoarjo, Gresik, dan sekitarnya.'
  },
  {
    id: 'faq-2',
    question: 'Apakah melayani pekerjaan di luar wilayah Surabaya?',
    answer: 'Benar. Selain Surabaya, wilayah jangkauan utama operasional kami meliputi Sidoarjo, Gresik, Mojokerto, Pasuruan, Lamongan, hingga seluruh daerah di Provinsi Jawa Timur.'
  },
  {
    id: 'faq-3',
    question: 'Berapa lama estimasi pengerjaan proyek?',
    answer: 'Lama pengerjaan sangat bervariasi bergantung pada skala tingkat kesulitan pekerjaan (minor, medium, major). Timeline pengerjaan tertulis yang rigid akan kami sertakan dalam Rencana Anggaran Biaya (RAB) sebelum pekerjaan dimulai.'
  },
  {
    id: 'faq-4',
    question: 'Apakah hasil pekerjaan dari PT Mitra Tukang bergaransi?',
    answer: 'Ya, semua jenis pekerjaan kami dilindungi oleh Garansi Pemeliharaan Fisik secara tertulis setelah serah terima pekerjaan dilakukan, berkisar antara 30 hari hingga 6 bulan sesuai jenis kontrak pekerjaan.'
  },
  {
    id: 'faq-5',
    question: 'Apakah bisa melayani renovasi total dari awal sampai jadi?',
    answer: 'Tentu saja bisa. Kami melayani jasa renovasi total bangunan dari nol, mulai dari desain arsitektural kasar, penggalian pondasi, pengerjaan beton cor, pemasangan dinding bata, atap baja, instalasi MEP, hingga serah terima kunci.'
  },
  {
    id: 'faq-6',
    question: 'Apakah PT Mitra Tukang melayani proyek berskala kantor atau komersial?',
    answer: 'Ya, kami berbadan hukum PT (Perseroan Terbatas) resmi, sehingga sangat mumpuni melayani proyek korporasi, gedung kantor, ruko ritel, mall, sekolah, maupun pabrik dengan dokumen penawaran harga legal, invoice pajak, dan standar K3 tinggi.'
  },
  {
    id: 'faq-7',
    question: 'Apakah melayani pengerjaan perbaikan darurat 24 jam?',
    answer: 'Benar, tim tanggap darurat maintenance kami siaga 24 jam sehari, 7 hari seminggu untuk menangani keadaan mendesak seperti korsleting listrik parah, atap ambruk mendadak, atau kebocoran pipa air utama.'
  }
];

export const ARTIKELS: BlogArticle[] = [
  {
    id: 'art-1',
    title: 'Jasa Renovasi Rumah Surabaya Profesional: Panduan & Estimasi',
    excerpt: 'Temukan rincian harga borongan renovasi rumah di Surabaya, cara memilih kontraktor bergaransi, serta tips menyusun RAB agar tidak membengkak.',
    content: 'Merenovasi rumah di kota besar seperti Surabaya membutuhkan perencanaan yang sangat matang. Banyak pemilik properti terjebak dengan biaya "siluman" akibat tidak adanya Rencana Anggaran Biaya (RAB) yang tertulis secara rinci di awal proyek.\n\nDalam memilih jasa renovasi rumah, pastikan Anda bermitra dengan perusahaan yang berbadan hukum resmi (seperti PT Mitra Tukang Surabaya). Keuntungan utama bermitra dengan PT resmi adalah adanya kontrak hukum yang mengikat, harga transparan, tukang berpengalaman bersertifikat, serta jaminan garansi pasca proyek.\n\nTahapan utama renovasi rumah meliputi:\n1. Penyusunan denah & desain baru.\n2. Pembongkaran bagian lama secara terstruktur.\n3. Pekerjaan struktur utama (pondasi, kolom beton).\n4. Pemasangan dinding & kusen pintu jendela.\n5. Instalasi listrik dan pipa air (MEP).\n6. Finishing (plester acian, pasang keramik, pengecatan, plafon).\n\nSelalu pastikan Anda meminta garansi perawatan tertulis berkisar 1 s/d 3 bulan demi memastikan kenyamanan hunian baru Anda.',
    date: '15 Juni 2026',
    readTime: '5 Menit Membaca',
    image: IMAGES.renovasiRumah,
    category: 'Renovasi'
  },
  {
    id: 'art-2',
    title: 'Tips Memilih Tukang Renovasi Agar Hasil Rapi dan Awet',
    excerpt: 'Jangan asal pilih tukang murah! Simak 5 kriteria wajib tukang bangunan profesional agar proyek rumah impian Anda selesai tepat waktu tanpa stres.',
    content: 'Banyak orang tergiur dengan upah tukang bangunan harian murah, namun berakhir kecewa karena pengerjaan lambat, tidak rapi, atau bahkan ditinggal kabur di tengah jalan.\n\nBerikut 5 tips jitu memilih tukang bangunan profesional:\n1. **Periksa Portofolio Pekerjaan Sebelumnya**: Mintalah foto asli proyek nyata yang pernah mereka selesaikan, atau kunjungi jika memungkinkan.\n2. **Pilihlah Sistem Borongan Jasa dengan RAB Rinci**: Sistem harian rawan molor karena tidak ada target selesai. Sistem borongan penuh lebih aman asal rincian material tertera jelas.\n3. **Uji Pengetahuan Teknis**: Tukang berpengalaman paham jenis-jenis material terbaru, misalnya perbedaan baja ringan kanal C tebal dengan tipis, atau teknik adukan semen waterproofing.\n4. **Komunikasi yang Baik**: Pilihlah tukang yang komunikatif, mau mendengarkan kemauan Anda, dan memberikan solusi konstruktif apabila ada kendala struktural.\n5. **Gunakan Jasa Perusahaan Bergaransi**: Menggunakan jasa di bawah naungan PT Mitra Tukang Surabaya menjamin pertanggungjawaban kualitas secara penuh.',
    date: '20 Juni 2026',
    readTime: '4 Menit Membaca',
    image: IMAGES.heroBanner,
    category: 'Edukasi'
  },
  {
    id: 'art-3',
    title: 'Cara Memilih Material Bangunan Berkualitas untuk Rumah Tropis',
    excerpt: 'Panduan lengkap memilih semen instan, bata ringan, atap galvalum, dan cat weatherproof luar ruangan yang kuat menahan iklim tropis Jawa Timur.',
    content: 'Rumah di wilayah Jawa Timur seperti Surabaya, Sidoarjo, dan Gresik menghadapi tantangan iklim tropis yang ekstrem: terik matahari yang sangat menyengat di siang hari dan curah hujan tinggi disertai angin kencang di musim penghujan.\n\nUntuk itu, pemilihan material bangunan tidak boleh sembarangan. Berikut rekomendasinya:\n\n- **Dinding**: Gunakan bata ringan (hebel) berkualitas dipadukan dengan semen mortar instan. Bata ringan memiliki pori mikro yang baik dalam menahan rambatan panas matahari luar ke dalam rumah.\n- **Plafon**: Untuk area rawan lembap, prioritaskan plafon PVC yang anti bocor dan tidak berjamur. Untuk ruang tamu utama yang elegan, plafon Gypsum berkualitas tinggi tetap menjadi pilihan utama.\n- **Atap & Kanopi**: Gunakan rangka atap galvalum/baja ringan berstandar SNI kelas AZ-100 agar anti karat dan anti rayap. Pilih penutup atap berinsulasi (seperti Alderon) agar meredam kebisingan air hujan dan menahan suhu panas.\n- **Pengecatan Eksterior**: Pastikan cat luar ruangan berlabel weatherproof / weather shield bertekstur elastomeric agar elastis menutupi retakan rambut dinding serta tahan terhadap jamur dan lumut.',
    date: '22 Juni 2026',
    readTime: '6 Menit Membaca',
    image: IMAGES.pengecatan,
    category: 'Material'
  },
  {
    id: 'art-4',
    title: 'Panduan Renovasi Rumah Hemat Biaya Tanpa Mengurangi Kualitas',
    excerpt: 'Siapa bilang renovasi harus mahal? Pelajari strategi cerdas menghemat biaya konstruksi, struktur bertahap, dan pemilihan material alternatif.',
    content: 'Menginginkan rumah baru yang estetik tapi terhalang anggaran terbatas? Tenang, renovasi hemat biaya sangat mungkin dilakukan dengan strategi pemangkasan budget yang tepat tanpa harus mengorbankan kualitas kekuatan struktur bangunan.\n\nBerikut beberapa taktik cerdas hemat biaya renovasi:\n\n1. **Gunakan Konsep Desain Minimalis**: Gaya desain minimalis modern memangkas banyak ornamen klasik rumit yang memakan upah tukang dan material mahal.\n2. **Pertahankan Struktur Utama**: Sebisa mungkin jangan mengubah letak tiang kolom beton, kamar mandi utama, atau pondasi. Menggeser instalasi pipa air bawah tanah memakan biaya sangat besar.\n3. **Renovasi Secara Bertahap**: Fokuskan pada area darurat terlebih dahulu, seperti penanganan atap bocor dan perbaikan dapur, kemudian lanjutkan ke bagian dekoratif kosmetik di tahap berikutnya.\n4. **Manfaatkan Material Bekas Layak Pakai**: Kusen kayu jati lama, genteng tanah liat yang masih utuh, atau pagar besi tua biasanya masih sangat kokoh setelah diamplas dan dicat ulang.\n5. **Konsultasikan Rencana Anggaran**: Berkonsultasilah dengan PT Mitra Tukang Surabaya untuk mendapatkan rekomendasi bahan alternatif berkualitas setara namun berharga lebih miring.',
    date: '25 Juni 2026',
    readTime: '5 Menit Membaca',
    image: IMAGES.pasangKeramik,
    category: 'Tips Hemat'
  }
];

export const SEO_KEYWORDS = [
  'Jasa Renovasi Surabaya',
  'Tukang Bangunan Surabaya',
  'Jasa Pertukangan Surabaya',
  'Renovasi Rumah Surabaya',
  'Pasang Plafon Surabaya',
  'Tukang Listrik Surabaya',
  'Pasang Keramik Surabaya',
  'Baja Ringan Surabaya',
  'Bongkar Bangunan Surabaya',
  'Tukang Harian Surabaya'
];
