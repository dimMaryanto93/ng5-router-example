import {Component, OnDestroy, OnInit} from '@angular/core';
import {Book} from '../../book.model';
import {ActivatedRoute, Params, Route} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {BookService} from '../../book.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit, OnDestroy {

  book: Book = new Book(null, null, null, null, null, null);
  private paramsSubscribe: Subscription;

  constructor(private router: ActivatedRoute, private bookService: BookService) {
  }

  ngOnInit() {
    this.paramsSubscribe = this.router.params.subscribe((data: Params) => {
      this.book = this.bookService.book(+data['id']);
    });
  }

  ngOnDestroy(): void {
    this.paramsSubscribe.unsubscribe();
  }

}
