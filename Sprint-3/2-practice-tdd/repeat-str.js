function repeatStr(str, count) {
  if (count < 0 || !Number.isInteger(count)) {
    throw new Error("Count must be a non-negative integer");
  }

  return count > 0 ? str.repeat(count) : "";
}

module.exports = repeatStr;
