import { Component, } from '@angular/core';
//import { EventEmitter } from 'protractor';
import { NgForm } from '@angular/forms';
import { ListsService } from '../list.service';


@Component({
  selector: 'app-list-create',
  templateUrl: './list-create.component.html',
  styleUrls: ['./list-create.component.css']
})

export class ListCreateComponent {

 enteredTitle ='';
 enteredContent ='';

 constructor(public listsService: ListsService) {}

 onAddList(form: NgForm) {


  if (form.invalid){
    return;
  }
  this.listsService.addList(form.value.title, form.value.content);
  form.resetForm();
 }

}
