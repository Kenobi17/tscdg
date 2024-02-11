import { Sorter } from "./Sorter";

class Node {
	constructor(
		public data: number,
		public next: Node | null = null
	) { }
}

export class LinkedList extends Sorter {
	public head: Node | null = null;

	public add(data: number): void {
		const node = new Node(data)
		if (!this.head) {
			this.head = node
			return
		}

		let tail = this.head

		while (tail.next) {
			tail = tail.next
		}

		tail.next = node
	}

	public get length(): number {
		if (!this.head) {
			return 0
		}

		let length = 1

		let node = this.head

		while (node.next) {
			length++
			node = node.next
		}

		return length
	}

	public at(index: number): Node {
		if (!this.head) {
			throw new Error('Index out of bounds')
		}

		let counter = 0
		let node: Node | null = this.head

		while (node) {
			if (counter === index) {
				return node
			}

			counter++
			node = node.next
		}

		throw new Error('Index out of bounds')
	}

	public compare(leftIndex: number, rightIndex: number): boolean {
		if (!this.head) {
			throw new Error('List is empty')
		}

		return this.at(leftIndex).data > this.at(rightIndex).data
	}

	public swap(leftIndex: number, rightIndex: number): void {
		const leftNode = this.at(leftIndex)
		const rightNode = this.at(rightIndex)

		const leftHand = leftNode.data
		leftNode.data = rightNode.data
		rightNode.data = leftHand
	}

	public print(): void {
		if (!this.head) {
			return
		}

		let node: Node | null = this.head
		while (node) {
			console.log(node.data)
			node = node.next
		}
	}

}
