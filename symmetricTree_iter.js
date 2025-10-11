var isSymmetric = function(root) {

    let queue =[];

    queue.push(root.left);
    queue.push(root.right);
    
    while(queue.length){
       let p1 = queue.shift();
       let p2 = queue.shift();
        
        if(!p1 && !p2) continue;
        
        if(!p1 || !p2) return false;

        if(p1.val != p2.val){
            return false
        }
        
            queue.push(p1.left, p2.right);
            queue.push(p1.right, p2.left);

        
    }

        return true; 
    
};