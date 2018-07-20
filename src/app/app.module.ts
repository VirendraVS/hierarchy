import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { AppComponent } from './app.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { HttpClientModule} from '@angular/common/http';
import { HttpService } from './services/http/http.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms'
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatAutocompleteModule } from '@angular/material'
import {RouterModule, Routes} from '@angular/router';
import { TreeComponentAutoCompleteComponent } from './tree-component-auto-complete/tree-component-auto-complete.component';



const appRoutes: Routes = [
  { path: 'first-page', component: TreeViewComponent },
  { path: 'second-page', component: TreeViewComponent },
  { path: 'third-page', component: TreeViewComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    TreeViewComponent,
    NavbarComponent,
    TreeComponentAutoCompleteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [HttpService],
  entryComponents: [TreeComponentAutoCompleteComponent],
  bootstrap: [AppComponent,TreeComponentAutoCompleteComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
