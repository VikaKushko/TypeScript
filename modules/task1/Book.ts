export class Book {
    title: string;
    author: string;
    publishedYear: number;

    constructor(title :string, author: string, publishedYear: number) {
        this.title = title;
        this.author = author;
        this.publishedYear = publishedYear;

    }

    information(): void{
        console.log(this.title + ' ' + this.author + ' ' +this.publishedYear);
    }

}

