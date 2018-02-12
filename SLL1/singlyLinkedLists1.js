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
    while (walker.next) {
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
function secondToLast(){
    var currentNode = this.head;
    if(!currentNode || !currentNode.next){
        return "This list is not long enough";
    } else {
        var walker = this.head;
        while(walker.next){
            if(walker.next.next === null){
                return walker.next.value;
            }
            walker = walker.next;
        }
    }
}

// SList: Delete Given Node

// SList: Copy

// SList: Filter
function filter(highVal, lowVal){
    if(!this.head){
        return null;
    } else {
        var walker = this.head;
        var found = false;
        while(walker.next !== null){
            if(walker.next.value > highVal || walker.next.value < lowVal){
                found = true; 
                walker.next = walker.next.next;
            }
            walker = walker.next;
        }
        if(!found){
            return "There are no nodes higher or lower than the specified values";
        }
    }
}

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

// namespace LinkedListProblem
// {
//     class RotateList
//     {
//         public class ListNode
//         {
//             public int val;
//             public ListNode next;
//             public ListNode(int x) { val = x; }
//         }

//         static void Main(string[] args)
//         {
//             ListNode n = new ListNode(1);
//             n.next = new ListNode(2);
//             n.next.next = new ListNode(3);
//             n.next.next.next = new ListNode(4);
//             n.next.next.next.next = new ListNode(5);
//             ListNode rotated = RotateRight(n, 2);
//         }

//         /// <summary>
//         /// Method to rotatw the linked list to the right by the kth place.
//         /// </summary>
//         /// <param name="head">head of the linked list</param>
//         /// <param name="k">k places to rotate</param>
//         /// <returns>new head of linked list</returns>
//         static public ListNode RotateRight(ListNode head, int k)
//         {
//             // if list is null or k is 0 (no rotation)
//             if ((head == null) || (k == 0))
//                 return head;

//             // count length of list
//             int length = 0;
//             ListNode copy = head;

//             while (copy != null)
//             {
//                 copy = copy.next;
//                 length++;
//             }

//             // rotation asked is greater then the total length of the list.
//             if (length <= k)
//             {
//                 k = k % length;
//             }

//             // if the length is 1, no rotation required. 
//             // or k = 0, no rotation required.
//             if ((length == 1) || (k == 0))
//             {
//                 return head;
//             }

//             // newHeadIndex'th item will be new head in the list
//             int newHeadIndex = length - k + 1;

//             copy = head;
//             // find the new tail of the list 
//             for (int i = 1; i < newHeadIndex - 1; i++)
//             {
//                 copy = copy.next;
//             }

//             // save the new head
//             ListNode NewHead = copy.next;

//             // nullify the next of tail
//             copy.next = null;

//             copy = NewHead;

//             // find the current tail of the list
//             while (copy.next != null)
//             {
//                 copy = copy.next;
//             }

//             // add the head of the current list in the tail of new list
//             copy.next = head;

//             return NewHead;
//         }
//     }
// }

// void rotate(int k)
//     {
//         if (k == 0) return;
 
//         // Let us understand the below code for example k = 4
//         // and list = 10->20->30->40->50->60.
//         Node current  = head;
 
//         // current will either point to kth or NULL after this
//         // loop. current will point to node 40 in the above example
//         int count = 1;
//         while (count < k && current !=  null)
//         {
//             current = current.next;
//             count++;
//         }
 
//         // If current is NULL, k is greater than or equal to count
//         // of nodes in linked list. Don't change the list in this case
//         if (current == null)
//             return;
 
//         // current points to kth node. Store it in a variable.
//         // kthNode points to node 40 in the above example
//         Node kthNode = current;
 
//         // current will point to last node after this loop
//         // current will point to node 60 in the above example
//         while (current.next != null)
//             current = current.next;
 
//         // Change next of last node to previous head
//         // Next of 60 is now changed to node 10
 
//         current.next = head;
 
//         // Change head to (k+1)th node
//         // head is now changed to node 50
//         head = kthNode.next;
 
//         // change next of kth node to null
//         kthNode.next = null;
 
//     }