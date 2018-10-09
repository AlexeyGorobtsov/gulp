"use strict";

var array = ['Chris', 'Bob', 'Mark', 'Paul'];
array.forEach(function (e, i, a) {
  var elem = document.createElement('p');
  elem.textContent = "".concat(i + 1, ". ").concat(e);
  document.body.appendChild(elem);
});