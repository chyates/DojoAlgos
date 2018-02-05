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
// ----ITERATIVELY----
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
// ----RECURSIVELY----
function rContains(val) {
    if (!this.head) {
        return null;
    }
    var exists = false;
    function search(node, val) {
        if (node.value == val) {
            exists = true;
            return exists;
        }
        search(node.next, val);
    }
    search(this.head);
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

// List: Front: return the value of the first node in the list
function frontVal() {
    if (!this.head) {
        return null;
    }
    firstNode = this.head;
    return firstNode.value;
}

// SList: Length
// ----ITERATIVELY----
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

// ----RECURSIVELY----
function rLength() {
    var count = 0;
    if (!this.head) {
        return 0;
    }
    function getCount(node) {
        if (node == null) {
            return count;
        }
        count++;
        getCount(node.next);
    }
    getCount(this.head);
}
// SList: Display
function printList() {
    if (!this.head) {
        return null;
    }
    var strVals = "";
    var walker = this.head;
    while (walker) {
        strVals += walker.value;
        walker = walker.next;
    }
    return strVals;
}

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

// SList: Back: return the last value in a list
function displayLast() {
    if (!this.head) {
        return null;
    }
    var walker = this.head;
    while (walker) {
        if (walker.next == null) {
            return walker.value;
        }
        walker = walker.next;
    }
}

// SList: Remove Back
function removeBack() {
    if (!this.head) {
        return null;
    }
    var walker = this.head;
    while (walker.next) {
        if (walker.next.next == null) {
            walker.next = null;
        }
        walker = walker.next;
    }
    return this;
}

// SList: Add Back
function addBack(val) {
    if (!this.head) {
        return null;
    }
    var addNode = new Node(val);
    var walker = this.head;
    while (walker.next) {
        walker = walker.next;
    }
    walker.next = addNode;
    return this;
}

// SList: Move Min to Front
function minToFront(){
    if(!this.head){
        return null;
    }
    var currentNode = this.head;
    var min = currentNode.value;
    var minNode = currentNode;
    var walker = this.head;
    var walker2 = currentNode.next;
    while(walker && walker2){
        if(walker2.value < min){
            minNode = walker2;
            walker.next = walker2.next;
            walker2.next = this.head;
            this.head = walker2;
        }
        walker = walker.next;
        walker2 = walker2.next;
    }
    return this;
}

// SList: Move Max to Back
function maxToBack(){
    if(!this.head){
        return null;
    }
    var currentNode = this.head;
    var max = currentNode.value;
    var maxNode = currentNode;
    var walker = this.head;
    var walker2 = currentNode.next;
    while(walker && walker2){
        if(walker2.value > max){
            maxNode = walker2;
            walker.next = walker2.next;
        }
        walker = walker.next;
        walker2 = walker2.next;
    }
    walker2.next = maxNode;
    return this;
}

// SList: Prepend Val: add node w/given val before a specified node, if that node exists
function addBefore(before, val) {
    if (!this.head) {
        return null;
    }
    var walker = this.head;
    var thisNode = new Node(val);
    var found = false;
    while (walker) {
        if (walker.next.value == before) {
            found = true;
            thisNode.next = walker.next;
            walker.next = thisNode;
        }
    }
    return this;
}

// SList: Append Val: add node w/ given val after a specified (given) node, if that node exists
function addAfter(after, val) {
    if (!this.head) {
        return null;
    }
    var walker = this.head;
    var thisNode = new Node(val);
    while (walker) {
        if (walker.value == after) {
            thisNode.next = walker.next;
            walker.next = thisNode;
        }
        walker = walker.next;
    }
    return this;
}

// Create SList

// SList: Remove Val: remove a node w/ a given value
function removeVal(val) {
    if (!this.head) {
        return null;
    }
    var walker = this.head;
    var found = false;
    while (walker) {
        if (walker.next.value == val) {
            found = true;
            walker.next = walker.next.next;
            return this;
        }
        walker = walker.next;
    }
    if (!found) {
        return "No node with the given value was found in the list";
    }
}

// SList: Split on Value

// SList: Remove Negatives
function removeNegatives(){
    if(!this.head){
        return null;
    }
    var walker = this.head;
    var found = false;
    while(walker){
        if(walker.next.value < 0){
            found = true;
            walker.next = walker.next.next;
            return this;
        }
        walker = walker.next;
    }
    if(!found){
        return "There are no nodes with negative values in this list";
    }
}

// SList: Concat
function concatSLL(list1, list2){
    if(!list1.head || !list2.head){
        return null;
    }
    var walker = list1.head;
    while(walker.next){
        walker = walker.next;
    }
    walker.next = list2.head;
    return list1;
}

// SList: Partition

// SList: Second to Last

// SList: Delete Given Node

// SList: Copy

// SList: Filter

// Zip SList

// De-Dupe SList
function deDupeSLL(){
    var currentNode = this.head;
    if(!currentNode || !currentNode.next){
        return "This list is too short to contain duplicates";
    }
    var walker = this.head;
    while(walker.next != null){
        if(walker.value == walker.next.value){
            walker.next = walker.next.next;
        } else {
            walker = walker.next;
        }
    }
    return this;
}