const person = {
    firstName : "sidharth",
    lastName : "shekhar",
    age:20,
    company : "tcs",
    salary: 80000,
};

function ageIndays(personobj,callback){
    const fullName = `${personobj.firstName} ${personobj.lastName}`;
    const ageinDays = 365*personobj.age;
    const work = personobj.company;
    const sal = personobj.salary;


    callback(fullName,ageinDays,work,sal);
}

function result(fullName,ageinDays,work,sal){
    console.log(`Person's fullname is ${fullName},and Person total age in days is ${ageinDays} and He work in ${work} company and His salary is rs:${sal}`);
}
ageIndays(person,result);