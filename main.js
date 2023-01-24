

function stringLength(string) {
   if(string.length > 0 && string.length < 10)
    { return string.length }
   else { 
    throw new Error('The string should be longer than 1 character and smaller than 10 characteres') 
  }

}
module.exports = stringLength;