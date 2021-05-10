// exercise 1
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];



// born in 1500's
const fifteen = inventors.filter((inventor) => inventor.year >= 1500 
    && inventor.year < 1600)

console.table(fifteen);

// array of first and last names
const fullNames = inventors.map(inventor => inventor.first +' '
    + inventor.last);

console.log(fullNames);

// sort by birthdate oldest to youngest, mutating original
const reorder = inventors.sort((a, b) => a.year - b.year);
console.table(reorder);
console.table(inventors);

// how many years did all inventors live?
const years = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0);
console.log(years);

// sort by years lived
const youngest = inventors.sort((a, b) => {
    return (a.passed - a.year) - (b.passed - b.year);
});
console.table(youngest);
const oldest = inventors.sort((a, b) => {
    return (b.passed - b.year) - (a.passed - a.year);
});
console.table(oldest);



// exercise 2
// create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const category = document.querySelector('.mw-category');
// const links = category.querySelectorAll('a');
// const boulevards = [...links];
// const blvd = boulevards.map(blvd => blvd.innerText);
// const de = blvd.filter(name => name.includes('de'));



// exercise 3
const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// sort alphabetically
const alpha = people.sort();
console.log(alpha);
const splitting = people.sort((lastOne, nextOne) => {
    const [aLast, aFirst] = lastOne.split(', ');
    const [bLast, bFirst] = nextOne.split(', ');
    return aLast - bLast;
})
console.log(splitting);

// exercise 4
const data = [
    'car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 
    'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogo stick' ];
    
const transportation = data.reduce((obj, item) => {
    if(!obj[item]){
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {});
console.log(transportation);
