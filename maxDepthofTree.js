//top - bottom approach
var maxDepth = function(root) {
    if(!root) return 0;
    let maxD = 0;

    function traverse(curr, depth){
        maxD = Math.max(maxD, depth);

        curr.left && traverse(curr.left, depth+1);
        curr.right && traverse(curr.right, depth+1);
    }

    traverse(root,1);

    return maxD;
};

//bottom - top approach
var maxDepth = function(curr){
    if(!curr) return 0;

    let leftMax = maxDepth(curr.left);
    let rightMax = maxDepth(curr.right);

    return 1 + Math.max(leftMax, rightMax);
}