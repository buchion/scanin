import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { moveIn, fallIn, moveInRight } from '../../router.animations';
// import { MatInput } from '@angular/material/input';
// import { MatFormField, MatError } from '@angular/material/form-field';


/** Error when invalid control is dirty, touched, or submitted. */
// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
// }

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  animations: [fallIn(), moveIn(), moveInRight()]
})
export class SignupComponent implements OnInit {

  state: string = '';
  error: any;
  email
  password

  // emailFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.email,
  // ]);

  // passwordFormControl = new FormControl('', [
  //   Validators.required,

  // ]);

  // matcher = new MyErrorStateMatcher();

  constructor(
    public af: AngularFireAuth,
    private router: Router) { }

  onSubmit(formData) {
    if (formData.valid) {
      console.log(formData.value.email, formData.value.password);
      this.af.auth.createUserWithEmailAndPassword(
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
      console.log(formData.value.email);

    }
  }

  ngOnInit() {
  }

}
