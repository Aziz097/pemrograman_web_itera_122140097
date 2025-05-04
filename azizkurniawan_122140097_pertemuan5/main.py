import sys
from library_system.book import Book
from library_system.magazine import Magazine
from library_system.library import Library

def print_menu():
    menu = """
    ==== Library Management ====
    1. Tambah Book
    2. Tambah Magazine
    3. Tampilkan Semua Item
    4. Cari Item
    5. Keluar
    Pilih opsi (1-5): """
    return input(menu)

def main():
    lib = Library()

    while True:
        choice = print_menu().strip()
        if choice == '1':
            item_id = input("ID Book: ").strip()
            title = input("Title: ").strip()
            author = input("Author: ").strip()
            pages = int(input("Pages: ").strip())
            lib.add_item(Book(item_id, title, author, pages))
            print("Book added.\n")
        elif choice == '2':
            item_id = input("ID Magazine: ").strip()
            title = input("Title: ").strip()
            issue = input("Issue Number: ").strip()
            lib.add_item(Magazine(item_id, title, issue))
            print("Magazine added.\n")
        elif choice == '3':
            print("\n--- All Items ---")
            lib.show_all_items()
            print()
        elif choice == '4':
            keyword = input("Search by title or ID: ").strip()
            print(f"\n--- Search Results for '{keyword}' ---")
            lib.search_item(keyword)
            print()
        elif choice == '5':
            print("Goodbye!")
            sys.exit(0)
        else:
            print("Invalid choice. Try again.\n")

if __name__ == "__main__":
    main()
