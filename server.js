let express = require('express');


let app = express();
app.listen(8080);
// app.listen(3000);


function evenArrays(id) {
    const nums = [];
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
    response.send('Hello to Even Arrays! Enter a backslach and number less than 100 at the end of the URL to see an array of even intergers.')
});

app.get('/:id', (request, response) => {
    response.json(evenArrays(request.params.id))
})

module.exports = app;