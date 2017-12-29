import {Category} from './category.model';

export class CategoryService{

  private _categories: Category[] = [
    new Category('101', 'Pemograman'),
    new Category('102', 'Ilmu komputer'),
    new Category('103', 'Sastra')
  ];

  get categories(){
    return this._categories;
  }

}
