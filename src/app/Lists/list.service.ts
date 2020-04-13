import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { List } from './list.model';

@Injectable({providedIn: 'root'})
export class ListsService {
  private lists: List[] = [];
  private listsUpdated = new Subject<List[]>();

  getLists() {
    return [...this.lists];
  }

  getListUpdateListener(){
    return this.listsUpdated.asObservable()
  }

  addList(title: string, content: string) {
    const list: List = {title: title, content: content};
    this.lists.push(list);
    this.listsUpdated.next([...this.lists]);
  }
}
