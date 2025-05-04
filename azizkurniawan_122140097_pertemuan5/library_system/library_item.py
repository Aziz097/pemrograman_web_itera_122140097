from abc import ABC, abstractmethod

class LibraryItem(ABC):
    """Abstract base class untuk semua item di perpustakaan."""

    def __init__(self, item_id: str, title: str):
        self.__item_id = item_id      # private
        self._title = title           # protected

    @property
    def item_id(self) -> str:
        """ID unik untuk setiap item."""
        return self.__item_id

    @property
    def title(self) -> str:
        """Judul item."""
        return self._title

    @abstractmethod
    def display_info(self) -> None:
        """Tampilkan detail item."""
        pass
