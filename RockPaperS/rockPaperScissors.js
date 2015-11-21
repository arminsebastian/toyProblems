
function play (rounds){
var container = {};
	var values =["r","p","s"];
	var results =[];
  function newHand (){
		for (var i = 0; i < rounds; i++) {
		  var randomI = Math.floor (Math.random() * rounds);
		  console.log(randomI)
		  results[i] = values[randomI];
	    }
	    var key = results.join();
	    console.log(key);
		if (var key in container){
			newHand();
		} else {
		container[key]=results;
	    }
	//1 create 1 array rounds with a length iqual to rounds
    }
if (container.length < 9){
		newHand(rounds);
	}
newHand;
return container