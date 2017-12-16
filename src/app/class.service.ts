import { Injectable } from '@angular/core';
import { Class } from './class.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ClassService {
  classes:  FirebaseListObservable<any[]>;

  classId: string;
  classToDisplay: Class;

  constructor(private database: AngularFireDatabase) {
    this.classes = database.list('classes');
   }

  getClasses(){
    return this.classes;
  }

  getClassById(classId: string){
    return this.database.object('classes/' + classId);
  }

  addClass(newClass: Class){
    this.classes.push(newClass);
  }

  updateClass(localUpdatedClass){
    var classEntriesInFirebase = this.getClassById(localUpdatedClass.$key);
    classEntriesInFirebase.update({
      title: localUpdatedClass.title,
      description: localUpdatedClass.description,
      instructor: localUpdatedClass.instructor
    });
  }

  deleteClass(localAlbumToDelete){
    var classEntryInFirebase = this.getClassById(localAlbumToDelete.$key);
    classEntryInFirebase.remove();
  }
}
