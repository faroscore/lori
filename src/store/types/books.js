// @flow

export type BookRegularType = 1;
export type BookFictionType = 2;
export type BookNovelType = 3;

export type BookType = BookRegularType | BookFictionType | BookNovelType;

export type Book = {
  id: number,
  title: string,
  type: BookType,
  img: string,
};

export type BooksState = {
  books: number[],
  book: {
    [bookId: number]: Book,
  },
  running: boolean,
  error: any,
};
