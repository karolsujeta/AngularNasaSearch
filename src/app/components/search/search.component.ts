import { Component, OnInit, Query } from '@angular/core';
import { SearchServiceService } from '../../service/search-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  results;

  constructor(private searchService: SearchServiceService) { }

  ngOnInit() {
  }

  doSearch(term: string) {
    this.searchService.search(term);
  }

}


