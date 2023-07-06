function inputdata(){
    var x = prompt("Enter four digits integer data");
    var ed="";
    
    var temp=d3;
    d3=d1;
    d1=temp;
    temp =d4;
    d4=d2;
    d2=temp;

    var d1 = parseInt(x[0]);
    d1=(d1+3)%10;
    var d2 = parseInt(x[1]);
    d2=(d2+3)%10;
    var d3 = parseInt(x[2]);
    d3=(d3+3)%10;
    var d4 = parseInt(x[3]);
    d4=(d4+3)%10;
    
     
    ed=d1.toString()+d2.toString()+d3.toString()+d4.toString();
    document.getElementById("test").innerHTML=ed;
}   