const faker = require('faker');
// console.log(faker)
let fakeData = [];
// let name = faker.name.findName()
// console.log(name)

// let randomEmail = faker.internet.email()
// console.log(randomEmail)
// const dataGenerator = () => {
//   return function() {
//     let User = {
//     name: faker.name.firstName(),
//     date: faker.date.recent(),
//     message: faker.lorem.text(),
//     image: faker.image.avatar()
//     }
//     fakeData.push(User)
//   }
    
// return fakeData

// }


// const User = {
//   name: faker.name.firstName(),
//   date: faker.date.recent(),
//   message: faker.lorem.text(),
//   image: faker.image.avatar()
// }

for (var i = 1; i <= 100; i++) {
  fakeData.push(faker.fake(`{ {{name.firstName}}, {{date.recent}}, {{lorem.text}}, {{image.avatar}} }`))
  // fakeData.push(User)
}

console.log(fakeData)