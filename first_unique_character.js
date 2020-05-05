/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    for(var i=0;i<s.length;i++){
        //if the first index and last index of a character is same i.e. the character is not repeated in the string then return it's index
        if(s.lastIndexOf(s[i]) == s.indexOf(s[i])){
            return i
        }
    }
    return -1
};