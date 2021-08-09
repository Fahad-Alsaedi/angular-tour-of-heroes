import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  signMode = false;
  default = true;
  genders= ['male','female'];
  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    if(form.valid){
      console.log(form.value)
      const email = form.value.email
      console.log(email)
    }
    form.reset()
  }

  switchMode(){
    this.signMode = !this.signMode;
  }
}
