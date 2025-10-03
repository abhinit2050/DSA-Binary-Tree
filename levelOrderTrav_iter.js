var levelOrder = function(root) {
  
    if (!root) return [];

    let queue =[root];
    let ans=[];

    while(queue.length){
      
        let levelSize = queue.length;
        let levelArray=[]

        for(i=0;i<levelSize;i++){
              let curr = queue.shift();
            curr.left && queue.push(curr.left);
            curr.right && queue.push(curr.right);
            levelArray.push(curr.val);
        }

        ans.push(levelArray);
    }

    return ans;

};