import {BookCategory} from './book-category.model';

export class Book {
  constructor(public id: number,
              public title: string,
              public publishDate: Date = new Date(),
              public pengarang: string,
              public penerbit: string,
              public category: BookCategory) {

  }

}
