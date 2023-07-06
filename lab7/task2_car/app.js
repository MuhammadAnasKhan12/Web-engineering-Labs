let output= document.getElementById("box");
class Car{
    constructor(brandName,priceNew,color,odometer){
        this.bname= brandName;
        this.price= priceNew;
        this.color= color;
        this.odometer = odometer;
    }
    getPriceAfterUse(){
        let newprice = this.price*(1-this.odometer/600000);
        return newprice;
    }

    updateMilage(traveledDistance){
        this.td =traveledDistance;
        this.odometer+=this.td;
        return this.odometer;
    }
    outputDetails(){
        let dis = document.getElementById("box");
        let previous = dis.innerHTML;
        let new1 =`<p>Brand Name: ${this.bname}</p>
        <p>Price New: $${this.price}</p>
        <p>Price Used: $${this.getPriceAfterUse()}</p>
        <p>Color: ${this.color}</p>
        <p>Odometer: ${this.odometer} km</p><hr>`;
        dis.innerHTML = previous+new1;


    }
}
let a = new Car("Honda",5000000,"Red",5000);
a.outputDetails();
a.updateMilage(1000);
a.outputDetails();



let b = new Car("Civic",1000000,"Red",50000);
b.outputDetails();
b.updateMilage(1000);




