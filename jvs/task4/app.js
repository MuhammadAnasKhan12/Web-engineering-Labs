var d1=document.getElementById("d1");

function vowel(){
    var x = prompt("Enter any character to check if it is a vowel or not" );
    if( x=="a"||x=="A"||x=="e"||x=="E"||x== "i"||x=="I"||x=="o"||x=="O"||x=="u"||x=="U"){
        d1.innerHTML= `<h3>${x} is a vowel`
    }
    else{
        d1.innerHTML=`<h3>${x} is a consonent</h3> `
    }
}
function random(){
    var x;
    var arr=[];
    for(let i=0;i<20;i++){
        arr.push(Math.ceil(Math.random()*1000))
    }
    d1.innerHTML=`${arr } <br>`

    
}