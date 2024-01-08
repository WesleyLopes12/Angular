import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {


  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  voltar(){
    this.router.navigate([''], { relativeTo: this.route });
  }

}
