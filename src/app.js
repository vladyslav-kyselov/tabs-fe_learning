document.addEventListener('DOMContentLoaded', Tab);

function Tab() {
    this.addEventListener('click', function (e) {
        if (e.target.classList.contains('tabs')) {
            makeTabActive(e.target);
        }
    });
}

function makeTabActive(event) {
    let content = document.querySelectorAll('.tab-content');
    for (let j = 0; j < content.length; j++) {
        content[j].classList.remove('active');
    }

    event.classList.add('active'); // но здесь добавляет клас в li , а надо в div. Здесь ступор.
}
