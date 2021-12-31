import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularWindows';
  public getScreenWidth?:number;
  public getScreenHeight?:number;

  ngOninit(){
    this.getScreenHeight = window.innerWidth;
    this.getScreenWidth = window.innerHeight;
  }

    @HostListener('window:resize',['$event'])
      onWindowResize(){
        this.getScreenWidth = window.innerWidth;
        this.getScreenHeight = window.innerHeight;
      }
  
}
