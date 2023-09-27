export default class TableSorter {
  constructor() {
    this.rows = document.querySelectorAll('tr:not(.table_title)');
    this.table = document.querySelector('table');
    this.titleRow = document.querySelector('tr');
    this.dataRows = Array.from(this.rows);
    this.metods = ['idSort', 'idSortReverse', 'titleSort', 'titleSortReverse', 'yearSort', 'yearSortReverse', 'imdbSort', 'imdbSortReverse'];
    this.metodsIndex = 0;
    this.upArr = this.createUpArr();
    this.downArr = this.createDownArr();
  }

  loopMetod() {
    this.drawTable(this.getMetod(this.metods[this.metodsIndex]));
    this.metodsIndex += 1;
    if (this.metodsIndex > this.metods.length - 1) {
      this.metodsIndex = 0;
    }
  }

  getMetod(name) {
    switch (name) {
      case 'idSort': {
        this.upArr.remove();
        document.querySelector('.table_title_id').insertAdjacentElement('beforeend', this.downArr);
        return this.idSort(); }
      case 'idSortReverse': {
        this.downArr.remove();
        document.querySelector('.table_title_id').insertAdjacentElement('beforeend', this.upArr);
        return this.idSort().reverse(); }
      case 'titleSort': {
        this.upArr.remove();
        document.querySelector('.table_title_title').insertAdjacentElement('beforeend', this.downArr);
        return this.titleSort(); }
      case 'titleSortReverse': {
        this.downArr.remove();
        document.querySelector('.table_title_title').insertAdjacentElement('beforeend', this.upArr);
        return this.titleSort().reverse(); }
      case 'yearSort': {
        this.upArr.remove();
        document.querySelector('.table_title_year').insertAdjacentElement('beforeend', this.downArr);
        return this.yearSort(); }
      case 'yearSortReverse': {
        this.downArr.remove();
        document.querySelector('.table_title_year').insertAdjacentElement('beforeend', this.upArr);
        return this.yearSort().reverse(); }
      case 'imdbSort': {
        this.upArr.remove();
        document.querySelector('.table_title_imdb').insertAdjacentElement('beforeend', this.downArr);
        return this.imdbSort(); }
      case 'imdbSortReverse': {
        this.downArr.remove();
        document.querySelector('.table_title_imdb').insertAdjacentElement('beforeend', this.upArr);
        return this.imdbSort().reverse(); }

      default: throw new Error('нет такого метода сортировки');
    }
  }

  drawTable(rows) {
    for (const row of rows) {
      this.table.insertAdjacentElement('beforeend', row);
    }
  }

  idSort() {
    return this.dataRows.sort((a, b) => a.dataset.id - b.dataset.id);
  }

  titleSort() {
    return this.dataRows.sort((a, b) => (`${a.dataset.title}`).localeCompare(b.dataset.title));
  }

  yearSort() {
    return this.dataRows.sort((a, b) => a.dataset.year - b.dataset.year);
  }

  imdbSort() {
    return this.dataRows.sort((a, b) => Number(a.dataset.imdb) - Number(b.dataset.imdb));
  }

  createUpArr() {
    const up = document.createElement('p');
    up.innerHTML = ' &#8593';
    return up;
  }

  createDownArr() {
    const down = document.createElement('p');
    down.innerHTML = ' &#8595';
    return down;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const tab = new TableSorter();
  setInterval(tab.loopMetod.bind(tab), 2000);
});
