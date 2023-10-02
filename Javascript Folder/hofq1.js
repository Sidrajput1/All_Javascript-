
const store = [
    {
        name: "iphone14",
        type: "mobile",
        priceinusd:1000,

    },
    {
        name:'sumsung galaxy 32',
        type:"mobili",
        priceinusd:800,
    },
    {
        name:'hp23',
        type:'laptop',
        priceinusd:1200,
    },
    {
        name:'macbookAir17',
        type:'macbbok',
        priceinusd:1500,
    },
];

// function printme(item){
//       console.log(item);
// }
// store.forEach(printme);

// store.map( function(item,index,array){
//     console.log(item.name,index,array);
    //console.log(item.priceinusd);
//}  )
 const filterprice = store.filter( (item) =>{
    
     return item.priceinusd>1000;
})
 //console.log(filterprice);
 const updateprice=filterprice.map( (item) =>({
      ...item,
      //discountprice : item.name.toUpperCase()
      discountprice : item.priceinusd
 } ) )
 console.log(updateprice);



// const exchangeRate = 80;

// function converttoinr(usd){
//     return usd * exchangeRate;
// }

//  const itemsinInr= store.map( (item,index,array) => ( {
//        item...,
//        priceInr : converttoinr(store.priceinusd)
//  } ) )
// const itemsinInr = store.map( function(item){
//     //  const store2 =store.slice();
//    [...item],
//     priceINR : converttoinr(store.priceinusd);

// })
//console.log(store.priceinusd);
// const itemsInINR = store.map((item) => ({
//     ...item,
//     priceINR: converttoinr(item.priceinusd),
    
// }));

 //console.log(itemsInINR);


 