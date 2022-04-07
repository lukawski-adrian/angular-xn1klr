import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface TempElement {
  name: string;
  position: number;
  temp: number;
  symbol: string;
}

const ELEMENT_DATA: TempElement[] = [
  { position: 1, name: 'Hydrogen', temp: 1.0079, symbol: '°C' },
  { position: 2, name: 'Helium', temp: 4.0026, symbol: '°C' },
  { position: 3, name: 'Lithium', temp: 6.941, symbol: '°C' },
  { position: 4, name: 'Beryllium', temp: 9.0122, symbol: '°F' },
  { position: 5, name: 'Boron', temp: 10.811, symbol: '°C' },
  { position: 6, name: 'Carbon', temp: 12.0107, symbol: '°C' },
  { position: 7, name: 'Nitrogen', temp: 14.0067, symbol: '°F' },
  { position: 8, name: 'Oxygen', temp: 15.9994, symbol: '°F' },
  { position: 9, name: 'Fluorine', temp: 18.9984, symbol: '°F' },
  { position: 10, name: 'Neon', temp: 20.1797, symbol: '°F' },
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-temp-table',
  styleUrls: ['./temp-table.component.css'],
  templateUrl: './temp-table.component.html',
})
export class TempTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'temp', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
