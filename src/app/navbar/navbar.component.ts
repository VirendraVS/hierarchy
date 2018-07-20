import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpService } from '../services/http/http.service';
import { TreeNode } from '../shared/TreeNode';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  directories: Array<TreeNode>;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(private breakpointObserver: BreakpointObserver, private httpService: HttpService) {
    // Http request to rest end point
    this.httpService.list().subscribe({
      next: data =>  {
        this.directories = data as TreeNode[];
       
      }
    });
  }
  

  
  }



  