import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectStatuses = ['Stable', 'Critical', 'Finished'];
  defaultStatus = this.projectStatuses[1];
  createForm: FormGroup;
  blackListName = 'Test';

  ngOnInit(): void {
    this.createForm = new FormGroup({
      'projectName': new FormControl(
        null,
        [Validators.required],
        this.forbiddenNamesAsync.bind(this)),
      'email': new FormControl(
        null,
        [Validators.required, Validators.email]),
      'projectStatus': new FormControl(this.defaultStatus)
    });

    this.createForm.statusChanges.subscribe((status) => console.log(status));
  }


  onCreate() {
    console.log(this.createForm.value);
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (control.value === this.blackListName) {
      return {'nameIsForbidden': true};
    }
    return null;
  }

  forbiddenNamesAsync(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === this.blackListName) {
          resolve({'nameIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1000);
    });
    return promise;
  }
}
