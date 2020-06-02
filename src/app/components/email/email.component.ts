import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
// import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
  // animations: [moveIn(), fallIn()],
  // host: {'[@moveIn]': ''}
})
export class EmailComponent implements OnInit {

  state: string = '';
  error: any;
  email
  password

  constructor(
    public af: AngularFireAuth,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(formData) {
    if (formData.valid) {
      console.log(formData.value);
      this.af.auth.signInWithEmailAndPassword(
        formData.value.email,
        formData.value.password
      )
        .then(
          (success) => {
            console.log(success);
            this.router.navigate(['./dashboard'])
          }
        ).catch(
          (err) => {
            console.log(err);
            this.error = err
          }
        )
    }
  }

}
