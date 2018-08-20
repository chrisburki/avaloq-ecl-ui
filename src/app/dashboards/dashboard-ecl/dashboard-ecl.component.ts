import { Component, AfterViewInit } from '@angular/core';
import { Shape } from '../../shared/shape/shape';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard-ecl.component.html',
  styleUrls: ['./dashboard-ecl.component.scss']
})
export class DashboardEclComponent implements AfterViewInit {

    constructor(public shape: Shape) {
    }

    // ECL Model
    ////////////

    // Labels
    public modelLegendLabels: Array<any>  = [
        {label: 'Standard', class: 'text-info'},
        {label: 'Simple', class: 'text-success'},
        {label: 'Poci', class: 'text-purple'}
    ];

    // Doughnut Chart
    public modelDoughnutChartLabels: string[] = [
        'Standard',
        'Simple',
        'Poci'
    ];
    public modelDoughnutChartOptions: any = {
        responsive: false
    };
    public modelDoughnutChartData: number[] = [450000, 150000, 10000];
    // tslint:disable-next-line:no-inferrable-types
    public modelDoughnutChartType: string = 'doughnut';
    // tslint:disable-next-line:no-inferrable-types
    public modelDoughnutChartLegend: boolean = false;

    public modelDoughnutChartChartColors: Array<any> = [{backgroundColor:  ['#1976d2', '#26dad2', '#dadada']}];

    // Barchart Chart
    public modelBarChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true,
        barThickness : 10
    };

    public modelBarChartLabels: string[] = [
        'Januar',
        'Februar',
        'March',
        'April',
        'May',
        'June',
        'July'
    ];
    public modelBarChartType = 'bar';
    public modelBarChartLegend = false;

    public modelBarChartData: any[] = [
        { data: [410000, 350000, 400000, 380000, 470000, 400000, 450000], label: 'Standard' },
        { data: [160000, 150000, 120000, 130000, 110000, 140000, 150000], label: 'Simple' },
        { data: [9000, 11000, 10500, 10200, 11400, 9800, 10000], label: 'Poci' }
    ];
    public modelBarChartColors: Array<any> = [
        {backgroundColor: '#1976d2'},
        {backgroundColor: '#26dad2'},
        {backgroundColor: '#dadada'}
    ];


   // ECL Stage
    ///////////

    // Labels
    public stageLegendLabels: Array<any>  = [
        {label: 'Stage 1', class: 'text-info'},
        {label: 'Stage 2', class: 'text-success'},
        {label: 'Stage 3', class: 'text-purple'}
    ];

    // Barchart Chart
    public stageTrendBarChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true,
        barThickness : 10,
        scales: {
            xAxes: [{ stacked: true }],
            yAxes: [{ stacked: true }]
          }
    };

    public stageTrendBarChartLabels: string[] = [
        'Januar',
        'Februar',
        'March',
        'April',
        'May',
        'June',
        'July'
    ];
    public stageTrendBarChartType = 'bar';
    public stageTrendBarChartLegend = false;

    public stageTrendBarChartData: any[] = [
        { data: [410000, 350000, 400000, 380000, 470000, 400000, 450000], label: 'Standard' },
        { data: [160000, 150000, 120000, 130000, 110000, 140000, 150000], label: 'Simple' },
        { data: [9000, 11000, 10500, 10200, 11400, 9800, 10000], label: 'Poci' }
    ];
    public stageTrendBarChartColors: Array<any> = [
        {backgroundColor: '#1976d2'},
        {backgroundColor: '#26dad2'},
        {backgroundColor: '#dadada'}
    ];

/*
    // lineChart
    ///////////
    public lineChartData: Array<any> = [
        { data: [410000, 350000, 400000, 380000, 470000, 400000, 450000], label: 'Standard' },
        { data: [160000, 150000, 120000, 130000, 110000, 140000, 150000], label: 'Simple' },
        { data: [9000, 11000, 10500, 10200, 11400, 9800, 10000], label: 'Poci' }
    ];
    public lineChartLabels: Array<any> = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July'
    ];
    public lineChartOptions: any = {
        responsive: true
    };
    public lineChartColors: Array<any> = [
        {
            // blue
            backgroundColor: 'rgba(25,118,210,0.1)',
            borderColor: '#1976d2', // 'rgba(25,118,210,1)',
            pointBackgroundColor: '#1976d2', // 'rgba(25,118,210,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(25,118,210,0.5)'
        },
        {
            // green
            backgroundColor: 'rgba(38,218,210,0.1)',
            borderColor: '#26dad2', // 'rgba(38,218,210,1)',
            pointBackgroundColor: '#26dad2',  // 'rgba(38,218,210,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(38,218,210,0.5)'
        },
        {
            // light grey
            backgroundColor: 'rgba(218,218,218,0.1)',
            borderColor: '#dadada', // 'rgba(38,218,210,1)',
            pointBackgroundColor: '#dadada',  // 'rgba(38,218,210,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(218,218,218,0.5)'
        }

    ];
    public lineChartLegend = true;
    public lineChartType = 'line';
*/

    // events
    public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }

    ngAfterViewInit() {}
 }
