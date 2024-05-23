export interface IBooks {
  books: BooksEntity[];
}
export interface BooksEntity {
  id: number;
  name: string;
  desc: string;
  price: number;
  imgURL: string;
}
