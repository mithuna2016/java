export class Book {
    constructor (title,author, description, pages, currentPage, read  ){
        this.title = title;
        this.author = author;
        this.description = description;
        this.pages = pages;
        this.currentPage = currentPage;
        this.read = read;
    }
}
     

 function readBook(page) {
    
    if (page === '' || page < 1 || page > this.pages) {
        return read =false
    } else if (page == this.pages) {
        this.currentPage = page;
        this.read = true;
    } else {
        this.currentPage = page;
       
    }
}




     let secondBook = new book ( 'lord of the rings' , ' J. R. R. Tolkien' , 'fantasy novel The Hobbit, but eventually developed into a much larger work', 500 );
     let thirdBook = new book ( 'Harry Potter' , 'J. K. Rowling' , 'This article is about the series of novels', 300 );
     
export const books = [[secondBook],[thirdBook]];
