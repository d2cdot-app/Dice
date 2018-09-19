(function() {
  'use strict';

  var btn = document.getElementById('btn');
  var arr = [1,2,3,4,5,6,7,8,9,10];


    btn.addEventListener('click', function() {
      var count = 0;
      var this_btn = this;
      var countup = function(){
        var id = setTimeout(countup,300);
        this_btn.textContent = count++;
        if(count > 5){
          clearTimeout(id);
          if(arr.length == 0){
            this_btn.textContent = "終わり";
          }else{
            console.log("test1");
            var n = Math.floor(Math.random()* arr.length);
            this_btn.textContent = arr[n];
            arr.splice(n,1);

          }
        }
      }
      countup();


    });
    btn.addEventListener('mousedown', function() {
      this.className = 'pushed';
    });
    btn.addEventListener('mouseup', function() {
      this.className = '';
    });
  })();
