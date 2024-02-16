let blocks = document.querySelectorAll(".block"),
 block = document.querySelector(".game-block"),
 win = document.getElementById("winner"),
 play = document.getElementById("play-again"),
 popup = document.getElementById("win-popup"),
 start = document.getElementById("start"),
 gamestart = document.querySelector(".game"),
 choose = document.querySelector(".choose"),
 choosebtn = document.querySelectorAll(".choose button");
 let tour = true; // or initialize it with the default value



// Start Game

choosebtn.forEach(function(btn){
    btn.addEventListener("click", function(){
        if(btn.innerHTML == "X") {
            tour = true;
        } else {
            tour = false;
        }
        choose.style.display = "none";
    });
});



start.onclick = function(){

	gamestart.style.display = "none";
}


////////////////////




// Print X Or O

blocks.forEach(function(block){
	block.addEventListener("click",function(){
		
		if(block.innerHTML == "")
		{
			PLAYERS = tour ? "X" : "O";
			block.innerHTML = PLAYERS;
			tour = !tour;

		}
		if(draw())
		{
			win.innerHTML = "Draw";
			popup.style.display = "flex";

		}
		checkWin(PLAYERS);
	});



});

////////



play.onclick = playAgain;

function checkWin(PLAYERS)
{
			if(blocks[0].innerHTML == PLAYERS  && blocks[1].innerHTML == PLAYERS  && blocks[2].innerHTML == PLAYERS )
			{
				win.innerHTML = PLAYERS + " Win";
				popup.style.display  = "flex";
				block.classList.add("stop");
			}

			else if(blocks[0].innerHTML == PLAYERS  && blocks[4].innerHTML == PLAYERS  && blocks[8].innerHTML == PLAYERS )
			{
				win.innerHTML = PLAYERS + " Win";
				popup.style.display  = "flex";
				block.classList.add("stop");
			}

			else if(blocks[2].innerHTML == PLAYERS  && blocks[4].innerHTML == PLAYERS  && blocks[6].innerHTML == PLAYERS )
			{
				win.innerHTML = PLAYERS + " Win";
				popup.style.display  = "flex";
				block.classList.add("stop");
			}

			else if(blocks[3].innerHTML == PLAYERS  && blocks[4].innerHTML == PLAYERS  && blocks[5].innerHTML == PLAYERS )
			{
				win.innerHTML = PLAYERS + " Win";
				popup.style.display  = "flex";
				block.classList.add("stop");
			}

			else if(blocks[6].innerHTML == PLAYERS  && blocks[7].innerHTML == PLAYERS  && blocks[8].innerHTML == PLAYERS )
			{
				win.innerHTML = PLAYERS + " Win";
				popup.style.display  = "flex";
				block.classList.add("stop");
			}

			else if(blocks[0].innerHTML == PLAYERS  && blocks[3].innerHTML == PLAYERS  && blocks[6].innerHTML == PLAYERS )
			{
				win.innerHTML = PLAYERS + " Win";
				popup.style.display  = "flex";
				block.classList.add("stop");
			}

			else if(blocks[1].innerHTML == PLAYERS  && blocks[4].innerHTML == PLAYERS  && blocks[7].innerHTML == PLAYERS )
			{
				win.innerHTML = PLAYERS + " Win";
				popup.style.display  = "flex";
				block.classList.add("stop");
			}

			else if(blocks[2].innerHTML == PLAYERS  && blocks[5].innerHTML == PLAYERS  && blocks[8].innerHTML == PLAYERS )
			{
				win.innerHTML = PLAYERS + " Win";
				popup.style.display  = "flex";
				block.classList.add("stop");
			}
}

function playAgain()
{
	blocks.forEach(function(bloc){

		bloc.textContent = "";
		popup.style.display = "none";
		choose.style.display = "flex";
		gamestart.style.display = "flex";
		block.classList.remove("stop");

	});
}

function draw()
{
	let i = 0;

	blocks.forEach(function(block){

		if ( block.innerHTML != "" )
		{
			i++;
		}

	});

	if(i == blocks.length)
	{
		return true;
	}
	else
	{
		return false;
	}
}