export class BankModel{
    public id:number;
    public name:string;
    public amount:number;
    public canDonate:boolean;
    public hasEnough:boolean;
    public arr = new Array;

    constructor(id, name, amount, canDonate, hasenought, arr){
        this.id = id;
        this.name = name;
        this.amount = amount;
        this.canDonate = canDonate;
        this.hasEnough = hasenought;
        this.arr = arr;
    }
}