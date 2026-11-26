(function () {
  "use strict";

  const CART_KEY = "ns_cart_v1";
  const ORDERS_KEY = "ns_orders_v1";
  const CHANNEL_NAME = "nails_studio_realtime_v1";

  const rawProdukKuku = [
    {
      nama: "Colorful Pop Art",
      kategori: "Artistic Series",
      deskripsi: "Desain pop art penuh warna cerah yang ekspresif dan playful.",
      harga: "Rp 75.000",
      bentuk: "Coffin",
      badge: "Baru",
      badgeTipe: "gold",
      gambar: "kuku/Colorful_pop_art_fake_nails_78669720.jpg"
    },
    {
      nama: "Cosmic Star Galaxy",
      kategori: "Fantasy Series",
      deskripsi: "Motif galaksi bertabur bintang kosmik dengan kilau malam.",
      harga: "Rp 78.000",
      bentuk: "Almond",
      badge: "Terlaris",
      badgeTipe: "",
      gambar: "kuku/Cosmic_star_false_nails_set_d43e1803.jpg"
    },
    {
      nama: "Cowboy Western Theme",
      kategori: "Themed Series",
      deskripsi: "Set kuku bertema koboi western dengan detail unik dan artistik.",
      harga: "Rp 74.000",
      bentuk: "Square",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/Cowboy_western_themed_fake_nails_32489ec9.jpg"
    },
    {
      nama: "Cyberpunk Neon Grid",
      kategori: "Futuristic",
      deskripsi: "Gaya cyberpunk modern dengan aksen garis futuristik yang tajam.",
      harga: "Rp 82.000",
      bentuk: "Stiletto",
      badge: "Baru",
      badgeTipe: "gold",
      gambar: "kuku/Cyberpunk_fake_nail_set_arranged_5f8aaea8.jpg"
    },
    {
      nama: "Soft Ivory Classic",
      kategori: "Minimalis",
      deskripsi: "Tampilan bersih warna gading lembut untuk kesan anggun sehari-hari.",
      harga: "Rp 55.000",
      bentuk: "Oval",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/Fake_nails_arranged_on_background_f6d56919.jpg"
    },
    {
      nama: "Studio Signature Display",
      kategori: "Glam Series",
      deskripsi: "Set pilihan studio dengan perpaduan kilap gel yang tahan lama.",
      harga: "Rp 65.000",
      bentuk: "Almond",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/Fake_nails_catalog_display_88e57e71.jpg"
    },
    {
      nama: "Nude Glossy Essential",
      kategori: "Minimalis",
      deskripsi: "Warna nude natural dengan lapisan akhir mengkilap sempurna.",
      harga: "Rp 56.000",
      bentuk: "Short Square",
      badge: "Terlaris",
      badgeTipe: "",
      gambar: "kuku/Fake_nails_catalog_photo_0fd3c44e.jpg"
    },
    {
      nama: "Silk Pearl Finish",
      kategori: "Glam Series",
      deskripsi: "Efek kilau mutiara sutra yang lembut dan mewah di jari.",
      harga: "Rp 68.000",
      bentuk: "Almond",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/Fake_nails_catalog_photo_ef719f4c.jpg"
    },
    {
      nama: "Frozen Ice Crystal",
      kategori: "Fantasy Series",
      deskripsi: "Nuansa biru es dingin dengan detail kristal salju berkilauan.",
      harga: "Rp 79.000",
      bentuk: "Coffin",
      badge: "Baru",
      badgeTipe: "gold",
      gambar: "kuku/Fake_nails_frozen_design_set_d3a969c8.jpg"
    },
    {
      nama: "Magic Fantasy Aura",
      kategori: "Fantasy Series",
      deskripsi: "Desain magis penuh warna fantasi dengan sentuhan shimmer.",
      harga: "Rp 80.000",
      bentuk: "Almond",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/Fake_nails_magic_fantasy_set_17ac94b5.jpg"
    },
    {
      nama: "Sweet Pastel Neat",
      kategori: "Pastel Pop",
      deskripsi: "Pilihan warna pastel manis yang rapi untuk tampilan kasual.",
      harga: "Rp 58.000",
      bentuk: "Oval",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/Fake_nails_neatly_arranged_dffa1284.jpg"
    },
    {
      nama: "Blush Satin Set",
      kategori: "Glam Series",
      deskripsi: "Rona merah muda lembut dengan hasil akhir satin yang halus.",
      harga: "Rp 62.000",
      bentuk: "Almond",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/Fake_nails_set_arranged_5a3bf7e6.jpg"
    },
    {
      nama: "Minimalist Cream Set",
      kategori: "Minimalis",
      deskripsi: "Warna krem netral yang mudah dipadukan dengan berbagai busana.",
      harga: "Rp 55.000",
      bentuk: "Square",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/Fake_nails_set_arranged_neatly_c0f2f83c.jpg"
    },
    {
      nama: "Chic Everyday Nails",
      kategori: "Minimalis",
      deskripsi: "Desain simpel dan modern yang nyaman dipakai beraktivitas.",
      harga: "Rp 57.000",
      bentuk: "Short Square",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/Fake_nails_set_displayed_16c67bd7.jpg"
    },
    {
      nama: "Warm Beige Gloss",
      kategori: "Earth Tone",
      deskripsi: "Nuansa beige hangat dengan kilap salon yang elegan.",
      harga: "Rp 59.000",
      bentuk: "Oval",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/Fake_nails_set_on_background_d0d4da56.jpg"
    },
    {
      nama: "Soft Velvet Fabric",
      kategori: "Glam Series",
      deskripsi: "Tampilan kuku lembut bergaya feminin dengan detail manis.",
      harga: "Rp 64.000",
      bentuk: "Almond",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/Fake_nails_set_on_fabric_3f554c6d.jpg"
    },
    {
      nama: "Rosewood Shine",
      kategori: "Earth Tone",
      deskripsi: "Warna rosewood klasik yang memberikan kesan dewasa dan rapi.",
      harga: "Rp 63.000",
      bentuk: "Coffin",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/Fake_nails_set_on_fabric_8171364c.jpg"
    },
    {
      nama: "Artisan Motif Set",
      kategori: "Artistic Series",
      deskripsi: "Set kuku bermotif artistik dengan detail lukisan tangan.",
      harga: "Rp 72.000",
      bentuk: "Almond",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/Fake_nails_set_with_design_51118adc.jpg"
    },
    {
      nama: "Spy Movie Noir",
      kategori: "Themed Series",
      deskripsi: "Desain misterius terinspirasi film mata-mata yang sleek dan tegas.",
      harga: "Rp 76.000",
      bentuk: "Stiletto",
      badge: "Baru",
      badgeTipe: "gold",
      gambar: "kuku/Fake_nails_spy_movie_design_c2102cfa.jpg"
    },
    {
      nama: "Festive Lantern Glow",
      kategori: "Themed Series",
      deskripsi: "Motif lentera hangat yang meriah dengan sentuhan warna cerah.",
      harga: "Rp 74.000",
      bentuk: "Almond",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/Fake_nails_with_lantern_design_902b63a3.jpg"
    },
    {
      nama: "Pirate Adventure Set",
      kategori: "Themed Series",
      deskripsi: "Set kuku bertema bajak laut dengan ornamen klasik yang unik.",
      harga: "Rp 75.000",
      bentuk: "Coffin",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/Fake_nails_with_pirate_design_bc8521db.jpg"
    },
    {
      nama: "Sweet Strawberry Berry",
      kategori: "Pastel Pop",
      deskripsi: "Desain buah stroberi imut di atas warna dasar lembut yang segar.",
      harga: "Rp 69.000",
      bentuk: "Short Square",
      badge: "Terlaris",
      badgeTipe: "",
      gambar: "kuku/Fake_nails_with_strawberry_design_1ad7c828.jpg"
    },
    {
      nama: "Blush Rose Silk",
      kategori: "Glam Series",
      deskripsi: "Nuansa pink lembut dengan kilau halus yang menawan.",
      harga: "Rp 65.000",
      bentuk: "Almond",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/False_nails_arranged_on_fabric_02218fe2.jpg"
    },
    {
      nama: "Velvet Nude Chic",
      kategori: "Minimalis",
      deskripsi: "Warna nude natural yang cocok untuk tampilan sehari-hari.",
      harga: "Rp 58.000",
      bentuk: "Oval",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/False_nails_arranged_on_fabric_404a9257.jpg"
    },
    {
      nama: "Pearl Shimmer Set",
      kategori: "Glam Series",
      deskripsi: "Sentuhan akhir mutiara berkilau untuk kesan anggun dan rapi.",
      harga: "Rp 72.000",
      bentuk: "Coffin",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/False_nails_arranged_on_fabric_47e4c301.jpg"
    },
    {
      nama: "Soft Pastel Dream",
      kategori: "Pastel Pop",
      deskripsi: "Perpaduan warna pastel lembut yang manis dan segar.",
      harga: "Rp 60.000",
      bentuk: "Short Square",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/False_nails_arranged_on_fabric_4ea9c67b.jpg"
    },
    {
      nama: "Rosy Petal Gloss",
      kategori: "Glam Series",
      deskripsi: "Kilap gel bening dengan rona kelopak mawar yang cantik.",
      harga: "Rp 64.000",
      bentuk: "Almond",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/False_nails_arranged_on_fabric_8e0005de.jpg"
    },
    {
      nama: "Mocha Cream Satin",
      kategori: "Earth Tone",
      deskripsi: "Warna cokelat susu hangat dengan hasil akhir satin halus.",
      harga: "Rp 59.000",
      bentuk: "Oval",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/False_nails_arranged_on_fabric_9025b94e.jpg"
    },
    {
      nama: "Crystal Dew Drop",
      kategori: "Luxury Series",
      deskripsi: "Tampilan jernih berkilau dengan detail aksen elegan.",
      harga: "Rp 75.000",
      bentuk: "Coffin",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/False_nails_arranged_on_fabric_9ebebbdc.jpg"
    },
    {
      nama: "Berry Wine Glaze",
      kategori: "Bold Series",
      deskripsi: "Warna merah berry pekat yang berani dan berkelas.",
      harga: "Rp 62.000",
      bentuk: "Stiletto",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/False_nails_arranged_on_fabric_a61f3acd.jpg"
    },
    {
      nama: "Lavender Mist Set",
      kategori: "Pastel Pop",
      deskripsi: "Ungu lavender muda dengan kilau lembut yang menenangkan.",
      harga: "Rp 63.000",
      bentuk: "Almond",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/False_nails_arranged_on_fabric_bf83b364.jpg"
    },
    {
      nama: "Caramel Swirl Matte",
      kategori: "Earth Tone",
      deskripsi: "Nuansa karamel hangat dengan tekstur matte beludru.",
      harga: "Rp 61.000",
      bentuk: "Square",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/False_nails_arranged_on_fabric_c793467b.jpg"
    },
    {
      nama: "Peach Blossom Aura",
      kategori: "Pastel Pop",
      deskripsi: "Efek gradasi warna persik lembut di bagian tengah kuku.",
      harga: "Rp 68.000",
      bentuk: "Oval",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/False_nails_arranged_on_fabric_d420aa6b.jpg"
    },
    {
      nama: "Champagne Sparkle",
      kategori: "Luxury Series",
      deskripsi: "Kilau glitter champagne yang cocok untuk acara pesta malam.",
      harga: "Rp 76.000",
      bentuk: "Coffin",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/False_nails_arranged_on_fabric_e8a153c4.jpg"
    },
    {
      nama: "Milky White Pure",
      kategori: "Minimalis",
      deskripsi: "Putih susu transparan yang bersih, rapi, dan modern.",
      harga: "Rp 55.000",
      bentuk: "Short Square",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/False_nails_arranged_on_fabric_f392a3a3.jpg"
    },
    {
      nama: "Ruby Velvet Shine",
      kategori: "Bold Series",
      deskripsi: "Merah rubi elegan dengan efek kilau mewah seperti kuteks gel.",
      harga: "Rp 70.000",
      bentuk: "Almond",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/False_nails_arranged_on_fabric_f96d4393.jpg"
    },
    {
      nama: "Dusty Mauve Classic",
      kategori: "Glam Series",
      deskripsi: "Perpaduan warna mauve lembut yang cocok untuk semua warna kulit.",
      harga: "Rp 62.000",
      bentuk: "Oval",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/False_nails_arranged_on_fabric_fa334f2e.jpg"
    },
    {
      nama: "Pearl Ivory Catalog",
      kategori: "Minimalis",
      deskripsi: "Warna gading mutiara yang cocok untuk acara formal dan wisuda.",
      harga: "Rp 66.000",
      bentuk: "Oval",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/False_nails_catalog_photo_display_78fd32d6.jpg"
    },
    {
      nama: "Pure White Linen",
      kategori: "Minimalis",
      deskripsi: "Nuansa putih bersih minimalis dengan kilau lembut.",
      harga: "Rp 56.000",
      bentuk: "Square",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/False_nails_on_white_fabric_245d3cef.jpg"
    },
    {
      nama: "Natural Sheen Set",
      kategori: "Minimalis",
      deskripsi: "Tampilan kuku sehat alami dengan efek kilap bening.",
      harga: "Rp 55.000",
      bentuk: "Short Square",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/False_nails_set_on_display_6f18564a.jpg"
    },
    {
      nama: "Soft Blush Display",
      kategori: "Glam Series",
      deskripsi: "Rona pink merona yang manis dan feminin untuk harian.",
      harga: "Rp 63.000",
      bentuk: "Almond",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/False_nails_set_on_display_b8c196db.jpg"
    },
    {
      nama: "Silk Taupe Collection",
      kategori: "Earth Tone",
      deskripsi: "Warna taupe netral yang tenang dan berkelas.",
      harga: "Rp 60.000",
      bentuk: "Oval",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/False_nails_set_on_fabric_7dc1578e.jpg"
    },
    {
      nama: "Classic French Design",
      kategori: "Minimalis",
      deskripsi: "Desain ujung putih klasik yang bersih dan elegan untuk segala acara.",
      harga: "Rp 55.000",
      bentuk: "Square",
      badge: "Terlaris",
      badgeTipe: "",
      gambar: "kuku/False_nails_with_French_design_338985b0.jpg"
    },
    {
      nama: "Romantic Rose Garden",
      kategori: "Artistic Series",
      deskripsi: "Hiasan bunga mawar lembut yang romantis dan anggun.",
      harga: "Rp 73.000",
      bentuk: "Almond",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/False_nails_with_rose_design_2f279d41.jpg"
    },
    {
      nama: "Futuristic Neon Glow",
      kategori: "Futuristic",
      deskripsi: "Warna neon menyala bergaya futuristik yang mencuri perhatian.",
      harga: "Rp 80.000",
      bentuk: "Coffin",
      badge: "Baru",
      badgeTipe: "gold",
      gambar: "kuku/Futuristic_neon_fake_nails_set_c7ecec72.jpg"
    },
    {
      nama: "Gold Marble Luxury",
      kategori: "Luxury Series",
      deskripsi: "Set kuku bermotif marmer mewah dengan aksen guratan emas.",
      harga: "Rp 79.000",
      bentuk: "Almond",
      badge: "Terlaris",
      badgeTipe: "",
      gambar: "kuku/Gold_marble_false_nails_set_c94f5cff.jpg"
    },
    {
      nama: "Gothic Horror Noir",
      kategori: "Themed Series",
      deskripsi: "Set kuku bernuansa gothic gelap yang dramatis dan artistik.",
      harga: "Rp 78.000",
      bentuk: "Stiletto",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/Gothic_horror_fake_nails_set_613c80d1.jpg"
    },
    {
      nama: "Kuromi Cute Rebel",
      kategori: "Character Series",
      deskripsi: "Set kuku bertema Kuromi dengan perpaduan warna hitam dan ungu imut.",
      harga: "Rp 85.000",
      bentuk: "Almond",
      badge: "Terlaris",
      badgeTipe: "",
      gambar: "kuku/Kuromi_themed_fake_nails_set_919060cd.jpg"
    },
    {
      nama: "Pastel Romantic Anime",
      kategori: "Character Series",
      deskripsi: "Nuansa anime romantis berwarna pastel yang manis dan dreamy.",
      harga: "Rp 82.000",
      bentuk: "Oval",
      badge: "Baru",
      badgeTipe: "gold",
      gambar: "kuku/Pastel_romantic_anime_fake_nails_ef19e44d.jpg"
    },
    {
      nama: "Post-Apocalyptic Edge",
      kategori: "Themed Series",
      deskripsi: "Desain tekstur metalik industrial yang unik dan berani.",
      harga: "Rp 79.000",
      bentuk: "Stiletto",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/Post-apocalyptic_fake_nail_set_17bde851.jpg"
    },
    {
      nama: "Red Rose Velvet",
      kategori: "Bold Series",
      deskripsi: "Motif mawar merah menyala yang romantis dan memikat.",
      harga: "Rp 74.000",
      bentuk: "Coffin",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/Red_rose_fake_nails_set_2fb9480b.jpg"
    },
    {
      nama: "Retro Synthwave 80s",
      kategori: "Futuristic",
      deskripsi: "Gradasi warna retro synthwave neon khas era 80-an.",
      harga: "Rp 77.000",
      bentuk: "Coffin",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/Retro_synthwave_fake_nails_set_8fcb269b.jpg"
    },
    {
      nama: "Ruby Red Glamour",
      kategori: "Bold Series",
      deskripsi: "Merah rubi pekat berkilau untuk tampilan mewah dan percaya diri.",
      harga: "Rp 68.000",
      bentuk: "Almond",
      badge: "Terlaris",
      badgeTipe: "",
      gambar: "kuku/Ruby_red_fake_nails_set_6618d3d3.jpg"
    },
    {
      nama: "Little Twin Stars Dream",
      kategori: "Character Series",
      deskripsi: "Tema Little Twin Stars bernuansa biru dan pink pastel yang menggemaskan.",
      harga: "Rp 85.000",
      bentuk: "Short Square",
      badge: "Baru",
      badgeTipe: "gold",
      gambar: "kuku/Sanrio_Little_Twin_Stars_fake_9047ae92.jpg"
    },
    {
      nama: "Swan Lake Ballet",
      kategori: "Luxury Series",
      deskripsi: "Terinspirasi keanggunan balet Swan Lake dengan detail mutiara dan pita.",
      harga: "Rp 84.000",
      bentuk: "Almond",
      badge: "Baru",
      badgeTipe: "gold",
      gambar: "kuku/Swan_Lake_fake_nails_set_199d1821.jpg"
    },
    {
      nama: "Crimson Prosperity CNY",
      kategori: "Festive Series",
      deskripsi: "Nuansa merah dan emas khas Tahun Baru Imlek yang elegan dan meriah.",
      harga: "Rp 78.000",
      bentuk: "Almond",
      badge: "Baru",
      badgeTipe: "gold",
      gambar: "kuku/Chinese_New_Year_nail_art_3af78afe.jpg"
    },
    {
      nama: "Golden Fortune Imlek",
      kategori: "Festive Series",
      deskripsi: "Set kuku spesial Imlek dengan aksen ornamen keberuntungan berkilau.",
      harga: "Rp 79.000",
      bentuk: "Coffin",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/Chinese_New_Year_nail_art_eb81051e.jpg"
    },
    {
      nama: "Merry Holly Christmas",
      kategori: "Festive Series",
      deskripsi: "Desain Natal klasik dengan sentuhan warna merah, hijau, dan salju.",
      harga: "Rp 76.000",
      bentuk: "Almond",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/Christmas_nail_art_display_a2e44956.jpg"
    },
    {
      nama: "Winter Wonderland Noel",
      kategori: "Festive Series",
      deskripsi: "Hiasan kuku bertema musim dingin dan Natal yang manis serta hangat.",
      harga: "Rp 77.000",
      bentuk: "Oval",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/Christmas_nail_art_display_a70e0652.jpg"
    },
    {
      nama: "Festive Pine & Gold",
      kategori: "Festive Series",
      deskripsi: "Perpaduan motif cemara Natal dan glitter emas yang mewah.",
      harga: "Rp 78.000",
      bentuk: "Coffin",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/Christmas_nail_art_display_aa6112b4.jpg"
    },
    {
      nama: "Snowflake Candy Cane",
      kategori: "Festive Series",
      deskripsi: "Motif permen tongkat dan kepingan salju yang ceria untuk liburan.",
      harga: "Rp 75.000",
      bentuk: "Short Square",
      badge: "Terlaris",
      badgeTipe: "",
      gambar: "kuku/Christmas_press-on_nails_display_77dda0ee.jpg"
    },
    {
      nama: "Cozy Holiday Sparkle",
      kategori: "Festive Series",
      deskripsi: "Kilau hangat khas malam Natal dengan detail artistik yang rapi.",
      harga: "Rp 76.000",
      bentuk: "Almond",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/Christmas_press-on_nails_display_ae1756c8.jpg"
    },
    {
      nama: "Santa Velvet Cheer",
      kategori: "Festive Series",
      deskripsi: "Set kuku Natal dengan aksen merah beludru dan hiasan pesta.",
      harga: "Rp 75.000",
      bentuk: "Square",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/Christmas_press-on_nails_display_db76a351.jpg"
    },
    {
      nama: "Frosty Garland Set",
      kategori: "Festive Series",
      deskripsi: "Desain Natal bernuansa sejuk dengan detail halus di setiap jari.",
      harga: "Rp 77.000",
      bentuk: "Almond",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/Christmas_press-on_nail_design_f62a9ce3.jpg"
    },
    {
      nama: "Jingle Bell Shimmer",
      kategori: "Festive Series",
      deskripsi: "Tampilan kuku Natal penuh kilau untuk melengkapi momen spesial.",
      harga: "Rp 76.000",
      bentuk: "Oval",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/Christmas_press-on_nail_design_fe7b8105.jpg"
    },
    {
      nama: "Crimson Noel Edition",
      kategori: "Festive Series",
      deskripsi: "Kombinasi warna merah Natal dan aksen putih salju yang elegan.",
      harga: "Rp 78.000",
      bentuk: "Coffin",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/Christmas_press-on_nail_set_display_a1dddf5f.jpg"
    },
    {
      nama: "Starry Eve Christmas",
      kategori: "Festive Series",
      deskripsi: "Motif bintang malam Natal dengan efek glossy yang menawan.",
      harga: "Rp 79.000",
      bentuk: "Almond",
      badge: "Baru",
      badgeTipe: "gold",
      gambar: "kuku/Christmas_press-on_nail_set_display_fa4d15d2.jpg"
    },
    {
      nama: "Pastel Bunny Easter",
      kategori: "Seasonal Series",
      deskripsi: "Desain Paskah ceria dengan warna pastel lembut dan motif kelinci imut.",
      harga: "Rp 72.000",
      bentuk: "Short Square",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/Easter_press-on_nails_display_e7db89cf.jpg"
    },
    {
      nama: "Spring Egg Blossom",
      kategori: "Seasonal Series",
      deskripsi: "Motif musim semi bertema Paskah yang segar, manis, dan penuh warna.",
      harga: "Rp 71.000",
      bentuk: "Oval",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/Easter_press-on_nail_design_display_43998336.jpg"
    },
    {
      nama: "Daisy Meadow Easter",
      kategori: "Seasonal Series",
      deskripsi: "Nuansa padang bunga musim semi dengan warna-warna cerah lembut.",
      harga: "Rp 72.000",
      bentuk: "Almond",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/Easter_press_on_nails_display_99505b1b.jpg"
    },
    {
      nama: "Imperial Lunar Bloom",
      kategori: "Festive Series",
      deskripsi: "Desain Tahun Baru Lunar dengan motif bunga mekar dan aksen emas.",
      harga: "Rp 80.000",
      bentuk: "Almond",
      badge: "Terlaris",
      badgeTipe: "",
      gambar: "kuku/Lunar_New_Year_nail_art_5d021c24.jpg"
    },
    {
      nama: "Chic Studio Pattern",
      kategori: "Artistic Series",
      deskripsi: "Set nail art modern dengan perpaduan motif artistik yang rapi.",
      harga: "Rp 68.000",
      bentuk: "Almond",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/Nail_art_design_display_1f4b81ed.jpg"
    },
    {
      nama: "Velvet Swirl Art",
      kategori: "Artistic Series",
      deskripsi: "Garis swirl lembut bergaya minimalis modern untuk tampil modis.",
      harga: "Rp 67.000",
      bentuk: "Oval",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/Nail_art_design_display_2a1024cf.jpg"
    },
    {
      nama: "Blush Aura Marble",
      kategori: "Glam Series",
      deskripsi: "Kombinasi efek marmer lembut dan warna blush yang feminin.",
      harga: "Rp 70.000",
      bentuk: "Coffin",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/Nail_art_design_display_3667c136.jpg"
    },
    {
      nama: "Pastel Breeze Set",
      kategori: "Pastel Pop",
      deskripsi: "Warna pastel lembut dengan detail bersih untuk tampilan harian.",
      harga: "Rp 64.000",
      bentuk: "Short Square",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/Nail_art_design_display_50476186.jpg"
    },
    {
      nama: "Glam Shimmer Muse",
      kategori: "Glam Series",
      deskripsi: "Kilau shimmer halus yang membuat tampilan tangan tampak lebih cerah.",
      harga: "Rp 69.000",
      bentuk: "Almond",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/Nail_art_design_display_50a49842.jpg"
    },
    {
      nama: "Soft French Twist",
      kategori: "Minimalis",
      deskripsi: "Sentuhan modern pada gaya French tip klasik yang anggun.",
      harga: "Rp 65.000",
      bentuk: "Square",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/Nail_art_design_display_72c2a3b0.jpg"
    },
    {
      nama: "Pearl Accent Chic",
      kategori: "Luxury Series",
      deskripsi: "Set kuku elegan dengan hiasan mutiara kecil yang memikat.",
      harga: "Rp 74.000",
      bentuk: "Almond",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/Nail_art_design_display_7d7eadc9.jpg"
    },
    {
      nama: "Dreamy Ombre Gloss",
      kategori: "Glam Series",
      deskripsi: "Gradasi warna lembut dengan lapisan gel mengkilap tahan lama.",
      harga: "Rp 68.000",
      bentuk: "Oval",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/Nail_art_design_display_7f40e383.jpg"
    },
    {
      nama: "Mocha Latte Swirl",
      kategori: "Earth Tone",
      deskripsi: "Motif hangat bernuansa kopi susu yang tenang dan estetik.",
      harga: "Rp 66.000",
      bentuk: "Coffin",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/Nail_art_design_display_81703f83.jpg"
    },
    {
      nama: "Artistic Petal Glow",
      kategori: "Artistic Series",
      deskripsi: "Sentuhan lukisan kelopak bunga halus untuk kesan manis.",
      harga: "Rp 71.000",
      bentuk: "Almond",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/Nail_art_design_display_ce3557bc.jpg"
    },
    {
      nama: "Crystal Silk Elegance",
      kategori: "Luxury Series",
      deskripsi: "Tampilan mewah dengan efek kilap kristal dan warna dasar lembut.",
      harga: "Rp 75.000",
      bentuk: "Stiletto",
      badge: "Baru",
      badgeTipe: "gold",
      gambar: "kuku/Nail_art_design_display_fdbca319.jpg"
    },
    {
      nama: "Butterfly Flutter Set",
      kategori: "Artistic Series",
      deskripsi: "Hiasan kupu-kupu cantik dengan detail halus yang tampak hidup.",
      harga: "Rp 76.000",
      bentuk: "Almond",
      badge: "Terlaris",
      badgeTipe: "",
      gambar: "kuku/Nail_art_display_featuring_butterflies_5c117b5c.jpg"
    },
    {
      nama: "Minimalist Nude Studio",
      kategori: "Minimalis",
      deskripsi: "Set kuku bernuansa netral bersih yang cocok untuk acara formal maupun santai.",
      harga: "Rp 60.000",
      bentuk: "Oval",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/Nail_art_display_on_background_1d000a69.jpg"
    },
    {
      nama: "Rosy Satin Essence",
      kategori: "Glam Series",
      deskripsi: "Warna pink lembut dengan hasil akhir mengkilap seperti salon.",
      harga: "Rp 63.000",
      bentuk: "Short Square",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/Nail_art_display_on_background_e3a59b8f.jpg"
    },
    {
      nama: "Everyday Glam Press-On",
      kategori: "Glam Series",
      deskripsi: "Koleksi press-on serbaguna dengan desain manis yang mudah dipadukan.",
      harga: "Rp 65.000",
      bentuk: "Almond",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/Nail_art_display_press-on_set_a866e41a.jpg"
    },
    {
      nama: "Coquette Ribbon Bow",
      kategori: "Luxury Series",
      deskripsi: "Desain bergaya coquette dengan aksen pita manis yang sangat populer.",
      harga: "Rp 78.000",
      bentuk: "Almond",
      badge: "Terlaris",
      badgeTipe: "",
      gambar: "kuku/Nail_art_display_with_bow_af28a22b.jpg"
    },
    {
      nama: "Sweet Easter Pastel",
      kategori: "Seasonal Series",
      deskripsi: "Ornamen Paskah yang ceria berpadu dengan warna pastel lembut.",
      harga: "Rp 72.000",
      bentuk: "Oval",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/Nail_art_display_with_Easter_0943d267.jpg"
    },
    {
      nama: "Midnight Fireworks Spark",
      kategori: "Festive Series",
      deskripsi: "Motif kembang api berkilauan di atas warna dasar malam yang dramatis.",
      harga: "Rp 79.000",
      bentuk: "Coffin",
      badge: "Baru",
      badgeTipe: "gold",
      gambar: "kuku/Nail_art_display_with_fireworks_c8e9f61b.jpg"
    },
    {
      nama: "Golden Foil Glamour",
      kategori: "Luxury Series",
      deskripsi: "Aksen lembaran emas mewah untuk tampilan jari yang berkelas.",
      harga: "Rp 77.000",
      bentuk: "Almond",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/Nail_art_display_with_gold_a9e49f13.jpg"
    },
    {
      nama: "Gilded Edge Luxury",
      kategori: "Luxury Series",
      deskripsi: "Desain elegan berhias garis dan detail emas yang menawan.",
      harga: "Rp 78.000",
      bentuk: "Coffin",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/Nail_art_display_with_gold_d96e314f.jpg"
    },
    {
      nama: "Spring Tulip Garden",
      kategori: "Artistic Series",
      deskripsi: "Lukisan bunga tulip lembut bernuansa segar untuk tampilan feminin.",
      harga: "Rp 74.000",
      bentuk: "Oval",
      badge: "Baru",
      badgeTipe: "gold",
      gambar: "kuku/Nail_art_display_with_tulips_9e80c610.jpg"
    },
    {
      nama: "Signature Chic Press-On",
      kategori: "Minimalis",
      deskripsi: "Set kuku praktis dengan tampilan bersih dan kilap gel tahan lama.",
      harga: "Rp 62.000",
      bentuk: "Short Square",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/Nail_art_press-on_set_a2c22896.jpg"
    },
    {
      nama: "Soft Bloom Collection",
      kategori: "Glam Series",
      deskripsi: "Perpaduan warna lembut dan detail manis untuk tampilan anggun.",
      harga: "Rp 66.000",
      bentuk: "Almond",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/Nail_art_set_display_90d7ce55.jpg"
    },
    {
      nama: "Pure Elegance Set",
      kategori: "Minimalis",
      deskripsi: "Desain simpel yang rapi untuk menunjang penampilan profesional.",
      harga: "Rp 60.000",
      bentuk: "Square",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/Press-on_nails_display_6144bf99.jpg"
    },
    {
      nama: "Modern Chic Motif",
      kategori: "Artistic Series",
      deskripsi: "Motif kontemporer yang unik dan tetap nyaman dipakai harian.",
      harga: "Rp 68.000",
      bentuk: "Almond",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/Press-on_nails_display_design_63e27c80.jpg"
    },
    {
      nama: "Easter Bloom Theme",
      kategori: "Seasonal Series",
      deskripsi: "Set kuku bertema Paskah dengan warna ceria yang memikat.",
      harga: "Rp 72.000",
      bentuk: "Oval",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/Press-on_nails_display_Easter_theme_2355abd5.jpg"
    },
    {
      nama: "Valentine Love Blush",
      kategori: "Themed Series",
      deskripsi: "Desain romantis bernuansa pink dan motif hati untuk hari kasih sayang.",
      harga: "Rp 75.000",
      bentuk: "Almond",
      badge: "Terlaris",
      badgeTipe: "",
      gambar: "kuku/Press-on_nails_display_valentine_5f397283.jpg"
    },
    {
      nama: "Sweetheart Valentine Set",
      kategori: "Themed Series",
      deskripsi: "Kombinasi warna manis dan detail cinta yang anggun di jari.",
      harga: "Rp 75.000",
      bentuk: "Coffin",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/Press-on_nails_display_valentine_e38e8369.jpg"
    },
    {
      nama: "Eid Mubarak Elegance",
      kategori: "Festive Series",
      deskripsi: "Desain anggun bertema Lebaran dengan nuansa lembut dan sentuhan emas.",
      harga: "Rp 78.000",
      bentuk: "Almond",
      badge: "Baru",
      badgeTipe: "gold",
      gambar: "kuku/Press-on_nails_display_with_Eid_eef2281d.jpg"
    },
    {
      nama: "Easter Meadow Joy",
      kategori: "Seasonal Series",
      deskripsi: "Set kuku Paskah dengan detail warna pastel dan hiasan ceria.",
      harga: "Rp 71.000",
      bentuk: "Short Square",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/Press-on_nails_Easter_design_8898fc89.jpg"
    },
    {
      nama: "Spring Bunny Pastel",
      kategori: "Seasonal Series",
      deskripsi: "Motif musim semi bertema Paskah yang segar dan manis dipandang.",
      harga: "Rp 72.000",
      bentuk: "Oval",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/Press-on_nails_Easter_design_e24055e2.jpg"
    },
    {
      nama: "Easter Egg Speckle",
      kategori: "Seasonal Series",
      deskripsi: "Tampilan kuku ceria dengan aksen motif Paskah yang lembut.",
      harga: "Rp 70.000",
      bentuk: "Almond",
      badge: "",
      badgeTipe: "",
      gambar: "kuku/Press-on_nails_Easter_display_a1fd91ed.jpg"
    },
    {
      nama: "Rose Heart Valentine",
      kategori: "Themed Series",
      deskripsi: "Nuansa romantis merah muda dan aksen cinta untuk momen spesial.",
      harga: "Rp 76.000",
      bentuk: "Almond",
      badge: "Baru",
      badgeTipe: "gold",
      gambar: "kuku/Valentine_press-on_nails_display_2d1c439e.jpg"
    }
  ];

  function slugify(str) {
    return String(str || "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function parseHarga(hargaStr) {
    const digits = String(hargaStr || "").replace(/[^0-9]/g, "");
    return parseInt(digits, 10) || 0;
  }

  const produkKuku = rawProdukKuku.map(function (item, idx) {
    return {
      id: slugify(item.nama) || "produk-" + (idx + 1),
      nama: item.nama,
      kategori: item.kategori,
      deskripsi: item.deskripsi,
      harga: item.harga,
      hargaNum: parseHarga(item.harga),
      bentuk: item.bentuk,
      satuan: "/ set",
      badge: item.badge,
      badgeTipe: item.badgeTipe,
      gambar: item.gambar
    };
  });

  let channel = null;
  if (typeof BroadcastChannel !== "undefined") {
    try {
      channel = new BroadcastChannel(CHANNEL_NAME);
    } catch (_) {
      channel = null;
    }
  }

  function broadcastEvent(type, payload) {
    if (channel) {
      try {
        channel.postMessage({ type, payload, ts: Date.now() });
      } catch (_) {}
    }
  }

  function onRealtimeUpdate(callback) {
    window.addEventListener("storage", function (e) {
      if (e.key === ORDERS_KEY || e.key === CART_KEY) {
        callback({ source: "storage", key: e.key });
      }
    });
    if (channel) {
      channel.addEventListener("message", function (e) {
        callback({ source: "broadcast", data: e.data });
      });
    }
  }

  function formatRupiah(amount) {
    const num = Number(amount) || 0;
    return "Rp " + num.toLocaleString("id-ID");
  }

  function formatWaktu(isoString) {
    if (!isoString) return "-";
    const d = new Date(isoString);
    return d.toLocaleString("id-ID", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }

  function escapeHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function getCart() {
    try {
      const raw = localStorage.getItem(CART_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (_) {
      return [];
    }
  }

  function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    broadcastEvent("CART_UPDATED", { count: getCartCount() });
    updateNavBadge();
  }

  function getProductById(id) {
    return produkKuku.find(function (item) {
      return item.id === id;
    });
  }

  function addToCart(productId, qty) {
    const product = getProductById(productId);
    if (!product) return null;
    const addQty = Math.max(1, parseInt(qty, 10) || 1);
    const cart = getCart();
    const existing = cart.find(function (c) {
      return c.id === productId;
    });
    if (existing) {
      existing.qty += addQty;
    } else {
      cart.push({
        id: product.id,
        nama: product.nama,
        gambar: product.gambar,
        bentuk: product.bentuk,
        satuan: product.satuan,
        hargaNum: product.hargaNum,
        qty: addQty
      });
    }
    saveCart(cart);
    return cart;
  }

  function updateCartQty(productId, newQty) {
    const qty = parseInt(newQty, 10);
    if (isNaN(qty) || qty < 1) {
      return removeFromCart(productId);
    }
    const cart = getCart();
    const item = cart.find(function (c) {
      return c.id === productId;
    });
    if (item) {
      item.qty = Math.min(99, qty);
      saveCart(cart);
    }
    return cart;
  }

  function removeFromCart(productId) {
    const cart = getCart().filter(function (c) {
      return c.id !== productId;
    });
    saveCart(cart);
    return cart;
  }

  function clearCart() {
    saveCart([]);
  }

  function getCartCount() {
    return getCart().reduce(function (sum, item) {
      return sum + (parseInt(item.qty, 10) || 0);
    }, 0);
  }

  function getCartTotals(shippingCost) {
    const cart = getCart();
    const subtotal = cart.reduce(function (sum, item) {
      return sum + item.hargaNum * item.qty;
    }, 0);
    const ongkir = cart.length > 0 ? (typeof shippingCost === "number" ? shippingCost : 15000) : 0;
    const grandTotal = subtotal + ongkir;
    return { subtotal, ongkir, grandTotal };
  }

  function getOrders() {
    try {
      const raw = localStorage.getItem(ORDERS_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (_) {
      return [];
    }
  }

  function saveOrders(orders) {
    localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
  }

  function getOrderById(orderId) {
    return getOrders().find(function (o) {
      return o.id === orderId;
    });
  }

  function generateOrderId() {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, "0");
    const d = String(now.getDate()).padStart(2, "0");
    const rand = Math.floor(1000 + Math.random() * 9000);
    return "INV-NS-" + y + m + d + "-" + rand;
  }

  function createOrder(customer, shippingMethod) {
    const cart = getCart();
    if (cart.length === 0) return null;

    const ongkir = shippingMethod === "pickup" ? 0 : 15000;
    const totals = getCartTotals(ongkir);
    const orderId = generateOrderId();
    const nowIso = new Date().toISOString();

    const order = {
      id: orderId,
      createdAt: nowIso,
      paidAt: null,
      rejectedAt: null,
      status: "PENDING",
      paymentMethod: "QRIS",
      qrisRef: "QRIS" + Date.now().toString().slice(-8),
      approvalRef: null,
      shippingMethod: shippingMethod === "pickup" ? "Ambil di Studio" : "Kurir Reguler",
      customer: {
        nama: customer.nama,
        telepon: customer.telepon,
        alamat: customer.alamat,
        kota: customer.kota,
        catatan: customer.catatan || ""
      },
      items: cart.map(function (c) {
        return {
          id: c.id,
          nama: c.nama,
          gambar: c.gambar,
          bentuk: c.bentuk,
          satuan: c.satuan,
          hargaNum: c.hargaNum,
          qty: c.qty,
          subtotal: c.hargaNum * c.qty
        };
      }),
      subtotal: totals.subtotal,
      ongkir: totals.ongkir,
      grandTotal: totals.grandTotal
    };

    const orders = getOrders();
    orders.unshift(order);
    saveOrders(orders);
    clearCart();
    broadcastEvent("ORDER_CREATED", { orderId: order.id });
    return order;
  }

  function updateOrderStatus(orderId, newStatus) {
    const orders = getOrders();
    const order = orders.find(function (o) {
      return o.id === orderId;
    });
    if (!order) return null;

    order.status = newStatus;
    if (newStatus === "PAID") {
      order.paidAt = new Date().toISOString();
      order.approvalRef = "APR-" + Math.random().toString(36).substring(2, 8).toUpperCase();
    } else if (newStatus === "REJECTED") {
      order.rejectedAt = new Date().toISOString();
    }
    saveOrders(orders);
    broadcastEvent("ORDER_STATUS_CHANGED", { orderId: order.id, status: newStatus });
    return order;
  }

  function renderStatusBadge(status) {
    if (status === "PAID") {
      return '<span class="status-badge status-paid">&#10003; Paid / Lunas</span>';
    }
    if (status === "REJECTED") {
      return '<span class="status-badge status-rejected">&#10005; Ditolak</span>';
    }
    return '<span class="status-badge status-pending"><span class="pulse-dot"></span> Menunggu Bayar</span>';
  }

  function generateDummyQrisSvg(seedText) {
    const size = 25;
    const cell = 8;
    const quiet = 16;
    const totalPx = size * cell + quiet * 2;

    let hash = 2166136261;
    const text = String(seedText || "NAILS-STUDIO-QRIS");
    for (let i = 0; i < text.length; i++) {
      hash ^= text.charCodeAt(i);
      hash = Math.imul(hash, 16777619);
    }
    function nextBit() {
      hash ^= hash << 13;
      hash ^= hash >>> 17;
      hash ^= hash << 5;
      return (hash >>> 0) % 2 === 1;
    }

    const grid = Array.from({ length: size }, function () {
      return Array(size).fill(false);
    });
    const reserved = Array.from({ length: size }, function () {
      return Array(size).fill(false);
    });

    function placeFinder(r0, c0) {
      for (let r = -1; r <= 7; r++) {
        for (let c = -1; c <= 7; c++) {
          const rr = r0 + r;
          const cc = c0 + c;
          if (rr < 0 || rr >= size || cc < 0 || cc >= size) continue;
          reserved[rr][cc] = true;
          const inOuter = r >= 0 && r <= 6 && c >= 0 && c <= 6;
          const onBorder = r === 0 || r === 6 || c === 0 || c === 6;
          const inInner = r >= 2 && r <= 4 && c >= 2 && c <= 4;
          grid[rr][cc] = inOuter && (onBorder || inInner);
        }
      }
    }

    function placeAlignment(r0, c0) {
      for (let r = -2; r <= 2; r++) {
        for (let c = -2; c <= 2; c++) {
          const rr = r0 + r;
          const cc = c0 + c;
          reserved[rr][cc] = true;
          grid[rr][cc] = Math.abs(r) === 2 || Math.abs(c) === 2 || (r === 0 && c === 0);
        }
      }
    }

    placeFinder(0, 0);
    placeFinder(0, size - 7);
    placeFinder(size - 7, 0);
    placeAlignment(size - 7, size - 7);

    for (let i = 8; i < size - 8; i++) {
      reserved[6][i] = true;
      reserved[i][6] = true;
      grid[6][i] = i % 2 === 0;
      grid[i][6] = i % 2 === 0;
    }

    for (let r = 10; r <= 14; r++) {
      for (let c = 10; c <= 14; c++) {
        reserved[r][c] = true;
        grid[r][c] = false;
      }
    }

    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (!reserved[r][c]) {
          grid[r][c] = nextBit();
        }
      }
    }

    let rects = "";
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (grid[r][c]) {
          const x = quiet + c * cell;
          const y = quiet + r * cell;
          rects += '<rect x="' + x + '" y="' + y + '" width="' + cell + '" height="' + cell + '" fill="#2d2325"/>';
        }
      }
    }

    const cx = totalPx / 2;
    const cy = totalPx / 2;

    return (
      '<svg xmlns="http://www.w3.org/2000/svg" width="' + totalPx + '" height="' + totalPx + '" viewBox="0 0 ' + totalPx + " " + totalPx + '" role="img" aria-label="Kode QRIS Dummy">' +
      '<rect width="100%" height="100%" fill="#ffffff"/>' +
      rects +
      '<rect x="' + (cx - 24) + '" y="' + (cy - 13) + '" width="48" height="26" rx="4" fill="#ffffff" stroke="#c9647a" stroke-width="1.5"/>' +
      '<text x="' + cx + '" y="' + (cy + 4) + '" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#2d2325">QRIS</text>' +
      "</svg>"
    );
  }

  function renderTopbar(activePage) {
    const holder = document.getElementById("site-topbar");
    if (!holder) return;

    const count = getCartCount();
    holder.innerHTML =
      '<nav class="topbar">' +
      '  <div class="topbar-inner">' +
      '    <a href="index.html" class="topbar-brand">Nails Studio <span>Press-On</span></a>' +
      '    <div class="topbar-nav">' +
      '      <a href="index.html" class="nav-link ' + (activePage === "katalog" ? "active" : "") + '">Katalog</a>' +
      '      <a href="cart.html" class="nav-link ' + (activePage === "cart" ? "active" : "") + '">Keranjang <span class="cart-badge" id="nav-cart-count">' + count + "</span></a>" +
      '      <a href="history.html" class="nav-link ' + (activePage === "history" ? "active" : "") + '">Riwayat Transaksi</a>' +
      "    </div>" +
      "  </div>" +
      "</nav>";
  }

  function updateNavBadge() {
    const badge = document.getElementById("nav-cart-count");
    if (badge) {
      badge.textContent = String(getCartCount());
    }
  }

  let toastTimer = null;
  function showToast(message) {
    let el = document.getElementById("ns-toast");
    if (!el) {
      el = document.createElement("div");
      el.id = "ns-toast";
      el.className = "toast";
      document.body.appendChild(el);
    }
    el.textContent = message;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      el.classList.remove("show");
    }, 2400);
  }

  onRealtimeUpdate(function () {
    updateNavBadge();
  });

  window.NSStore = {
    produkKuku: produkKuku,
    formatRupiah: formatRupiah,
    formatWaktu: formatWaktu,
    escapeHtml: escapeHtml,
    getCart: getCart,
    addToCart: addToCart,
    updateCartQty: updateCartQty,
    removeFromCart: removeFromCart,
    clearCart: clearCart,
    getCartCount: getCartCount,
    getCartTotals: getCartTotals,
    getOrders: getOrders,
    getOrderById: getOrderById,
    createOrder: createOrder,
    updateOrderStatus: updateOrderStatus,
    renderStatusBadge: renderStatusBadge,
    generateDummyQrisSvg: generateDummyQrisSvg,
    renderTopbar: renderTopbar,
    updateNavBadge: updateNavBadge,
    showToast: showToast,
    onRealtimeUpdate: onRealtimeUpdate
  };
})();