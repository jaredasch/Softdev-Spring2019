// Value is assumed to be a KJavascript object with a key property

class BinaryTree {
    constructor(){
        this.root = null;
    }

    insert(value){
        if(this.root == null){
            this.root = new BinaryTreeNode(value);
        } else {
            let current = this.root;
            while(true){
                if(current.value.key < value.key){
                    if(current.right){
                        current = current.right;
                    } else {
                        current.right = new BinaryTreeNode(value);
                        current.right.parent = current;
                        splay(this, current.right);
                        return true;
                    }
                } else if (current.value.key > value.key) {
                    if(current.left){
                        current = current.left;
                    } else {
                        current.left = new BinaryTreeNode(value);
                        current.left.parent = current;
                        while(current.left )
                        splay(this, current.left);
                        return true;
                    }
                } else {
                    throw "No duplicate keys allowed";
                    return false;
                }
            }
        }
    }

    get(key){
        let current = this.root;
        while(current){
            if(current.value.key == key){
                splay(this, current);
                return this.root;
            }
            if(current.value.key < key){
                current = current.right;
            } else {
                current = current.left;
            }
        }
        throw "No item found with key " + key;
    }

    split(key){
        get(key);
        return {smaller: this.root.left, larger: this.root.right}
    }

    delete(key){
        let node = this.get(key);
        if(node.right == null && node.left == null){
            this.root = null;
        } else if(node.right == null && node.left != null){
            let biggestRemaining = node.left;
            while(biggestRemaining.right){
                biggestRemaining = biggestRemaining.right;
            }
            node.value = biggestRemaining.value;
            if(biggestRemaining.parent.right == biggestRemaining){
                biggestRemaining.parent.right = null;
            } else {
                biggestRemaining.parent.left = null;
            }
        } else {
            console.log("Something wrong")
            let smallestRight = node.right;
            while(smallestRight.left){
                smallestRight = smallestRight.left;
            }
            if(smallestRight.parent == node){
                smallestRight.left = node.left;
                this.root = smallestRight;
                smallestRight.parent = null;
            } else {
                node.value = smallestRight.value;
                smallestRight.parent.left = smallestRight.right;
                if(smallestRight.right){
                    smallestRight.right.parent = smallestRight.parent;
                }
            }
            this.root.left.parent = this.root
        }
    }

    display(){
        displayNode(this.root);
    }
}

class BinaryTreeNode {
    constructor(value){
        if(!("key" in value)){
            throw "Key required for tree insertion";
        }
        this.value = value;
        this.parent = null;
        this.left = null;
        this.right = null;
    }
}

function displayNode(node){
    if(node.left){ displayNode(node.left); }
    console.log(node.value);
    if(node.right){ displayNode(node.right); }
}

function leftRotate(tree, node){
    let y = node.right;
    node.right = y.left;
    if(y.left != null){
        y.left.parent = node;
    }
    y.parent = node.parent;
    if(node.parent == null){
        tree.root = y;
    } else if(node == node.parent.right){
        node.parent.right = y;
    } else {
        node.parent.left = y;
    }
    y.left = node;
    node.parent = y;
}

function rightRotate(tree, node){
    let y = node.left;
    node.left = y.right;
    if(y.right != null){
        y.right.parent = node;
    }
    y.parent = node.parent;
    if(node.parent == null){
        tree.root = y;
    } else if(node == node.parent.left){
        node.parent.left = y;
    } else {
        node.parent.right = y;
    }
    y.right = node;
    node.parent = y;
}

function splay(tree, node){
    if(node == tree.root){

    } else if(node.parent == tree.root){
        if(node == tree.root.right){
            leftRotate(tree, tree.root);
        } else {
            rightRotate(tree, tree.root);
        }
    } else if(node == node.parent.left && node.parent.parent.left == node.parent){ // Zig-zig both right children
        rightRotate(tree, node.parent.parent);
        rightRotate(tree, node.parent);
    } else if(node == node.parent.right && node.parent.parent.right == node.parent){
        leftRotate(tree, node.parent.parent);
        leftRotate(tree, node.parent);
    } else if(node == node.parent.left && node.parent == node.parent.parent.right){
         rightRotate(tree, node.parent);
         leftRotate(tree, node.parent);
    } else if(node == node.parent.right && node.parent == node.parent.parent.left){
        leftRotate(tree, node.parent);
        rightRotate(tree, node.parent);
    }

    if(tree.root != node){
        splay(tree, node);
    }
}

function join(S, T){ // Assuming for all T > S
    largestS = S;
    while(largestS.right){
        largestS = largestS.right;
    }
    splay(S, largestS);
    S.right = T;
}

function maxHeight(treeNode){
    if(treeNode == null){
        return 0;
    } else {
        return 1 + Math.max(maxHeight(treeNode.left), maxHeight(treeNode.right));
    }
}

b = new BinaryTree();
// b.insert({key: 10});
// b.insert({key: 15});
// b.insert({key: 5});
// b.insert({key: 20});
// b.insert({key: 18});
// b.insert({key: 12});
// b.insert({key: 25});
// b.display();

var c = document.getElementById("treeCanvas");
c.width = document.body.clientWidth;
c.height = document.body.clientHeight;
var ctx = c.getContext("2d");

function draw_tree(tree){
    ctx.clearRect(0, 0, c.width, c.height);
    var height = maxHeight(tree.root);
    scale = c.width / height;
    draw_node(tree.root, c.width / 2, 100, scale / 5);
}

function draw_node(node, x, y, rad){
    if(node.right){
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + 2.5 * rad, y + 2.5 * rad);
        ctx.stroke();
        draw_node(node.right, x + 2.5 * rad, y + 2.5 * rad, rad);
    }
    if(node.left){
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x - 2.5 * rad, y + 2.5 * rad);
        ctx.stroke();
        draw_node(node.left, x - 2.5 * rad, y + 2.5 * rad, rad);
    }
    var font = rad + "px sans-serif";
    ctx.fillStyle = "white";
    ctx.font = font;

    ctx.beginPath();
    ctx.ellipse(x, y, rad, rad, 0, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = "black";
    ctx.fillText(node.value.key, x - rad / 2, y + rad / 2);
}

let insertBtn = document.getElementById("insertBtn");
let removeBtn = document.getElementById("removeBtn");
let splayBtn = document.getElementById("splayBtn");
let valueInput = document.getElementById("valueInput");

insertBtn.addEventListener("click", function(e){
    var nums = valueInput.value.split(", ");
    for(var i = 0; i < nums.length; i++){
        b.insert({key: parseFloat(nums[i])});
    }
    draw_tree(b);
});

removeBtn.addEventListener("click", function(e){
    b.delete(valueInput.value);
    draw_tree(b);
});

splayBtn.addEventListener("click", function(e){
    b.get(valueInput.value);
    draw_tree(b);
})
