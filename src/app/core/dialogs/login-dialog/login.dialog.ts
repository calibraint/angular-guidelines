import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.dialog.html',
  styleUrls: ['./login.dialog.scss']
})
export class LoginDialog implements OnInit {

  loading: boolean = false;
  constructor(public dialogRef: MatDialogRef<LoginDialog>) { }

  ngOnInit(): void {
  }

  login(): void {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.onSuccess();
    }, 3000);
  }

  onSuccess(): void {
    this.dialogRef.close('Success');
  }

  onCancel(): void {
    this.dialogRef.close('Cancel');
  }

}
