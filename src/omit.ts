interface Book {
    title: string,
    pages: number,
    author: string,
    description: string,
}

type BookPreview = Omit<Book, "description">;

const preview: BookPreview = {
    title: "Livro",
    pages: 300,
    author: "Willian Periera"
}