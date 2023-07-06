let property = [
    {"property_No":"A-113",
    "location": "Gulshan",
    "price" : 5000000,
    "owner": "Anas Khan"},

    {"property_No":"B-213",
    "location": "Clifton",
    "price" : 2400000,
    "owner": "Shahid"},
    
    {"property_No":"A-123",
    "location": "Bahadurabad",
    "price" : 7600000,
    "owner": "Ali"},
    
    {"property_No":"C-12",
    "location": "Johar",
    "price" : 5530000,
    "owner": "Abdullah"}
]


let details = property.map(test1);
document.write(details);
function test1(x){
    return x.owner+ " "+x.location+ " "+   x.property_No+" "+x.price +" "+'<br>';
}