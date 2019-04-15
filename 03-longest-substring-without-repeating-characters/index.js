// const solution = (str) => {
//   const allSubStrArr = _getStrAllSubStr(str)
//   // allSubStrArr.
// }

// function _getStrAllSubStr(str) {
//   const length = str.length
//   let arr = []
//   for (let i = 0; i < length; i++) {
//     for (let j = 1; j <= length - i; j++) {
//       const subStr = str.substr(i, j)
//       arr.push(subStr)
//     }
//   }
//   return arr
// }

var lengthOfLongestSubstring = function(s) {
  var str="" //存放无重复子串
  var size=0 //当前最长无重复子串的长度
  for(var i=0,len=s.length;i<len;i++){
      var char=s.charAt(i)
      var index=str.indexOf(char)
      if(index==-1){
          str+=char
          size=size<str.length?str.length:size
      }else{
          str=str.substr(index+1)+char
      }
  }
  return size
};
lengthOfLongestSubstring('abccd')
