import { ENUM_RELATIVE_FACE, ENUM_FACE, LINE } from "../constant/type";

export abstract class Node {
  id: number;
  constructor() {}
}

export class LinkNode extends Node {
  next: this;
  constructor() {
    super();
    this.next = null;
  }

  setNext(node: this): this {
    this.next = node;
    return node;
  }
}

export class QueueNode extends LinkNode {
  prev: this;
  next: this;
  constructor() {
    super();
    this.prev = null;
  }

  setPrev(node: this): this {
    this.prev = node;
    return node;
  }
}

export class HalfBox extends QueueNode {
  // 相对于前一个面的位置
  relativeFace: ENUM_RELATIVE_FACE;

  prevFace: ENUM_FACE;
  nextFace: ENUM_FACE;

  line: LINE;

  constructor() {
    super();
  }

  setPrevFace(face: ENUM_FACE): ENUM_FACE {
    this.prevFace = face;
    return face;
  }

  setNextFace(face: ENUM_FACE): ENUM_FACE {
    this.nextFace = face;
    return face;
  }

  setLine(line: LINE): LINE {
    this.line = line;
    return this.line;
  }

  setRelativeFace(relativeFace: ENUM_RELATIVE_FACE) {
    this.relativeFace = relativeFace;
  }
}
