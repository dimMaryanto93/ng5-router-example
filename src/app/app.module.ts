import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BooksComponent} from './books/books.component';
import {BookItemComponent} from './books/book-item/book-item.component';
import {AddBookComponent} from './books/add-book/add-book.component';
import {EditBookComponent} from './books/edit-book/edit-book.component';
import {BooksManagementComponent} from './books-management/books-management.component';
import {BorrowBooksComponent} from './transaction/borrow-books/borrow-books.component';
import {ReturnTheBooksComponent} from './transaction/return-the-books/return-the-books.component';
import {AppRouterModule} from './app-router.module';
import {FormsModule} from '@angular/forms';
import {TransactionComponent} from './transaction/transaction.component';
import {HomeComponent} from './home/home.component';
import {BookService} from './book.service';
import {CategoryService} from './category.service';
import {AuthService} from './auth.service';
import {AuthGuard} from './auth-guard.service';
import {ErrorPageComponent} from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookItemComponent,
    AddBookComponent,
    EditBookComponent,
    BooksManagementComponent,
    BorrowBooksComponent,
    ReturnTheBooksComponent,
    TransactionComponent,
    HomeComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    FormsModule
  ],
  providers: [BookService, CategoryService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
