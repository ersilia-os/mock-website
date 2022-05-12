
const rangeSlider = document.getElementById('slider');
const value  = rangeSlider.value;
    document.getElementById('amount-label').innerHTML = value;
    document.getElementById('saving-label').innerHTML = parseFloat(value *0.01).toFixed(2);
rangeSlider.addEventListener('input',function(e){
    const value  = rangeSlider.value;
    document.getElementById('amount-label').innerHTML = value;
    document.getElementById('saving-label').innerHTML = parseFloat(value *0.01).toFixed(2);
});
