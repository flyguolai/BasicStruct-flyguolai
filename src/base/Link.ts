import { Node, LinkNode, QueueNode } from "./Node";

export class Link {
  header: LinkNode;
  length: number;

  constructor() {
    this.length = 0;
    this.header = null;
  }

  appendNode(node: LinkNode): LinkNode {
    let current = null;
    // 如果头节点不存在
    if (!this.header) {
      // 给头节点赋予初值
      this.header = node;
    } else {
      // 头指针为初值
      current = this.header;
      // 便利循环头指针，找到最后一个指针
      while (current.next) {
        current = current.next;
      }
      // 最后一个指针的下一个指针为当前node
      current.setNext(node);
    }

    this.length++;

    return node;
  }

  /**
   * 删除一个节点，如果不传值则默认删除最后一个
   * @param {Integer} index - 删除的行数
   */
  removeNode(index: number): this {
    if (index < 0 || index > this.length - 1) {
      console.error("越界啦");
      return;
    }

    const [previous, current] = this.getNodeByIndex(index);

    if (index !== 0 && index !== this.length - 1) {
      previous.setNext(current.next);
    }

    if (index <= 0) {
      this.header = current.next;
    }

    if (index >= this.length - 1) {
      previous.setNext(null);
    }

    this.length--;

    return this;
  }

  getNodeByIndex<T extends LinkNode>(index: number): [T, T] {
    let c_index = 0; // 当前索引节点index
    let current = <T>this.header; // 当前节点
    const t_index = index || 0; // 目标索引
    let previous = null; // 用来记录上一个节点，当当前节点删除了，将上个节点指向下个节点

    if (index === 0) {
      previous = current;
    } else {
      while (c_index++ < t_index) {
        previous = current;
        current = current.next;
      }
    }

    return [previous, current];
  }

  /**
   * 插入节点位置
   * @param {Integer} index - 节点插入位置
   * @param {LinkedNode} node - 节点
   */
  insertNode(index: number, node: LinkNode): this {
    if (index < 0 || index > this.length) {
      console.error("越界啦");
      return;
    }

    const [previous, current] = this.getNodeByIndex<LinkNode>(index);

    if (index <= 0) {
      this.header = node;
      node.setNext(current);
    }

    if (index >= this.length) {
      previous.setNext(node);
    }

    if (index > 0 && index <= this.length - 1) {
      previous.setNext(node);
      node.setNext(current);
    }

    this.length++;
    return this;
  }
}

export class Queue extends Link {
  footer: QueueNode;
  header: QueueNode;
  constructor() {
    super();
    this.header = null;
    this.footer = null;
  }

  setHeader(node: QueueNode) {
    this.header = node;
  }

  setFooter(node: QueueNode) {
    this.footer = node;
  }

  appendNode(node: QueueNode): QueueNode {
    super.appendNode(node);
    node.setPrev(this.footer);
    this.setFooter(node);
    return node;
  }

  /**
   * 删除一个节点，如果不传值则默认删除最后一个
   * @param {Integer} index - 删除的行数
   */
  removeNode(index: number): this {
    const [previous, current] = super.getNodeByIndex<QueueNode>(index);
    if (index > 0 && index < this.length - 1) {
      previous.setNext(current.next);
      current.next.setPrev(previous);
    }

    if (index === 0) {
      this.header = current.next;
    }

    if (index === this.length - 1) {
      this.footer = previous;
      previous.setNext(null);
    }
    this.header.setPrev(null);
    this.footer.setNext(null);
    return this;
  }

  /**
   * 插入节点位置
   * @param {Integer} index - 节点插入位置
   * @param {LinkedNode} node - 节点
   */
  insertNode(index: number, node: QueueNode): this {
    if (index < 0 || index > this.length) {
      console.error("越界啦");
      return;
    }

    const [previous, current] = this.getNodeByIndex<QueueNode>(index);

    if (index <= 0) {
      this.header = node;
      node.setNext(current);
      current.setPrev(node);
    }

    if (index >= this.length) {
      this.setFooter(node);
      previous.setNext(node);
      node.setPrev(previous);
    }

    if (index > 0 && index <= this.length - 1) {
      node.setNext(current);
      node.setPrev(previous);

      previous.setNext(node);
      current.setPrev(node);
    }

    this.length++;
    return this;
  }
}
