import { LinkNode, QueueNode } from "./Node";

describe("链表节点", () => {
  it("设置下一个节点", () => {
    const node = new LinkNode();
    const nextNode = new LinkNode();

    node.setNext(nextNode);

    expect(node.next).toEqual(nextNode);
  });
});

describe("链表节点（双向）", () => {
  const prevNode = new QueueNode();
  const nextNode = new QueueNode();

  it("设置下一个节点", () => {
    const node = new QueueNode();

    node.setNext(nextNode);

    expect(node.next).toEqual(nextNode);
  });

  it("设置上一个节点", () => {
    const node = new QueueNode();

    node.setPrev(prevNode);

    expect(node.prev).toEqual(prevNode);
  });

  it("设置双向节点", () => {
    const node = new QueueNode();

    node.setPrev(prevNode);
    node.setNext(nextNode);

    expect(node.prev).toEqual(prevNode);
    expect(node.next).toEqual(nextNode);
  });
});
