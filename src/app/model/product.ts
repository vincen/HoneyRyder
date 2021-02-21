export class Product {
  private _id: number;
  private _name: string;
  private _price: number;
  private _description?: string;

  constructor(id: number, name: string, price: number, description?: string){
    this._id = id;
    this._name = name;
    this._price = price;
    this._description = description;
  }

  get id() {
    return this._id;
  }
  set id(inputId: number) {
    this._id = inputId;
  }

  get name() {
    return this._name;
  }
  set name(name: string) {
    this._name = name;
  }

  get price() {
    return this._price;
  }

  set price(price: number) {
    this._price = price;
  }

  get description() {
    if (this._description == null) {
      return "";
    } else {
      return this._description;
    }
  }

  set description(description: string) {
    this._description = description;
  }

}
