from .library_item import LibraryItem

class Magazine(LibraryItem):
    """Representasi majalah di perpustakaan."""

    def __init__(self, item_id: str, title: str, issue_number: str):
        super().__init__(item_id, title)
        self.__issue_number = issue_number  # private

    @property
    def issue_number(self) -> str:
        """Edisi/nomor terbit majalah."""
        return self.__issue_number

    def display_info(self) -> None:
        """Implementasi polymorphism untuk menampilkan info majalah."""
        print(f"[Magazine] ID: {self.item_id}, Title: '{self.title}', "
              f"Issue: {self.__issue_number}")
