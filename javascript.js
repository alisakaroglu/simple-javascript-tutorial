//Array & forEach ******************************
var sayilar = [32, 5, 8, 1, -9];

sayilar.forEach(function (sayi) {
    console.log("Sayılar : " + sayi);
});

//Switch case ******************************
var a = 5;
switch (a) {
    case 1:
        console.log("Case 1");
        break;
    case 2:
        console.log("Case 2");
        break;
    case 3:
        console.log("Case 3");
    default:
        console.log("default is working...");
        break;
}

//function ******************************

function set(a) {
    a *= 20;
    console.log("Set Function: " + a);
    return a;
}

var result = set(5);
console.log(result);

//Object ******************************

var obj = {
    fullName: "ali sakaroğlu",
    age: 27,
    phone: "+05368218656",
    lang: ["Nestjs", "Javascript", "Typescrip", "C++", "C#"],
    address: {
        neighborhood: "Çekmece",
        street: "110"
    },
    personInfo: function () {
        return this.fullName + " - " + this.age + " - " + this.lang + " - " + this.lang + " - " + this.address.neighborhood + " - " + this.address.street;
    }

};

console.log(obj.fullName + obj.phone + obj.lang[1]);
console.log(obj.lang);
console.log(obj.address.neighborhood);
console.log("Person Info:" + obj.personInfo());

//Object Create ******************************
var objCreate = new Object();

objCreate.fullName = "Ali Sakaroğlu";
objCreate.company = "Mbl Hightech Ltd.";
objCreate.personInfo = function () {
    return this.fullName + " - " + this.company;
};
console.log(objCreate.personInfo());

//Object Create in function (Constructor Pattern )

function ObjectCreate(fullName, age, phone) {
    this.fullName = fullName;
    this.age = age;
    this.phone = phone;
    this.personInfo = function () {
        return this.fullName + " - " + this.age + " - " + this.phone
    };
}

var obj1 = new ObjectCreate("Ali Sakaroğlu", 27, "05368218656");
var obj2 = new ObjectCreate("TestName", 35, "+955555555");

console.log(obj1.personInfo());
console.log(obj2.personInfo());