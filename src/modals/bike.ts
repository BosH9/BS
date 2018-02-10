export class Bike {
    Id : number;
    RegistrationModel: string;
    Model : string;
    Image : string;
    YearOfManufacture: number;
    CreatedDate:string;
    UpdatedDate :string;
    LastServicedOn:string;
    Status : string;
    constructor(id:number,regno:string,model:string,image:string,year:number,
        cdate:string,udate:string,status:string,lastServicedOn:string) {

        this.Id = id;
        this.RegistrationModel = regno;
        this.Model = model;
        this.Image = image;
        this.YearOfManufacture = year;
        this.CreatedDate = cdate;
        this.UpdatedDate = udate;
        this.Status = status;
        this.LastServicedOn = lastServicedOn;

    }

}