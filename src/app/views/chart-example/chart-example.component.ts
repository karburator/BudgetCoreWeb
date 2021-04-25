import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {IBarChartOptions, IChartistData} from 'chartist';
import {ChartEvent, ChartType} from 'ng-chartist';
import {ChartPoint} from '../../model/ChartPoint';
import {ProductHandlerService} from '../../service/product-handler.service';
import * as moment from 'moment';

@Component({
  selector: 'app-chart-example',
  templateUrl: './chart-example.component.html',
  styleUrls: ['./chart-example.component.css']
})
export class ChartExampleComponent implements OnInit {
  productId: number;
  chartPoints: ChartPoint[];

  type: ChartType = 'Bar';
  data: IChartistData;

  options: IBarChartOptions = {
    axisX: {
      showGrid: false,
      labelInterpolationFnc: val => {
        const dt = new Date(val);
        return moment(dt).format('YYYY-MM-DD');
      }
    },
    height: 300
  };

  events: ChartEvent = {
    draw: (data) => {
      if (data.type === 'bar') {
        // data.element.animate({
        //   y2: <IChartistAnimationOptions>{
        //     dur: '0.5s',
        //     from: data.y1,
        //     to: data.y2,
        //     easing: 'easeOutQuad'
        //   }
        // });
      }
    }
  };

  constructor(private route: ActivatedRoute,
              private productHandler: ProductHandlerService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.productId = parseInt(params.get('id'), null);
      this.productHandler.getProductChart(this.productId)
        .subscribe(data => {
          this.chartPoints = data;
          this.data = {
            labels: this.chartPoints.map(el => el.date),
            series: [this.chartPoints.map(el => el.price)]
          };
        });
    });
  }





}
