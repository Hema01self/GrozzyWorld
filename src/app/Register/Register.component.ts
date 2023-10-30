import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ConfirmValidator } from '../confirmValidator';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { NGXLogger } from 'ngx-logger';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css'],
})
export class RegisterComponent implements OnInit {
  public logDetail=environment.logDetail;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private route: Router,
    private logger:NGXLogger,
    private http:HttpClient
  ) {}
  loginForm1 = this.fb.group(
    {
      username: ['',[Validators.required,Validators.pattern('^(?!.*(.)(?:.*\\1){2})[a-zA-Z]*$'),Validators.minLength(3)]],
      emailid: ['', [Validators.required, Validators.pattern('^(?![0-9]+@)([a-z0-9_.-]{4,20})@([a-z_]{2,7})\\.([a-z]{2,5})(\\.[a-z]{2,5})?$')]],
      phone: ['', [Validators.required, Validators.pattern('[6-9]\\d{9}')]],
      password: ['',
        [
          Validators.required,
          Validators.pattern(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&]).{8,}$/
          ),
        ],
      ],
      cpassword: ['', [Validators.required]],
    },
    { validator: ConfirmValidator('password', 'cpassword') }
  );
  username: any = '';
  emailid: any = '';
  phone: any = '';
  password: any = '';
  cpassword: any = '';

  ngOnInit() {

  }
  submitForm() {

    var body = {
      uname: this.username,
      email: this.emailid,
      phoneno: this.phone,
      pword: this.password,
      cword: this.cpassword,
    };
    this.userService.addUserInfo(body).subscribe((data) => {
      alert('Registered Successfully');
      this.loginForm1.reset();

// storing data
const logData ={
  message:`Registered Successfully:${this.loginForm1.value.emailid}`,
  level:'INFO',
  timestamp:new Date().toLocaleString()
}
this.logger.error(logData.message);
this.http.post(this.logDetail,logData).subscribe({
})

      this.route.navigate(['/', 'login']);
    });
  }
}
