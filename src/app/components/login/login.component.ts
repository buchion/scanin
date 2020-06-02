import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

import { moveIn, moveInRight } from '../../router.animations';

import * as firebase from 'firebase';
import { AngularFireModule } from '@angular/fire';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [moveInRight()],
  // host: { '[@moveIn]': '' }
})
export class LoginComponent implements OnInit {

  error: any;
  show = false;

  constructor(
    public af: AngularFireAuth,
    private router: Router
  ) {
    // this.af.auth.subscribe(auth => {
    //   if(auth) {
    //     this.router.navigateByUrl('/dashboard')
    //   }
    // })

  }

  ngOnInit() {

  }

  loginFacebook() {
    this.af.auth.signInWithPopup(new firebase.auth.EmailAuthProvider())
      .then(
        () => {
          this.router.navigate(['/dashboard']);
        }
      )
      .catch(
        (err) => {
          this.error = err
        }
      )
  }

  loginGoogle() {
    this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(
        () => {
          this.router.navigate(['/dashboard']);
          console.log(this.af.auth.currentUser.displayName);

        }
      )
      .catch(
        (err) => {
          this.error = err
        }
      )
  }

  showform() {
    this.show = !this.show;
  }


}
