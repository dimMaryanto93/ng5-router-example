import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BooksComponent} from './books/books.component';
import {HomeComponent} from './home/home.component';
import {BooksManagementComponent} from './books-management/books-management.component';
import {TransactionComponent} from './transaction/transaction.component';
import {BookItemComponent} from './books/book-item/book-item.component';
import {EditBookComponent} from './books/edit-book/edit-book.component';
import {AddBookComponent} from './books/add-book/add-book.component';
import {AuthGuard} from './auth-guard.service';

const appRouter: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'books',
    // canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: BooksComponent, children: [
      {path: 'new', component: AddBookComponent},
      {path: 'view/:id', component: BookItemComponent},
      {path: 'update/:id', component: EditBookComponent}
    ]
  },
  {path: 'management', component: BooksManagementComponent},
  {
    path: 'transaction',
    canActivate: [AuthGuard],
    component: TransactionComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRouter)
  ],
  exports: [RouterModule]
})
export class AppRouterModule {
}
