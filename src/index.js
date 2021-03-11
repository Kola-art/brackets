module.exports = function check(str, bracketsConfig) {
  let eq = str.length;
        let res = "";
      for (let [x, y] of bracketsConfig) {
        
        str = str.split(`${x}${y}`).join('');
      }

      if (str.length === 0) {
        res = true;
        return res;
      }
      else if (str.length === eq) {
        res = false;
        return res;
      }
    
      return check(str, bracketsConfig);
}

