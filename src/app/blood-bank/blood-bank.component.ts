import { Component, OnInit } from '@angular/core';
import { BloodService } from '../shared/bloodBank.service';
@Component({
  selector: 'app-blood-bank',
  templateUrl: './blood-bank.component.html',
  styleUrls: ['./blood-bank.component.css']
})
export class BloodBankComponent implements OnInit {
  canDonate:boolean;
  
  constructor( public BloodService:BloodService) {
   }

  ngOnInit() {
   
    }
  
    

}
