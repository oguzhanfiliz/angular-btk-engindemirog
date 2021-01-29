import { Component } from '@angular/core';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private accountService:AccountService){}
  title = 'shop';
  isLoggedin(){
    //var logn = this.accountService.isLoggedIn();
   // console.log(logn);
    return this.accountService.isLoggedIn();
  }

  logOut(){
  //  var logn = this.accountService.isLoggedIn();
  //  console.log(logn);
    this.accountService.logOut();
  }

}
