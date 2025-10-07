var hasPathSum = function(root, targetSum) {

    let ans = false
    if(!root) return false;

    function traverse(curr, currSum){
        
        let newSum = currSum+curr.val;
        if(!curr.left && !curr.right){
            if(newSum === targetSum){
                ans= ans || true
            }
        }

        curr.left && traverse(curr.left, newSum);
        curr.right && traverse(curr.right, newSum)
    }  

    traverse(root,0);

    return ans;
};