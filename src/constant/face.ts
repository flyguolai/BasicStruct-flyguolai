import { LINE } from "./type";

export class Face {
  lines: Array<LINE>;

  constructor(lines: Array<LINE>) {
    this.lines = lines;
  }
}
