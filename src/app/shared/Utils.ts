import { TreeNode } from "./TreeNode";

export default class Utils {
    /**
     * 
     * @param treeNode  it thre tree to deserialise
     */
    static serialise(treeNode: TreeNode):string { return JSON.stringify(treeNode);  }
    static deserialise(json: string):TreeNode { return  JSON.parse(json); }
}