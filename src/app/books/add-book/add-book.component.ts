import {Component, OnInit} from '@angular/core';
import {Book} from '../../book.model';
import {BookService} from '../../book.service';
import {NgForm} from '@angular/forms';
import {CategoryService} from '../../category.service';
import {Category} from '../../category.model';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  book: Book;

  constructor(private _bookService: BookService, private _categoryService: CategoryService) {
  }

  ngOnInit() {
    this.book = new Book(null, null, null, null, null, []);
  }

  submitedBook(event: NgForm) {
    this._bookService.new(this.book);
    this.book = new Book(null, null, null, null, null, []);
  }
}
