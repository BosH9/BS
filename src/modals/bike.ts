export class Bike {
    id : number;
    registrationModel: string;
    model : string;
    image : string;
    yearOfManufacture: number;
    createdDate:string;
    updatedDate :string;
    lastServicedOn:string;
    status : string;
    constructor(id:number,regno:string,model:string,image:string,year:number,
        cdate:string,udate:string,status:string,lastServicedOn:string) {

        this.id = id;
        this.registrationModel = regno;
        this.model = model;
        this.image = image;
        this.yearOfManufacture = year;
        this.createdDate = cdate;
        this.updatedDate = udate;
        this.status = status;
        this.lastServicedOn = lastServicedOn;

    }

}