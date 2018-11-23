import { Component, OnInit } from '@angular/core';
import { BloodService } from '../shared/bloodBank.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public BloodService:BloodService){
  }

  ngOnInit() {
    
  }

}
