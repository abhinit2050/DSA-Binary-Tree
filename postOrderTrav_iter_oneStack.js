var postOrderTraversal = function(root){
    let stack=[];
    let ans=[];
    let curr = root;
    let lastVisitedNode;
    
    while(stack.length || curr){

        while(curr){
            stack.push(curr);
            curr = curr.left;
        }
        let peekNode = stack[stack.length-1];

        if(peekNode.right && peekNode.right != lastVisitedNode){
            curr = peekNode.right;
        } else{
            ans.push(peekNode.val);
            lastVisitedNode = stack.pop();
        }
    }

    return ans;
}

let root = [1,null,2,3];
console.log(postOrderTraversal(root));