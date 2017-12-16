import { Component, Input, OnInit } from '@angular/core';
import { Class } from '../class.model';
import { ClassService } from '../class.service';


@Component({
  selector: 'app-edit-class',
  templateUrl: './edit-class.component.html',
  styleUrls: ['./edit-class.component.css'],
  providers: [ClassService]
})
export class EditClassComponent implements OnInit {
  @Input() selectedClass;

  constructor(private classService: ClassService) { }

  ngOnInit() {
  }

  beginUpdatingClass(classToUpdate){
    this.classService.updateClass(classToUpdate);
  }

  beginDeletingClass(classToDelete){
    if(confirm("Are you sure you want to delete this item from the inventory?")){
    this.classService.deleteClass(classToDelete);
  }
  }
}
