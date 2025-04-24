def hitung_nilai_akhir(uts, uas, tugas) -> float:
    return 0.3 * uts + 0.4 * uas + 0.3 * tugas

def tentukan_grade(nilai: float) -> str:
    if nilai >= 80:
        return "A"
    elif nilai >= 70:
        return "B"
    elif nilai >= 60:
        return "C"
    elif nilai >= 50:
        return "D"
    else:
        return "E"

def main():
    mahasiswa = [
        {"nama": "Ali",   "nim": "119140001", "uts": 85, "uas": 90, "tugas": 80},
        {"nama": "Budi",  "nim": "119140002", "uts": 70, "uas": 75, "tugas": 65},
        {"nama": "Citra", "nim": "119140003", "uts": 60, "uas": 55, "tugas": 70},
        {"nama": "Dewi",  "nim": "119140004", "uts": 95, "uas": 92, "tugas": 88},
        {"nama": "Eko",   "nim": "119140005", "uts": 50, "uas": 45, "tugas": 55},
    ]

    # Hitung nilai akhir dan grade
    for m in mahasiswa:
        akhir = hitung_nilai_akhir(m["uts"], m["uas"], m["tugas"])
        m["akhir"] = akhir
        m["grade"] = tentukan_grade(akhir)

    # Cetak header dan separator
    header = f"{'Nama':<10} {'NIM':<12} {'UTS':<5} {'UAS':<5} {'Tugas':<6} {'Akhir':<6} {'Grade':<5}"
    print(header)
    print("-" * len(header))

    # Cetak baris data
    for m in mahasiswa:
        print(
            f"{m['nama']:<10} "
            f"{m['nim']:<12} "
            f"{m['uts']:<5} "
            f"{m['uas']:<5} "
            f"{m['tugas']:<6} "
            f"{m['akhir']:<6.2f} "
            f"{m['grade']:<5}"
        )

    # Mahasiswa dengan nilai tertinggi & terendah
    tertinggi = max(mahasiswa, key=lambda x: x["akhir"])
    terendah  = min(mahasiswa, key=lambda x: x["akhir"])
    print("\nMahasiswa dengan nilai akhir tertinggi:")
    print(f"  {tertinggi['nama']} ({tertinggi['nim']}) – {tertinggi['akhir']:.2f} [{tertinggi['grade']}]")
    print("Mahasiswa dengan nilai akhir terendah:")
    print(f"  {terendah['nama']} ({terendah['nim']}) – {terendah['akhir']:.2f} [{terendah['grade']}]")

if __name__ == "__main__":
    main()
