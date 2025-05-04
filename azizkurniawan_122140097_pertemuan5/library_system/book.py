from .library_item import LibraryItem

class Book(LibraryItem):
    """Representasi buku di perpustakaan."""

    def __init__(self, item_id: str, title: str, author: str, pages: int):
        super().__init__(item_id, title)
        self.__author = author      # private
        self.__pages = pages        # private

    @property
    def author(self) -> str:
        """Pengarang buku."""
        return self.__author

    @property
    def pages(self) -> int:
        """Jumlah halaman buku."""
        return self.__pages

    def display_info(self) -> None:
        """Implementasi polymorphism untuk menampilkan info buku."""
        print(f"[Book] ID: {self.item_id}, Title: '{self.title}', "
              f"Author: {self.__author}, Pages: {self.__pages}")
