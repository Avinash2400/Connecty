import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import * as CanvasJS from '../../../assets/canvasjs.min';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  usersList: any;
  blogsList: any;
  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  // getSellers() {
  //   this.sellerservice.getAllSellers().subscribe(data => {
  //     console.log(data);
  //     this.sellers = data;
  //   })
  // }

  getUsers() {
    this.userService.getAll().subscribe((data) => {
      console.log(data);
      this.usersList = data;
      this.prepareRegData(this.usersList);
    });
  }

  drawchart(id, datapoints, title, unit, xlabel) {
    var chart = new CanvasJS.Chart(id, {
      animationEnabled: true,
      theme: 'light2',
      title: {
        text: title,
      },
      axisY: {
        title: xlabel,
        titleFontSize: 24,
      },
      data: [
        {
          type: 'column',
          yValueFormatString: `#,### ${unit}`,
          dataPoints: datapoints,
        },
      ],
    });
    chart.render();
  }

  prepareRegData(users) {
    this.getDatewiseValues(users, 'created').subscribe((data) => {
      console.log(data);
      let regData = data;
      this.drawchart(
        'regByDate',
        regData,
        'Registration Data',
        'registration(s)',
        'No. of Registrations'
      );
    });
  }

  getDatewiseValues(records, colname) {
    console.log(records);
    return Observable.create((observer) => {
      let datewise = [];
      this.getUniqueValues(colname, records).subscribe((unique_values) => {
        for (let value of unique_values[1]) {
          console.log(value);
          datewise.push({
            x: new Date(value),
            y: this.getCount(unique_values[0], value),
          });
        }
        observer.next(datewise);
      });
    });
  }

  getUniqueValues(col_name, data) {
    // console.log(col_name+' '+data);
    return Observable.create((observer) => {
      let values = data.map((ele) => {
        let date = new Date(ele[col_name]).setHours(0, 0, 0, 0);
        // console.log(new Date(date).getTime());
        return new Date(date).getTime();
      });

      let uniquevalues = [];
      for (let value of values) {
        if (!uniquevalues.includes(value)) {
          uniquevalues.push(value);
          // console.log(value);
        }
      }
      observer.next([values, uniquevalues]);
    });
  }

  getCount(records, item) {
    let count = 0;
    for (let record of records) {
      if (record == item) {
        count++;
      }
    }

    return count;
  }
}
