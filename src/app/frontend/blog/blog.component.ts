import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

// providers
import { BlogService } from '../../providers/blog.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogList: any;
  blogHeading: string = 'Blog';
  pageTitle: string = 'Blog';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blog: BlogService,
    private title: Title
  ) {
  }

  ngOnInit() {
    this.title.setTitle(this.pageTitle);
    this.getBlogList();
  }

  getBlogList() {
    this.blog.getBlogList()
      .subscribe(
      data => {
        this.blogList = data;
        console.log(data);
      },
      error => {
        console.error(error);
      });
  }
}
