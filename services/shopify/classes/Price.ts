export class Price {
  amount: number|null;
  currency: string|null;

  constructor(amount: number|null, currency: string|null) {
    this.amount = amount;
    this.currency = currency;
  }
}
