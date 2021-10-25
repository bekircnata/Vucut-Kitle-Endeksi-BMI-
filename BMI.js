const weight = document.getElementById('weight');
const height = document.getElementById('height');
const index = document.getElementById('index');
const result = document.getElementById('result');

function calculate(){
    var resultIndex = weight.value /Math.pow(height.value, 2);

    if(resultIndex < 18.49){
        index.innerHTML = 'BMI : ' + resultIndex.toFixed(2);
        result.innerText = 'Zayıf';
        result.style.color = '#5050FF';
    }
    else if(resultIndex >= 18.5 && resultIndex < 24.99){
        index.innerHTML = 'BMI : ' +  resultIndex.toFixed(2);
        result.innerText = 'Normal';
        result.style.color = '#52C552';
    }
    else if(resultIndex >= 25 && resultIndex < 29.99){
        index.innerHTML = 'BMI : ' +  resultIndex.toFixed(2);
        result.innerText = 'Kilolu';
        result.style.color = '#E0E023';
    }
    else if(resultIndex >= 30) {
        index.innerHTML = 'BMI : ' +  resultIndex.toFixed(2);
        result.innerText = 'Obezite';
        result.style.color = '#FF4040';
    }

}

function clean(){
    weight.value = '';
    height.value = '';
    index.innerHTML = '';
    result.innerHTML = '';
}