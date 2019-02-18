document.addEventListener('DOMContentLoaded', Tab);


function Tab() {
    let tabs = document.querySelectorAll('.tabs');
    let content = document.querySelectorAll('.tab-content');
    for (let i = 0; i< tabs.length; i++) {
        tabs[i].addEventListener('click', function() {
            for (let j = 0; j < tabs.length; j++) {
                content[j].classList.remove('active');
            }
            content[i].classList.add('active');
        });
    }
}










document.addEventListener('DOMContentLoaded', Tab);

function Tab() {
    let tabs = document.querySelectorAll('.tabs');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', function () {
            makeTabActive(i);

        });
    }
}

function makeTabActive(i) {
    let content = document.querySelectorAll('.tab-content');
    for (let j = 0; j < content.length; j++) {
        content[j].classList.remove('active');
    }
    content[i].classList.add('active');

}