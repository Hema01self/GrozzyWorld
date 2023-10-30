import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) {

   }

  ngOnInit():void {
    setTimeout(() => {
      const popup = document.getElementById('popup');
      if (popup) {
        popup.style.display = 'block'; // Show the pop-up message after 30 minutes
      }
    }, 1000); 
  }
  closePopup(): void {
    const popup = document.getElementById('popup');
    if (popup) {
      popup.style.display = 'none'; // Hide the pop-up message when the close button is clicked
      // this.router.navigate(['/product'])
    }
  }
  grab(){
    this.router.navigate(['/product']);
  }


}
