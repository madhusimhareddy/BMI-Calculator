const form = document.querySelector('form');

form.addEventListener('submit', (e)=>{
    
    
    e.preventDefault();

    let height = parseInt((document.querySelector('#height')).value)
    console.log(height)
    let weight = parseInt((document.querySelector('#weight')).value)
    console.log(weight)
    let results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = 'Please enter valid height'
        
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = 'Please enter valid weight'
    }
    else{
        console.log(weight / ((height * height) / 10000))
        let bmi = (weight / ((height * height) / 10000)).toFixed(2)
        results.innerHTML = `BMI is ${bmi}`
        let comparision = document.querySelector('#comparision');
        if(bmi <= 18.6){
            comparision.innerHTML = "you are underweight"
        }
        else if(bmi >= 24.9){
            comparision.innerHTML = "you are overweight"
        }
        else{
            comparision.innerHTML = "your height and weight are good"
        }
    }


})