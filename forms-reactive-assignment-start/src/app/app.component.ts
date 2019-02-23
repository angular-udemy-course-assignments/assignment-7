import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectStatuses = ['Stable', 'Critical', 'Finished'];
  defaultStatus = this.projectStatuses[1];
  createForm: FormGroup;

  ngOnInit(): void {
    this.createForm = new FormGroup({
      'projectName': new FormControl(),
      'email': new FormControl(),
      'projectStatus': new FormControl(this.defaultStatus)
    });
  }


  onCreate() {
    console.log(this.createForm);
  }
}
