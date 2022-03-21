import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { __importDefault } from 'tslib';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  @Input() parentData:string;
  @Input() home="resources";
  @Output() newHomeEvent = new EventEmitter<string>();
  @Output() public sendData = new EventEmitter<string>();

  ngOnInit() {
    this.sendData.emit('child data');
  }

  addNewHome(value:string){
    this.newHomeEvent.emit(value);
  }

}
