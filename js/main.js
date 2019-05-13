'use strict'
$(document).ready(
    function(){

    }
)

const btnUp = $('#btn-animation-up');
const btnDown = $('#btn-animation-down');
const container = $('#container');

btnUp.click(function(){
    let parArray = $('.par');
    let removedElement = parArray.last().remove();
    parArray = $('.par');
    container.prepend(removedElement) 
})

btnDown.click(function(){
    let parArray = $('.par');
    let removedElement = parArray.first().remove();
    parArray = $('.par');
    container.append(removedElement) 
   
})

