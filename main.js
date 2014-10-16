document.addEventListener('DOMContentLoaded', function(){
  var $button = document.querySelector('button');

  $button.addEventListener('click', function(){
    var $target = document.querySelector('.target');
    var docFragment = createPTag();
    $target.appendChild(docFragment);
  });

});

function createPTag(){
  var docFragment = document.createDocumentFragment();

  var $div = document.createElement('div');
  $div.setAttribute('class', 'myClass');
  var $p = document.createElement('p');
  $div.appendChild($p);
  $p.textContent = 'Hi';
  docFragment.appendChild($div);

  return docFragment;
}
