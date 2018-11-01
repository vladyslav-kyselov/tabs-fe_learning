document.addEventListener('DOMContentLoaded', Tab);


function Tab() {
  let lengthTabs = document.querySelectorAll('.tabs');
  let lengthContent = document.querySelectorAll('.tab-content');
  for (let i = 0; i< lengthTabs.length; i++) {
    lengthTabs[i].addEventListener('click', function() {
      for (let j = 0; j < lengthTabs.length; j++) {
        lengthContent[j].classList.remove('active');
      }
      lengthContent[i].classList.add('active');
    });
  }
}
