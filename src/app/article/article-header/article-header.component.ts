import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-article-header',
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.scss']
})
export class ArticleHeaderComponent implements OnInit, OnChanges {
  @Input() counter;

  @Input() item;
  @Output() delete = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnChanges(): void {
    console.log('ngOnChanges');
  }

  deleteItem() {
    this.delete.emit(this.item);
  }
}
