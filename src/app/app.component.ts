import { Component, OnInit } from '@angular/core';
import { SocketService } from './service/socket.service';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public list: any;
  public id: number = 3;
  public error: any;
  
  constructor(private socketService: SocketService){}
  get(){
   return this.socketService.get(ApiService['employee'].api,this.id).subscribe(data=>this.list = data, error=>this.error);
  }

  ngOnInit(){
    this.get();
  }
}
