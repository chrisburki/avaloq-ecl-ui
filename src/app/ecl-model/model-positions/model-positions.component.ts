import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';

/** Constants used to fill up our data base. */
const MODELS = ['Standard', 'Simple', 'Poci'];

const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

const INSTRUMENTTYPES = ['Bond', 'Loan', 'Debt Security', 'Money Account'];

const POSITIONTYPES = ['Apo', 'Loan', 'Apo', 'Macc'];
const POSITIONPOSTFIX = ['1.5%', '3.0%', '2.0%', 'Macc KK'];

@Component({
  selector: 'app-model-positions',
  templateUrl: './model-positions.component.html',
  styleUrls: ['./model-positions.component.scss']
})
export class ModelPositionsComponent implements AfterViewInit {
   displayedColumns = ['id', 'name', 'rating', 'instrumentType', 'model', 'openDate', 'closeDate'];
  dataSource: MatTableDataSource<Positions>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    // Create 100 positions
    const positions: Positions[] = [];
    for (let i = 1; i <= 100; i++) { positions.push(createNewEntry(i)); }

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(positions);
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
/** Builds and returns a new User. */
function createNewEntry(id: number): Positions {
  const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  const idx = Math.round(Math.random() * (INSTRUMENTTYPES.length - 1));

  const oDate = new Date('April 08 2017');

  return {
    id: id.toString(),
    name: name + ' - ' + POSITIONTYPES[idx] + ' ' + POSITIONPOSTFIX[idx],
    rating: Math.round(Math.random() * 100).toString(),
    instrumentType: INSTRUMENTTYPES[idx],
    model: MODELS[Math.round(Math.random() * (MODELS.length - 1))],
    openDate: oDate,
    closeDate: null
  };
}

export interface Positions {
  id: string;
  name: string;
  rating: string;
  instrumentType: string;
  model: string;
  openDate: Date;
  closeDate: Date;
}
