import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-ablak',
  templateUrl: './login-ablak.component.html',
  styleUrls: ['./login-ablak.component.css']
})
export class LoginAblakComponent implements OnInit {
  
  public labelUsername:string ="Felhasználónév:"
  public labelPassword:string ="Jelszó:"
  public labelSubmit:string ="Bejelentkezés"
  public labelReset:string ="Adatok törlése"
  public username:string = "Kovi Hari";
  public password:string = "";
  public error:string="";

  public loggedin:boolean=false;


  constructor() { 
    
  }
  
  ngOnInit(): void {
    this.labelUsername="Username:"
    this.labelPassword="Password:"
    this.labelSubmit="Submit"
    this.labelReset ="Reset"
  }
  logout(){
    this.loggedin=false;
    this.error="";
    this.password="";
  }



  kattint() {
    this.error="";
    this.loggedin=false;
    if (this.username=="admin" && this.password=="123") {
      this.loggedin=true;
    }
    else
    this.error=("Hibás felhasználónév v jelszo");
  }
}
