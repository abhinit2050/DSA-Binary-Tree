var diameterOfBinaryTree = function(root) {
    let maxDia =0;

    let findDepth = function(curr){
        if(!curr) return 0;

        let leftHeight = findDepth(curr.left);
        let rightHeight = findDepth(curr.right);

        maxDia = Math.max(maxDia, (leftHeight+rightHeight))

        return 1 + Math.max(leftHeight, rightHeight)
    }

    findDepth(root);

    return maxDia;
};