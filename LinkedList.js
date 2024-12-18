import Node from './Node.js';

export default class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(value){
        const newNode = new Node(value);

        if (this.head == null){
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.nextNode !== null) {
                current = current.nextNode;
            }
            current.nextNode = newNode;
        }

        this.size++;
    }

    prepend(value){
        const newNode = new Node(value);
        newNode.nextNode = this.head;
        this.head = newNode;

        this.size++;
    }

    size() {
        return this.size;
    }

    head() {
        return this.head;
    }

    tail() {

        if (this.head == null){
            return null;
        } else {
            let current = this.head;
            while (current.nextNode !== null){
                current = current.nextNode;
            }

            return current;
        }
    }

    at(index) {
        if (index => this.size || index < 0){
            return null;
        } else {
            let current = this.head;
            let counter = 0;
            while (counter !== index){
                current = current.nextNode;
                counter++;
            }
            return current;
        }
    }
}
