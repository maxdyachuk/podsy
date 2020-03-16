import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  loading: boolean;

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private authService: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
    this.loading = false;
    this.loginForm = this.formBuilder.group({
      email: [undefined, [Validators.required, Validators.email]],
      password: [undefined, [Validators.required]],
    });
  }

  onSubmit() {
    this.loading = true;
    console.log(this.loginForm.get('email').value);
    console.log(this.loginForm.get('password').value);
    this.authService.authenticate(this.loginForm.get('email').value, this.loginForm.get('password').value).subscribe(
      data => {
        this.loading = false;
        this.router.navigate(['subscriptions']);
      },
      error => {
        this.loading = false;
        this.openSnackBar(error.error.error, 'Close');
      });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

}
