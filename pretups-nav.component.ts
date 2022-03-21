import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClient } from "@angular/common/http";
import * as data from "fetchUserList.json";
import { Observable } from 'rxjs';
import userData from 'src/app/assets/user.json';

interface User {  
    userName: String;  
    msisdn: String;  
    userID: String;  
    loginID: String; 
    userNameMsisdn: String; 
  }

@Component({
  selector: 'app-pretups-nav',
  templateUrl: './pretups-nav.component.html',
  styleUrls: ['./pretups-nav.component.scss']
})
export class PretupsNavComponent  {
    // collapsed = true;

    // toggleCollapsed(): void {
    //   this.collapsed = !this.collapsed;
    // }
  // userData:{userName: String,  msisdn: String,  userID: String,  loginID: String, userNameMsisdn: String}[]=userData;
  // userData:any=[
  //   {userName:'jackSparrow',msisdn:'NA',userID:'NGD0000066753',loginID:'jackteststaff',userNameMsisdn:'jackSparrow (NA)'},
  //   {userName:'rarya_staff',msisdn:'72147852369',userID:'NGD0000002762',loginID:'rarya_staff',userNameMsisdn:'rarya_staff (72147852369)'},
  //   {userName:'staff',msisdn:'123457689',userID:'NGD0000002781',loginID:'staff',userNameMsisdn:'staff (123457689)'},
  //   {userName:'staffbal',msisdn:'9697078284',userID:'NGD0000002782',loginID:'staffbj',userNameMsisdn:'staffbal (9697078284)'},
  //   {userName:'ydsitStaffNew',msisdn:'NA',userID:'NGD0000057883',loginID:'ydsitStaffNew',userNameMsisdn:'ydsitStaffNew (NA)'}
  // ]
  userLists:User[];  
  title = 'chart-filter';
  lessThanOrGreaterThan = 'lessThan';
  filterLimit = 100;
  barChart;
  levelsArr = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug'];
  months = [{month: 'Jan', value: '0'},
  {month: 'Feb', value: '1'},
  {month: 'Mar', value: '2'},
  {month: 'Apr', value: '3'},
  {month: 'May', value: '4'},
  {month: 'Jun', value: '5'},
  {month: 'Jul', value: '6'},
  {month: 'Aug', value: '7'}];

  from = '0';

  toMonth = '7';

  chartData = {
    "dataSet1" : Array.from({ length: 8 }, () => Math.floor(Math.random() * 590) + 10),
    "dataSet2" : Array.from({ length: 8 }, () => Math.floor(Math.random() * 590) + 10)
  };
  products: any = [];
  http: any;
  users:User[]=userData;
  constructor(private httpClient: HttpClient){}
  ngOnInit() {
    
    this.httpClient.get("assets/fetchUserList.json").subscribe(data =>{
      console.log(data);
      this.products = data;
    }),
    
    this.barChart = new Chart('bar', {
      type: 'bar',
      options: {
        responsive: true,
        title: {
          display: false,
          text: ''
        },
      },
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug'],
        datasets: [
          {
            type: 'bar',
            label: 'past',
            data: this.chartData.dataSet1,
            backgroundColor: 'rgba(20,200,10,0.4)',
            borderColor: 'rgba(20,200,10,0.4)',
            fill: false,
          }, {
            type: 'bar',
            label: 'current',
            data: this.chartData.dataSet2,
            backgroundColor: 'rgba(100,189,200,0.4)',
            borderColor: 'rgba(100,189,200,0.4)',
            fill: false,
          }
        ]
      }
    });
    
  }
  currentHome="About";

  home=['user','email','about','mobile'];
  enterName="ramya";
  parentData="";
  value="";
  addHome(newHome:string){
    this.home.push(newHome);
  }
  TransferData(){
        this.parentData = this.enterName;
  }

  sendData(){
    this.value=this.value;
  }
  removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
      dataset.data.pop();
    });
    chart.update();
  }

  updateChartData(chart, data, dataSetIndex) {
    chart.data.datasets[dataSetIndex].data = data;
    chart.update();
  }

  applyFilter(value){
    //console.log(this.chartData.dataSet1);
    this.barChart.data.datasets[0].data = this.chartData.dataSet1;
    this.barChart.data.datasets[1].data = this.chartData.dataSet2;

    this.barChart.data.datasets.forEach((data,i) => {
      if(this.lessThanOrGreaterThan === 'greaterThan'){
        this.barChart.data.datasets[i].data = data.data.map(v => {
          if(v >= value) return v
          else return 0;
        });
       // console.log(">>>>>>>>", this.barChart.data.datasets[i].data);
      }else{
        this.barChart.data.datasets[i].data = data.data.map(v => {
          if(v <= value) return v;
          else return 0;
        });
        //console.log("?????????", this.barChart.data.datasets[i].data);
      }
    });
    this.barChart.update();
  }

  applyDateFilter(){
    this.barChart.data.labels = this.levelsArr.slice(parseInt(this.from), parseInt(this.toMonth) + 1);
    this.barChart.update();
  }

  public getJSON(): Observable<any> {
    return this.http.get("./assets/fetchUserList.json");
}

}
