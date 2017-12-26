import {Book} from './book.model';
import {Injectable} from '@angular/core';
import {CategoryService} from './category.service';

@Injectable()
export class BookService {

  constructor(private categoryService: CategoryService) {
    this._books = [new Book(1,
      'Belajar Pemograman Java',
      new Date(),
      'Dimas Maryanto',
      'PT. TDI',
      categoryService.categories[0]),
      new Book(2,
        'Belajar membuat web dengan di Java',
        new Date('2017-10-10'),
        'Dimas Maryanto',
        'PT. Tabeldata infromatika',
        categoryService.categories[1])
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
