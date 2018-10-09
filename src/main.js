const array = ['Chris', 'Bob', 'Mark', 'Paul'];
array.forEach((e, i, a) => {
    const elem = document.createElement('p');
    elem.textContent  = `${i + 1}. ${e}`;
    document.body.appendChild(elem);
});