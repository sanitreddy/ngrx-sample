import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from './models/post.model';
import * as PostActions from './actions/post.actions';
import { SampleService } from './sample.service';

interface AppState {
  post: Post;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  infoReceived1: string[] = []
  infoReceived2: string[] = []
  infoReceived3: string[] = []
  employees: any;

  post: Observable<Post>

  text: string; /// form input val

  constructor(private sampleservice: SampleService, private store: Store<AppState>) {
    this.post = this.store.select('post')
  }

  ngOnInit() {
    this.sampleservice.getEmployees().subscribe(data => this.employees = data)
  }

  editText() {
    this.store.dispatch(new PostActions.EditText(this.text))
  }

  resetPost() {
    this.store.dispatch(new PostActions.Reset())
  }

  upvote() {
    this.store.dispatch(new PostActions.Upvote())
  }

  downvote() {
    this.store.dispatch(new PostActions.Downvote())
  }

  getInfoFromServiceClass1() {
    this.infoReceived1 = this.sampleservice.getinfo1()
  }
  getInfoFromServiceClass2() {
    this.infoReceived2 = this.sampleservice.getinfo2()
  }
  getInfoFromServiceClass3() {
    this.infoReceived3 = this.sampleservice.getinfo3()
  }

}
