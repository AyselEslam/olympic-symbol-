canvas = 
  document.getElementById("mycanvas");
ctx = canvas.getcontext("2d")
ctx.beginPath();
ctx.strokeStyle= "red";
ctx.lineWidth="10";
ctx.rect(150, 143, 430, 200);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle= "blue";
ctx.lineWidth="1";
ctx.arc(250, 210, 40, 0, 2 *Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle= "yelllow";
ctx.lineWidth="1";
ctx.arc(250, 250, 40, 0, 2 *Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle= "black";
ctx.lineWidth="1";
ctx.arc(300, 210, 40, 0, 2 *Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle= "green";
ctx.lineWidth="1";
ctx.arc(340, 310, 40, 0, 2 *Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle= "red";
ctx.lineWidth="1";
ctx.arc(370, 340, 40, 0, 2 *Math.PI);
ctx.stroke();
