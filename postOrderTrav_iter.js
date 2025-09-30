var postOrderTraversal = function(root){
    let s1=[root];
    let s2=[];
    let curr;
    let ans = [];

    while(s1.length){
       
         curr = s1.pop();
         s2.push(curr);
        curr.left && s1.push(curr.left);
        curr.right && s1.push(curr.right);
        
    }

    while(s2.length){
        ans.push(s2.pop().val);
       
    }

    return ans;

}

let root = [1,null,2,3];
console.log(postOrderTraversal(root));