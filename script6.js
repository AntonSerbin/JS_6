function myFunction(e) {

var x = e.clientX;
var y = e.clientY;
document.getElementById("coordinatesTask1").innerHTML= "Coordinates: x="+ x + "  y=" + y +" ;"

}
// <!-- end Task1	 -->
var counter2=2;
function myFunction2() {
		if (counter2%2!=0) 
		{document.getElementById("squareTask2").style.backgroundImage = "url('2_closed.jpg')";}
			else {document.getElementById("squareTask2").style.backgroundImage = "url('2_opened.jpg')";};
		counter2++;
						}
// <!-- end Task2	 -->

function myFunction3() {
for (var counter3 = 0; (counter3*30*30) < (900*300); counter3++) {
document.getElementById("squareTask3").innerHTML += 
'<div id="squareSmallTask3" class="squareSmallTask3" onmousemove=myFunctionRound3(this)><div>'}
}
myFunction3();  

	function myFunctionRound3(square) {
			square.style.transition = "all 0.35s";
			square.style.borderRadius = "50%";
			square.style.borderColor = "red";
							};
// <!-- end Task3	 -->

function ImageTask4(imgName){
		document.getElementById("square4").style.backgroundImage = "url('"+imgName+"')";
						};

// <!-- end Task4	 -->
var task5coordinateX=500;
function moveLeftClickTask5(e){
			e.style.transition = "all 0.75s";
			if(task5coordinateX<=900) {task5coordinateX+= 100}
				else {task5coordinateX-=5};
		    e.style.left = task5coordinateX+'px';
		    			};

function moveRightClickTask5(e){
			e.style.transition = "all 0.75s";
			if(task5coordinateX>=100) {task5coordinateX-= 100}
			else {task5coordinateX+=5};
		    e.style.left = task5coordinateX+'px';
								};
// <!-- end Task 5	 -->
var counter6=0;
function myFunction6(e){
			counter6++;
			e.style.transition = "all 0.35s";
			if (counter6==1) {e.style.left = '75px';};
			if (counter6==2) {e.style.left = '155px';};
			if (counter6==3) {e.style.left = '5px';
			counter6=0};
			document.getElementById("result6").innerHTML = 'Result: ' + counter6;


		}
