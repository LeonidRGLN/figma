import { Component, OnInit,ViewChild } from '@angular/core';
import { registerables, Chart } from 'chart.js';

import ChartDataLabels from 'chartjs-plugin-datalabels';
import {map} from 'rxjs';
import { AppServises} from './charts.servise';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
  providers: [AppServises]
})


export class ChartsComponent implements OnInit {
  data: any; canvas: any; ctx: any; canvascanvas: any; ctxctx: any;
  
  @ViewChild('chart') chart: any
  @ViewChild('chart1') chart1: any

  constructor(private stats: AppServises) {
    Chart.register(ChartDataLabels);
    Chart.register(...registerables);
  }

  ngOnInit() {
    this.stats.getServe()
      .pipe(
        map((value: any) => value.data)
      ).subscribe(
        (value: any) => this.data = value,
        (err:any) => console.log(err),
        () => this.createChart()
      ) }

  createChart() {
    this.canvas = this.chart.nativeElement;
    this.canvascanvas = this.chart1.nativeElement;
    this.ctx = this.canvas.getContext('2d');
    this.ctxctx = this.canvascanvas.getContext('2d');


    new Chart(this.ctx, {
      type: 'line',
      data: {
        datasets: [{
          label: 'куда',
          data: this.data,
          borderColor: '#DDA0DD',
          parsing: {
            yAxisKey: 'qty_shk_cat1'
          },
        datalabels: {
          formatter: function (value) {
              return value.qty_shk_cat1;
            }  } },
          {
        label: 'нужно',
        data: this.data,
        borderColor: '#483D8B',
        parsing: {
              yAxisKey: 'qty_shk_cat2'
            },
        datalabels: {
          formatter: function (value) {
                return value.qty_shk_cat2;
              } } },
          {
            label: 'кликнуть',
            data: this.data,
            borderColor: '#808000',
            parsing: {
              yAxisKey: 'qty_shk_cat3'
            },
            datalabels: {
              formatter: function (value) {
                return value.qty_shk_cat3;
              }} },
          {
            label: 'чтобы',
            data: this.data,
            borderColor: '#5eaf35',
            parsing: {
              yAxisKey: 'qty_shk_cat4'
            },
            datalabels: {
              formatter: function (value) {
                return value.qty_shk_cat4;
              }} },
          {
            label: 'улыбнуться',
            data: this.data,
            borderColor: '#8B0000',
            parsing: {
              yAxisKey: 'qty_shk'
            },
            datalabels: {
              formatter: function (value) {
                return value.qty_shk;
              } }}] },
      options: {
        parsing: { xAxisKey: 'dt_date' },
        elements: { line: { tension: 0.4}},
        plugins: { datalabels: {
            color: 'black',
            backgroundColor: 'white',
            borderRadius: 15,
            align: 'top'
          }}},});

    let s = 0,s2 = 0,s3 = 0,s4 = 0;
 
    this.data.forEach((value: any) => {
      s += value.qty_shk_cat1; s2 += value.qty_shk_cat2; s3 += value.qty_shk_cat3; s4 += value.qty_shk_cat4
      })

    new Chart(this.ctxctx, {
      type: 'pie',
      data: {
        labels: ['кликни', 'на', 'крестик', 'справа в верху'],
        datasets: [{
          data: [s, s2, s3, s4],
          parsing: {
            key: 'qty_shk'
          },
          backgroundColor: [ 'rgb(139, 0, 0)','rgb(46, 139, 87)', 'rgb(32, 178, 170)', 'rgb(255, 0, 255)',],
          hoverOffset: 4}]
      },
      options: {
        plugins: {
          datalabels: {
            formatter() {
              return null
            } }  }}})
 }

}
