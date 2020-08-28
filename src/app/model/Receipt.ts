export class Receipt {
  id: number; // required
  date: Date; // required
  totalSum: number; // required
  userId: number;
  user: string;
  userInn: string;
  cashTotalSum: number;
  ecashTotalSum: number;
}
