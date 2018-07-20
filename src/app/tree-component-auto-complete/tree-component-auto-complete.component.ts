import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { HttpService } from '../services/http/http.service';


@Component({
  selector: 'app-tree-component-auto-complete',
  templateUrl: './tree-component-auto-complete.component.html',
  styleUrls: ['./tree-component-auto-complete.component.css']
})
export class TreeComponentAutoCompleteComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
  
  constructor(private httpService: HttpService) {

  }
  ngOnInit() {
    // Load the option from the Back End
    this.httpService.list().subscribe(   x => {this.options  = x.map(node => node.name) },
    err => console.error('Observer got an error: ' + err),
    () => this._registerPipe());
  }

  private _registerPipe() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

  }

  //HttpService call to manage
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
}
