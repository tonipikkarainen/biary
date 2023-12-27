export type ReadingType = {
  bookname: string;
  currentlyReading: boolean;
  id: string;
  started: Date;
  ended: Date | null;
  writer: string;
};
