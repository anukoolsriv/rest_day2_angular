import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'pnr-component',
  template:`
    <form (ngSubmit)="check()">
    Enter PNR no:<input [(ngModel)]=pnrNo name="pnrNo"/>
    <button type="submit" >Show Status</button>
    </form>
    <div *ngIf="data">
        <p>{{value}}</p>
    </div>
  `

  })
export class PnrComponent {
    pnrNo : number;
    value:any;
    data:any;
    passengers:any;
    
    //DI
    //Actually communication with some server/rest api
    //should be done in Service Class
    //HttpClient is the name of angular's ajax API
    constructor(private http:HttpClient){

    }
    check(){
        // alert("Eye to Eye")
        //alert(this.pnrNo)
        var url="http://localhost:9090/RestDemo/app/pnr?pnrNo=" + this.pnrNo;
        this.http.get(url).subscribe(response => {
            // alert(JSON.stringify(response));
            // let val = JSON.stringify(response);
            this.data = response;
            // this.value = response['travelDate'];
            this.value = this.data.travelDate;
            this.passengers = this.data.passengers;
        })

    }
}



    // <div *ngFor="for val in passengers">
    // <p>{{val}}</p>
    // </div>