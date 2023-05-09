import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-About',
  templateUrl: './About.component.html',
  styleUrls: ['./About.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  productcount:number=0;
  productcountstop:any=setInterval(()=>{
    this.productcount++;
    if(this.productcount==900){
      clearInterval(this.productcountstop)
    }
  },10)


  clientcount:number=0;
  clientcountstop:any=setInterval(()=>{
    this.clientcount++;
    if(this.clientcount==500){
      clearInterval(this.clientcountstop)
    }
  },10)

  awardcount:number=0;
  awardcountstop:any=setInterval(()=>{
    this.awardcount++;
    if(this.awardcount==50){
      clearInterval(this.awardcountstop)
    }
  },10)

  staffcount:number=0;
  staffcountstop:any=setInterval(()=>{
    this.staffcount++;
    if(this.staffcount==100){
      clearInterval(this.staffcountstop)
    }
  },10)
   }

