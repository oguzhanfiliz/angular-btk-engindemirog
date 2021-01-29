import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../services/account.service';


@Component({
  selector: 'app-leftsidebar',
  templateUrl: './leftsidebar.component.html',
  styleUrls: ['./leftsidebar.component.scss']
})
export class LeftsidebarComponent implements OnInit {

  constructor(private accountService:AccountService,private activatedRoute: ActivatedRoute) { }


  ngOnInit() {
  }
  isLoggedin(){
    return this.accountService.isLoggedIn();
  }
  logOut(){
    this.accountService.logOut();
  }

}
