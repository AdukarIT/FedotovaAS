function getRoot(a, b, c) {
    var Diskr, x1, x2;
    if (a === 0) {
       return false;
    } else { // тут не нужен элс, тк в иф ретёрн
        Diskr = b ** 2 - 4 * a * c;
        if (Diskr > 0) {
            x1 = ((0 - b) + Math.sqrt(Diskr)) / (2 * a);
            x2 = ((0 - b) - Math.sqrt(Diskr)) / (2 * a)
            return x1 + " " + x2;
        } else if (Diskr == 0) {
            x1 = (0 - b) / (2 * a)
            return x1;
        } else {
            return "нет корней"
        }
    }
}
