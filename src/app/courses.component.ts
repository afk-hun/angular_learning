import { Component } from '@angular/core';
import { CoursesServices } from './courses.service';

@Component({
    selector: 'courses',
    template: ` <h2>{{ "Title: " + title }}</h2> 
                <br>
                <ul>
                    <li *ngFor="let course of courses">
                    {{ course }}
                    </li>
                </ul> 

                <img src="{{ imageURL }}"/>
                <br/>
                <button class="btn btn-primary" [class.active]="isActive"
                        (click)="onSave($event)"> Save </button>
                <br/>
                <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
                <br/>
                {{course.title | uppercase}} <br/>
                {{course.students | number}} <br/>
                {{course.rating | number: '1.2-2'}} <br/>
                {{course.price | currency:'EUR':true:'3.2-2'}} <br/>
                {{course.releaseDate | date:'shortDate'}} <br/>
                {{text | summary:10}}
              ` 
})

export class CoursesComponent {
    title = "List of courses"
    courses;
    imageURL = "http://lorempixel.com/400/200";
    isActive = false;
    email = "asd@asd.asd"
    text = `vpkdsj bok;a fsdjnbk'an fbo'fanbo ;hbnosjbp sadjbapos jhgbajbvapb hjafbjap'gjbpabjepbjpf`;

    course = {
        title: "The Complete Angular Course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1)
    }

    onSave($event) {
        console.log("click", $event);
    }

    onKeyUp() {
        console.log(this.email);
    }

    constructor(service: CoursesServices) {
        //let service = new CoursesServices();
        this.courses = service.getCourses();
    }
}