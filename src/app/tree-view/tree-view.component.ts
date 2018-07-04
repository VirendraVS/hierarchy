import { Component, OnInit, Input } from '@angular/core';
import { TreeNode } from '../shared/TreeNode';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit {
  @Input() directories: Array<TreeNode>;
  constructor() { }

  ngOnInit() {
  }

}
