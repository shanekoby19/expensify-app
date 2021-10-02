// const person = {
//     name: 'Shane',
//     age: 25,
//     jobs: [`Clerk`, `Data Coordinator`],
//     location: {
//         city: 'Las Vegas',
//         temp: 92
//     } 
// }

// const { name = `Anonymous`, age } = person;
// const { city, temp: temperature } = person.location;
// const [ job1, job2 ] = person.jobs;

// console.log(`${name} is ${age}.`);
// console.log(`${name} is from ${city} where it's currently ${temperature} degrees.`)
// console.log(`${name} has held the title of ${job1} and ${job2}`);


// const book = {
//     title: `Ego is the Enemy`,
//     author: `Ryan Holiday`,
//     publisher: {
//         name: 'Penguin',
//     }
// }

// const { name: publisherName = `Self-Published` } = book.publisher;

// console.log(`${publisherName}`)


// ----- ARRAY DESTRUCTURING ------

const address = [`3939 Via Lucia Dr.`, `Las Vegas`, 'Nevada', `89115`, `some other data`];

const [street, city, state, zip] = address;

console.log(`You live at:\n${street}\n${city}, ${state}\n${zip}`)

const itemData = [`Coffee (hot)`, `$2.00`, `$2.50`, `$2.75`];

const [item, _, mediumPrice] = itemData;

console.log(`A medium ${item} cost ${mediumPrice}`)