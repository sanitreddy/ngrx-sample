import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { simpleReducer } from './simple.reducer';
import { postReducer } from './reducers/post.reducer';
import { HttpClientModule } from '@angular/common/http';
import { SampleService } from './sample.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({post: postReducer, message: simpleReducer})
  ],
  providers: [SampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
