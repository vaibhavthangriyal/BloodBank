import { OnInit } from "@angular/core";
import { BankModel } from "../shared/blood.model"

export class BloodService implements OnInit{
    
    bloodType:BankModel[];
    selectedType:number;
    canSee:boolean;
    ap:number;
    bp:number;
    abp:number;
    op:number;
    an:number;
    bn:number;
    abn:number;
    on:number;    
    constructor(){
        this.bloodType = [
            {id:1, name:'A+', amount:this.ap, canDonate:false, hasEnough:false, arr:[0,3,4,7]},
            {id:2, name:'B+', amount:this.bp, canDonate:false, hasEnough:false, arr:[1,3,5,7]},
            {id:3, name:'AB+', amount:this.abp, canDonate:false, hasEnough:false, arr:[0,1,2,3,4,5,6,7]},
            {id:4, name:'O+', amount:this.op, canDonate:false, hasEnough:false, arr:[3,7]},
            {id:5, name:'A-', amount:this.an, canDonate:false, hasEnough:false, arr:[4,7]},
            {id:6, name:'B-', amount:this.bn, canDonate:false, hasEnough:false, arr:[5,7]},
            {id:7, name:'AB-', amount:this.abn, canDonate:false, hasEnough:false, arr:[4,5,6,7]},
            {id:8, name:'O-', amount:this.on, canDonate:false, hasEnough:false, arr:[7]}
          ];
    }
    ngOnInit(){
    
    }

    Ngclass(n){
        if(this.bloodType[n].canDonate ){
          return 'bg-success';
        }else if(!this.bloodType[n].canDonate) {
          return 'bg-danger';
        }
        else if(this.bloodType[n].canDonate && !this.bloodType[n].hasEnough ){
          console.log("here");
          return 'bg-info';
        }else{
          return 'bg-dark';
        }
      }

      dragEnd($event){
        
      }
}