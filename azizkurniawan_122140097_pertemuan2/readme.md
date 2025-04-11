# Dashboard Jadwal Kuliah & Cornell Notes

Aplikasi ini adalah dashboard interaktif untuk mahasiswa yang membantu mengorganisir jadwal kuliah dan menyimpan catatan (Cornell Notes) per pertemuan. Aplikasi dibuat dengan menggunakan teknologi modern (HTML5, CSS3, JavaScript ES6+, Bootstrap 5) dan penyimpanan data dilakukan menggunakan `localStorage`.

## Fitur Utama

- **Penambahan & Pengelolaan Jadwal Kuliah**
  - Menambahkan mata kuliah dengan informasi: nama, hari, jam, dan ruangan.
  - Fitur edit dan hapus jadwal dengan tombol yang ditempatkan di pojok kanan card.
  - Tampilan grid responsif (menggunakan Bootstrap 5) yang memisahkan matakuliah per hari.
  
- **Pengelolaan Pertemuan**
  - Setiap mata kuliah dapat memiliki daftar pertemuan (Meeting) yang ditambahkan melalui collapse dropdown.
  - Fitur edit dan hapus pertemuan.

- **Cornell Notes per Pertemuan**
  - Setiap pertemuan hanya memiliki satu catatan (Note) yang dapat langsung diedit.
  - Tampilan notes menggunakan layout grid dua kolom untuk _Key Points_ dan _Notes_, serta bagian Summary di bawah.
  - Fitur edit dan hapus catatan.

- **Penerapan Teknologi Modern (ES6+)**
  - Menggunakan `let` dan `const` untuk deklarasi variabel.
  - Mengimplementasikan minimal tiga arrow functions.
  - Menggunakan template literals untuk rendering HTML dinamis.
  - Implementasi fungsi asinkron (menggunakan async/await) dan penggunaan Classes untuk struktur data.
  
- **UI/UX Modern**
  - Menggunakan Bootstrap 5 untuk tampilan responsif dan modern.
  - Tampilan _rounded large_ dengan palet warna yang disesuaikan mengikuti filosofi Material Design.
  - Font menggunakan **Poppins** dan ikon-ikon modern dari Bootstrap Icons.
  - Form dalam bentuk collapse dropdown agar tampilan lebih bersih dan tidak mengganggu.

## Screenshots

### Dashboard (Schedule View)
![Dashboard](image/screenshot1.png)

### Tampilan Pertemuan (Meetings View)
![Pertemuan](image/screenshot2.png)

### Tampilan Cornell Notes (Meeting Detail View)
![Cornell Notes](image/screenshot3.png)

## Cara Menggunakan Aplikasi

1. **Menambahkan Jadwal Kuliah**
   - Tekan tombol **Tambah Mata Kuliah** untuk membuka formulir penambahan melalui collapse dropdown.
   - Isi informasi nama mata kuliah, hari, jam, dan ruangan.
   - Tekan **Simpan** untuk menambahkan jadwal. Mata kuliah yang sudah ditambahkan akan tampil dalam grid berdasarkan hari.

2. **Mengelola Pertemuan**
   - Klik pada card mata kuliah (di luar tombol edit/hapus) untuk membuka tampilan pertemuan.
   - Di tampilan pertemuan, tekan tombol **Tambah Pertemuan** (collapse dropdown) untuk menambahkan pertemuan baru.  
   - Anda dapat mengedit atau menghapus pertemuan dengan tombol edit dan delete yang tersedia pada setiap item.

3. **Mengelola Cornell Notes**
   - Dari tampilan pertemuan, klik pada item pertemuan untuk membuka detail pertemuan (Meeting Detail View).
   - Di tampilan detail, terdapat tombol **Tambah Note** yang akan berubah menjadi **Edit Note** apabila pertemuan sudah memiliki catatan.  
   - Tekan tombol tersebut untuk membuka formulir melalui collapse dropdown dan isi _Key Points_, _Notes_, dan _Summary_.
   - Setelah menyimpan, catatan akan ditampilkan dalam tampilan detail. Anda juga dapat mengedit atau menghapus catatan tersebut.

## Instalasi dan Penggunaan

### Prasyarat
- Browser modern (Chrome, Firefox, Edge)
- Tidak diperlukan server backend karena data disimpan secara lokal di `localStorage`.

### Cara Menjalankan Aplikasi
1. **Clone Repository**  
   ```bash
   git clone https://github.com/username/pemrograman_web_itera_[NIM].git
   ```
2. **Buka Folder Proyek**  
   Masuk ke direktori proyek:
   ```bash
   cd pemrograman_web_itera_[NIM]
   ```
3. **Buka File index.html**  
   Anda dapat membuka file `index.html` langsung di browser atau menjalankannya melalui live server (misalnya menggunakan [Live Server extension untuk VS Code](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)).

## Struktur Proyek

```plaintext
pemrograman_web_itera_[NIM]/
├── index.html         # File utama HTML
├── style.css          # Custom CSS (menggunakan Bootstrap 5)
├── app.js             # Logika aplikasi (JavaScript ES6+)
└── image/
    ├── screenshot1.png  # Dashboard Schedule View
    ├── screenshot2.png  # Meetings View
    └── screenshot3.png  # Meeting Detail View (Cornell Notes)
```

## Teknologi yang Digunakan
- **HTML5 & CSS3**
- **JavaScript ES6+** (let/const, arrow functions, template literals, async/await, Classes)
- **Bootstrap 5** untuk styling responsif
- **localStorage** untuk penyimpanan data aplikasi
- **Google Fonts (Poppins)** & **Bootstrap Icons**

## Kesimpulan

Aplikasi ini dirancang untuk membantu mahasiswa mengelola jadwal perkuliahan dan mencatat catatan per pertemuan dengan tampilan modern dan interaktif.  
Dokumentasi ini juga diharapkan memudahkan proses pengembangan dan pemeliharaan aplikasi ke depannya.

---

Jika ada pertanyaan atau saran, silakan hubungi [email@example.com].

Happy Coding!
