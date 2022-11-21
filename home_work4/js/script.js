/* задание 1 */
class Product{
   constructor(name,quantity,isBought){
      this.name=name;
      this.quantity=quantity;
      this.isBought=isBought;
   }
}
let product1=new Product("apple",3,false);
let product2=new Product("milk",1,true);
let product3=new Product("cheese",2,false);
let product4=new Product("bread",2,false);
let product5=new Product("tomato",2,true);
let shoppingList=[product1,product2,product3,product4,product5];
function showShopList(a){
   a.forEach(el =>console.log(el));
}
showShopList(shoppingList);

/* добавление нового продукта */
function addToShopList(a){
   let pr=shoppingList.find(item=>item.name==a.name);
   if (pr) pr.quantity+=a.quantity;
   else shoppingList.push(a);
}

/* сортировка */
function sortByStatus(){
   return (a,b)=>a.isBought>b.isBought? 1:-1;
}
console.log("сортировка по статусу(куплен-не куплен): ");
const shopListCopy=JSON.parse(JSON.stringify(shoppingList));
shopListCopy.sort(sortByStatus());
showShopList(shopListCopy);

console.log("добавление banana и milk: ");
addToShopList(Product={name:"banana",quantity:4,isBought:false});
addToShopList(Product={name:"milk",quantity:1, isBought:false});
showShopList(shoppingList);;

/* отметить купленный товар */
function changeStatus(a){
   let pr=shoppingList.find(item=>item.name==a);
   if(pr) pr.isBought=true;
}
changeStatus("bread");
console.log("товар bread купили: ");
showShopList(shoppingList);
console.log("---------------");

/* задание 2 */
class Item{
   constructor(name,amount,price){
      this.name=name;
      this.amount=amount;
      this.price=price;
   }
}
let item1=new Item("curd",1,95);
let item2=new Item("tea",2,115);
let item3=new Item("cucumber",2,30);
let item4=new Item("meat",1,348);
let item5=new Item("water",5,96);
let check=[item1,item2,item3,item4,item5];

/* распечатка чека на экран */
function showCheck(a){
   for (let i of a){
      console.log("название товара: "+i.name+"; количество: "+i.amount+"; цена за единицу: "+i.price);
   }
}
showCheck(check);

/* подсчёт общей суммы покупки */
function purchaseAmount(a){
   let sum=0;
   for (let i of a){
      sum+=i.amount*i.price;
   }
   return sum;
}
console.log("Общая сумма покупки="+ purchaseAmount(check));

/* поиск самой дорогой покупки в чеке */
function findMax(a){
   max=0;
   for (let i of a){
      if (max<(i.amount*i.price)) max=i.amount*i.price;
   }
   console.log("самая дорогая покупка в чеке: "+max);
}
findMax(check);

/* средняя стоимость одного товара в чеке */
function averageCostOfGoods(a){
   let sum=0;
   for (let i of a){
      sum+=i.price;
   }
   return sum/a.length;
}
console.log("средняя стоимость одного товара в чеке: "+averageCostOfGoods(check));
console.log("---------------");

/* задание 3 */
class Style{
   constructor(name,value){
      this.name=name;
      this.value=value;
   }
}
let styleArray=[];
let st1=new Style("color","blue");
let st2=new Style("font-size","25px");
let st3=new Style("background-color","yellow");
let st4=new Style("text-decoration","underline");
styleArray.push(st1);
styleArray.push(st2);
styleArray.push(st3);
styleArray.push(st4);

function outDoc(styleArray,a){
   document.write('<p style="');
   for (let i in styleArray){
      document.write(styleArray[i].name+':'+styleArray[i].value+'; ');
   }
   document.write('">'+a+'</p>');
}
outDoc(styleArray,"Здравствуй, мир!")
console.log("---------------");

/* задание 4 */
class Auditorium{
   constructor(name, numSeats, nameFaculty){
      this.name=name;
      this.numSeats=numSeats;
      this.nameFaculty=nameFaculty;
   }
}
class Group{
   constructor(name, numStudents, nameFaculty){
      this.name=name;
      this.numStudents=numStudents;
      this.nameFaculty=nameFaculty;
   }
}
let audit1=new Auditorium("AN45",15,"economic");
let audit2=new Auditorium("LK12",10,"economic");
let audit3=new Auditorium("LU11",20,"journalism");
let audit4=new Auditorium("B55",16,"sociology");
let audit5=new Auditorium("BF44",14,"mathematics");
let audit6=new Auditorium("C002",17,"journalism");
let audit7=new Auditorium("M629",11,"mathematics");
let audit8=new Auditorium("W121",19,"economic");
let auditArray=[audit1,audit2,audit3,audit4,audit5,audit6,audit7,audit8];

/* вывод на экран всех аудиторий */
function showAuditorium(a){
   a.forEach(el =>console.log(el));
}
showAuditorium(auditArray);

/* вывод на экран аудиторий для указанного факультета */
function showAuditForFaculty(a,b){
   console.log("аудитории для факультета "+b+":");
   for (let i of a){
      if(b==i.nameFaculty) console.log(i.name);
   }
}
showAuditForFaculty(auditArray,"economic");
showAuditForFaculty(auditArray,"mathematics");

/* вывод на экран аудиторий для указанной группы */
function showAuditForGroup(a,b){
   console.log(b);
   console.log("аудитории для группы "+b.name+":");
   for (let i of a){
      if((b.nameFaculty==i.nameFaculty)&&(b.numStudents<=i.numSeats)) console.log(i.name);
   }
}
let group1=new Group("1135A",19,"journalism");
showAuditForGroup(auditArray,group1);
let group2=new Group("2136C",14,"mathematics");
showAuditForGroup(auditArray,group2);

/* сортировка аудиторий по количеству мест */
function sortByNumSeats(){
   return (a,b)=>a.numSeats>b.numSeats? 1:-1;
}
console.log("сортировка по количеству посадочных мест: ");
const arrayCopy=JSON.parse(JSON.stringify(auditArray));
arrayCopy.sort(sortByNumSeats());
showAuditorium(arrayCopy);

/* сортировка аудиторий по названию */
function sortByName(){
   return (a,b)=>a.name>b.name? 1:-1;
}
console.log("сортировка по названию: ");
const arrayCopy2=JSON.parse(JSON.stringify(auditArray));
arrayCopy2.sort(sortByName());
showAuditorium(arrayCopy2);