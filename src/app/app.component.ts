import { Component } from '@angular/core';
import { TreeNode } from './shared/TreeNode';
import {HttpService } from './services/http/http.service'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  directories: Array<TreeNode>;
  
  constructor(private httpService:HttpService) {

    this.httpService.getInfo().subscribe({
      next: data =>  {
        // let result = JSON.parse(data)
        this.directories = data as TreeNode[];
        console.log("this.directories");
        console.log(this.directories);
      }
    });
    // let fall2014 = new TreeNode('Fall 2014',[],['image1.jpg','image2.jpg','image3.jpg']);
    // let summer2014 = new TreeNode('Summer 2014',[],['Summer1.jpg','Summer2.jpg','Summer3.jpg']);
    // let pics = new TreeNode('Pictures',[fall2014],[]);
    // let music = new TreeNode('Music',[],['song1.mp3','song2.mp3']);
    // this.directories = [summer2014,pics,music];

    console.log(this.directories);
    console.log("Tree to serialise");
    console.log(JSON.stringify(this.directories));
  }
}





