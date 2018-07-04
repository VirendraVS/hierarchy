export class TreeNode{
    name: string;
    employee: Array<TreeNode>;
    //files: Array<TreeNode>;
    expanded:boolean;
    checked:boolean;
    constructor(name,directories) {
        this.name = name;
        this.employee = directories;
        this.expanded = false;
        this.checked = false;
    }
    toggle(){
        this.expanded = !this.expanded;
    }
    check(){
        let newState = !this.checked;
        this.checked = newState;
        this.checkRecursive(newState);
    }
    checkRecursive(state){
        this.employee.forEach(d => {
            d.checked = state;
            d.checkRecursive(state);
        })
    }
    
}
