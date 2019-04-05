import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginDialog } from '@appcore/dialogs/login-dialog/login.dialog';
import { AuthenticationService } from '@appcore/authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  name: string;

  @Input() isLoggedIn: boolean = false;

  constructor(public dialog: MatDialog,
              private authenticationService: AuthenticationService,
              private router: Router) {}

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

  logout(): void {
    this.authenticationService.logout().subscribe(() => {
      this.router.navigate(['/login']);
    });
  }

}

