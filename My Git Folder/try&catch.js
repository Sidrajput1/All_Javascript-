try{
    console.log("Hello")
   // console.log(a);  // acception 
    console.log("Go to catch");

} catch(err){   // Note:- When try block gives an error then catch block will activate his code  
    console.log("handeled",err);
} finally{   
    console.log("finnally..this block will alwyx execute..dosent matter error come or not");
}
console.log("end");