import {BookCategory} from './book-category.model';

export class CategoryService{

  private _categories: BookCategory[] = [
    new BookCategory('Pemograman', 101),
    new BookCategory('Pemograman', 102),
    new BookCategory('Komputer', 103),
    new BookCategory('Bahasa', 104)
  ];

  get categories(){
    return this._categories.slice();
  }


}
