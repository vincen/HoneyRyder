export class Delivery {
  private _type: string;
  private _price: number;

  constructor(type: string, price: number) {
    this._type = type;
    this._price = price;
  }

  get type() {
    return this._type;
  }
  set type(t: string) {
    this._type = t;
  }

  get price() {
    return this._price;
  }
  set price(p: number){
    this._price = p;
  }
}
