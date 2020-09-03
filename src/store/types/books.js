// @flow

export type BookRegularType = 1;
export type BookFictionType = 2;
export type BookNovelType = 3;

export type BookTypeId = BookRegularType | BookFictionType | BookNovelType;

export type BookType = {
  id: BookTypeId,
  name: string,
};

export type Book = {
  id: number,
  title: string,
  type: BookTypeId,
  img: string,
};

export type BooksState = {
  books: number[],
  book: {
    [bookId: number]: Book,
  },
  type: {
    [BookTypeId]: BookType,
  },
  running: boolean,
  error: any,
};
