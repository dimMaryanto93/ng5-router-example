import {Book} from './book.model';
import {Injectable} from '@angular/core';
import {CategoryService} from './category.service';
import {Category} from './category.model';

@Injectable()
export class BookService {

  constructor(private categoryService: CategoryService) {
    this._books = [new Book(1,
      'Belajar Pemograman Java',
      new Date(),
      'Dimas Maryanto',
      'PT. TDI', [
        new Category('101', 'Pemograman'),
        new Category('102', 'Ilmu komputer')
      ]),
      new Book(2,
        'Belajar membuat web dengan di Java',
        new Date('2017-10-10'),
        'Dimas Maryanto',
        'PT. Tabeldata infromatika',
        [])
    ];
  }

  private _books: Book[] = [];

  get books(): Book[] {
    return this._books;
  }

  book(index: number): Book {
    return this._books[index];
  }

  updated(index: number, updated: Book): void {
    this._books.splice(index, 1);
    this._books.push(updated);
  }

  new(data: Book): void {
    this._books.push(data);
  }
}
