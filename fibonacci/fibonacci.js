const fibonacci = function(n) {
    //return "OOPS" if negative
    if(n<0) return "OOPS";
    //x(n) = x(n−1) + x(n−2)
    //declare first 2 in sequence, excluding 0. 1,1,2,3,5,8...
    let a= 1, b=1, c;
    //a= x(n-2) b= x(n-1) C=x(n)

    for(let i = 3;i<=n;i++){
        c = a + b //x(n)
        a = b; //x(n-2) for next round
        b = c; //x(n-1) for next round 
    }
    return b // if for loop exits or never enters, its x(n) since next round hasnt started yet.

};

module.exports = fibonacci;
