import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  rooms = 1;
  adults = 1;
  children = 0;
  people = 1;
  roomDecDisabled = true;
  constructor() { }
 
  ngOnInit() {
  }
  increaseRooms(){
    if(this.rooms < 5){
      this.roomDecDisabled = false;
      this.rooms++;
      if(this.rooms > this.adults){
        this.adults++;
      }
    }
  }

  decrementRooms(){
    if(this.rooms > 1){
      this.rooms--;
      let people = this.adults + this.children;
      if( (people/4) > this.rooms){
        let subs = people % 4;
        if(subs < this.children){
          this.children -= subs;
        }
        else {
          this.adults -= (subs - this.children);
          this.children = 0;
        }
      }
    } else {
      this.roomDecDisabled = true;
    }
  }

  increaseAdults(){
    let people = this.adults + this.children;
    if(people < 20){
      this.adults++;
      people++;
      if((people/4) > this.rooms){
        this.increaseRooms();
      }
    } 
  }
  
  decreaseAdults(){
    if(this.adults > 1){
      this.adults--;
      if(this.adults < this.rooms){
        this.decrementRooms();
      }
    }
  }

  increaseChildren(){
    let people = this.adults + this.children;
    if(people < 20){
      this.children++;
      people++;
      if((people/4) > this.rooms){
        this.increaseRooms();
      }
    } 
  }
  
  decreaseChildren(){
    if(this.children > 0){
      this.children--;
    }
  }

}
