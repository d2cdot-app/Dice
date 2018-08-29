(function() {
  'use strict';

  var btn = document.getElementById('btn');
  var arr = [1,2,3,4,5,6,7,8,9,10];

  btn.addEventListener('click', function() {

    var n = Math.floor(Math.random()* arr.length);
    this.textContent = arr[n];

      if(arr == ""){
        this.textContent = "終わり";
      }

    arr.splice(n,1);

    // var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];
    //
    // for(var i = arr.length - 1; i > 0; i--){
    //   var j = Math.floor(Math.random() * (i + 1));
    //   var tmp = arr[i];
    //   arr[i] = arr[j];
    //   arr[j] = tmp;
    //   arr.pop() ;
    // }
    //
    // this.textContent = n;

    //
    // var min = 1;
    // var max = 16;
    // var n = Math.floor(Math.random() * (max + 1 - min)) + min;
    // this.textContent = n;

  });
  btn.addEventListener('mousedown', function() {
    this.className = 'pushed';
  });
  btn.addEventListener('mouseup', function() {
    this.className = '';
  });
})();
