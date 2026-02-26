interface Book {
    title: string,
    pages: number,
    author: string,
}

const preview: Pick<Book, "title" | "author"> = {
    title: "Meu livro",
    author: "Willian Pereira"
}