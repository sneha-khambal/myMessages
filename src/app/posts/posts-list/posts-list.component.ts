import { Component, OnInit  } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts:Post[];
 constructor( public postService:PostsService){

 }
  ngOnInit(){
   this.posts =  this.postService.getPosts();
   this.postService.postUpdatdListener()
   .subscribe(
     (post:Post[])=>{
this.posts = post
     }
   )

  } 
  
}
