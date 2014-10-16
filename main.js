document.addEventListener('DOMContentLoaded', function(){
  var $button = document.querySelector('button');

  $button.addEventListener('click', function(){
      var $target = document.querySelector('.target');

      var $div = document.createElement('div');
      $div.innerHTML = '<p>Hi</p>';

      $target.appendChild($div);
      
  });




});
