let index = localStorage.getItem('selectedCharacter');

// Safety fallback (if nothing saved)
if (index === null) index = 0;

let char = characters[index];

// Fill the page
document.getElementById('infoName').textContent = char.charName;
document.getElementById('infoAge').textContent = `Age: ${char.charAge}`;
document.getElementById('infoBio').textContent = char.backstory;

document.getElementById('aff1').textContent = char.aff1;
document.getElementById('aff2').textContent = char.aff2;
document.getElementById('aff3').textContent = char.aff3;

document.getElementById('charImg').src = char.img;
