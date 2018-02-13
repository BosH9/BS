import { Bike } from "./bike";

export class Booking {

    bookingId:string;
    bike:Bike;
    bookingDate:string;
    deliveryDate:string;
    rating:number;
    amount:number;

    invoiceId:string;

    createdDate:string;
    updatedDate:string;
    status:string;

    deliveryStatus:string;

    constructor(bookingId:string,bike:Bike,bookingDate:string,deliveryDate:string,rating:number,
        amount:number,invoiceId:string,createdDate:string,updatedDate:string,status:string
    ,deliveryStatus:string) {
        
            this.bookingId=bookingId;
            this.bike=bike;
            this.bookingDate=bookingDate;
            this.deliveryDate=deliveryDate;
            this.rating=rating;
            this.amount=amount;
            this.invoiceId=invoiceId;
            this.createdDate=createdDate;
            this.updatedDate=updatedDate;
            this.status=status;
            this.deliveryStatus=deliveryStatus;

    }
}