import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-About',
  templateUrl: './About.component.html',
  styleUrls: ['./About.component.css']
})
export class AboutComponent implements OnInit {
private count = environment.count;

  constructor() { }

  ngOnInit() {
  }
  productcount:number=this.count;
  productcountstop:any=setInterval(()=>{
    this.productcount++;
    if(this.productcount==900){
      clearInterval(this.productcountstop)
    }
  },10)


  clientcount:number=this.count;
  clientcountstop:any=setInterval(()=>{
    this.clientcount++;
    if(this.clientcount==500){
      clearInterval(this.clientcountstop)
    }
  },10)

  awardcount:number=this.count;
  awardcountstop:any=setInterval(()=>{
    this.awardcount++;
    if(this.awardcount==50){
      clearInterval(this.awardcountstop)
    }
  },10)

  staffcount:number=this.count;
  staffcountstop:any=setInterval(()=>{
    this.staffcount++;
    if(this.staffcount==100){
      clearInterval(this.staffcountstop)
    }
  },10)
   }

