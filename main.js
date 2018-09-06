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
    var this_btn = this;
    loopSleep(10, 100, function(i){
      console.log(this_btn);
      this_btn.textContent = i;
    });

    if(arr.length == 0){
      this.textContent = "終わり";
    }else{
      var n = Math.floor(Math.random()* arr.length);
      this.textContent = arr[n];
      arr.splice(n,1);
      console.log(n);

    }
  });
  btn.addEventListener('mousedown', function() {
    this.className = 'pushed';
  });
  btn.addEventListener('mouseup', function() {
    this.className = '';
  });
})();
