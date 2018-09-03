(function() {
  'use strict';

  var btn = document.getElementById('btn');
  var arr = [1,2,3,4,5,6,7,8,9,10];

  function loopSleep(_loopLimit,_interval, _mainFunc){
  var loopLimit = _loopLimit;
  var interval = _interval;
  var mainFunc = _mainFunc;
  var i = 0;
  var loopFunc = function () {
    var result = mainFunc(i);
    if (result === false) {
      // break機能
      return;
    }
    i = i + 1;
    if (i < loopLimit) {
      setTimeout(loopFunc, interval);
    }
  }
  loopFunc();
}


  btn.addEventListener('click', function() {

    loopSleep(10, 1000, function(i){
      console.log(i);
    });

    if(arr.length == 0){
      this.textContent = "終わり";
    }else{
      var n = Math.floor(Math.random()* arr.length);
      this.textContent = arr[n];
      arr.splice(n,1);
    }







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
