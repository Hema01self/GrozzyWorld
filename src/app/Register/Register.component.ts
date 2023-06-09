import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ConfirmValidator } from '../confirmValidator';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css'],
})
export class RegisterComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private route: Router
  ) {}
  loginForm1 = this.fb.group(
    {
      username: ['',[Validators.required,Validators.pattern('^[A-Za-zs]{3,30}$'),Validators.min(3)]],
      emailid: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]],
      phone: ['', [Validators.required, Validators.pattern('[6-9]\\d{9}')]],
      password: ['',
        [
          Validators.required,
          Validators.pattern(
            /^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/
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
      this.route.navigate(['/', 'login']);
    });
  }
}
