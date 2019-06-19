#!/usr/bin/env node

const axios = require('axios');
const email = process.argv[2] || 'admin@test.com';
axios.get(`https://haveibeenpwned.com/api/v2/breachedaccount/${email}`)
.then(response=>{
let breaches=[]; //create empty array 
    console.log(`${email} was found in ${ response.data.length} breaches!`) 
    //iterate each breaches to get only specific attributes
    response.data.forEach(breach => {
        breaches.push({
            Name:breach.Name,
            Domain:breach.Domain,
            BreachDate:breach.BreachDate,
            AccountsHacked:breach.PwnCount,
        })
    });
    console.table(breaches) //display in pretty table! :D 
})
.catch(err=>{
    console.log(err)//display error
})
