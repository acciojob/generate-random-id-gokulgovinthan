function makeid(l) {
	let random=""
	 const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for(let i=0; i<l;i++){
	  let n=Math.floor(Math.random()*charset.length);
	  random+=charset.charAt(n);
  }
	return random
}

// Do not change the code belo
const l = prompt("Enter a number.");
alert(makeid(l));
