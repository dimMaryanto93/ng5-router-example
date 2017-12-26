import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BooksComponent} from './books/books.component';
import {HomeComponent} from './home/home.component';
import {BooksManagementComponent} from './books-management/books-management.component';
import {TransactionComponent} from './transaction/transaction.component';

const appRouter: Routes = [
  {path: '', component: HomeComponent},
  {path: 'books', component: BooksComponent},
  {path: 'management', component: BooksManagementComponent},
  {path: 'transaction', component: TransactionComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRouter)
  ],
  exports: [RouterModule]
})
export class AppRouterModule {
}
