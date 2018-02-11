import { Booking } from "./booking";
import { Item } from "ionic-angular/components/item/item";

export class Invoice {
    invoiceId: string;
    booking: Booking;
    items: Item[];
    tax: number;
    discount: number;
    amount: number;
    totalAmount: number;
    createdDate: string;
    updatedDate: string;
    status: string;
    constructor(invoiceId: string, booking: Booking, items: Item[], tax: number, discount: number, amount: number,
        totalAmount: number, createdDate: string, updatedDate: string, status: string) {

        this.invoiceId = invoiceId;
        this.booking = booking;
        this.items = items;
        this.tax = tax;
        this.discount = discount;
        this.amount = amount;
        this.totalAmount = totalAmount;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
        this.status = status;


    }
}