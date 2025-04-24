# math_operations.py

PI = 3.14159

def luas_persegi(sisi: float) -> float:
    return sisi * sisi

def keliling_persegi(sisi: float) -> float:
    return 4 * sisi

def luas_persegi_panjang(p: float, l: float) -> float:
    return p * l

def keliling_persegi_panjang(p: float, l: float) -> float:
    return 2 * (p + l)

def luas_lingkaran(radius: float) -> float:
    return PI * radius ** 2

def keliling_lingkaran(radius: float) -> float:
    return 2 * PI * radius

def celsius_ke_fahrenheit(celsius: float) -> float:
    return (celsius * 9/5) + 32

def celsius_ke_kelvin(celsius: float) -> float:
    return celsius + 273.15
