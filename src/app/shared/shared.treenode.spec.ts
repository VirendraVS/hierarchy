import { TestBed, async } from '@angular/core/testing';
import { TreeNode } from "./TreeNode";
import Utils from "./Utils";



describe('TreeNode', () => {
    let treeNode: TreeNode;
  
    beforeEach(async(() => {
        let fall2014 = new TreeNode('Fall 2014',[]);
        let summer2014 = new TreeNode('Summer 2014',[]);
        treeNode = new TreeNode('Pictures',[summer2014,fall2014]);
    }));
    afterEach(() => { 
        let stringiFiedTreeValue  = Utils.serialise(treeNode);
        let treeNodeVar:TreeNode = JSON.parse(stringiFiedTreeValue);
        treeNode = null;
    });
    it('should create a a tree with two nodes', () => { 
        //console.log(treeNode);
        expect(treeNode.employee.length).toEqual(2); 
      });
  });


 