import { Component, Input  } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent  {
 
// posts=[
//   {
//     title:"first title",content:"this is the first post\' content"
//   },
//   {
//     title:"second title",content:"this is the second post\' content"
//   },
// ]
@Input() posts:Post[];
 
   
  
}
