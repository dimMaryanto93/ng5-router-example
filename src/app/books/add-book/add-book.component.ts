import {Component, OnInit} from '@angular/core';
import {Book} from '../../book.model';
import {BookService} from '../../book.service';
import {NgForm} from '@angular/forms';
import {CategoryService} from '../../category.service';
import {BookCategory} from '../../book-category.model';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  book: Book;
  categories: BookCategory[] = [];

  constructor(private _bookService: BookService, private _categoryService: CategoryService) {
  }

  ngOnInit() {
    this.book = new Book(null, null, null, null, null, null);
    this.categories = this._categoryService.categories;
  }

  submitedBook(event: NgForm) {
    this._bookService.new(this.book);
    this.book = new Book(null, null, null, null, null, null);
  }
}
