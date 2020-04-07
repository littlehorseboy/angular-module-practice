import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article-header',
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.scss']
})
export class ArticleHeaderComponent implements OnInit {
  @Input() item;
  @Output() delete = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteItem() {
    debugger;
    this.delete.emit(this.item);
  }
}
