import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Profile } from './profile/profile';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Login, Signup, Profile],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  // protected readonly title = signal('angular-tut');
  // name = 'vaibhavi';

  // handleClick() {
  //   console.log('Button Clicked!');
  //   this.other();//always use this to call function
  // }
  // other() {
  //   console.log('other function');
  // }
  // //we cannot use var,let ot const to variable whose type is assigned 
  // //type define
  // //variableName: type = value;
  // //type can be string,number,boolean,array,object,any
  // //string
  // var1: string = 'vaibhavi';
  // //more than one type
  // var2: string | number = 123;
  // updateName() {
  //   this.name = 'vaibhavi roy';
  // }
  // //variables can be defined inside function
  // updateName1() {
  //   let name1 = 'vaibhavi roy';
  //   console.log(name1);
  // }

  // count: number = 0;

  // increment() {
  //   this.count++;
  // }
  // decrement() {
  //   this.count--;
  // }
  // reset() {
  //   this.count = 0;
  // }
  // handleCounter(val: string) {
  //   if (val === 'plus') {
  //     this.count = this.count + 1;
  //   }
  //   else if (val === 'minus') {
  //     this.count = this.count - 1;
  //   }
  //   else {
  //     this.count = 0;
  //   }
  // }

  //events
  // handleEvent(event: Event) {
  //   console.log('Button Clicked!', event.type);
  //   console.log('Button Clicked!', event.target);
  //   console.log('Button Clicked!', (event.target as HTMLButtonElement).innerText);
  //   console.log('Button Clicked!', (event.target as Element).classList);
  //   console.log('value', (event.target as HTMLInputElement).value);
  // }

  //   name = "";
  //   displayName = "";
  //   email = "";
  //   getName(event: Event) {
  //     const val = ((event.target as HTMLInputElement).value);
  //     this.name = val;
  //   }
  //   showName() {
  //     this.displayName = this.name;
  //   }
  //   setName() {
  //     this.name = "Roy";
  //   }
  //   getEmail(val: string) {
  //     console.log(val);
  //     this.email = val;
  //   }
  //   setEmail() {
  //     this.email = 'roy@gmail.com';
  //   }
  // display: boolean = true;
  // x = 10;
  // toggleDiv = false
  // toggle() {
  //   this.display = !this.display;
  // }
  // toggleTwo() {
  //   this.toggleDiv = !this.toggleDiv;
  // }
  // color = 2
  // handleColor(val: number) {
  //   this.color = val;
  // }
  // handleInput(event: Event) {
  //   this.color = parseInt((event.target as HTMLInputElement).value);
  // }

  color = 'white';
  handleColor(val: string) {
    this.color = val;
  }
  handleInput(event: Event) {
    this.color = (event.target as HTMLInputElement).value;
  }
}