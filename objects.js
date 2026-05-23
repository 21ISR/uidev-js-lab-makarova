const book = {
    title: "«Мастер и Маргарита»",
    author: "Булгаков М.А.",
    year: "1967 г.",
    pages: "480 стр.",
    available: true,   
}
info() {
    return `${this.title}, ${this.author}, ${this.year}, ${this.pages}`;
}
console.log(book.info());

const {title, author, year, pages}