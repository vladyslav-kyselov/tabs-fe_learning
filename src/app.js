document.addEventListener('DOMContentLoaded', clickThree);
document.addEventListener('DOMContentLoaded', clickTwo);
document.addEventListener('DOMContentLoaded', clickOne);

function clickOne() {
  document.getElementById('firstTab').addEventListener('click', clickOne);
  document.getElementById('textOne').setAttribute('style', 'display:block');
  document.getElementById('textTwo').setAttribute('style', 'display:none');
  document.getElementById('textThree').setAttribute('style', 'display:none');
}

function clickTwo() {
  document.getElementById('secondTab').addEventListener('click', clickTwo);
  document.getElementById('textOne').setAttribute('style', 'display:none');
  document.getElementById('textTwo').setAttribute('style', 'display:block');
  document.getElementById('textThree').setAttribute('style', 'display:none');
}

function clickThree() {
  document.getElementById('lastTab').addEventListener('click', clickThree);
  document.getElementById('textOne').setAttribute('style', 'display:none');
  document.getElementById('textTwo').setAttribute('style', 'display:none');
  document.getElementById('textThree').setAttribute('style', 'display:block');
}
