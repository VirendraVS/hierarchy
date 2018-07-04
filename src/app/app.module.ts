import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { AppComponent } from './app.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { HttpClientModule} from '@angular/common/http';
import { HttpService } from './services/http/http.service'



@NgModule({
  declarations: [
    AppComponent,
    TreeViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
 

  providers: [HttpService],
    
    bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
