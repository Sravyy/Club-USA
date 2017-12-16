import { Component, OnInit } from '@angular/core';
import { Class } from '../class.model';
import { ClassService } from '../class.service';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ClassService]
})
export class AdminComponent implements OnInit {

  constructor(private classService: ClassService) { }

  ngOnInit() {
  }

  submitForm(title: string, description: string, instructor: string){
    var newClass: Class = new Class(title, description, instructor);
    this.classService.addClass(newClass);
  }



}
