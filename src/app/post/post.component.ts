import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  postsData:any = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getAlllPosts().subscribe((data: any) => {
      console.log('>>> check data: ', data);
      this.postsData = data;
    });
  }
}
