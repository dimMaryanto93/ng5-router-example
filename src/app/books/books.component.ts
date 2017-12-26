import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {Book} from '../book.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  list: Book[] = [];

  constructor(private bookService: BookService) {

  }

  ngOnInit() {
    this.list = this.bookService.books;
  }

}
