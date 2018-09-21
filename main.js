(function() {
  'use strict';

  var btn = document.getElementById('btn');
  var array01 = [1,2,3,4,5,6,7,8,9,10];
  var array02 = [];


    btn.addEventListener('click', function() {
      var count = 0;
      var this_btn = this;
      var countup = function(){
      var id = setTimeout(countup,300);
      var a = Math.random();
      var n = Math.floor( a * array01.length);
      this_btn.textContent = array01[n];
      array02.push(array01[n]);
      array01.splice(n,1);
          console.log("this_btn.textContent" + this_btn.textContent );
          // console.log("Math.random()" + a);
          // console.log("array01.length" + array01.length);
          console.log(count);
          console.log("a"+ array01);
          console.log("b"+ array02);
          count++;

        if(array01.length == 0 && array02.length == 0){
          clearTimeout(id);
          console.log("test2");
          this_btn.textContent = "終わり";
        }else if(array01.length == 0){
          clearTimeout(id);
          console.log("test1");
          Math.floor(Math.random()* array02.length);
          this_btn.textContent = array02[n];
          array02.splice(n,1);
          array01 = array02;
          array02 = [];
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
