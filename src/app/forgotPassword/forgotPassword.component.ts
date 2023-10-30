import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-forgotPassword',
  templateUrl: './forgotPassword.component.html',
  styleUrls: ['./forgotPassword.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  resetForm: FormGroup;
  errorMessage: string | undefined;
  detail:any;
  successMessage: string | undefined;
  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.resetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
   }

  ngOnInit() {
  }
  resetPassword() {
    if (this.resetForm.invalid) {
      return;
    }
    const email = this.resetForm.get('email')?.value;
    this.http.get<any[]>(environment.getUserDetail, {params: {email}}).subscribe(
      (users)=>{
        if(users.length===0){
          this.errorMessage='Email not found';

        }
        else{
          this.detail=users;
          console.log(this.detail);
          this.resetForm.reset();
        }
      },
      (error) => {
        this.errorMessage = 'Error occurred. Please try again.';
      }
    );
  }


}
