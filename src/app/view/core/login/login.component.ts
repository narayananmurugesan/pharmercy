import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SocketService } from '../../../service/socket.service';
import { ApiService } from '../../../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements Login,OnInit {

  public username: any;
  public password: any;
  public user = {};
  public data;
  constructor(private socketService:SocketService, private router: Router) { }

  ngOnInit() {
  }

  login(){
    if(this.user){
      // this.socketService.post(ApiService['login'].api,this.user).subscribe(data=>this.data);
      // console.log(this.data, 'data');
      this.router.navigate(['app/dashboard']);
    }
  }

}
export interface Login{
    username: any;
    password: any;
}