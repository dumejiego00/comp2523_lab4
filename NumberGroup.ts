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
    const temp = leftPos;
    leftPos = rightPos;
    rightPos = temp;
  }
  compare(leftPos: number, rightPos: number): boolean {
    return leftPos > rightPos;
  }
}
