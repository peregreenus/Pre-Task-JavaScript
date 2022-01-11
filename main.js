window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const form = document.querySelector('#form');
    const textarea = document.querySelector('#comment');
    const input = document.querySelector('#phone-number');

    const myEmail = 'coldlycalculatedsoul@gmail.com';
    let comment;

    // form.addEventListener('submit', (e) => {
    //     e.preventDefault();

    //     if (textarea.value === '') {
    //         textarea.value = myEmail;
    //     } else {
    //         comment = textarea.value;
    //         textarea.value = '';
    //     }

    //     // console.log(comment);
    //     checkPhoneNumber();
    // });

    // function checkPhoneNumber() {
    //     input.setAttribute('pattern', '/+[375]/');
    //     console.log(input.getAttribute('pattern'));
    // }


    // TOOLTIP ------------------------------------------>

    const tooltip = document.querySelector('.tooltip');

    const tooltipVisible = () => {
        textarea.addEventListener('mouseover', (e) => {
            tooltip.classList.add('tooltip-visible');

            let x = e.layerX;
            let y = e.layerY;

            tooltip.style.top = `${y}px`;
            tooltip.style.left = `${x}px`;
        });
    };

    tooltipVisible();


    const tooltipHidden = () => {
        tooltip.classList.remove('tooltip-visible');
    };

    textarea.addEventListener('mouseout', tooltipHidden);

});