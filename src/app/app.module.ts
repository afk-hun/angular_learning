import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesServices } from './courses.service';
import { SummaryPipe } from './summary.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CoursesServices
  ], 

  bootstrap: [AppComponent]
})
export class AppModule { }
