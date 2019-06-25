for (i = 1; i <= 8; i++) {
	a = " " + "#";
	b = "#" + " ";
	c = "\n";
	if (i % 2 === 0) {
		console.log(a + a + a + a + c);
	} else { 
		console.log(b + b + b + b + c);
	}
}
// хорошо
