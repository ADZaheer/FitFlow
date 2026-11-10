# AI_USAGE.md

# Dokumentasi Penggunaan AI

Dokumen ini berisi catatan mengenai pemanfaatan AI selama proses pengerjaan aplikasi FitFlow (Fitness & Workout Tracking).

Secara menyeluruh, ide aplikasi, penentuan tema, perancangan antarmuka (UI/UX), tata letak layar, dan alur aplikasi 100% merupakan hasil analisis dan pekerjaan mandiri oleh pengembang. AI hanya difungsikan sebagai alat bantu konsultasi minor untuk menyelesaikan kendala konfigurasi build, pemecahan pesan error kompilasi, serta referensi sintaksis tertentu agar pengerjaan lebih efisien.

---

## 1. AI Declaration Form

| Kategori | Bentuk Kontribusi | Keterangan |
|---|---|---|
| Pekerjaan Mandiri (Human Work - Utama) | Konseptual, Desain UI/UX & Implementasi Utama | - Menentukan ide tema Health, branding FitFlow, dan analisis kebutuhan pengguna.<br>- Merancang tata letak dan wireframe 5 layar aplikasi (index, home, detail, explore, progress, profile).<br>- Menentukan skema visual, kombinasi warna oranye-slate, dan tipografi.<br>- Menyusun data statis latihan dan gerakan di berkas terpisah.<br>- Melakukan pengujian interaksi langsung di smartphone melalui Expo Go. |
| Bantuan AI (AI Assistance - Minor) | Konsultasi Sintaksis & Troubleshooting Error | - Konsultasi penempatan file babel.config.js di root folder.<br>- Referensi sintaks pemanggilan icon library @expo/vector-icons.<br>- Diskusi logika toggle autentikasi dan validasi form sederhana.<br>- Bantuan penyelesaian error TypeScript moduleResolution saat upgrade SDK 58.<br>- Saran teknis penataan progress bar, bayangan oranye, dan tipografi statistik.<br>- Konsultasi passing parameter navigasi dan tangkapan hook di Expo Router.<br>- Bantuan referensi komponen Switch, ScrollView horizontal, dan router.replace(). |

---

## 2. Implementasi Konfigurasi & Setup Proyek

### 2.1 Penempatan File Konfigurasi Babel

Berkonsultasi saat file babel.config.js tidak terbaca oleh Expo ketika diletakkan di dalam folder scripts/. Penjelasannya adalah file konfigurasi bundler harus berada di root direktori agar dikenali oleh Metro bundler.

<p align="center">
  <img src="./img/ai_babel_fix.jpg" alt="Konsultasi Penempatan Babel Config" width="500" />
</p>

### 2.2 Penyesuaian Penggunaan Icon Library

Menggunakan AI sebagai referensi untuk memastikan penamaan props dan pemanggilan paket @expo/vector-icons (Feather dan Ionicons) terpasang dengan benar pada komponen tombol dan kartu.

<p align="center">
  <img src="./img/ai_vector_icons.jpg" alt="Konsultasi Penggunaan Expo Vector Icons" width="500" />
</p>

### 2.3 Sinkronisasi Status Bar terhadap Tema Perangkat

Mencari tahu cara mengatur ikon bilah status (Status Bar) agar menyesuaikan mode terang atau gelap smartphone menggunakan komponen bawaan expo-status-bar.

<p align="center">
  <img src="./img/ai_statusbar_theme.jpg" alt="Konsultasi Status Bar Expo" width="500" />
</p>

---

## 3. Logika Antarmuka & Validasi Form

### 3.1 Logika Toggle Masuk & Daftar (1 Layar)

Mendiskusikan pendekatan logika untuk menggabungkan form Masuk dan Daftar ke dalam satu layar tanpa membuat rute baru, yaitu menggunakan conditional state rendering.

<p align="center">
  <img src="./img/ai_auth_toggle.jpg" alt="Konsultasi Logika Toggle Auth" width="500" />
</p>

### 3.2 Logika Validasi Input Sederhana

Konsultasi penulisan validasi form di React Native untuk memastikan input email tidak kosong dan kata sandi memenuhi batas minimal karakter menggunakan method .trim().

<p align="center">
  <img src="./img/ai_validation_tip.jpg" alt="Konsultasi Validasi Form Sederhana" width="500" />
</p>

### 3.3 Penataan Warna Placeholder pada TextInput

Konsultasi mengenai penggunaan properti placeholderTextColor bawaan komponen TextInput React Native untuk membuat teks petunjuk tidak terlalu gelap.

<p align="center">
  <img src="./img/ai_placeholder_color.jpg" alt="Konsultasi Placeholder Text Color" width="500" />
</p>

### 3.4 Logika Toggle Visibilitas Kata Sandi

Diskusi mengenai sinkronisasi boolean state antara secureTextEntry pada input teks dengan penggantian ikon mata (eye / eye-off).

<p align="center">
  <img src="./img/ai_password_toggle.jpg" alt="Konsultasi Toggle Password Visibility" width="500" />
</p>

---

## 4. Tampilan Visual & Komponen Antarmuka

### 4.1 Penataan Progress Bar pada Banner Target

Meminta masukan cara membuat progress bar menggunakan nesting View dan persentase class Tailwind CSS tanpa library pihak ketiga.

<p align="center">
  <img src="./img/ai_banner_progress.jpg" alt="Saran Pembuatan Progress Bar" width="500" />
</p>

### 4.2 Efek Bayangan Oranye pada Tombol

Konsultasi penulisan class Tailwind NativeWind shadow-md shadow-orange-200 agar tombol aksi utama memiliki efek bayangan oranye yang sesuai tema.

<p align="center">
  <img src="./img/ai_orange_shadow.jpg" alt="Konsultasi Efek Bayangan Oranye" width="500" />
</p>

### 4.3 Struktur Pill Badge Streak Latihan di Header

Diskusi susunan flexbox horizontal untuk menempatkan badge kapsul streak latihan 5 hari di samping sapaan nama pengguna di header halaman Home.

<p align="center">
  <img src="./img/ai_streak_badge.jpg" alt="Struktur Badge Streak Header" width="500" />
</p>

### 4.4 Penataan Ikon pada Banner Target

Konsultasi penggunaan Flexbox dua kolom (justify-between items-center) untuk memposisikan ikon sepeda di sisi kanan banner target kalori.

<p align="center">
  <img src="./img/ai_bicycle_icon.jpg" alt="Penataan Ikon Banner Target" width="500" />
</p>

### 4.5 Penataan Tipografi Statistik Kalori

Diskusi kombinasi class text-2xl font-extrabold dan items-baseline agar teks angka statistik kalori sejajar dengan label satuannya.

<p align="center">
  <img src="./img/ai_calorie_font.jpg" alt="Tipografi Statistik Kalori" width="500" />
</p>

### 4.6 Logika Penambahan Gelas Air Minum

Diskusi penulisan callback handler setWaterCount(prev => prev + 1) pada kartu pelacak air minum agar jumlah gelas bertambah saat tombol ditekan.

<p align="center">
  <img src="./img/ai_water_increment.jpg" alt="Logika Penambahan Air Minum" width="500" />
</p>

### 4.7 Filter Kategori Horizontal

Konsultasi pembuatan deretan filter kategori horizontal pada halaman Explore menggunakan ScrollView dengan properti horizontal dan showsHorizontalScrollIndicator={false}.

<p align="center">
  <img src="./img/ai_explore_category_scroll.jpg" alt="Filter Kategori Horizontal" width="500" />
</p>

### 4.8 Penanganan Tampilan Data Kosong (Empty State) Pencarian

Diskusi pembuatan tampilan saat kata kunci pencarian latihan tidak ditemukan (filteredWorkouts.length === 0) menggunakan ikon kotak kosong dan pesan keterangan.

<p align="center">
  <img src="./img/ai_explore_empty_state.jpg" alt="Tampilan Empty State Pencarian" width="500" />
</p>

### 4.9 Ringkasan Mingguan 7 Hari di Layar Progress

Konsultasi struktur data array 7 hari (Senin sampai Minggu) serta rendering indikator checklist latihan menggunakan flexbox justify-between di halaman Progress.

<p align="center">
  <img src="./img/ai_progress_weekly_summary.jpg" alt="Ringkasan Mingguan Halaman Progress" width="500" />
</p>

### 4.10 Penggunaan Komponen Switch pada Pengaturan Profil

Mencari tahu komponen bawaan React Native untuk sakelar notifikasi pada menu profil menggunakan komponen Switch.

<p align="center">
  <img src="./img/ai_profile_switch_notif.jpg" alt="Komponen Switch Profil" width="500" />
</p>

### 4.11 Pemisahan Data Statis ke Berkas Terpisah

Konsultasi mengenai pemisahan data array ke file src/data/workouts.ts agar file antarmuka utama tidak terlalu panjang dan lebih mudah dirapikan.

<p align="center">
  <img src="./img/ai_data_separation.jpg" alt="Konsultasi Pemisahan Data Statis" width="500" />
</p>

### 4.12 Logika Pencarian di Halaman Explore

Diskusi sintaks filtering data teks (.filter() dan .toLowerCase()) pada halaman Explore agar daftar latihan bisa disaring langsung di front-end.

<p align="center">
  <img src="./img/ai_search_filter.jpg" alt="Logika Pencarian Halaman Eksplor" width="500" />
</p>

---

## 5. Navigasi & Pengiriman Parameter (Expo Router)

### 5.1 Pengiriman Parameter Antar Layar

Konsultasi sintaks router.push() pada Expo Router dengan menyertakan params saat kartu latihan diklik di halaman Home menuju Detail.

<p align="center">
  <img src="./img/ai_pass_params.jpg" alt="Pengiriman Parameter Navigasi" width="500" />
</p>

### 5.2 Penangkapan Parameter Menggunakan Hook useLocalSearchParams

Diskusi penggunaan hook useLocalSearchParams() untuk mengambil data judul, kalori, dan durasi di halaman Detail beserta nilai fallback-nya.

<p align="center">
  <img src="./img/ai_catch_params.jpg" alt="Penangkapan Parameter Detail" width="500" />
</p>

### 5.3 Tombol Navigasi Kembali ke Home pada Header Detail

Konsultasi pemanggilan router.back() pada tombol header halaman Detail untuk menutup layar dan kembali ke halaman Home.

<p align="center">
  <img src="./img/ai_detail_back_button.jpg" alt="Tombol Back Header Detail" width="500" />
</p>

### 5.4 Pemetaan Langkah Gerakan Latihan

Diskusi penerapan .map() untuk menampilkan daftar berulang langkah gerakan latihan di halaman Detail agar kode tidak duplikasi (DRY).

<p align="center">
  <img src="./img/ai_detail_steps_mapping.jpg" alt="Mapping Langkah Gerakan Detail" width="500" />
</p>

### 5.5 Perubahan Status Tombol Mulai Latihan

Konsultasi penggunaan state boolean isStarted untuk mengganti teks dan warna tombol latihan dari Mulai Latihan Sekarang menjadi Latihan Sedang Berjalan saat diklik.

<p align="center">
  <img src="./img/ai_detail_start_toggle.jpg" alt="Toggle Status Tombol Latihan" width="500" />
</p>

### 5.6 Arahkan Keluar Langsung ke Login via router.replace()

Diskusi penggunaan router.replace('/') pada tombol keluar akun di halaman Profil agar kembali ke halaman login tanpa dialog konfirmasi tambahan.

<p align="center">
  <img src="./img/ai_profile_logout_replace.jpg" alt="Tombol Logout router replace" width="500" />
</p>

---

## 6. Troubleshooting & Debugging Kompiler

### 6.1 Penyelesaian Error TypeScript saat Upgrade SDK 58

Analisis penyebab error deklarasi modul react-native saat upgrade ke Expo SDK 58, yang diselesaikan dengan menambahkan "moduleResolution": "bundler" di tsconfig.json.

<p align="center">
  <img src="./img/ai_sdk58_ts_fix.jpg" alt="Penyelesaian Error TypeScript SDK 58" width="500" />
</p>

---

## 7. Kesimpulan

Peran AI pada proyek ini bersifat sekunder, yaitu sebatas konsultasi teknis seputar sintaksis, konfigurasi, dan penanganan error. Seluruh ide aplikasi, struktur antarmuka, tata letak visual, serta alur kerja aplikasi dirancang dan dikerjakan secara mandiri oleh pengembang.

---

## 8. Referensi Desain & Tautan Eksternal
- Desain Antarmuka (Google Stitch): https://stitch.withgoogle.com/projects/17144514098628731997
- Chat History AI: [Tautkan link share riwayat obrolan AI Anda di sini]
