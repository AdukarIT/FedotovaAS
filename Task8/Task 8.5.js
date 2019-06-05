var result = 0;
for (i = 50; i > 0; i--) {
    if (i % 2 === 0) {
        continue;
    } else {
        result += i; 
    }
}
