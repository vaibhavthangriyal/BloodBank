import { Component, OnInit } from '@angular/core';
import { BloodService } from '../shared/bloodBank.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-patient-record',
  templateUrl: './patient-record.component.html',
  styleUrls: ['./patient-record.component.css']
})
export class PatientRecordComponent implements OnInit {
  selectedType:number;
  requiredBottels:number;
  public arr = new Array;
  constructor(public bankService:BloodService) { }

  subject = new Subject<number>();

  ngOnInit() {
  }

  onSelect(value){
    this.reset();
    this.check(this.arr);

    switch(value){
      case value:this.arr = this.bankService.bloodType[value-1].arr;
              this.findDoner(this.arr);
      break;
    }
  }

  findDoner(arr){
    arr.forEach(value => {
      this.bankService.bloodType[value].canDonate = true;
    });
  }

  check(arr){
    this.bankService.Ngclass(arr);
    var asd = arr;
    console.log(asd);
    if(asd != null){
      asd.forEach(index => {
        if(this.requiredBottels <= this.bankService.bloodType[index].amount && this.requiredBottels !== null)
        {
          this.bankService.bloodType[index].hasEnough = true;
          console.log(this.bankService.bloodType[index].name+" can Donate "+
            this.bankService.bloodType[index].hasEnough);
        }
        else{
          this.bankService.bloodType[index].hasEnough = false;
          console.log(this.bankService.bloodType[index].name+" Does not have enought bottles");
        }
      }); 
    }  
  }

  reset(){
    for(var i=1;i<9;i++){
      this.bankService.bloodType[i-1].canDonate = false;
    }
  }

  dragEnd(sdf){
    this.bankService.bloodType[1].amount = this.bankService.bloodType[1].amount - this.requiredBottels;
  }

}
