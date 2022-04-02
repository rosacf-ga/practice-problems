/**
Write a function to find the longest common prefix string amongst an array of strings.
------- exception: If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower",
               "flow",
               "flight"]
Output: "fl"

Example 2:
Input: strs = ["dog",
               "racecar",
               "car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Constraints:
1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lower-case English letters.

    /*
    Input: strs = ["flower",
                   "flow",
                   "flight",
                   "flowering"
                   "..."]
    
    ===============================================
    for loop - cols
    for loop - test that letter in first item is same with other
    if - condition: checking letters are equal
    ===============================================
    */

//PSUEDOCODE
//     for each col { // run forever
//         // what letter is our answer key
        
//         for each item in col {
//             // check if answer key is equal to current item
//             if() {
//                 // something if it is the same
//             } else {
//                 something if it is different
//             }
//         }
//     }
// };

// /**
//  * @param {string[]} strs
//  * @return {string}
//  */
var longestCommonPrefix = function(strs) {
  for (let i=0; i<strs[0].length; i++) {//have to loop over the characters in first string first in order to compare anything
    let char = strs[0][i]; //will iterate over each char in 1st string
    for (let j=0; j<strs.length; i++) {
			if (strs[i] === strs[0][i]) { //compare it to first string

			} else {

			}
		} 
  }
}