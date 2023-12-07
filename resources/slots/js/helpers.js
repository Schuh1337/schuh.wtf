Array.prototype.shuffle = function () {
  for (let i = this.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [this[i], this[j]] = [this[j], this[i]];
  }
  return this;
};

Number.prototype.randTo = function (max) {
  let min = this;
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

Array.prototype.empty = function () {
  return this.length === 0 ? !0 : !!0;
};

Array.prototype.closest = function (num) {
  let currVal = this[0],
    currIndex = 0;
  this.forEach((val, i) => {
    if (Math.abs(num - val) < Math.abs(num - currVal)) {
      currVal = val;
      currIndex = i;
    }
  });

  return {
    val: currVal,
    index: currIndex,
  };
};

const find = function (e) {
  if (typeof e === 'string') {
    return document.querySelector(e);
  }
  return e;
};

Array.prototype.rnd = function () {
  return this[Math.floor(Math.random() * this.length)];
};
