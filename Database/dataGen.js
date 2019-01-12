//generate up to 10.1M lines of code in this format
const fs = require('fs');
const path = require('path');
const os = require('os');
const faker = require('faker');
const { pipeline } = require('stream');
//const streams = require('stream');


// pipeline(
//   fs.createWriteStream('../data.csv')
//   , (err) => {
//     if (err) {
//       console.error('Pipeline failed', err);
//     } else {
//       console.log('pipeline succeeded');
//     }
//   }

// );


// for(let i = 0; i<10000000; i++){
//     fs.createWriteStream(`${faker.commerce.productName()},${faker.image.imageUrl}\n`)
// }
for(let i = 1; i < 5; i++) {
let filename = path.join(__dirname, `../data${i}.csv`);
let output = [];
let dbProducts = [];

while (dbProducts.length < 2500000) {
  dbProducts.push({ product: faker.commerce.productName(), image: faker.image.imageUrl() })
}

dbProducts.forEach((d) => {
  const row = [];
  row.push(d.product);
  row.push(d.image);
  output.push(row.join());
});

fs.writeFileSync(filename, output.join(os.EOL));
}
// goal is to create an fs write stream, utilizing piping/data chunking, 
// to get to quickly hit 10M in the CSV w/o hitting stack heap
