export class Product {
    id?:number;
    url:string;
    name:string;
    price:number;
    description:string;
    amount:number;

    constructor(){
        this.url='';
        this.name='';
        this.price=0;
        this.description='';
        this.amount=0;
    }
}