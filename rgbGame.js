
var numColors = 6;
var colors = genColorArr(numColors);
var colorPicked = pickColor();

var squares = document.querySelectorAll("#square")
var message = document.querySelector("#message");
var colorDisplay = document.querySelector("#colorDisplay");
var h1 = document.querySelector("h1");
var resetBtn = document.getElementById("reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");


colorDisplay.textContent = colorPicked;

for (var i = 0; i < squares.length; i++)
{
	squares[i].style.background = colors[i];

	squares[i].addEventListener("click", function()
	{
		var colorClicked = this.style.background;
		if (colorClicked === colorPicked)
		{
			correct(colorPicked);
			message.textContent = "Correct";
		}
		else{

			this.style.background = "#232323";
			message.textContent = "Try Again";
		}
	})
}

resetBtn.addEventListener("click", function()
{
	reset(numColors);
})

easyBtn.addEventListener("click", function()
{
	numColors = 3;
	for(var i = numColors; i < squares.length; i++)
	{
		squares[i].style.display = "none";
	}
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	reset(3);
})

hardBtn.addEventListener("click", function()
{
	numColors = 6;
	for(var i = 3; i < squares.length; i++)
	{
		squares[i].style.display = "block";
	}
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");

	reset(6);
})



function correct(color)
{
	for(var i = 0; i < squares.length; i++)
	{
		squares[i].style.background = color;
	}
	h1.style.background = color;
	resetBtn.textContent = "Play Again?"
}

function pickColor()
{
	return colors[Math.floor(Math.random() * numColors)];

}

function genColorArr(num)
{
	var arr = [];
	for (var i = 0; i < num; i++)
	{
		arr.push(genColor());
	}

	return arr;
}

function genColor()
{
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" +r+ ", " +g+", "+b+ ")"; 
}

function reset(num)
{
	resetBtn.textContent = "New Colors"
	h1.style.background = "steelblue";
	init(num);
	message.textContent = "";

}

function init(num)
{
	colors = genColorArr(num);
	colorPicked = pickColor();
	colorDisplay.textContent = colorPicked;
	for (var i = 0; i < squares.length; i++)
	{
		squares[i].style.background = colors[i];
	}

}
