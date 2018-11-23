import { Component, OnInit, ViewChild } from '@angular/core';
import { BloodService } from '../shared/bloodBank.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  @ViewChild('BankForm') BankForm:NgForm;

  constructor(public Bloodservice:BloodService) { }

  ngOnInit() {

  }
  onSubmit(form:NgForm){
    this.Bloodservice.bloodType[0].amount = form.value.ap;
    this.Bloodservice.bloodType[1].amount = form.value.bp;
    this.Bloodservice.bloodType[2].amount = form.value.abp;
    this.Bloodservice.bloodType[3].amount = form.value.op;
    this.Bloodservice.bloodType[4].amount = form.value.an;
    this.Bloodservice.bloodType[5].amount = form.value.bn;
    this.Bloodservice.bloodType[6].amount = form.value.abn;
    this.Bloodservice.bloodType[7].amount = form.value.on;
    this.Bloodservice.canSee = true;
    }
}
