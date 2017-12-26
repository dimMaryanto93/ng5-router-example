import {Book} from './book.model';
import {BookCategory} from './book-category.model';

export class BookService {
  private _books: Book[] = [
    new Book(1, 'Belajar Pemograman Java', new Date(), 'Dimas Maryanto', 'PT. TDI', new BookCategory('pemograman', 101)),
    new Book(2, 'Belajar membuat web dengan di Java', new Date('2017-10-10'), 'Dimas Maryanto', 'PT. Tabeldata infromatika', new BookCategory('pemograman', 102))

  ];

  get books(): Book[] {
    return this._books.slice();
  }

  book(index: number): Book {
    return this._books[index];
  }
}
