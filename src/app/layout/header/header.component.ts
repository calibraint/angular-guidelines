import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginDialog } from '@appcore/dialogs/login-dialog/login.dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(LoginDialog, {
      width: '400px',
      maxHeight: '100%',
      maxWidth: '100%',
      disableClose: true
    }).afterClosed().subscribe((result: string) => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

