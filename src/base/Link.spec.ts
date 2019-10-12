import { QueueNode, LinkNode } from "./Node";
import { Queue, Link } from "./Link";

describe('测试链表', () => {

  

  it('删除中间节点',() => {
    let linkNode1 = new LinkNode();
    let linkNode2 = new LinkNode();
    let linkNode3 = new LinkNode();
    let linkList = new Link();
    linkList.appendNode(linkNode1)
    linkList.appendNode(linkNode2)
    linkList.appendNode(linkNode3)
    expect(linkList.length).toBe(3)
    expect(linkList.header.next).toEqual(linkNode2)
    linkList.removeNode(1)
    expect(linkList.header.next).toEqual(linkNode3)
  })

  it('删除第一个节点',() => {
    let linkNode1 = new LinkNode();
    let linkNode2 = new LinkNode();
    let linkNode3 = new LinkNode();
    let linkList = new Link();
    linkList.appendNode(linkNode1)
    linkList.appendNode(linkNode2)
    linkList.appendNode(linkNode3)
    expect(linkList.length).toBe(3)
    expect(linkList.header).toEqual(linkNode1)
    linkList.removeNode(0)
    expect(linkList.header).toEqual(linkNode2)
  })

  it('删除最后一个节点',() => {
    let linkNode1 = new LinkNode();
    let linkNode2 = new LinkNode();
    let linkNode3 = new LinkNode();
    let linkList = new Link();
    linkList.appendNode(linkNode1)
    linkList.appendNode(linkNode2)
    linkList.appendNode(linkNode3)
    expect(linkList.length).toBe(3)
    expect(linkList.header).toEqual(linkNode1)
    linkList.removeNode(2)
    expect(linkList.header.next.next).toEqual(null)
  })
  
  it('插入一个节点',() => {
    let linkNode1 = new LinkNode();
    let linkNode2 = new LinkNode();
    let linkNode3 = new LinkNode();
    let linkList = new Link();
    linkList.appendNode(linkNode1)
    linkList.appendNode(linkNode2)
    linkList.appendNode(linkNode3)
    expect(linkList.length).toBe(3)
    expect(linkList.header).toEqual(linkNode1)
    let linkNode4 = new LinkNode()
    linkList.insertNode(2,linkNode4)
    expect(linkList.header.next.next).toEqual(linkNode4)
  })

  it('插入第一个节点',() => {
    let linkNode1 = new LinkNode();
    let linkNode2 = new LinkNode();
    let linkNode3 = new LinkNode();
    let linkList = new Link();
    linkList.appendNode(linkNode1)
    linkList.appendNode(linkNode2)
    linkList.appendNode(linkNode3)
    expect(linkList.length).toBe(3)
    expect(linkList.header).toEqual(linkNode1)
    let linkNode4 = new LinkNode()
    linkList.insertNode(0,linkNode4)
    expect(linkList.header).toEqual(linkNode4)
  })

  it('最后一个节点',() => {
    let linkNode1 = new LinkNode();
    let linkNode2 = new LinkNode();
    let linkNode3 = new LinkNode();
    let linkList = new Link();
    linkList.appendNode(linkNode1)
    linkList.appendNode(linkNode2)
    linkList.appendNode(linkNode3)
    expect(linkList.length).toBe(3)
    expect(linkList.header).toEqual(linkNode1)
    let linkNode4 = new LinkNode()
    linkList.insertNode(3,linkNode4)
    expect(linkList.header.next.next.next).toEqual(linkNode4)
  })
})


describe('测试队列', () => {
  let queue = new Queue();


  it('删除中间节点',() => {
    let linkNode1 = new QueueNode();
    let linkNode2 = new QueueNode();
    let linkNode3 = new QueueNode();
    let linkList = new Queue();
    linkList.appendNode(linkNode1)
    linkList.appendNode(linkNode2)
    linkList.appendNode(linkNode3)
    expect(linkList.length).toBe(3)
    expect(linkList.header.next).toEqual(linkNode2)
    linkList.removeNode(1)
    expect(linkList.header.next).toEqual(linkNode3)
  })

  it('删除第一个节点',() => {
    let linkNode1 = new QueueNode();
    let linkNode2 = new QueueNode();
    let linkNode3 = new QueueNode();
    let linkList = new Queue();
    linkList.appendNode(linkNode1)
    linkList.appendNode(linkNode2)
    linkList.appendNode(linkNode3)
    expect(linkList.length).toBe(3)
    expect(linkList.header).toEqual(linkNode1)
    linkList.removeNode(0)
    expect(linkList.header).toEqual(linkNode2)
  })

  it('删除最后一个节点',() => {
    let linkNode1 = new QueueNode();
    let linkNode2 = new QueueNode();
    let linkNode3 = new QueueNode();
    let linkList = new Queue();
    linkList.appendNode(linkNode1)
    linkList.appendNode(linkNode2)
    linkList.appendNode(linkNode3)
    expect(linkList.length).toBe(3)
    expect(linkList.header).toEqual(linkNode1)
    linkList.removeNode(2)
    expect(linkList.footer).toEqual(linkNode2)
  })

})