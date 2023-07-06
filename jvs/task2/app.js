function inputdata(){
    var x = prompt("Enter four digits integer data");
    var ed="";
    if(x.length!==4){
        alert("Invalid input!Please enter four digit integer data");
        return;
    }
    var d1 = parseInt(x[0]);
    d1=(d1+7)% 10;
    var d2 = parseInt(x[1]);
    d2=(d2+7)% 10;
    var d3 = parseInt(x[2]);
    d3=(d3+7)% 10;
    var d4 = parseInt(x[3]);
    d4=(d4+7)% 10;
    
    var temp=d1;
    d1=d3;
    d3=temp;
    temp =d2;
    d2=d4;
    d4=temp;
     
    ed=d1.toString()+d2.toString()+d3.toString()+d4.toString();
    document.getElementById("test").innerHTML=ed;
}   

