// function to create a node, which technically doesn't get called until you're adding a node to a list
function Node(val) {
    this.value = val;
    this.next = null;
}

// function to define a SLL as a collection of nodes and pointers
function SLL() {
    this.head = null;
}

// List: Add Front
function addFront(val) {
    var thisNode = new Node(val);
    if (!this.head) {
        this.head = thisNode;
        return thisNode;
    }
    else {
        thisNode.next = this.head;
        this.head = thisNode;
        return this;
    }
}

// List: Contains
function contains(val) {
    var walker = this.head;
    while (walker) {
        if (walker.value == val) {
            return true;
        }
        walker = walker.next;
    }
    return false;
}

// List: Remove Front
function removeFront() {
    if (!this.head) {
        return false;
    }
    var currentNode = this.head;
    this.head = currentNode.next;
    return this;
}

// List: Front

// SList: Length
function length() {
    var count = 0;
    if (!this.head) {
        return 0;
    } else {
        var walker = this.head;
        while (walker) {
            count++;
            walker = walker.next;
        }
    }
    return count;
}

// SList: Display

// SList: Max
function findMax() {
    if (!this.head) {
        return null;
    }
    var currentNode = this.head;
    var max = currentNode.value;
    var walker = this.head;
    while (walker) {
        if (walker.value > max) {
            max = walker.value;
        }
        walker = walker.next;
    }
    return max;
}

// SList: Min
function findMin() {
    if (!this.head) {
        return null;
    }
    var currentNode = this.head;
    var min = currentNode.value;
    var walker = this.head;
    while (walker) {
        if (walker.value < min) {
            min = walker.value;
        }
        walker = walker.next;
    }
    return min;
};

// SList: Average
function findAvg() {
    if (!this.head) {
        return null;
    }
    var sum = 0;
    var length = 0;
    var walker = this.head;
    while (walker) {
        sum += walker.value;
        length++;
        walker = walker.next;
    }
    var avg = sum / length;
    return avg;
};

// SList: Back

// SList: Remove Back

// SList: Add Back

// SList: Move Min to Front

// SList: Move Max to Back

// SList: Prepend Val

// SList: Append Val

// Create SList

// SList: Remove Val

// SList: Split on Value

// SList: Remove Negatives

// SList: Concat

// SList: Partition

// SList: Second to Last

// SList: Delete Given Node

// SList: Copy

// SList: Filter

// Zip SList

// De-Dupe SList
