import { Component, OnInit } from '@angular/core';
import { Class } from '../class.model';
import { Router } from '@angular/router';
import { ClassService } from '../class.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css'],
  providers: [ClassService]
})
export class ClassesComponent implements OnInit {

  classes: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private classService: ClassService) { }

  ngOnInit() {
    this.classes = this.classService.getClasses();
  }

  goToDetailPage(clickedClass){
    this.router.navigate(['classes', clickedClass.$key])
  }

}
