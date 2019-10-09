import { QueueNode, LinkNode } from "./Node";
import { Queue, Link } from "./Link";

describe('测试列表',() => {

})

describe('链表队列', () => {
  let linkList = new Link();

  let linkNode1 = new LinkNode();
  let linkNode2 = new LinkNode();
  let linkNode3 = new LinkNode();


  beforeAll(() => {
    linkList.appendNode(linkNode1)
    linkList.appendNode(linkNode2)
    linkList.appendNode(linkNode3)
  })

  it('next',() => {
    expect(linkList.length).toBe(3)
    expect(linkList.header.next).toEqual(linkNode2)
    linkList.removeNode(1)
    expect(linkList.header.next).toEqual(linkNode3)
  })
  
})


describe('测试队列', () => {
  let queue = new Queue();

  let queueNode1 = new QueueNode();
  let queueNode2 = new QueueNode();
  let queueNode3 = new QueueNode();

  beforeAll(() => {
    queue.appendNode(queueNode1)
    queue.appendNode(queueNode2)
    queue.appendNode(queueNode3)
  })

  it('length', () => {
    expect(queue.length).toBe(3)
  })

  it('prev',() => {
    expect(queue.header.next.prev).toEqual(queue.header)
  })
  it('next',() => {
    expect(queue.header.next).toEqual(queue.footer.prev)
  })
  it('footer',() => {
    expect(queue.header.next.next).toEqual(queue.footer)
  })
})