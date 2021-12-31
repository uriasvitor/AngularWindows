import { Component } from "@angular/core";

@Component({
    selector:'wall',
    templateUrl:'./wall.component.html',
    styleUrls:['./wall.component.css']
})
export class wallComponent{
    getUrl(){
        return "url('http://estringsoftware.com/wp-content/uploads/2017/07/estring-header-lowsat.jpg')";
    }
}