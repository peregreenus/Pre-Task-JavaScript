window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const form = document.querySelector('#form');
    const textarea = document.querySelector('#comment');
    const input = document.querySelector('#phone-number');

    const myEmail = 'coldlycalculatedsoul@gmail.com';
    let comment;


    // VALIDATION -------------------------------------->

    const createValidateMessage = (result) => {
        let message = document.createElement('span');
        message.classList.add('message', 'message-visible');


        if (!result) {
            message.textContent = 'Номер введен неверно';
        } else {
            message.textContent = 'Номер введен верно';
        }


        input.insertAdjacentElement('afterend', message);
        setTimeout(() => {
            message.classList.remove('message-visible');
        }, 1000);

    };


    const validateForm = () => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            if (textarea.value === '' || textarea.value === myEmail) {
                textarea.value = myEmail;
            } else {
                comment = textarea.value;
                textarea.value = '';
            }

            const regExpPhone = /\+(375)(33|29|44|25)(\d{7})$/;
            let regExpResult = regExpPhone.test(input.value);


            createValidateMessage(regExpResult);

            input.value = '';
        });
    };

    validateForm();


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