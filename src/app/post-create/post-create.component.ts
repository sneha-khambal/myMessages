import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  enteredValue = 'enter something';
 newPost = "no content ";
  constructor() { }

  ngOnInit() {
   
  }
  onAddPost(postInput ){
   this.newPost =  this.enteredValue ;
  }

}
