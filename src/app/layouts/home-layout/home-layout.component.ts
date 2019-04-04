import { Component, OnInit } from '@angular/core';
import { UserService } from '@app/core/apis/users.api';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})
export class HomeLayoutComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe((data: any) => {
      console.log(data);
      localStorage.setItem('token', data.token);
    }, (err: any) => {
      console.log(err);
    });
  }

}
