class calculator{
    constructor(length,breadth,height){
        this.length = length;
        this.breadth = breadth;
        this.height  = height;
    }
    calculateArea(){
        return this.length *this.breadth;
    }
    calculateVolume(){
        return this.length* this.breadth* this.height;
    }
    display(){
        let area1 = document.getElementById("area");
        area1.value = this.calculateArea();
        let volume1 = document.getElementById("volume");
        volume1.value = this.calculateVolume();
    }
}
let a  = new calculator(5,5,5,);
a.calculateArea();
a.display();
