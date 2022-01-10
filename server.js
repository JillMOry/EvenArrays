let express = require('express');


let app = express();
app.listen(8080);
// app.listen(3000);


function evenArrays(id) {
    // console.log("filter evenArrays(b) ", b);
    // let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const nums = [];
    // console.log("nums ", nums);
    for (let i = 1; i <= id * 2; i += 1) {
        if(id > 99){
            return "Please enter a number less than 100"
        }else{
      nums.push(i);
        }
    }
  
    let evens = nums.filter(num => num % 2 === 0 && num <= id * 2);
    return evens;
  }



app.get('/', (request, response) => {
    response.send('Hello to Even Arrays! Enter number less than 100 to see an array intergers')
});

app.get('/:id', (request, response) => {
    response.json(evenArrays(request.params.id))
})

module.exports = app;