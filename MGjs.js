var pictur = ['☆','✧','✺','✼','✪','✰','✯','★','☆','✧','✺','✼','✪','✰','✯','★'];
var values = [];
var array = [];
var tiles_flipped = 0;
var count = 0;
var stars = "★★★";
var time = 0 ;
var check = false ;
var started ;


function counting() {
    time++;

    
    document.getElementsByTagName('i')[0].textContent = time;
    timer();
}
function timer() {
    started = setTimeout(counting, 1000);
}

function shuffle(array) {
     /*
     Behavior  : this function is used to shufet the array randomle
     Inputs    : this function tack array  
     Outputs   : this function return the array after is chufted random
     */
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function newBoard(){
    /*
     Behavior  : this function is used creat new board .
     Inputs    : this function has no input . 
     Outputs   : this function has no return .
     */
	tiles_flipped = 0;
	var output = '';
  pictur = shuffle(pictur);
	for(var i = 0; i < pictur.length; i++){
		output += '<div id="tile_'+i+'" onclick="flipThePicture(this,\''+pictur[i]+'\')"></div>';
	}
	document.getElementById('board').innerHTML = output;
}

function flipThePicture(tile,val){
    /*
     Behavior  : this function is used to flip the the card if the card is the same photo will not flip back and if is not the same photo will flip them back .
     Inputs    : this function has no input . 
     Outputs   : this function has no return .
     */
	if(tile.innerHTML == "" && values.length < 2){
        if(check == false){
        timer();
        check = true ;
        }
		tile.style.background =  'url(img/background.png)';
		tile.innerHTML = val;
		if(values.length == 0){
			values.push(val);
			array.push(tile.id);
		} else if(values.length == 1){
            count++;
			values.push(val);
			array.push(tile.id);
			if(values[0] == values[1]){
                 var tile_1 = document.getElementById(array[0]);
				    var tile_2 = document.getElementById(array[1]);
				    tile_1.style.background = 'url(img/green.png)';
                     tile_1.style.backgroundSize = 'cover'
				    tile_2.style.background = 'url(img/green.png)';
                     tile_2.style.backgroundSize = 'cover'

				tiles_flipped += 2;
				
				values = [];
            	array = [];
                
				if(tiles_flipped == pictur.length){
                    document.getElementById('prgraf').innerHTML =count;
                  setTimeout(win,200);
				}
			} else {
				setTimeout(flipBack, 370);
			}
		}
        if(count == 14){
            stars = "★★☆";
            document.getElementById('img').innerHTML = stars;
        }
        if(count == 17){
             stars = "★☆☆"
            document.getElementById('img').innerHTML = stars;
        }
        document.getElementById('prgraf').innerHTML =count;
        if(count == 1)
        document.getElementById('restart').style.visibility = 'visible';
	}}

function win(){
    /*
     Behavior  : this function is used if all the cards is open .
     Inputs    : this function has no input . 
     Outputs   : this function has no return .
     */
        
        if (confirm(count+"Moves\t" + stars+"\nthe time you take is "+time+"seconds\nif you want to play again pri click OK")) {
                       restartGame();
                   } else {                 
    }
}

function flipBack(){
    /*
     Behavior  : this function is used if the two cards is not the same .
     Inputs    : this function has no input . 
     Outputs   : this function has no return .
     */
				    var tile_1 = document.getElementById(array[0]);
				    var tile_2 = document.getElementById(array[1]);
				    tile_1.style = document.getElementById('board').innerHTML;
            	    tile_1.innerHTML = "";
				    tile_2.style = document.getElementById('board').innerHTML;
            	    tile_2.innerHTML = "";
				    values = [];
            	    array = [];
				}

function restartGame() {
    /*
     Behavior  : this function is used to restart the board .
     Inputs    : this function has no input . 
     Outputs   : this function has no return .
     */
    check =false;
     clearTimeout(started);
    document.getElementById('img').innerHTML = "★★★";
    time = 0 ;
    count = 0;
     document.getElementById('restart').style.visibility = 'hidden';
    document.getElementById('prgraf').innerHTML =count;
    newBoard();
    document.getElementsByTagName('i')[0].textContent = time;
}

//function timer(){
//     setTimeout(start,1000);
//}
//
//function start(){
//     time = time+1
//        document.getElementById('time')[0].textContent = time;
//    timer();
//}
