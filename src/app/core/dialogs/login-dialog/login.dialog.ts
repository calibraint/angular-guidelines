import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.dialog.html',
  styleUrls: ['./login.dialog.scss']
})
export class LoginDialog implements OnInit {

  constructor(public dialogRef: MatDialogRef<LoginDialog>) { }

  ngOnInit(): void {
  }

  onSuccess(): void {
    this.dialogRef.close('Success');
  }

  onCancel(): void {
    this.dialogRef.close('Cancel');
  }

}
