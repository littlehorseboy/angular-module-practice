import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  counter = 0;

  data = [
    { a: 0, b: 0 },
    { a: 1, b: 1 },
    { a: 2, b: 2 },
  ];

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.counter += 1;
    }, 1000);
  }

  delete(value: any) {
    this.data = this.data.filter((item) => item !== value);
  }
}
