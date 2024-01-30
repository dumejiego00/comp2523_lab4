import { ISortable } from "./ISortable";
export class NumberGroup implements ISortable {
  data: number[];
  constructor(input: number[]) {
    this.data = input;
  }
  get length(): number {
    return this.data.length;
  }
  swap(leftPos: number, rightPos: number): void {
    const temp = this.data[leftPos];
    this.data[leftPos] = this.data[rightPos];
    this.data[rightPos] = temp;
  }
  compare(leftPos: number, rightPos: number): boolean {
    return this.data[leftPos] > this.data[rightPos];
  }
}
