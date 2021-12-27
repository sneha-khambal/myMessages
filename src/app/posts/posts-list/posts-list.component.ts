import { Component, OnDestroy, OnInit  } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit, OnDestroy {
  posts:Post[];
  postSub :Subscription;
 constructor( public postService:PostsService){

 }
  
  ngOnInit(){
   this.posts =  this.postService.getPosts();
  this.postSub= this.postService.postUpdatdListener()
   .subscribe(
     (post:Post[])=>{
this.posts = post
     }
   )

  
  } 
  
  ngOnDestroy(){
    this.postSub.unsubscribe()
 
  }

  
}
