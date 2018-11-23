import { Component, OnInit } from '@angular/core';
import { BloodService } from '../shared/bloodBank.service';

@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.css']
})
export class BucketComponent implements OnInit {

  constructor(private service:BloodService) { }

  ngOnInit() {
  }

}
