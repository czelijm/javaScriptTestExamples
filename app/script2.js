const fetch = require('node-fetch');

const getPeoplePromise = fetch =>{
    let result;
    try {
        result = fetch('https://swapi.dev/api/people')
        .then(response=>response.json())
        .then(data=>{
            // console.log(data)
            return {
                count : data.count,
                results: data.results
            }
        })
    } catch (error) {
        console.log(error)
    }


    return result;
}
const getPeople = async fetch =>{
    const request = await fetch('https://swapi.dev/api/people');
    const data = await request.json();
    // console.log(data)
    return {
        count : data.count,
        results: data.results
    }
}


// console.log(getPeople(fetch))
module.exports = {
    getPeoplePromise,
    getPeople
};