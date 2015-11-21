function primeTester (n) {
//test
 if (n === 2){ return true }
 if (n === undefined || n <= 1 || n % 2 === 0 ){ return false }
 var mn = n;

 for (var i = 2; i < mn; i++) {
 	if (mn % i === 0){ //si el residue es diferente de cero continua 
 		return false; //si el residuo es cero detente y retorna No es primo
 	}
 }; 
 return true;
};
