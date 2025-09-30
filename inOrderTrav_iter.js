var inorderTraversal = function(root) {
   let stack=[];
    let ans=[];
    let curr = root;
    while(stack.length || curr){
            while(curr){
                stack.push(curr);
                curr=curr.left;
            }
            curr = stack.pop();
            ans.push(curr?.val);
            curr = curr?.right;

    }

    return ans;
};

let root = [1,null,2,3];
console.log(inorderTraversal(root));