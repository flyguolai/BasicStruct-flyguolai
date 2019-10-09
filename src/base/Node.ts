export abstract class Node {
  id:number;
  constructor(){}
}



export class LinkNode extends Node{
  next: LinkNode;
  constructor(){
    super();
    this.next = null;
  }

  setNext(node: LinkNode){
    this.next = node
  }
}

export class QueueNode extends LinkNode{
  prev: QueueNode;
  next: QueueNode;
  constructor(){
    super();
    this.prev = null
  }

  setPrev(node : QueueNode){
    this.prev = node
  }
}

export class Box extends QueueNode {

}