from typing import List
from .library_item import LibraryItem

class Library:
    """Class untuk menyimpan dan mengelola koleksi LibraryItem."""

    def __init__(self):
        self.__items: List[LibraryItem] = []  # private list

    def add_item(self, item: LibraryItem) -> None:
        """Tambahkan item ke koleksi."""
        self.__items.append(item)

    def show_all_items(self) -> None:
        """Tampilkan semua item yang tersedia."""
        if not self.__items:
            print("Library is empty.")
            return
        for item in self.__items:
            item.display_info()

    def search_item(self, keyword: str) -> None:
        """
        Cari item berdasarkan judul (case-insensitive) atau ID.
        Tampilkan semua yang cocok.
        """
        matches = [
            item for item in self.__items
            if keyword.lower() in item.title.lower() or keyword == item.item_id
        ]
        if not matches:
            print(f"No items found for '{keyword}'.")
            return
        for item in matches:
            item.display_info()
