# Praktikum Pemrograman Web 
## Pertemuan: 4 (Python Dasa4)

## Deskripsi
Kumpulan tugas praktikum Python dasar:
1. **BMI Calculator** – menghitung Body Mass Index dan menampilkan kategorinya.  
2. **Pengelolaan Data Nilai Mahasiswa** – menyimpan data mahasiswa, menghitung nilai akhir & grade, menampilkan tabel dan nilai tertinggi/terendah.  
3. **Modul Matematika** – library `math_operations.py` untuk operasi geometri & konversi suhu, dan `main.py` sebagai contoh penggunaannya.

## Struktur Project
```
pemrograman_python/
│
├── calculate_bmi.py
├── calculate_grade.py
├── math_operations.py
├── main.py
└── README.md
```

## Prasyarat
- Python 3.8 atau lebih baru

## Cara Menjalankan

### 1. BMI Calculator
```bash
python calculate_bmi.py
```
– Masukkan berat (kg) dan tinggi (cm).  
– Output: nilai BMI dan kategorinya.

### 2. Pengelolaan Data Nilai Mahasiswa
```bash
python calculate_grade.py
```
– Program menggunakan list of dict (5 data contoh).  
– Output: tabel nilai akhir & grade, mahasiswa dengan skor tertinggi dan terendah.

### 3. Modul Matematika & `main.py`
```bash
python main.py
```
– `main.py` menampilkan contoh penggunaan semua fungsi dalam `math_operations.py` dengan dua gaya impor.

## Detail Modul (`math_operations.py`)
- **Konstanta**  
  ```python
  PI = 3.14159
  ```
- **Geometri**  
  ```python
  def luas_persegi(sisi): ...
  def keliling_persegi(sisi): ...
  def luas_persegi_panjang(p, l): ...
  def keliling_persegi_panjang(p, l): ...
  def luas_lingkaran(radius): ...
  def keliling_lingkaran(radius): ...
  ```
- **Konversi Suhu**  
  ```python
  def celsius_ke_fahrenheit(celsius): ...
  def celsius_ke_kelvin(celsius): ...
  ```