const books =[
    {
      title:"My experince with truth",
      author:"Mk Gandhi",
      publish:1975,
    },
    {
      title:'The white tiger',
      author:'Aravinda Adiga',
      publish:2018,
    },
    {
     title:"poos ki raat",
     author:'premchand',
     publish:1936,
    },
    {
     title:"The god of small things",
     author:'Arundati roy',
     publish:1997,
    },
    {
     title: "Midnight's Children",
     author: "Salman Rushdie",
     publish:1981,
    },
 ];

 function printBook(books,callback){
    const booktitle =books.map( (book) =>{
         return book.title;
    } )
    callback(booktitle);
 }

//  function sortbook(){
//     console.log(booktitle);
//  }
// printBook(books,sortbook);
function sortbookTitle(booktitle){
    booktitle.sort();
    //console.log(booktitle.join(","));   // its convert to stting
    console.log(booktitle);  // and this is print as array
}
printBook(books,sortbookTitle);