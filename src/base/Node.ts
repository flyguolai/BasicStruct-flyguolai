export abstract class Node {
  id:number;
  constructor(){}
}

export class LinkNode extends Node{
  next: this;
  constructor(){
    super();
    this.next = null;
  }

  setNext(node: this){
    this.next = node
  }
}

export class QueueNode extends LinkNode{
  prev: this;
  next: this;
  constructor(){
    super();
    this.prev = null
  }

  setPrev(node : this){
    this.prev = node
  }
}

export class Box extends QueueNode {

}