import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef: any = this.dialog.open(LoginDialog, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

@Component({
  selector: 'login-dialog',
  templateUrl: './login-dialog.html',
})
export class LoginDialog {
}
