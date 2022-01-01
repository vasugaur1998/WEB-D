import java.util.*;
public class hey{



public static class TreeNode{
    int data=0;
    TreeNode left=null;
    TreeNode right=null;

    public TreeNode(int data){
        this.data=data;
    }
}

// public static void vertical_view(TreeNode root){
//   if(root==null){
//     return;
//   }
int idx=0;
public static TreeNode build_from_preorder(int arr[],int lrange,int rrange){

if(arr[idx]<=lrange||arr[idx]>=rrange || idx>=arr.length){
        // idx++;
        return null;
    }

    TreeNode root=new TreeNode(arr[idx++]);
    root.left=build_from_preorder(arr,lrange,root.val);
    root.right=build_from_preorder(arr,root.val,rrange);

    return root;
     



}

idx=arr.length-1;
public static TreeNode build_from_postorder(TreeNode root,int lrange,int rrange){

   if(arr[idx]<=lrange||arr[idx]>=rrange || idx<0){
        // idx--;
        return null;
    }

    TreeNode root=new TreeNode(arr[idx--]);
    root.left=build_from_postorder(arr,lrange,root.val);
    root.right=build_from_postorder(arr,root.val,rrange);

    return root;
    




}



  HashMap<Integer,ArrayList<TreeNode>> map=new HashMap<>();
  int min=(int)1e9;
  int max=-(int)1e9;
  LinkedList<TreeNode>que=new LinkedList<>();
  que.add(root);
   





  }


public static void main(String ar[]){



}


}