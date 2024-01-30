import { ISortable } from "./ISortable";

export class CharacterGroup implements ISortable {
  data: string;
  constructor(string: string) {
    this.data = string;
  }
  get length(): number {
    return this.data.length;
  }
  swap(leftPos: number, rightPos: number): void {
    let stringArray = this.data.split("");
    const temp = stringArray[leftPos];
    stringArray[leftPos] = stringArray[rightPos];
    stringArray[rightPos] = temp;
    this.data = stringArray.join("");
  }
  compare(leftPos: number, rightPos: number): boolean {
    return this.data[leftPos].toLowerCase() > this.data[rightPos].toLowerCase();
  }
}
