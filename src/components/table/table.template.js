
const CODES = {
  A: 65,
  Z: 90,
};

function createCell(_, col) {
  return `
    <div class="cell" contenteditable data-col="${col}"></div>
  `;
}

function createCol(col, index) {
  return `
    <div class="column" data-type="resizable" data-col="${index}">
      ${col}
      <div class="col-resize" data-resize="col"></div>
    </div>
  `;
}

function createRow(index, content) {
  const resize = index ? '<div class="row-resize" data-resize="row"></div>' : '';
  return `
    <div class="row" data-type="resizable">
      <div class="row-info">
      ${index ? index : ''}
      ${resize}
      </div>
      <div class="row-data">${content}</div>
    </div>
  `;
}
// _ placeholder for non used parameter
function toChar(_, index) {
  return String.fromCharCode(CODES.A + index);
}

export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z -CODES.A +1;
  const rows = [];

  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(createCol)
      .join('');


  rows.push(createRow(null, cols));

  const cells = new Array(colsCount)
      .fill('')
      .map(createCell)
      .join('');

  for (let i=0; i<rowsCount; i++) {
    rows.push(createRow(i+1, cells));
  }
  return rows.join('');
}
