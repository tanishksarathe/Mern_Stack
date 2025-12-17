console.log("Hello");

const arr1 = [1,2,3,4];
const arr2 = [5,6,7,8];

const arr3 = arr1.concat(arr2);

// console.log(arr3);

const obj1 = {
    name : "Tanishk",
    age : 23
}

const obj2 = {
    name1 : "Aryan",
    age1 : 20
}

const obj3 = Object.assign({}, obj1, obj2)

// console.log(obj3);


// console.table([obj1.age, obj1.name, obj2.age1, obj2.name1]);


// --------------------------------------------------------------------

// Loops in js 

const data = [{
  "user_id": 1,
  "username": "alaker0",
  "first_name": "Allys",
  "last_name": "Laker",
  "email": "alaker0@time.com",
  "gender": "Agender",
  "birthdate": "1/15/1989",
  "address": "47 Bartillon Park",
  "city": "Santiago",
  "country": "Philippines"
}, {
  "user_id": 2,
  "username": "cplumtree1",
  "first_name": "Christos",
  "last_name": "Plumtree",
  "email": "cplumtree1@netlog.com",
  "gender": "Male",
  "birthdate": "12/14/1980",
  "address": "9 Dwight Way",
  "city": "Shiroi",
  "country": "Japan"
}, {
  "user_id": 3,
  "username": "eorrom2",
  "first_name": "Ewell",
  "last_name": "Orrom",
  "email": "eorrom2@networkadvertising.org",
  "gender": "Male",
  "birthdate": "6/13/1961",
  "address": "587 Hauk Lane",
  "city": "Fenglu",
  "country": "China"
}, {
  "user_id": 4,
  "username": "ahagger3",
  "first_name": "Alyss",
  "last_name": "Hagger",
  "email": "ahagger3@hp.com",
  "gender": "Female",
  "birthdate": "9/9/1970",
  "address": "582 Anthes Park",
  "city": "Diepsloot",
  "country": "South Africa"
}, {
  "user_id": 5,
  "username": "dpaulo4",
  "first_name": "Dru",
  "last_name": "Paulo",
  "email": "dpaulo4@rambler.ru",
  "gender": "Female",
  "birthdate": "1/3/1983",
  "address": "0 Sugar Drive",
  "city": "Roanoke",
  "country": "United States"
}, {
  "user_id": 6,
  "username": "ggration5",
  "first_name": "Gabriello",
  "last_name": "Gration",
  "email": "ggration5@dyndns.org",
  "gender": "Male",
  "birthdate": "5/29/1985",
  "address": "7 Hermina Alley",
  "city": "Batan",
  "country": "China"
}, {
  "user_id": 7,
  "username": "eleacy6",
  "first_name": "Edgard",
  "last_name": "Leacy",
  "email": "eleacy6@jiathis.com",
  "gender": "Male",
  "birthdate": "10/6/1991",
  "address": "32 Northland Trail",
  "city": "Ad Dimnah",
  "country": "Yemen"
}, {
  "user_id": 8,
  "username": "gpicard7",
  "first_name": "Gaylord",
  "last_name": "Picard",
  "email": "gpicard7@businessinsider.com",
  "gender": "Male",
  "birthdate": "10/28/1976",
  "address": "56 Maple Wood Terrace",
  "city": "Aserrí",
  "country": "Costa Rica"
}, {
  "user_id": 9,
  "username": "acawt8",
  "first_name": "Annalise",
  "last_name": "Cawt",
  "email": "acawt8@ebay.com",
  "gender": "Female",
  "birthdate": "2/20/1974",
  "address": "62692 Loftsgordon Point",
  "city": "Jinjiang",
  "country": "China"
}, {
  "user_id": 10,
  "username": "ogoacher9",
  "first_name": "Olive",
  "last_name": "Goacher",
  "email": "ogoacher9@toplist.cz",
  "gender": "Female",
  "birthdate": "5/3/1973",
  "address": "3137 Almo Junction",
  "city": "Nyandoma",
  "country": "Russia"
}, {
  "user_id": 11,
  "username": "mkanna",
  "first_name": "Melina",
  "last_name": "Kann",
  "email": "mkanna@alexa.com",
  "gender": "Female",
  "birthdate": "9/22/1984",
  "address": "33 Michigan Road",
  "city": "Kiernozia",
  "country": "Poland"
}, {
  "user_id": 12,
  "username": "whessingb",
  "first_name": "Wildon",
  "last_name": "Hessing",
  "email": "whessingb@dedecms.com",
  "gender": "Male",
  "birthdate": "3/22/1988",
  "address": "8 Welch Lane",
  "city": "Florestópolis",
  "country": "Brazil"
}, {
  "user_id": 13,
  "username": "dwibrowc",
  "first_name": "Dilly",
  "last_name": "Wibrow",
  "email": "dwibrowc@sogou.com",
  "gender": "Male",
  "birthdate": "3/17/1989",
  "address": "98334 Stephen Park",
  "city": "Omaha",
  "country": "United States"
}, {
  "user_id": 14,
  "username": "rricioppod",
  "first_name": "Ruby",
  "last_name": "Ricioppo",
  "email": "rricioppod@psu.edu",
  "gender": "Male",
  "birthdate": "9/11/1952",
  "address": "5 Monterey Alley",
  "city": "Sam Phran",
  "country": "Thailand"
}, {
  "user_id": 15,
  "username": "bbecarise",
  "first_name": "Burton",
  "last_name": "Becaris",
  "email": "bbecarise@amazon.co.jp",
  "gender": "Male",
  "birthdate": "5/22/1953",
  "address": "1 Farwell Center",
  "city": "Nebug",
  "country": "Russia"
}];

// data.map((item) => {
//     console.log(item.city);
// });

const objnum = (num1, num2) => ({
    number1 : num1,
    number2 : num2
})

console.log(objnum(1,2));