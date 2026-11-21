/* =====================================================================
   DATA PRICELIST — EDIT DI SINI SAJA
   ---------------------------------------------------------------------
   • Ganti harga  : ubah angka p (tanpa titik). Contoh  p: 25000
   • Harga "tanya admin" : isi  p: null
   • Hapus plan   : hapus satu baris { d: ..., p: ... },
   • Tambah plan  : salin satu baris lalu ubah isinya
   • Tambah app   : salin satu blok { id: ... } lalu ubah isinya
   • Logo app     : otomatis memakai file  assets/logos/<id>.svg
                    Mau ganti? timpa file tsb, atau simpan gambar baru lalu isi
                    logo: 'assets/logos/nama.png'  pada aplikasi tsb
   • Label badge  : badge: 'Best Seller' / 'Promo' / 'Baru' (boleh dikosongkan)
   ===================================================================== */

const STORE = {
  name: 'Digital Solution',
  tagline: 'Premium Apps Pricelist',
  whatsapp: '6289524046454',          // tanpa + dan tanpa spasi
  waGreeting: 'Halo admin Digital Solution, saya mau order:',
};

/* Kategori — "soon: true" = tampil sebagai "Segera Hadir" */
const CATEGORIES = [
  { id: 'ai',        name: 'Artificial Intelligence', short: 'AI',        icon: 'ai',     desc: 'Asisten AI untuk kerja, kuliah & riset' },
  { id: 'streaming', name: 'Streaming Apps',          short: 'Streaming', icon: 'play',   desc: 'Film, series, drama, anime & musik' },
  { id: 'edu',       name: 'Edu Needs',               short: 'Edu',       icon: 'book',   desc: 'Belajar, menulis, meeting & produktivitas' },
  { id: 'games',     name: 'Games',                   short: 'Games',     icon: 'game',   desc: 'Top up & layanan game', soon: true },
  { id: 'others',    name: 'Others',                  short: 'Others',    icon: 'grid',   desc: 'Desain, editing foto/video & utilitas' },
];

const APPS = [

  /* ===================================================================
     ARTIFICIAL INTELLIGENCE
     =================================================================== */
  {
    id: 'chatgpt', name: 'ChatGPT', cat: 'ai', domain: 'chatgpt.com', badge: 'Best Seller',
    tagline: 'Asisten AI serbaguna dari OpenAI',
    desc: 'ChatGPT adalah asisten AI dari OpenAI untuk menulis, merangkum, menerjemahkan, coding, brainstorming ide, menganalisis file & gambar, hingga riset. Tersedia paket GPT Go (hemat) dan GPT Plus (limit lebih besar & model lebih canggih), dalam pilihan sharing maupun private.',
    features: [
      'Akses model GPT terbaru dengan limit lebih tinggi dari versi gratis',
      'Upload & analisis file (PDF, Excel, Word) dan gambar',
      'Generate gambar, voice mode, dan web search',
      'Custom GPTs, Projects & memory percakapan',
      'GPT Plus: limit jauh lebih banyak dari GPT Go + fitur lebih lengkap',
    ],
    plans: [
      { group: 'GPT Go — Sharing 8 User', info: 'Paling hemat. 1 akun dipakai 8 orang, limit dibagi bersama.',
        items: [
          { d: '1 Minggu', p: 15000 },
          { d: '1 Bulan',  p: 40000 },
        ] },
      { group: 'GPT Go — Sharing 3 User', info: 'Lebih lega, 1 akun hanya 3 orang. Limit dipastikan masih banyak saat diberikan.',
        items: [
          { d: '1 Hari',   p: 25000 },
          { d: '3 Hari',   p: 40000 },
          { d: '1 Minggu', p: 60000 },
          { d: '1 Bulan',  p: 110000 },
        ] },
      { group: 'GPT Go — Private', info: 'Akun khusus untuk kamu sendiri, maks login 8 device. Boleh pakai Codex.',
        items: [
          { d: '1 Minggu', p: 55000 },
          { d: '1 Bulan',  p: 110000 },
          { d: '3 Bulan',  p: 170000 },
        ] },
      { group: 'GPT Plus — Sharing 8 User', info: 'Limit Plus (lebih besar dari Go), dipakai bersama 8 orang.',
        items: [
          { d: '1 Hari',   p: 20000 },
          { d: '3 Hari',   p: 30000 },
          { d: '1 Minggu', p: 40000 },
          { d: '1 Bulan',  p: 60000 },
        ] },
      { group: 'GPT Plus — Sharing 3 User', info: 'Limit Plus, 1 akun hanya 3 orang.',
        items: [
          { d: '1 Hari',   p: 25000 },
          { d: '3 Hari',   p: 50000 },
          { d: '1 Minggu', p: 70000 },
          { d: '1 Bulan',  p: 110000 },
        ] },
      { group: 'GPT Plus — Private', info: 'Akun private, maks login 8 device. Boleh pakai Codex.',
        items: [
          { d: '1 Minggu', p: 100000 },
          { d: '1 Bulan',  p: 230000, f: 'Email seller (Plus biasa)' },
          { d: '1 Bulan',  p: 280000, f: 'Email buyer (Business via invite)' },
        ] },
    ],
    notes: [
      'Sharing 8U tidak menerima komplain limit, meskipun beli 1 hari',
      'Sharing 3U: limit dipastikan masih banyak sebelum dijual. Jika habis di tengah jalan, itu risiko pemakaian & bukan kesalahan toko',
      'Sharing = akun seller, maks login 1 device & jangan keluar-masuk. Private maks login 8 device',
      'Akun sharing DILARANG memakai Codex. Butuh Codex? Pilih paket Private',
      'ChatGPT Plus memiliki limit lebih banyak dari GPT Go',
    ],
  },

  {
    id: 'claude', name: 'Claude', cat: 'ai', domain: 'claude.ai', badge: 'Best Seller',
    tagline: 'AI dari Anthropic untuk menulis, analisis & coding',
    desc: 'Claude adalah asisten AI dari Anthropic yang unggul untuk menulis panjang, analisis dokumen, riset, dan coding. Claude Pro memberi limit ±5x lebih besar dari versi gratis, sedangkan Claude Max 5x memberi limit ±25x lebih besar dari versi gratis.',
    features: [
      'Akses model Claude terbaru & paling canggih',
      'Upload dokumen panjang, PDF, gambar & analisis data',
      'Projects, Artifacts, dan integrasi Claude Code',
      'Pro: limit ±5x versi gratis · Max 5x: limit ±25x versi gratis',
      'Akun resmi & legal, bisa diperpanjang di bulan berikutnya',
    ],
    plans: [
      { group: 'Claude Pro — Sharing 5 User', info: 'Paling hemat, 1 akun dipakai 5 orang.',
        items: [
          { d: '1 Hari',   p: 40000 },
          { d: '3 Hari',   p: 50000 },
          { d: '7 Hari',   p: 80000 },
          { d: '1 Bulan',  p: 150000 },
        ] },
      { group: 'Claude Pro — Sharing 3 User', info: 'Lebih lega, 1 akun hanya 3 orang. Bisa ajukan ganti akun jika limit awal < 40%.',
        items: [
          { d: '1 Hari',   p: 50000 },
          { d: '3 Hari',   p: 65000 },
          { d: '7 Hari',   p: 85000 },
          { d: '1 Bulan',  p: 205000 },
        ] },
      { group: 'Claude Pro — Private', info: 'Akun untuk kamu sendiri, bebas semua fitur kecuali usage credit.',
        items: [
          { d: '1 Hari',   p: 140000 },
          { d: '3 Hari',   p: 170000 },
          { d: '7 Hari',   p: 220000 },
        ] },
      { group: 'Claude Max 5x', info: 'Limit ±25x versi gratis, cocok untuk heavy user & coding.',
        items: [
          { d: '1 Bulan',  p: 1000000, f: '3–5 user' },
        ] },
    ],
    notes: [
      'Akun resmi & legal, bisa perpanjang di bulan selanjutnya',
      'Jangan dipakai di luar negeri',
      'Sharing 5U tidak menerima komplain limit, meskipun beli 1 hari',
      'Sharing 3U bisa ajukan ganti akun jika saat awal diberikan limit tersisa kurang dari 40%',
      'Private bebas pakai semua fitur kecuali usage credit',
      'Claude Pro limit 5x lebih besar dari versi gratis · Claude Max 5x limit 25x lebih besar',
    ],
  },

  {
    id: 'gemini', name: 'Google Gemini', cat: 'ai', domain: 'gemini.google.com',
    tagline: 'AI Google + bonus storage Google Drive',
    desc: 'Google Gemini (Google AI Plus / Pro / Ultra) adalah AI dari Google yang terintegrasi dengan Gmail, Docs, Drive dan layanan Google lainnya. Setiap paket sudah termasuk bonus penyimpanan Google One.',
    features: [
      'Akses model Gemini terbaru, Deep Research & generate gambar/video',
      'Terintegrasi dengan Gmail, Docs, Sheets, Drive',
      'Plus: limit 2x lebih tinggi, fitur terbatas, bonus Google Drive 400 GB',
      'Pro: limit 4x lebih tinggi, fitur diperluas, bonus 5 TB',
      'Pro: bonus Google Health & Google Meet Premium',
    ],
    plans: [
      { group: 'Gemini Plus', info: 'Limit 2x lebih tinggi + 400 GB Google Drive.',
        items: [
          { d: '3 Bulan', p: 55000 },
          { d: '6 Bulan', p: 95000 },
        ] },
      { group: 'Gemini Pro', info: 'Limit 4x lebih tinggi, fitur lengkap + 5 TB storage.',
        items: [
          { d: '1 Bulan', p: 30000 },
          { d: '3 Bulan', p: 55000 },
          { d: '1 Tahun', p: 120000 },
          { d: '2 Tahun', p: 150000 },
        ] },
      { group: 'Gemini Ultra', info: 'Paket tertinggi untuk kebutuhan profesional.',
        items: [
          { d: '1 Bulan', p: 1300000, f: 'Ultra x5' },
          { d: '1 Bulan', p: null,    f: 'Ultra x20 — tanya admin' },
        ] },
    ],
    notes: [
      'Khusus reseller (min. 5 transaksi/bulan) diberi akun head dari toko, bisa keluar-masukkan 5 email sekaligus',
      'Plus limit 2x lebih tinggi, Pro limit 4x lebih tinggi',
      'Plus fitur terbatas, Pro fitur diperluas',
      'Plus bonus Google Drive 400 GB, Pro bonus 5 TB',
      'Pro bonus Google Health & Google Meet Premium',
    ],
  },

  /* ===================================================================
     STREAMING APPS
     =================================================================== */
  {
    id: 'netflix', name: 'Netflix', cat: 'streaming', domain: 'netflix.com', badge: 'Best Seller',
    tagline: 'Film & series original dunia',
    desc: 'Netflix adalah layanan streaming film, series, dokumenter dan anime dengan ribuan judul original seperti Stranger Things, Squid Game, Wednesday, serta film-film Indonesia. Akun strong, tidak perlu VPN dan tidak gampang keluar sendiri.',
    features: [
      'Ribuan film, series & dokumenter original Netflix',
      'Kualitas HD hingga Ultra HD (tergantung paket)',
      'Bisa download untuk nonton offline',
      'Bisa perpanjang di email yang sama tiap bulan (Netflix Indonesia)',
    ],
    plans: [
      { group: 'Netflix Sharing', info: '1p2u = 1 profil untuk 2 user · 1p1u = 1 profil untuk 1 user · Semi private = 1 profil login 2 device (tidak boleh nonton bersamaan).',
        items: [
          { d: '1 Hari',   p: 6000 },
          { d: '3 Hari',   p: 12000 },
          { d: '1 Minggu', p: 18000 },
          { d: '1 Bulan',  p: 35000,  f: '1 profil 2 user (1p2u)' },
          { d: '1 Bulan',  p: 45000, f: '1 profil 1 user (1p1u)' },
          { d: '1 Bulan',  p: 55000, f: 'Semi private' },
        ] },
      { group: 'Netflix Anti Limit', info: '1 akun diisi 4 profil, setiap profil 1 user. Lebih aman dari screen limit.',
        items: [
          { d: '1 Hari',   p: 12000 },
          { d: '3 Hari',   p: 15000 },
          { d: '1 Minggu', p: 35000 },
          { d: '1 Bulan',  p: 70000 },
        ] },
    ],
    notes: [
      'Login email + password/kode',
      'Akun strong, tidak ribet pakai VPN, tidak gampang keluar sendiri',
      'Mau nonton di luar negeri? Konfirmasi dulu, akan diberikan akun khusus',
      'Bisa perpanjang di email yang sama tiap bulannya (khusus Netflix Indonesia)',
      '1p1u: history tontonan tidak tercampur. Tetap ada risiko screen limit, tetapi lebih kecil daripada 1p2u',
      '1p1u / 1p2u maks login 1 device & jangan keluar-masuk',
    ],
  },

  {
    id: 'disney', name: 'Disney+ Hotstar', cat: 'streaming', domain: 'hotstar.com',
    tagline: 'Disney, Pixar, Marvel, Star Wars & NatGeo',
    desc: 'Disney+ Hotstar menghadirkan film & series dari Disney, Pixar, Marvel, Star Wars, National Geographic, serta beberapa film & series lokal Indonesia. Akun legal, minim problem dan bisa diperpanjang berbulan-bulan.',
    features: [
      'Film & series Disney, Pixar, Marvel, Star Wars, National Geographic',
      'Beberapa film & series lokal Indonesia',
      'Akun legal, minim problem',
      'Bisa perpanjang di bulan-bulan selanjutnya',
    ],
    plans: [
      { group: 'Disney+ Sharing', info: '1 akun 6–8 user, maks login 1 device & jangan keluar-masuk.',
        items: [
          { d: '1 Hari',   p: 5000 },
          { d: '3 Hari',   p: 12000 },
          { d: '1 Minggu', p: 20000 },
          { d: '1 Bulan',  p: 40000 },
        ] },
      { group: 'Disney+ Anti Limit', info: '1 akun hanya 4 user, lebih minim screen limit.',
        items: [
          { d: '1 Hari',   p: 8000 },
          { d: '3 Hari',   p: 16000 },
          { d: '7 Hari',   p: 25000 },
          { d: '1 Bulan',  p: 60000 },
        ] },
    ],
    notes: [
      'Akun legal, minim problem & bisa perpanjang berbulan-bulan selanjutnya',
      'Sharing = 6–8 user, maks login 1 device & jangan keluar-masuk',
      'Anti limit = 4 user',
    ],
  },

  {
    id: 'hbo', name: 'HBO Max', cat: 'streaming', domain: 'hbomax.com',
    tagline: 'Series premium HBO, DC & Warner Bros',
    desc: 'HBO Max berisi series & film premium seperti House of the Dragon, The Last of Us, Game of Thrones, film DC dan Warner Bros. Tersedia paket Standar dan Ultimate.',
    features: [
      'Series HBO Original, film DC & Warner Bros',
      'Standar: resolusi 1080p, batas 30 unduhan',
      'Ultimate: resolusi 4K UHD, batas 100 unduhan',
    ],
    plans: [
      { group: 'HBO Max Sharing', info: 'Akun seller.',
        items: [
          { d: '1 Bulan', p: 25000, f: 'Standar — 1080p' },
          { d: '1 Bulan', p: 35000, f: 'Ultimate — 4K UHD' },
        ] },
    ],
    notes: [
      'Akun seller',
      'Standar: screen limit jika 2 device aktif, resolusi 1080p, batas 30 unduhan',
      'Ultimate: screen limit jika 4 device aktif, resolusi 4K UHD, batas 100 unduhan',
    ],
  },

  {
    id: 'prime', name: 'Prime Video', cat: 'streaming', domain: 'primevideo.com',
    tagline: 'Film populer & original Amazon',
    desc: 'Amazon Prime Video menyediakan banyak film populer serta judul eksklusif yang hanya ada di Prime seperti The Boys, Reacher, dan The Rings of Power.',
    features: [
      'Banyak film & series populer',
      'Judul eksklusif Amazon Original',
      'Bisa download untuk nonton offline',
    ],
    plans: [
      { group: 'Prime Video', info: 'Pilih sharing anti limit atau private.',
        items: [
          { d: '1 Bulan', p: 25000, f: 'Sharing anti limit' },
          { d: '1 Bulan', p: 35000, f: 'Private — maks 3 device' },
        ] },
    ],
    notes: [
      'Sharing maks login 1 device & jangan keluar-masuk',
      'Private maks login 3 device',
    ],
  },

  {
    id: 'vidio', name: 'Vidio Platinum', cat: 'streaming', domain: 'vidio.com',
    tagline: 'Sepak bola, sinetron & film Indonesia',
    desc: 'Vidio Platinum memberi akses ke Vidio Original, film & sinetron Indonesia, drama Asia, serta siaran olahraga (tergantung paket). Tersedia paket Mobile (HP/tablet) dan All Device (termasuk TV & laptop).',
    features: [
      'Vidio Original, film & series Indonesia',
      'Drama Korea, anime & film Hollywood pilihan',
      'Mobile: khusus HP/tablet · All Device: HP, tablet, TV & laptop',
      'Bebas iklan',
    ],
    plans: [
      { group: 'Platinum Mobile — Private', info: 'Khusus HP/tablet.',
        items: [
          { d: '1 Hari',   p: 10000 },
          { d: '3 Hari',   p: 15000 },
          { d: '1 Minggu', p: 25000 },
          { d: '1 Bulan',  p: 40000 },
        ] },
      { group: 'Platinum All Device — Sharing', info: 'Bisa di HP, tablet, TV & laptop.',
        items: [
          { d: '1 Hari',   p: 10000 },
          { d: '3 Hari',   p: 15000 },
          { d: '7 Hari',   p: 25000 },
          { d: '1 Bulan',  p: 35000 },
        ] },
      { group: 'Platinum All Device — Private', info: 'Akun private semua device.',
        items: [
          { d: '1 Hari',   p: 20000 },
          { d: '3 Hari',   p: 25000 },
          { d: '7 Hari',   p: 30000 },
          { d: '1 Bulan',  p: 55000 },
        ] },
    ],
    notes: [
      'Akun dari seller',
      'Maks nonton 1 device di waktu yang sama',
      'Akun private tidak boleh dijual kembali sebagai sharing',
      'Paket Mobile hanya bisa di HP/tablet',
    ],
  },

  {
    id: 'visionplus', name: 'Vision+', cat: 'streaming', domain: 'visionplus.id',
    tagline: 'TV, sports & original series',
    desc: 'Vision+ menyediakan siaran TV nasional & internasional, Vision+ Originals, serta paket Premium Sports dengan siaran olahraga lengkap.',
    features: [
      'Siaran TV nasional & internasional',
      'Vision+ Originals & film pilihan',
      'Premium Sports: semua channel olahraga, Bundesliga, Timnas Indonesia AFF 2026 termasuk beIN Sports',
    ],
    plans: [
      { group: 'Vision+ Premium', info: 'Akun seller.',
        items: [
          { d: '1 Bulan', p: 25000, f: 'Sharing' },
          { d: '1 Bulan', p: 50000, f: 'Private' },
          { d: '1 Bulan', p: 60000, f: 'Sharing Premium Sports' },
          { d: '1 Bulan', p: 75000, f: 'Premium' },
        ] },
    ],
    notes: [
      'Akun seller',
      'Sharing maks login 1 device & jangan keluar-masuk',
      'Premium Sports termasuk semua channel olahraga, Bundesliga, dan Timnas Indonesia AFF 2026 termasuk beIN Sports',
    ],
  },

  {
    id: 'viu', name: 'Viu', cat: 'streaming', domain: 'viu.com',
    tagline: 'Drakor, dracin & drama Thailand',
    desc: 'Viu Premium adalah platform streaming drama Asia (Korea, China, Thailand, dll) dengan subtitle Indonesia, bebas iklan dan bisa download untuk ditonton offline.',
    features: [
      'Banyak drama Asia: drakor, dracin, Thailand, dll',
      'Nonton bebas iklan',
      'Download video & nonton offline',
      'Episode terbaru tayang cepat',
    ],
    plans: [
      { group: 'Viu Premium', info: 'Akun private dari seller.',
        items: [
          { d: '1 Bulan',  p: 15000 },
          { d: '2 Bulan',  p: 20000 },
          { d: '3 Bulan',  p: 25000 },
          { d: '6 Bulan',  p: 40000 },
          { d: '8 Bulan',  p: 50000 },
          { d: '1 Tahun',  p: 60000 },
          { d: 'Lifetime', p: 70000, f: 'Garansi 1 tahun' },
        ] },
    ],
    notes: [
      'Akun private dari seller',
      'Maks login 1 device & jangan keluar-masuk',
      'Lifetime = seumur hidup (garansi 1 tahun)',
    ],
  },

  {
    id: 'wetv', name: 'WeTV', cat: 'streaming', domain: 'wetv.vip',
    tagline: 'Drama China, Asia & WeTV Original',
    desc: 'WeTV VIP menghadirkan drama China, drama Asia, anime, serta WeTV Original Indonesia. Nonton lebih awal, bebas iklan dan support semua device.',
    features: [
      'Drama China, Asia & WeTV Original',
      'Nonton episode lebih awal & bebas iklan',
      'Support login all device (HP/tablet/TV/laptop)',
    ],
    plans: [
      { group: 'WeTV VIP', info: 'Sharing / anti limit / private dari seller.',
        items: [
          { d: '1 Bulan', p: 15000, f: 'Sharing' },
          { d: '1 Bulan', p: 25000, f: 'Anti limit' },
          { d: '1 Bulan', p: 45000, f: 'Private — maks 2 device' },
        ] },
    ],
    notes: [
      'Sharing/private akun dari seller',
      'Sharing & anti limit maks login 1 device & jangan keluar-masuk. Private maks login 2 device',
      'Sharing berisiko screen limit jika 2 device aktif bersamaan',
    ],
  },

  {
    id: 'iqiyi', name: 'iQIYI', cat: 'streaming', domain: 'iq.com',
    tagline: 'Dracin, drakor & anime',
    desc: 'iQIYI Premium menyediakan banyak drama Asia (dracin, drakor), anime dan variety show. Skip iklan, nonton lebih awal, unduh konten VIP dan kualitas Full HD hingga Ultra HD.',
    features: [
      'Banyak drama Asia: dracin, drakor, anime, dll',
      'Skip iklan & nonton episode lebih awal',
      'Unduh konten VIP',
      'Kualitas Full HD / Ultra HD',
    ],
    plans: [
      { group: 'iQIYI Premium', info: 'Akun seller.',
        items: [
          { d: '1 Bulan', p: 20000, f: 'Sharing' },
          { d: '1 Bulan', p: 25000, f: 'Anti limit' },
          { d: '1 Bulan', p: 35000, f: 'Private — 4 device bersamaan' },
        ] },
    ],
    notes: [
      'Akun seller',
      'Sharing maks login 1 device & jangan keluar-masuk',
      'Private maks nonton di 4 device bersamaan',
    ],
  },

  {
    id: 'youku', name: 'Youku', cat: 'streaming', domain: 'youku.tv',
    tagline: 'Film & drama Asia',
    desc: 'Youku VIP berisi banyak pilihan film dan drama Asia, termasuk drakor, dracin dan anime.',
    features: [
      'Drama China, Korea & anime',
      'Bebas iklan',
      'Kualitas HD',
    ],
    plans: [
      { group: 'Youku VIP Sharing', info: 'Sharing akun seller.',
        items: [
          { d: '1 Bulan', p: 15000 },
          { d: '3 Bulan', p: 25000 },
          { d: '1 Tahun', p: 45000 },
        ] },
    ],
    notes: [
      'Sharing akun seller',
      'Maks login 1 device & jangan keluar-masuk',
    ],
  },

  {
    id: 'loklok', name: 'Loklok', cat: 'streaming', domain: 'loklok.com',
    tagline: 'Film, drama & anime dalam satu aplikasi',
    desc: 'Loklok adalah aplikasi streaming film, drama Asia, anime dan series dengan subtitle. Tersedia paket Basic dan Standar.',
    features: [
      'Film, drama Asia, anime & series',
      'Bisa di HP/tablet/TV/laptop (tergantung device)',
    ],
    plans: [
      { group: 'Loklok Sharing', info: 'Sharing akun seller.',
        items: [
          { d: '1 Bulan', p: 25000, f: 'Basic' },
          { d: '1 Bulan', p: 35000, f: 'Standar' },
        ] },
    ],
    notes: [
      'Sharing akun seller, maks login 1 device & jangan keluar-masuk',
      'iOS dipastikan TIDAK bisa, beberapa Android/laptop juga tidak bisa',
      'WAJIB uji coba dulu pakai akun sendiri. Kalau tidak bisa, jangan dibeli',
    ],
  },

  {
    id: 'bstation', name: 'Bstation', cat: 'streaming', domain: 'bilibili.tv',
    tagline: 'Anime & donghua dari Bilibili',
    desc: 'Bstation (Bilibili) Premium adalah platform anime & donghua dengan subtitle Indonesia. Nonton episode premium, bebas iklan dan kualitas tinggi.',
    features: [
      'Anime & donghua episode premium',
      'Bebas iklan',
      'Kualitas video hingga 1080p',
      'Download untuk nonton offline',
    ],
    plans: [
      { group: 'Bstation Premium', info: '',
        items: [
          { d: '1 Bulan', p: 25000 },
          { d: '3 Bulan', p: 35000 },
          { d: '1 Tahun', p: 45000 },
        ] },
    ],
    notes: [],
  },

  {
    id: 'wibuku', name: 'Wibuku', cat: 'streaming', domain: 'wibuku.com',
    tagline: 'Nonton anime tanpa iklan',
    desc: 'Wibuku Premium untuk nonton anime tanpa iklan, bisa download, kualitas HD+, akses prioritas untuk konten pilihan dan server cepat.',
    features: [
      'Nonton anime tanpa iklan',
      'Bisa download',
      'Kualitas HD+',
      'Akses prioritas konten pilihan & server cepat',
    ],
    plans: [
      { group: 'Wibuku Sharing', info: 'Akun seller.',
        items: [
          { d: '1 Bulan', p: 30000 },
        ] },
    ],
    notes: [
      'Akun seller, maks login 1 device & jangan keluar-masuk',
    ],
  },

  {
    id: 'reelshort', name: 'ReelShort', cat: 'streaming', domain: 'reelshort.com',
    tagline: 'Drama pendek vertikal',
    desc: 'ReelShort VIP untuk menonton drama pendek format vertikal (short drama) tanpa perlu membuka episode satu per satu dengan koin.',
    features: [
      'Akses episode drama pendek VIP',
      'Tanpa perlu beli koin per episode',
    ],
    plans: [
      { group: 'ReelShort VIP 1', info: 'Akun sharing dari seller.',
        items: [
          { d: '1 Bulan', p: 35000, f: 'Sharing' },
        ] },
    ],
    notes: [
      'Akun sharing dari seller. Maks login 1x & jangan keluar-masuk',
      'Login via APK',
      'Limit jika ada 2 device aktif bersamaan. Akun sharing sering terkena limit',
    ],
  },

  {
    id: 'spotify', name: 'Spotify', cat: 'streaming', domain: 'spotify.com', badge: 'Best Seller',
    tagline: 'Musik & podcast tanpa iklan',
    desc: 'Spotify Premium memberi akses jutaan lagu & podcast tanpa iklan, skip lagu tanpa batas, download untuk diputar offline, dan kualitas audio tinggi.',
    features: [
      'Dengar musik tanpa iklan',
      'Skip lagu tanpa batas & putar lagu apa saja',
      'Download untuk didengar offline',
      'Kualitas audio tinggi',
    ],
    plans: [
      { group: 'Spotify Premium Indplan', info: 'Individual plan akun seller, aman dari limit screen.',
        items: [
          { d: '1 Hari',   p: 6000 },
          { d: '3 Hari',   p: 10000 },
          { d: '1 Minggu', p: 18000 },
          { d: '1 Bulan',  p: 35000 },
          { d: '2 Bulan',  p: 58000 },
          { d: '3 Bulan',  p: 160000 },
        ] },
    ],
    notes: [
      'Indplan akun seller, maks login 1 device & jangan keluar-masuk. Aman dari limit screen',
      'Agar playlist tidak hilang saat ganti akun: bagikan tautan playlist, buat playlist kolaboratif, atau salin langsung ke akun baru',
    ],
  },

  {
    id: 'applemusic', name: 'Apple Music', cat: 'streaming', domain: 'music.apple.com',
    tagline: 'Musik lossless & spatial audio',
    desc: 'Apple Music memberi akses lebih dari 100 juta lagu tanpa iklan, lirik real-time, Lossless Audio dan Spatial Audio dengan Dolby Atmos.',
    features: [
      'Lebih dari 100 juta lagu tanpa iklan',
      'Lossless & Spatial Audio (Dolby Atmos)',
      'Lirik real-time & download offline',
    ],
    plans: [
      { group: 'Apple Music Indplan', info: 'Individual plan.',
        items: [
          { d: '1 Bulan', p: 30000 },
        ] },
    ],
    notes: [],
  },

  {
    id: 'youtube', name: 'YouTube Premium', cat: 'streaming', domain: 'youtube.com',
    tagline: 'YouTube + YouTube Music tanpa iklan',
    desc: 'YouTube Premium memberi pengalaman YouTube tanpa iklan, putar di latar belakang, download video, plus YouTube Music Premium dalam 1 paket.',
    features: [
      'Nonton YouTube tanpa iklan',
      'Putar di latar belakang (layar mati / buka app lain)',
      'Download video untuk ditonton offline',
      'Termasuk YouTube Music Premium',
    ],
    plans: [
      { group: 'Jasa Payment (akun sendiri)', info: 'Akun milikmu sendiri di-upgrade ke Premium oleh admin.',
        items: [
          { d: '1 Bulan', p: 20000, f: 'Indplan' },
          { d: '3 Bulan', p: 45000, f: 'Indplan — bisa renew' },
          { d: '3 Bulan', p: 60000, f: 'Indplan — no renew' },
        ] },
      { group: 'Akun YouTube (dari seller)', info: 'Akun disediakan oleh seller.',
        items: [
          { d: '1 Bulan', p: 25000, f: 'Indplan' },
          { d: '3 Bulan', p: 40000, f: 'Indplan' },
        ] },
    ],
    notes: [
      'YouTube Premium + YouTube Music dalam 1 paket',
      'Jasa payment wajib kirim email + password agar admin bisa login & upgrade Premium',
    ],
  },

  /* ===================================================================
     EDU NEEDS
     =================================================================== */
  {
    id: 'duolingo', name: 'Duolingo', cat: 'edu', domain: 'duolingo.com',
    tagline: 'Belajar bahasa tanpa batas',
    desc: 'Duolingo Super/Max untuk belajar bahasa asing tanpa batas. Akun kamu sendiri diundang ke family plan dengan durasi full.',
    features: [
      'Pelajaran full & bebas iklan',
      'Kesalahan / nyawa tak terbatas',
      'Coba level Legendary tanpa permata',
      'Pakai akun sendiri (progress aman)',
    ],
    plans: [
      { group: 'Duolingo Family (invite)', info: 'Invite akun buyer ke family, durasi full.',
        items: [
          { d: '1 Bulan',  p: 20000 },
          { d: '2 Bulan',  p: 30000 },
          { d: '12 Bulan', p: 80000 },
        ] },
    ],
    notes: [
      'Invite akun buyer ke family, durasi full',
    ],
  },

  {
    id: 'grammarly', name: 'Grammarly', cat: 'edu', domain: 'grammarly.com',
    tagline: 'Cek grammar, parafrase & plagiarisme',
    desc: 'Grammarly Premium membantu mendeteksi & memperbaiki tata bahasa, ejaan dan nada tulisan (paling optimal untuk bahasa Inggris), plus parafrase, cek plagiarisme/AI dan sitasi otomatis.',
    features: [
      'Deteksi & perbaikan tata bahasa, ejaan, nada bicara',
      'Parafrase & saran penulisan personal',
      'Cek plagiarisme & deteksi AI',
      '2.000 prompt AI per bulan',
      'Sitasi APA, MLA & Chicago',
    ],
    plans: [
      { group: 'Grammarly Premium', info: '',
        items: [
          { d: '1 Bulan', p: 25000, f: 'Sharing' },
          { d: '1 Bulan', p: 55000, f: 'Private — maks 3 device' },
        ] },
    ],
    notes: [
      'Sharing maks login 1 device & jangan keluar-masuk',
      'Private maks login 3 device',
      'Paling optimal untuk bahasa Inggris',
    ],
  },

  {
    id: 'deepl', name: 'DeepL Pro', cat: 'edu', domain: 'deepl.com',
    tagline: 'Penerjemah AI paling natural',
    desc: 'DeepL Pro adalah penerjemah berbasis AI yang terkenal akurat & natural. Translate dan perbaiki tulisan tanpa batas, serta atur glosarium sendiri.',
    features: [
      'Translate teks tanpa batas',
      'Perbaiki tulisan (DeepL Write) tanpa batas',
      'Atur glosarium sendiri',
      'Translate dokumen dengan format tetap rapi',
    ],
    plans: [
      { group: 'DeepL Pro', info: '',
        items: [
          { d: '1 Bulan', p: 20000, f: 'Sharing' },
          { d: '1 Bulan', p: 30000, f: 'Private' },
        ] },
    ],
    notes: [
      'Meskipun private, maks login 1 device & jangan keluar-masuk',
    ],
  },

  {
    id: 'scribd', name: 'Scribd', cat: 'edu', domain: 'scribd.com',
    tagline: 'Perpustakaan digital dokumen & buku',
    desc: 'Scribd adalah perpustakaan digital berisi jutaan dokumen, e-book, audiobook dan jurnal. Cocok untuk riset & tugas kuliah.',
    features: [
      'Membaca & riset perpustakaan bebas iklan',
      'Download dokumen, buku & audio tanpa harus upload file',
      'Sinkronisasi di HP, tablet & PC',
    ],
    plans: [
      { group: 'Scribd', info: '',
        items: [
          { d: '1 Bulan', p: 20000, f: 'Sharing' },
          { d: '1 Bulan', p: 35000, f: 'Private' },
        ] },
    ],
    notes: [
      'Bisa sinkronisasi di HP, tablet & PC, tapi hanya bisa aktif di 1 device secara bersamaan',
    ],
  },

  {
    id: 'wattpad', name: 'Wattpad Premium', cat: 'edu', domain: 'wattpad.com',
    tagline: 'Baca ribuan cerita tanpa iklan',
    desc: 'Wattpad Premium untuk membaca ribuan cerita tanpa iklan, bisa memberi komentar dan mendukung penulis favorit. Cocok untuk pembaca.',
    features: [
      'Baca ribuan cerita tanpa iklan',
      'Beri komentar & dukung penulis favorit',
      'Koin bonus untuk cerita berbayar',
    ],
    plans: [
      { group: 'Wattpad Sharing', info: 'Sharing akun seller.',
        items: [
          { d: '1 Bulan', p: 15000 },
          { d: '3 Bulan', p: 40000 },
        ] },
    ],
    notes: [
      'Sharing akun seller, cocok untuk pembaca, tidak direkomendasikan untuk penulis',
      'Renewal setiap minggu untuk perpanjang durasi',
      'Maks login 1 device & jangan keluar-masuk',
    ],
  },

  {
    id: 'm365', name: 'Microsoft 365', cat: 'edu', domain: 'microsoft.com',
    tagline: 'Word, Excel, PowerPoint + OneDrive 1 TB',
    desc: 'Microsoft 365 Family memberi akses aplikasi Office lengkap (Word, Excel, PowerPoint, Outlook, dll) di laptop, tablet dan HP sekaligus, plus OneDrive 1 TB. Akun kamu sendiri diundang ke family.',
    features: [
      'Install Word, Excel, PowerPoint, Outlook, dll di semua device',
      'Bonus OneDrive 1 TB',
      'Terintegrasi dengan Claude (jika berlangganan)',
      'Keamanan lebih terjamin (akun sendiri)',
    ],
    plans: [
      { group: 'Microsoft 365 Family (invite)', info: 'Invite akun buyer ke family.',
        items: [
          { d: '1 Bulan', p: 15000 },
        ] },
    ],
    notes: [
      'Invite akun buyer ke family',
    ],
  },

  {
    id: 'wps', name: 'WPS Office', cat: 'edu', domain: 'wps.com',
    tagline: 'Office ringan, PDF tools lengkap',
    desc: 'WPS Office Premium adalah aplikasi office ringan untuk dokumen, spreadsheet, presentasi dan PDF, dengan fitur premium seperti edit & konversi PDF, template premium dan tanpa iklan.',
    features: [
      'Dokumen, spreadsheet, presentasi & PDF',
      'Edit, konversi & gabung PDF',
      'Template premium & tanpa iklan',
      'Bisa all device (HP, tablet, laptop via APK)',
    ],
    plans: [
      { group: 'WPS Office Premium', info: '',
        items: [
          { d: '1 Bulan', p: 20000, f: 'Sharing' },
          { d: '1 Bulan', p: 40000, f: 'Private' },
        ] },
    ],
    notes: [
      'Bisa all device (HP, tablet, laptop via APK)',
      'Maks login 1x & jangan keluar-masuk',
    ],
  },

  {
    id: 'zoom', name: 'Zoom', cat: 'edu', domain: 'zoom.us',
    tagline: 'Meeting & webinar tanpa batas waktu',
    desc: 'Zoom Pro untuk meeting online, kelas, seminar & webinar tanpa batas 40 menit. Tersedia kapasitas 100 hingga 5.000 peserta.',
    features: [
      'Meeting tanpa batas waktu 40 menit',
      'Kapasitas 100 sampai 5.000 peserta',
      'Cloud recording, breakout room, polling',
      '300P ke atas: sistem sewa akun + kunci host',
    ],
    plans: [
      { group: 'Zoom 100 Peserta', info: 'Dikasih akun (email + password).',
        items: [
          { d: '14 Hari', p: 55000 },
          { d: '1 Bulan', p: 75000 },
        ] },
      { group: 'Zoom 300 Peserta', info: 'Sewa akun: dikasih link meeting + kunci host.',
        items: [
          { d: '1 Hari', p: 35000 },
          { d: '3 Hari', p: 70000 },
          { d: '7 Hari', p: 100000 },
        ] },
      { group: 'Zoom 500 Peserta', info: 'Sewa akun: dikasih link meeting + kunci host.',
        items: [
          { d: '1 Hari', p: 65000 },
          { d: '3 Hari', p: 100000 },
          { d: '7 Hari', p: 250000 },
        ] },
      { group: 'Zoom 1000 Peserta', info: 'Sewa akun: dikasih link meeting + kunci host.',
        items: [
          { d: '1 Hari', p: 115000 },
          { d: '3 Hari', p: 200000 },
          { d: '7 Hari', p: 335000 },
        ] },
      { group: 'Zoom 3000 Peserta', info: 'Harga dapat berubah sewaktu-waktu.',
        items: [
          { d: '1 Jam',  p: 1000000 },
          { d: '1 Hari', p: 1500000 },
          { d: '3 Hari', p: 2000000 },
          { d: '7 Hari', p: 3000000 },
        ] },
      { group: 'Zoom 5000 Peserta', info: 'Harga dapat berubah sewaktu-waktu.',
        items: [
          { d: '1 Jam',  p: 1500000 },
          { d: '1 Hari', p: 2000000 },
          { d: '3 Hari', p: 2500000 },
          { d: '7 Hari', p: 3500000 },
        ] },
    ],
    notes: [
      'P = peserta',
      '100P dikasih akun (email + password)',
      '300P ke atas sistem sewa akun dari seller, dikasih link meeting + kunci host',
      'Harga 3000P & 5000P bisa berubah sewaktu-waktu',
    ],
  },

  /* ===================================================================
     OTHERS — Desain, Editing & Utilitas
     =================================================================== */
  {
    id: 'canva', name: 'Canva Pro', cat: 'others', domain: 'canva.com', badge: 'Best Seller',
    tagline: 'Desain grafis mudah & cepat',
    desc: 'Canva Pro membuka semua template, elemen, foto & font premium, plus fitur AI seperti Magic Studio, hapus background dan Magic Resize. Cocok untuk konten sosmed, presentasi, CV dan tugas.',
    features: [
      'Jutaan template, foto, elemen & font premium',
      'Hapus background 1 klik & Magic Resize',
      'Magic Studio (fitur AI Canva)',
      'Brand Kit & penyimpanan cloud',
    ],
    plans: [
      { group: 'Canva Pro', info: '',
        items: [
          { d: '1 Bulan',  p: 12000, f: 'Member teams' },
          { d: '1 Bulan',  p: 14000, f: 'Designer teams' },
          { d: 'Lifetime', p: 25000, f: 'Student — tanpa garansi' },
        ] },
    ],
    notes: [
      'Member teams: akunmu diundang ke tim Canva Pro',
      'Designer teams: akses dengan role designer di tim',
      'Lifetime student tidak ada garansi',
    ],
  },

  {
    id: 'capcut', name: 'CapCut Pro', cat: 'others', domain: 'capcut.com', badge: 'Best Seller',
    tagline: 'Edit video pro tanpa watermark',
    desc: 'CapCut Pro membuka semua efek, filter, transisi, template & fitur AI premium (auto caption, hapus background video, enhance kualitas) tanpa watermark. Tersedia paket Sharing, Private dan Ultra.',
    features: [
      'Semua efek, filter, transisi & template Pro',
      'Export tanpa watermark',
      'Fitur AI: auto caption, remove background, enhance video',
      'Penyimpanan cloud',
      'Ultra: semua fitur tertinggi dengan durasi full',
    ],
    plans: [
      { group: 'CapCut Pro — Sharing', info: 'Akun dipakai bersama.',
        items: [
          { d: '1 Hari', p: 8000 },
          { d: '3 Hari', p: 12000 },
          { d: '7 Hari', p: 17000 },
        ] },
      { group: 'CapCut Pro — Private', info: 'Akun untuk kamu sendiri.',
        items: [
          { d: '1 Hari',  p: 10000 },
          { d: '3 Hari',  p: 18000 },
          { d: '7 Hari',  p: 25000 },
          { d: '1 Bulan', p: 50000, f: 'Email seller' },
          { d: '1 Bulan', p: 65000, f: 'Invite email buyer, bisa perpanjang berkali-kali' },
        ] },
      { group: 'CapCut Ultra', info: 'Paket tertinggi CapCut.',
        items: [
          { d: '1 Bulan', p: 950000, f: 'Durasi full' },
        ] },
    ],
    notes: [
      'Private invite email buyer bisa diperpanjang berkali-kali',
    ],
  },

  {
    id: 'adobe', name: 'Adobe', cat: 'others', domain: 'adobe.com',
    tagline: 'Lightroom, Express & Creative Cloud',
    desc: 'Paket aplikasi Adobe untuk fotografer, desainer & video editor: Lightroom Mobile untuk edit foto, Adobe Express untuk desain cepat, dan Creative Cloud All Apps (Photoshop, Illustrator, Premiere Pro, After Effects, dll).',
    features: [
      'Lightroom Mobile: preset, masking & edit foto premium',
      'Adobe Express: template & desain cepat',
      'Creative Cloud: Photoshop, Illustrator, Premiere Pro, After Effects & 20+ app',
      'Fitur AI Adobe Firefly',
    ],
    plans: [
      { group: 'Adobe', info: '',
        items: [
          { d: '1 Tahun', p: 25000,  f: 'Lightroom Mobile' },
          { d: '1 Bulan', p: 30000,  f: 'Adobe Express' },
          { d: '1 Bulan', p: 250000, f: 'Creative Cloud' },
          { d: '1 Bulan', p: 350000, f: 'Creative Cloud Private' },
        ] },
    ],
    notes: [],
  },

  {
    id: 'autodesk', name: 'Autodesk', cat: 'others', domain: 'autodesk.com',
    tagline: 'AutoCAD, 3ds Max, Revit & lainnya',
    desc: 'Lisensi Autodesk untuk software desain & engineering seperti AutoCAD, 3ds Max, Maya, Revit dan Fusion. Cocok untuk mahasiswa teknik, arsitek & desainer 3D.',
    features: [
      'AutoCAD, Revit, 3ds Max, Maya, Fusion, dll',
      'Software desain 2D/3D & engineering',
    ],
    plans: [
      { group: 'Autodesk', info: '',
        items: [
          { d: '1 Bulan', p: 30000 },
          { d: '3 Bulan', p: 60000 },
          { d: '1 Tahun', p: 150000 },
        ] },
    ],
    notes: [],
  },

  {
    id: 'alight', name: 'Alight Motion', cat: 'others', domain: 'alightmotion.com',
    tagline: 'Motion graphic & edit video di HP',
    desc: 'Alight Motion Premium untuk membuat motion graphic, animasi & edit video di HP tanpa watermark, dengan semua efek dan export kualitas tinggi.',
    features: [
      'Tanpa watermark',
      'Semua efek & preset premium',
      'Keyframe animation & motion graphic',
      'Export kualitas tinggi',
    ],
    plans: [
      { group: 'Alight Motion Premium', info: '',
        items: [
          { d: '1 Tahun', p: 30000, f: 'Sharing' },
          { d: '1 Tahun', p: 50000, f: 'Private' },
          { d: '1 Tahun', p: 50000, f: 'Private email buyer' },
        ] },
    ],
    notes: [],
  },

  {
    id: 'beautyplus', name: 'BeautyPlus Pro', cat: 'others', domain: 'beautyplus.com',
    tagline: 'Edit foto & selfie dengan AI',
    desc: 'BeautyPlus Pro untuk edit selfie & foto dengan filter premium, retouch wajah otomatis dan fitur AI tanpa watermark.',
    features: [
      'Filter & efek premium',
      'Retouch wajah otomatis berbasis AI',
      'Tanpa watermark & tanpa iklan',
    ],
    plans: [
      { group: 'BeautyPlus Pro', info: '',
        items: [
          { d: '1 Minggu', p: 15000 },
          { d: '1 Tahun',  p: 40000, f: 'Khusus iOS' },
          { d: 'Lifetime', p: 35000, f: 'Khusus iOS — tanpa garansi' },
        ] },
    ],
    notes: [
      'Paket tahunan & lifetime khusus iOS',
      'Lifetime tidak ada garansi',
    ],
  },

  {
    id: 'dazzcam', name: 'Dazz Cam', cat: 'others', domain: 'dazzcam.com',
    tagline: 'Kamera retro & film aesthetic',
    desc: 'Dazz Cam adalah aplikasi kamera bergaya retro/film analog dengan banyak preset kamera vintage untuk foto & video aesthetic.',
    features: [
      'Semua kamera & filter retro terbuka',
      'Efek film analog, light leak & date stamp',
      'Foto & video',
    ],
    plans: [
      { group: 'Dazz Cam', info: 'Akun seller, login wajib di iOS.',
        items: [
          { d: 'Lifetime', p: 30000, f: 'Tanpa garansi setelah berhasil login' },
        ] },
    ],
    notes: [
      'Akun seller',
      'Login WAJIB di iOS',
      'Tidak ada garansi setelah berhasil login',
    ],
  },

  {
    id: 'ibispaint', name: 'ibisPaint', cat: 'others', domain: 'ibispaint.com',
    tagline: 'Aplikasi menggambar digital',
    desc: 'ibisPaint Prime untuk menggambar digital tanpa iklan dengan akses penuh ke semua kuas, materi dan fitur lengkap.',
    features: [
      'Menggambar bebas iklan',
      'Akses semua kuas & materi',
      'Fitur lengkap (filter, layer, dll)',
    ],
    plans: [
      { group: 'ibisPaint Prime', info: 'Sharing akun seller.',
        items: [
          { d: '1 Bulan', p: 15000 },
          { d: '3 Bulan', p: 20000 },
          { d: '1 Tahun', p: 40000, f: 'Khusus Android' },
        ] },
    ],
    notes: [
      'Sharing akun seller, maks login 1 device & jangan keluar-masuk',
      'Backup dulu project di akun lama sebelum pindah akun',
    ],
  },

  {
    id: 'procreate', name: 'Procreate', cat: 'others', domain: 'procreate.com',
    tagline: 'Ilustrasi & animasi di iPad/iPhone',
    desc: 'Procreate adalah aplikasi ilustrasi profesional untuk Apple. Pilih salah satu: Procreate Pocket (iPhone), Procreate (iPad, untuk menggambar), atau Procreate Dreams (iPad, untuk animasi).',
    features: [
      'Procreate Pocket — untuk iPhone',
      'Procreate — untuk menggambar di iPad',
      'Procreate Dreams — untuk animasi di iPad',
      'Durasi lifetime, garansi 6 bulan',
    ],
    plans: [
      { group: 'Procreate (pilih salah satu)', info: 'Pocket / iPad / Dreams.',
        items: [
          { d: 'Lifetime', p: 45000, f: 'Pocket / iPad / Dreams' },
        ] },
    ],
    notes: [
      'Durasi lifetime/seumur hidup, garansi 6 bulan',
    ],
  },

  {
    id: 'picsart', name: 'Picsart', cat: 'others', domain: 'picsart.com',
    tagline: 'Edit foto & desain dengan AI',
    desc: 'Picsart Gold/Pro untuk edit foto & desain dengan AI canggih, penyimpanan cloud besar, dan konten premium tanpa batas.',
    features: [
      'Tools AI canggih untuk edit gambar',
      'Penyimpanan cloud besar',
      'Konten, stiker & font premium tanpa batas',
      'Tanpa watermark & iklan',
    ],
    plans: [
      { group: 'Picsart', info: 'Private akun.',
        items: [
          { d: '1 Minggu', p: 10000 },
          { d: '1 Minggu', p: 15000, f: 'Akun buyer' },
          { d: '1 Bulan',  p: 25000 },
        ] },
    ],
    notes: [
      'Private akun',
    ],
  },

  {
    id: 'meitu', name: 'Meitu', cat: 'others', domain: 'meitu.com',
    tagline: 'Edit foto & retouch wajah',
    desc: 'Meitu VIP untuk edit foto & retouch wajah dengan filter, efek AI dan tools kecantikan premium. Tersedia VIP dan VIP+.',
    features: [
      'Filter, efek & template premium',
      'Retouch wajah & body otomatis',
      'Fitur AI (hapus objek, enhance foto)',
      'Bisa di Android/iOS',
    ],
    plans: [
      { group: 'Meitu VIP', info: '',
        items: [
          { d: '7 Hari',  p: 15000 },
          { d: '14 Hari', p: 25000 },
        ] },
      { group: 'Meitu VIP+', info: 'Fitur lebih lengkap dari VIP.',
        items: [
          { d: '7 Hari',  p: 25000 },
          { d: '14 Hari', p: 35000 },
        ] },
    ],
    notes: [
      'Private akun seller',
      'Bisa di Android/iOS',
      'Maks login 1 device & jangan keluar-masuk biar tidak limit',
    ],
  },

  {
    id: 'wink', name: 'Wink', cat: 'others', domain: 'wink.ai',
    tagline: 'Retouch & enhance video',
    desc: 'Wink (by Meitu) untuk retouch & meningkatkan kualitas video: perjelas video blur, retouch wajah di video, dan efek AI. Tersedia VIP dan VIP+.',
    features: [
      'Enhance kualitas video (HD)',
      'Retouch wajah di video',
      'Efek & filter AI premium',
      'Bisa iOS/Android',
    ],
    plans: [
      { group: 'Wink', info: 'Private akun seller.',
        items: [
          { d: '1 Minggu', p: 25000, f: 'VIP' },
          { d: '1 Minggu', p: 60000, f: 'VIP+' },
        ] },
    ],
    notes: [
      'Private akun seller',
      'Bisa iOS/Android',
      'Maks login 1x & jangan keluar-masuk biar tidak limit',
    ],
  },

  {
    id: 'remini', name: 'Remini Pro', cat: 'others', domain: 'remini.ai',
    tagline: 'Perjelas foto blur dengan AI',
    desc: 'Remini Pro menggunakan AI untuk memperjelas foto blur/lama, meningkatkan resolusi, dan membuat foto AI. Tanpa iklan dan tanpa watermark.',
    features: [
      'Perjelas foto blur & foto lama',
      'Tingkatkan resolusi foto',
      'Tanpa iklan & tanpa watermark',
      'Bisa di Android/iOS',
    ],
    plans: [
      { group: 'Remini Pro', info: 'Private email seller.',
        items: [
          { d: '7 Hari',  p: 14000 },
          { d: '1 Bulan', p: 35000 },
        ] },
    ],
    notes: [
      'Private email seller',
      'Bisa di Android/iOS',
      'Login 1x & jangan keluar-masuk biar tidak limit',
    ],
  },

  {
    id: 'kalodata', name: 'Kalodata', cat: 'others', domain: 'kalodata.com',
    tagline: 'Riset produk & data TikTok Shop',
    desc: 'Kalodata adalah tools analitik data TikTok Shop untuk riset produk, toko, kreator, video & iklan. Cocok untuk seller dan affiliator.',
    features: [
      'Starter: 50 pencarian/hari, 10 toko/kreator teratas per pencarian, 100 halaman detail/hari',
      'Starter: rentang data 90 hari (tidak termasuk kategori)',
      'Starter: 35 Kalo Credits/bulan, Brand Analysis (info dasar) & Video-Ads analysis',
      'Starter: export 30 video & 3 rekaman live per bulan',
      'Starter TIDAK termasuk: riset Amazon/Shopee, sub-akun, export data, kontak kreator, Image Search, Market Landscape',
    ],
    plans: [
      { group: 'Kalodata', info: 'Private account dari seller.',
        items: [
          { d: '1 Bulan', p: 150000, f: 'Starter plan' },
          { d: '1 Bulan', p: 250000, f: 'Professional plan' },
        ] },
    ],
    notes: [
      'Private account dari seller',
      'Starter plan bisa digunakan di Indonesia, Malaysia, Filipina, Vietnam, Thailand',
      'Professional plan bisa digunakan di Thailand, Vietnam, Filipina',
    ],
  },

  {
    id: 'icloud', name: 'iCloud+', cat: 'others', domain: 'icloud.com',
    tagline: 'Storage tambahan untuk iPhone',
    desc: 'iCloud+ untuk menambah penyimpanan iPhone/iPad/Mac (backup foto, chat, file). Sistem invite Apple ID kamu ke dalam Family Sharing.',
    features: [
      'Tambahan penyimpanan iCloud',
      'Data aman, tidak bisa dilihat anggota family lain',
      'Pakai Apple ID sendiri',
    ],
    plans: [
      { group: 'iCloud+ Family (invite)', info: 'Invite email customer ke family.',
        items: [
          { d: '1 Bulan', p: 100000 },
          { d: '2 Bulan', p: 170000 },
        ] },
    ],
    notes: [
      'Sistem invite email customer ke dalam family',
      'Data aman, tidak bisa dilihat anggota family lain',
      '1 Apple ID bisa gabung ke 2 family tiap tahun. Maks ganti family 1x dalam setahun',
    ],
  },

  {
    id: 'strava', name: 'Strava', cat: 'others', domain: 'strava.com',
    tagline: 'Tracking lari & sepeda',
    desc: 'Strava Subscription untuk pelari & pesepeda: analisis latihan lebih detail, rute, segmen live dan perbandingan performa.',
    features: [
      'Lihat data detak jantung, zona daya & kemajuan latihan secara rinci',
      'Buat rute baru & dapatkan rekomendasi jalur aman',
      'Pantau catatan waktu secara live saat melewati segmen',
      'Bandingkan hasil latihan dengan teman atau kelompok usia lain',
    ],
    plans: [
      { group: 'Strava', info: 'Private akun seller.',
        items: [
          { d: '1 Bulan', p: 30000 },
        ] },
    ],
    notes: [],
  },

  {
    id: 'discord', name: 'Discord Nitro', cat: 'others', domain: 'discord.com',
    tagline: 'Nitro Boost via link redeem',
    desc: 'Discord Nitro memberi emoji & stiker custom di semua server, upload file lebih besar, streaming HD, profil custom dan 2 server boost.',
    features: [
      'Emoji & stiker custom di semua server',
      'Upload file lebih besar',
      'Streaming HD & profil custom',
      'Termasuk 2 Server Boost',
    ],
    plans: [
      { group: 'Nitro Boost (link redeem)', info: '',
        items: [
          { d: '3 Bulan', p: 40000 },
        ] },
    ],
    notes: [
      'Wajib di-redeem dalam 7x24 jam setelah diterima',
      'Pastikan akun tujuan sudah benar sebelum redeem',
      'Garansi berlaku jika link error/used',
      'Klaim garansi wajib menyertakan bukti (SS / video)',
    ],
  },
];
