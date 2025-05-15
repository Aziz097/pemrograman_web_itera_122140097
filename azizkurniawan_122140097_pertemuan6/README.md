# Manajemen Matkul

## API Endpoint

### Endpoint untuk Data Mata Kuliah

* **GET** `http://localhost:6543/api/matakuliah`
  Mengambil seluruh daftar mata kuliah.

* **GET** `http://localhost:6543/api/matakuliah/{id}`
  Mengambil detail dari satu mata kuliah berdasarkan ID.

* **POST** `http://localhost:6543/api/matakuliah`
  Menambahkan data mata kuliah baru.

* **PUT** `http://localhost:6543/api/matakuliah/{id}`
  Memperbarui data mata kuliah berdasarkan ID.

* **DELETE** `http://localhost:6543/api/matakuliah/{id}`
  Menghapus data mata kuliah berdasarkan ID.

## Langkah Awal Menjalankan Proyek

Ikuti langkah-langkah berikut untuk menyiapkan dan menjalankan proyek Pyramid ini.

### 1. Masuk ke direktori proyek

```bash
cd matakuliah
```

### 2. Buat virtual environment Python

```bash
python3 -m venv venv
venv/scripts/activate
```

### 3. Perbarui alat bantu instalasi Python

```bash
pip install --upgrade pip setuptools
```

### 4. Instal proyek dalam mode editable beserta dependensi untuk pengujian

```bash
pip install -e ".[testing]"
```

### 5. Inisialisasi dan migrasikan basis data dengan Alembic

```bash
alembic -c development.ini revision --autogenerate -m "init"
alembic -c development.ini upgrade head
```

### 6. Isi data awal ke dalam basis data menggunakan skrip inisialisasi

```bash
initialize_manajemen_matkul_db development.ini
```

### 7. Jalankan proyek

```bash
pserve development.ini
```
