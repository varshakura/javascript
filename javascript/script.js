
function displayPyramid() {
    var n = document.getElementById("num").value;
    for (var i = 0; i < n; i++) {
      var str = '';
      for (var j = 1; j < n-i; j++) {
        str = str + ' ';
      }
      for (var k = 1; k <= (2*i+1); k++) {
        str = str + '*';
      }
      console.log(str);
      document.write(str);
      document.write("<br>");
    }
  };
function string()
{
   
    var string = document.getElementById("string").value;
    var substring = document.getElementById("substr").value;
   var count = 0;
   var index = string.indexOf(substring);
for( ; index > -1 ;){
    ++count;
    index =string.indexOf(substring , ++index);
}
  document.write(count);
}

