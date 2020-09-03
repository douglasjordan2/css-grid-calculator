// populate number buttons
Array.from(Array(11)).forEach((a, i) => document.querySelector('#numbers').innerHTML += `<div class="btns" style="grid-area: ${i === 10 ? 'clr' : '_' + i}; ${i === 10 && 'background: blue;'}" id=${i === 10 ? 'clr' : '_' + i}>${i === 10 ? 'C' : i}</div>`)

// populate operation buttons
for(let i = 0; i < 5; i++) {
  let op;
  let btn;
  switch(i) {
    case 0:
      op = 'equals';
      btn="=";
      break;
    case 1:
      op = 'plus';
      btn="+";
      break;
    case 2:
      op = 'minus';
      btn = "-";
      break;
    case 3:
      op = 'times';
      btn = "x"
      break;
    case 4:
      op = 'divide';
      btn="&divide;"
      break;
  }

  document.querySelector('#operations').innerHTML += `<div class="btns" style="grid-area: ${op}; ${op === 'equals' && 'background: green;'}" id="${op}">${btn}</div>`
}