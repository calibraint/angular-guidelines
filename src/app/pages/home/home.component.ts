import { Component, OnInit } from '@angular/core';
import { UserService } from '@appcore/apis/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
