const express = require('express')
const app = express()

app.get('/', (req, res) => {
  let weight = 130;//req.query.weight;
    let height =  165;//req.query.height;
    weight = weight * 0.45;
    height = height/100;

    let bmi =  weight / (height*height);
    let status = '';   

    if(bmi <= 18.5){
        status = 'Underweight';
    }
    else if(bmi >= 18.6 && bmi <= 24.9){
        status = 'Normal';
    }
    else if(bmi >= 25 && bmi <= 29.9){
        status = 'Overweight';
    }
    else if(bmi >= 30){
        status = 'Obese';
    }
    res.send("Your BMI is " + bmi + " and you're  " + status);
})

app.listen(3000, () => {
  console.log("REST API running at port 3000")
})