const momentToLuxonMap: {[key: string]: string} = {
  "M": "L",
  "Mo": "L",
  "MM": "LL",
  "MMM": "LLL",
  "MMMM": "LLLL",
  "Q": "q",
  "D": "d",
  "DD": "dd",
  "DDD": "o",
  "DDDD": "ooo",
  "d": "c",
  "ddd": "ccc",
  "dddd": "cccc",
  "w": "W",
  "ww": "WW",
  "YY": "yy",
  "YYYY": "yyyy",
  "A": "a",
  "a": "a",
  "H": "H",
  "HH": "HH",
  "h": "h",
  "hh": "hh",
  "m": "m",
  "mm": "mm",
  "s": "s",
  "ss": "ss",
  "S": "S",
  "SS": "SS",
  "SSS": "SSS",
  "Z": "ZZ",
  "ZZ": "ZZ",
  "X": "X",
  "x": "x",
  "[": "'",
  "]": "'"
};

export const mapFormat = (momentFormat: string) => {
    // Regular expression for capturing the moment tokens
    const tokenRegex = new RegExp(Object.keys(momentToLuxonMap).join('|'), 'g');
    
    // Replacing the moment tokens with the equivalent luxon tokens
    return momentFormat.replace(tokenRegex, match => momentToLuxonMap[match] || match);
  }
