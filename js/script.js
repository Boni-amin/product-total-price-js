
const div1 = document.getElementById('first');
const div2 = document.getElementById('second');
const div3 = document.getElementById('third');

const img = document.getElementById('art');

const desc = document.getElementById('desc');
const price = document.getElementById('price');

const free = document.getElementById('free');
const express = document.getElementById('express');
const shipping = document .getElementById('shipping');

const total = document.getElementById('total');


function upDateTotal (){
    const productPrice = Number(price.innerText);
    const shippingCharge = Number(shipping.innerText);
    const totalPrice = productPrice + shippingCharge;

    total.innerText = totalPrice;
}

free.addEventListener('click', function(){
    shipping.innerText = 5;
    upDateTotal ()
})
express.addEventListener('click', function(){
    shipping.innerText = 30;
    upDateTotal ()
})



// div 1 
div1.addEventListener('click', function(){
    img.src = 'images/1.jpg'
    desc.innerText = 'Frist - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum';
    price.innerText = '750'

    upDateTotal ()
    // console.log('img click')
})
// div 2 
div2.addEventListener('click', function(){
    img.src = 'images/2.jpg'

    desc.innerText = 'Second - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum';
    price.innerText = '580'
    upDateTotal ()
})
// div 3
div3.addEventListener('click', function(){
    img.src = 'images/3.jpg';
    desc.innerText = 'Third - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum';
    price.innerText = '350'
    upDateTotal ()
    // console.log('img click')
})