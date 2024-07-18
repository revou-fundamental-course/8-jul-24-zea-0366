//function
//get value
//calculate
//output

//bmi formula weight / height squared * 783


function calculateBmi() {
  let weight = document.getElementById('weight').value
  let height = document.getElementById('height').value

  let bmi = (weight / (height * weight) * 500)

  document.getElementById('heading').innerHTML = 'your BMI is :'
  document.getElementById('bmi-output').innerHTML = bmi.toFixed(1)

  if (bmi < 18.5) {
    document.getElementById('message').innerHTML = 'you are overweight'
} else if (bmi > 25 && bmi < 30) {
  document.getElementById('message').innerHTML = 'you are healthy weight'
} else{
  document.getElementById('message').innerHTML = 'you are underweight'
}

}

function reload() {
  window.location.reload()
}
