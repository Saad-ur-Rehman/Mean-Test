import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { List } from '../list.model';
import { ListsService } from '../list.service';



@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  //lists = [
   // { title: "First List", content: "This is the First post's content" },
   // { title: "second List", content: "This is the second post's content" },
   // { title: "third List", content: "This is the third post's content" },
//  ];
 lists: List[] = [];
 private listsSub: Subscription;

  constructor(public listsService: ListsService) { }

  ngOnInit() {

    this.lists = this.listsService.getLists();
    this.listsService.getListUpdateListener()
    .subscribe((lists: List[]) => {
      this.lists = lists;
    });
  }
  ngOnDestroy() {

    this.listsSub.unsubscribe();
  }
}
