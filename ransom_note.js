/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    counter=0;
    ransomNote=ransomNote.replace(/ /g,'');
    magazine=magazine.replace(/ /g,'')
    for(var i=0;i<ransomNote.length;i++){
        for(var j=0;j<magazine.length;j++){
            if(ransomNote[i]==magazine[j]){
                magazine=magazine.replace(magazine.charAt(j),'');
                counter+=1
                break
            }
        }
    }
    if(counter>=ransomNote.length){
        return true
    }
    return false
}
canConstruct("a", "b")
canConstruct("aa", "ab")
canConstruct("aa", "aab")