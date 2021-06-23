import { Component, OnInit } from '@angular/core';
import { QueryService } from '../services/query.service';

@Component({
  selector: 'app-view-queries',
  templateUrl: './view-queries.component.html',
  styleUrls: ['./view-queries.component.css'],
})
export class ViewQueriesComponent implements OnInit {
  queryList;
  constructor(private queryService: QueryService) {}

  ngOnInit(): void {
    this.fetchQueries();
  }

  fetchQueries = () => {
    this.queryService.getAll().subscribe((data) => {
      console.log(data);
      this.queryList = data;
    });
  };
}
