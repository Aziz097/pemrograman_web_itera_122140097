def hitung_bmi(berat_kg: float, tinggi_m: float) -> float:
    return berat_kg / (tinggi_m ** 2)

def kategori_bmi(bmi: float) -> str:
    if bmi < 18.5:
        return "Berat badan kurang"
    elif bmi < 25:
        return "Berat badan normal"
    elif bmi < 30:
        return "Berat badan berlebih"
    else:
        return "Obesitas"

def main():
    print("=== BMI Calculator ===")
    berat = float(input("Masukkan berat badan (kg): "))
    tinggi_cm = float(input("Masukkan tinggi badan (cm): "))
    tinggi = tinggi_cm / 100  
    
    bmi = hitung_bmi(berat, tinggi)
    print(f"\nBMI Anda: {bmi:.2f}")
    print("Kategori :", kategori_bmi(bmi))

if __name__ == "__main__":
    main()