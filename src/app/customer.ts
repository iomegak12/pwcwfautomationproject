export class Customer {
  constructor(
    public customerId: number,
    public name: string,
    public address: string,
    public credit: number,
    public status: boolean
  ) {}

  toString() {
    const formattedOutput = `${this.customerId}, ${this.name}, ${this.address}, ${this.credit}, ${this.status}`;

    return formattedOutput;
  }
}
