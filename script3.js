const buttons = document.querySelectorAll('a.medium-item');
const progressBar = document.querySelector('progress');
const questionsCount = document.querySelectorAll('.select-item').length;

progressBar.setAttribute('value', 0);
progressBar.setAttribute('max', questionsCount);

function clickHandler(event) {
    const target = event.target;
    const dataOpen = target.getAttribute('href');
    progressBar.setAttribute('value', dataOpen.slice(7));
}

function buttonCallback(elem) {
    elem.addEventListener('click', clickHandler);
}

buttons.forEach(buttonCallback);