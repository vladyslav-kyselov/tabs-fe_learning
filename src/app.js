document.addEventListener('DOMContentLoaded', Tab);

function Tab() {
    this.addEventListener('click', function (e) {
        let index = e.target.getAttribute("data-index");
        if (e.target.classList.contains('tabs')) {
            makeTabActive(index);
        }
    });
}

function makeTabActive(index) {
    let content = document.querySelectorAll('.tab-content');
    for (let j = 0; j < content.length; j++) {
        content[j].classList.remove('active');
    }
    content[index].classList.add('active');
}
