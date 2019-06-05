var presentValue = 0, result;
for (i = 50; i > 0; i--) {
    if (i % 2 === 0) {
        continue;
    } else {
        result = presentValue + i; 
        presentValue = result;
    }
}
