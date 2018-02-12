// function to create a node, which technically doesn't get called until you're adding a node to a list
function Node(val) {
    this.value = val;
    this.next = null;
}

// function to define a SLL as a collection of nodes and pointers (aka, initialize this.head and define addBack function so it creates a node if one doesn't already exist)
function SLL() {
    this.head = null;

    function addBack(val) {
        var addNode = new Node(val);
        if (!this.head) {
            this.head = addNode;
        }
        var walker = this.head;
        while (walker.next) {
            walker = walker.next;
        }
        walker.next = addNode;
        return this;
    }
}

// SList: Reverse
SLL.prototype.reverse = function(){
    var prevNode = null;
    var nextNode = null;
    var currentNode = this.head;
    if(!currentNode || !currentNode.next){
        return "This list is not long enough to be reversed";
    }
    while(currentNode !== null){
        nextNode = currentNode.next;
        currentNode.next = prevNode;
        prevNode = currentNode;
        currentNode = nextNode;
    }
    this.head = prevNode;
    return this;
}
// SList: Nth-Last Node--given a list and an 'index' (or place), return the node at that place in the list
SLL.prototype.nthLast = function(place){
    var walker1 = this.head;
    var walker2 = this.head;
    if(!walker1 || !walker1.next){
        return "There aren't enough nodes to perform this function";
    } else {
        var count = 0;
        while(count < place){
            if(walker2 === null){
                return "The given place is out of range of the list";
            }
            walker2 = walker2.next;
            count++;
        }
        while(walker2 != null){
            walker1 = walker1.next;
            walker2 = walker2.next;
        }
        return "The", place, "node from last is", walker1.value;
    }
}

// SList: Is Palindrome

// SList: Shift Right--given a number, shift a list to the right by that number, ie. 1->2->3->4->5, 2 should be 4->5->1->2->3
SLL.prototype.shiftBy = function(num){
    var length = 0;
    var walker = this.head;
    while(walker != null){
        walker = walker.next;
        length++;
    }
    if(length == 1 || num == 0){
        return "No rotation required";
    } else {
        var newHeadPlace = length - num + 1;
        walker = this.head;
        for(i=0;i<newHeadPlace-1;i++){
            walker = walker.next;
        }
        var newHead = walker.next;
        walker.next = null;
        walker = this.head;
        while(walker.next !== null){
            walker = walker.next;
        }
        walker.next = this.head;
        return this;
    }
}

// SList: Sum Numerals

// SList: Setup Loop

// SList: Flatten Children

// SList: Unflatten Children

// SList: Has Loop

// SList: Break Loop

// SList: Loop Start

// SList: Number of Nodes

// SList: Swap Pairs