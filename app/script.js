const data = [
    "cats.com",
    "cars.com",
    "thisAdultCommertialWebsite.com",
    "XXXDD.com",
    "siteThatYourMomSearch.com",
    "catsCams.com",
    "myfabCats.com",

];

const search = (searchInput,db) =>{
    const matches = db.filter(website =>{
        return website.includes(searchInput);
    });
    return matches.length > 3? matches.slice(0,3):matches;
}

// console.log(search('cat',data));
// console.log(search('com',data));

module.exports = search;