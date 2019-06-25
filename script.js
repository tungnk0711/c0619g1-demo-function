const EPSILON = 1E-14;
var x = 1.0 - 0.1 - 0.1 - 0.1 - 0.1 - 0.1;
if (Math.abs(x - 0.3) < EPSILON)
    console.log(x + " is approximately 0.5");
else {
    console.log("false");
}
