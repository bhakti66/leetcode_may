/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    //convert the number to binary string using toString() with base 2
    num = num.toString(2)
    complement = ""
    //iterate the string and create the complement string
    //you can also use num.replace to first replace all 0's with alias then replace 1's with zero and finally replace alias with 1
    for(var i=0;i<num.length;i++){
        if(num[i]=='0'){
            complement+='1'
        }else
        {
            complement+='0'
        }
    }
    //using parseInt function convert the string with 2 to a decimal number
    return parseInt(complement,2)
};
