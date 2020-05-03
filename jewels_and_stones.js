/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    count=0
    for(var i=0;i<S.length;i++){
        if(J.indexOf(S[i])>=0){
            count++
        }
    }
    return count
};

J = "aA", S = "aAAbbbb" 
//Output: 3
numJewelsInStones(J,S)
J = "aA", S = "aAAbbbb"
//Output: 0
numJewelsInStones(J,S)