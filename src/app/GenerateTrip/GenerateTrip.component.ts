//GenerateTrip.component.ts
import { Component, OnInit } from '@angular/core';
import { SharedService } from './../shared.service';
declare var $: any;
@Component({
  selector: 'app-map',
  templateUrl: './GenerateTrip.component.html',
  styleUrls: ['./GenerateTrip.component.css']
})
export class NotificationsComponent implements OnInit {

  constructor(private sharedService:SharedService) { }
  showNotification(from, align){
      const type = ['','info','success','warning','danger'];

      const color = Math.floor((Math.random() * 4) + 1);

      $.notify({
          icon: "GenerateTrip",
          message: "Welcome to <b>Material Dashboard</b> - a beautiful freebie for every web developer."

      },{
          type: type[color],
          timer: 4000,
          placement: {
              from: from,
              align: align
          },
      
      });
  }
  ngOnInit() {
  }
  clickMe(){
    this.sharedService.sendClickEvent();
  }
}
