public class pred_succ{






static public class pair{
	TreeNode prev=null;

 TreeNode pred=null;
 TreeNode succ=null;

 int ceil=0;
 int floor=0;
}

public static void helper(TreeNode root,TreeNode data,pair p){
         
         if(root==null){
         	return;
         }
           if(root.val>data.val){
    p.ceil=Math.min(root.val,p.ceil);
}  
if(root.val<data.val){
    p.floor=Math.max(root.val,p.floor);
}
   helper(root.left,data,p);

    if(p.prev!=null && root.val==data.val){
    	p.pred=p.prev;
    }
    else if(p.prev!=null && prev.val==data.val){
    	p.succ=root;
    }
    p.prev=root;
   helper(root.right,data,p);



  }

public static void helper_bst(TreeNode root,int data){

  if(root==null){
  	return;
  }


   TreeNode pred=null;
   TreeNode succ=null;
   TreeNode prev=null;
   TreeNode curr=root;

   while(curr!=null){

    
    if(curr<data.val){

   pred=curr;
   curr=curr.right;
}
else if(data.val>curr.val){
	succ=curr;
	curr=curr.left;
}
else{

   if(curr.left!=null){
      pred=curr.left;
      while(pred.right!=null){
      	pred=pred.right;
      }
   
   }
   if(curr.right!=null){
      succ=curr.right;
      while(succ.left!=null){
      	succ=succ.left;
      }
   
   }
   break;
}


   










   }














}

public static void bt_pred_succ(TreeNode root,TreeNode data){



}








public static void main(String ar[]){



}



}