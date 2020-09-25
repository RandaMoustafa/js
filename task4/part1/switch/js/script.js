 
function getLetter(s) {
    let letter;
 switch (s[0]){
        case 'a':
        case'e':
        case 'o':
        case 'i':
        case 'u':
        return 'A';
        case 'b':
        case 'c':
        case 'd':
        case 'f':
        case 'g':
        return 'B';
        case 'h':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
        return 'C';
        case 'n':
        case 'p':
        case 'q':
        case 'r':
        case 's':
        case 't':
        case 'v':
        case 'w':
        case 'x':
        case 'y':
        case 'z':
        return 'D';
    }
    return letter;
}
console.log(getLetter('adfgt'));
