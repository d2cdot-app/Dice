(function() {
  'use strict';

  var btn = document.getElementById('btn');
  var array01 = ["木村さん","鈴木さん","宝田さん","山田さん","高田さん","高野さん","大浪さん","藤尾さん","紀野さん","五藤さん","松下さん","山本","柳瀬さん"];
  var array02 = [];
  var c = 1;


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
          count++;
          console.log("a"+ array01.length);
          console.log("b"+ array02.length);
        if(c == 0){
          clearTimeout(id);
          console.log("test2");
          this_btn.textContent = "終わり";
        }else{
          if(array01.length == 0){
          clearTimeout(id);
          console.log("test1");
          Math.floor(Math.random()* array02.length);
          this_btn.textContent = array02[n];
          array02.splice(n,1);
          console.log("c"+ array02.length);
          c = array02.length;
          array01 = array02;
          array02 = [];
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
