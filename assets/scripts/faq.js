"use strict";

document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('h3');
        const answer = item.querySelector('p');
        answer.style.display = 'none';

        question.addEventListener('click', () => {
            const isOpen = answer.style.display === 'block';
            
            // Chiudi tutte le risposte
            document.querySelectorAll('.faq-item p').forEach(p => {
                p.style.display = 'none';
            });

            // Apri/chiudi la risposta cliccata
            answer.style.display = isOpen ? 'none' : 'block';
            question.classList.toggle('active');
        });
    });
});