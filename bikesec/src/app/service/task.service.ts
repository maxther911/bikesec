import { Injectable } from '@angular/core';
import { 
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument 
} from '@angular/fire/firestore';

import { Task } from '../models/task';

import { Observable } from 'rxjs';

@Injectable()
export class TaskService {
  private tasksCollection: AngularFirestoreCollection<Task>;
  tasks: Observable<Task[]>;
  taskDoc: AngularFirestoreDocument<Task>;

  constructor(public afs:AngularFirestore) {
    this.tasksCollection = this.afs.collection('tasks');
    // this.tasks = this.afs.collection('tasks').valueChanges();
    this.tasks = this.tasksCollection.valueChanges();
  }

  getTasks() {
    return this.tasks; 
  }

  addTask(task: Task) {
    this.tasksCollection.add(task);
  }

  deleteTask(task: Task) {
    this.taskDoc = this.afs.doc(`tasks/${task.id}`);
    this.taskDoc.delete();
  }

  updateTask(task: Task) {
    this.taskDoc = this.afs.doc(`tasks/${task.id}`);
    this.taskDoc.update(task);
  }
}
