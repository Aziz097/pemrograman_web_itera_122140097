# main.py

# Cara 1: impor seluruh modul dengan alias
import math_operations as mo

# Cara 2: impor fungsi tertentu
from math_operations import celsius_ke_fahrenheit, celsius_ke_kelvin

def main():
    print("=== Contoh Penggunaan math_operations ===\n")

    sisi = 5
    print(f"Persegi sisi {sisi}: luas = {mo.luas_persegi(sisi)}, keliling = {mo.keliling_persegi(sisi)}")

    p, l = 6, 3
    print(f"Persegi panjang {p}x{l}: luas = {mo.luas_persegi_panjang(p,l)}, keliling = {mo.keliling_persegi_panjang(p,l)}")

    r = 4
    print(f"Lingkaran radius {r}: luas = {mo.luas_lingkaran(r):.2f}, keliling = {mo.keliling_lingkaran(r):.2f}")

    c = 25
    print(f"\n{c}°C = {celsius_ke_fahrenheit(c):.2f}°F")
    print(f"{c}°C = {celsius_ke_kelvin(c):.2f}K")

if __name__ == "__main__":
    main()
