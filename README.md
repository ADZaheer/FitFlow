# FitFlow - Fitness & Workout Tracking App

Aplikasi mobile pelacak kebugaran dan aktivitas olahraga harian yang dibuat menggunakan React Native dan Expo. Proyek ini fokus pada tampilan front-end dengan data statis dan komponen yang modular.

---

## Identitas Mahasiswa
- Nama: Adnaan Zaheer
- NIM: 2802493273
- Kelas / Jurusan: LB95/Computer Science
- Tema Proyek: Health (Kesehatan & Kebugaran)
- Tautan Video Demo 3–5 Menit: https://drive.google.com/drive/folders/1z1M8Vd4VpO5qZNbAppS0Pli4zhrYKmtP?usp=sharing

---

## Tangkapan Layar Aplikasi

<p align="center">
  <img src="https://github.com/user-attachments/assets/d0e43166-4edb-4249-b390-2664dbc06b76" alt="FitFlow Preview" width="280" />
</p>

Aplikasi terdiri dari 5 layar aktif:
1. Layar Autentikasi: Form Masuk dan Daftar akun dengan validasi input sederhana (src/app/index.tsx).
2. Halaman Utama: Ringkasan target kalori harian, langkah, air minum, dan daftar latihan (src/app/home.tsx).
3. Halaman Detail: Rincian latihan, estimasi kalori, dan daftar step gerakan (src/app/detail.tsx).
4. Halaman Eksplorasi: Fitur pencarian dan filter kategori latihan (src/app/explore.tsx).
5. Halaman Progres & Profil: Riwayat latihan mingguan (src/app/progress.tsx) dan pengaturan profil pengguna (src/app/profile.tsx).

---

## Cara Menjalankan Proyek

### Prasyarat
- Node.js versi 18 ke atas
- Aplikasi Expo Go di HP Android atau iOS

### Langkah Instalasi
```bash
# 1. Clone repositori
git clone https://github.com/ADZaheer/FitFlow.git
cd fitflow

# 2. Install dependensi
npm install --legacy-peer-deps

# 3. Jalankan project
npx expo start -c
```
Scan QR code yang muncul di terminal menggunakan Expo Go.

---

## f. [LO 1 – 5 Points] Penjelasan Konsep React Native

### 1. Cara Kerja React Native
React Native bekerja dengan cara menjalankan logika JavaScript di thread tersendiri yaitu JavaScript runtime atau engine Hermes, terpisah dari Main UI Thread sistem operasi HP Android dan iOS.

Kode antarmuka yang ditulis menggunakan JSX seperti View dan Text tidak diubah ke HTML web biasa, melainkan langsung diterjemahkan menjadi elemen UI native sistem operasi misalnya android.view.ViewGroup di Android dan UIView di iOS. Komunikasi antara logic JS dan thread native berjalan secara asinkron, jadi performa tampilan, transisi layar, dan respon sentuhannya tetap terasa mulus dan responsif seperti aplikasi native biasa.

### 2. Tiga Keunggulan React Native untuk Aplikasi Hybrid
1. Satu Basis Kode: Cukup membuat satu logic kode memakai JavaScript atau TypeScript, aplikasi sudah bisa jalan di Android dan iOS sekaligus tanpa perlu coding dua kali dari nol.
2. Performa Mendekati Native: Karena merender komponen widget asli bawaan sistem operasi dan bukan sekadar webview, animasi serta interaksinya terasa natural dan cepat.
3. Fast Refresh: Perubahan kode langsung terlihat di layar HP secara instan tanpa harus build ulang aplikasi dari awal, sehingga proses pengerjaan jauh lebih cepat.

### 3. Komponen, Props, State, dan Navigasi pada FitFlow

- Komponen: Bagian tampilan yang dipecah jadi blok modular agar bisa dipakai berulang kali. Contohnya di file src/components/WorkoutCard.tsx yang dipakai untuk merender kartu latihan.
- Props: Data yang dikirim dari komponen induk ke komponen anak. Contohnya di WorkoutCard:
```tsx
interface WorkoutCardProps {
  item: WorkoutItem;
  onPress: () => void;
}
export default function WorkoutCard({ item, onPress }: WorkoutCardProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );
}
```
- State: Tempat menyimpan data di dalam komponen yang jika nilainya berubah akan memicu tampilan untuk update otomatis. Contohnya pemakaian useState di src/app/index.tsx:
```tsx
const [isRegister, setIsRegister] = useState(false);
const [email, setEmail] = useState('');
```
- Navigasi: Pengaturan perpindahan antar layar menggunakan sistem file based routing dari expo-router. Contoh navigasi dari home ke detail sambil membawa data parameter:
```tsx
router.push({
  pathname: '/detail',
  params: { id: item.id, title: item.title, duration: item.duration }
});
```

---

## h. [LO 3 – 10 Points] Analisis Kebutuhan

### 1. Masalah yang Diangkat
Banyak orang yang ingin mulai berolahraga sering bingung mencari referensi gerakan yang praktis dan mudah diikuti. Selain itu, aplikasi fitness yang beredar fiturnya sering terlalu ramai, rumit, dan membuat malas untuk sekadar mengecek latihan harian atau memantau asupan air minum harian.

### 2. Target Pengguna
- Pemula: Orang yang membutuhkan panduan gerakan sederhana dan jelas tanpa instruksi yang berbelit.
- Mahasiswa atau Pekerja: Orang dengan aktivitas padat yang mencari latihan singkat 15 sampai 25 menit yang bisa dikerjakan di rumah atau di sela kegiatan harian.

### 3. Kebutuhan Pengguna
1. Pengguna bisa masuk atau mendaftar akun dalam satu layar praktis dengan validasi form sederhana.
2. Pengguna bisa memantau ringkasan harian seperti target kalori, langkah kaki, dan jumlah gelas air yang sudah diminum.
3. Pengguna bisa melihat katalog program latihan lengkap dengan keterangan durasi dan tingkat kesulitannya.
4. Pengguna bisa membaca urutan langkah gerakan latihan sebelum mulai sesi workout.
5. Pengguna bisa mencari program latihan lewat kotak pencarian dan memfilter berdasarkan kategori Kardio, HIIT, Relaksasi.
6. Pengguna bisa memantau riwayat latihan mingguan dan mengatur preferensi akun di profil.

### 4. Tabel Pemetaan Kebutuhan ke Layar dan Komponen

| Kebutuhan Pengguna | Layar Aplikasi | Komponen yang Dipakai |
|---|---|---|
| Autentikasi akun dan validasi form | Form Masuk atau Daftar (src/app/index.tsx) | TextInput, useState, PrimaryButton, TouchableOpacity |
| Ringkasan target dan tracking air | Halaman Utama (src/app/home.tsx) | ScrollView, Kartu Banner, Statistik Kalori Langkah Air |
| Katalog daftar latihan | Halaman Utama dan Explore (src/app/home.tsx, explore.tsx) | WorkoutCard, ScrollView, Feather Icon |
| Detail gerakan langkah demi langkah | Layar Detail Latihan (src/app/detail.tsx) | Header, List Gerakan Latihan, PrimaryButton |
| Pencarian dan filter kategori | Halaman Explore (src/app/explore.tsx) | Header, Input Search, Chip Filter Horizontal |
| Riwayat mingguan dan logout | Halaman Progress dan Profile (progress.tsx, profile.tsx) | Header, Indikator Checklist 7 Hari, Switch, Tombol Logout |

### 5. Alasan Keputusan Desain
- Pemilihan Warna: Memakai warna oranye dipadu dengan background abu-abu terang. Warna oranye dipilih agar tampilannya terlihat segar, energik, dan memberi kesan semangat untuk berolahraga.
- Model Tampilan Kartu: Setiap info penting seperti kalori, air minum, dan langkah kaki dipisah ke dalam kartu dengan sudut melengkung halus supaya rapi dan mata tidak lelah saat membaca data.
- Tata Letak Tombol: Tombol-tombol penting diletakkan di area yang mudah dijangkau satu tangan yaitu area bawah layar supaya nyaman digunakan di ponsel.

### 6. Rencana Pengembangan ke Depan
1. Penyimpanan Lokal: Menambahkan AsyncStorage agar data checklist air minum dan riwayat latihan tetap tersimpan di memori HP meskipun aplikasi ditutup.
2. Timer Latihan: Menambahkan countdown timer atau stopwatch langsung di dalam halaman detail per gerakan.
3. Sensor Langkah HP: Menghubungkan sensor bawaan ponsel lewat expo-sensors agar jumlah langkah kaki harian bisa terhitung otomatis.
