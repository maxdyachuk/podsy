import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  loading: boolean;

  registrationForm = this.formBuilder.group({
    name: [undefined, [Validators.required]],
    email: [undefined, [Validators.required, Validators.email]],
    password: [undefined, [Validators.required,
    Validators.pattern('((?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,30})')]],
  });

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.loading = false;
  }

  onSubmit() {
    this.loading = true;
    this.userService.addUser(this.registrationForm.value).subscribe(
      res => this.loading = false,
      err => {
        this.loading = false;
        this.openSnackBar(err.error, 'Close');
      }
    );
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

}
