class MyVector<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  // Add an element to the end of the vector
  push(item: T): void {
    this.items.push(item);
  }

  // Remove the last element from the vector
  pop(): T | undefined {
    return this.items.pop();
  }

  // Get the length of the vector
  size(): number {
    return this.items.length;
  }

  // Access an element by index
  get(index: number): T | undefined {
    return this.items[index];
  }

  // Remove an element at a specific index
  removeAt(index: number): void {
    if (index >= 0 && index < this.items.length) {
      this.items.splice(index, 1);
    }
  }

  // Insert an element at a specific index
  insertAt(index: number, item: T): void {
    if (index >= 0 && index <= this.items.length) {
      this.items.splice(index, 0, item);
    }
  }

  // Check if the vector is empty
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  // Get all items in the vector
  getAll(): T[] {
    return [...this.items];
  }
}

// Example usage:
const vector = new MyVector<number>();
vector.push(10);
vector.push(20);
vector.push(30);

console.log(vector.getAll()); // Output: [10, 20, 30]

vector.removeAt(1);
console.log(vector.getAll()); // Output: [10, 30]

vector.insertAt(1, 25);
console.log(vector.getAll()); // Output: [10, 25, 30]

console.log(vector.size()); // Output: 3
