import { LinkNode, QueueNode } from "./Node";


describe("链表节点", () => {
  it("设置下一个节点", () => {
    let node = new LinkNode();
    let nextNode = new LinkNode();

    node.setNext(nextNode)

    expect(node.next).toEqual(nextNode)
  })
})

describe("链表节点（双向）", () => {
  let prevNode = new QueueNode();
  let nextNode = new QueueNode();


  it("设置下一个节点", () => {
    let node = new QueueNode();

    node.setNext(nextNode)

    expect(node.next).toEqual(nextNode)
  })

  it("设置上一个节点", () => {
    let node = new QueueNode();

    node.setPrev(prevNode)

    expect(node.prev).toEqual(prevNode)
  })

  it("设置双向节点", () => {
    let node = new QueueNode();

    node.setPrev(prevNode)
    node.setNext(nextNode)

    expect(node.prev).toEqual(prevNode)
    expect(node.next).toEqual(nextNode)
  })
})
