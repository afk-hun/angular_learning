import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
  categories = [
    { id: 1, name: "Cat1" },
    { id: 1, name: "Cat2" },
    { id: 1, name: "Cat3" },
    { id: 1, name: "Cat4" },
  ];
  constructor() { }

  ngOnInit() {
  }
  submit(value){
    console.log(value);
    
  }
}
