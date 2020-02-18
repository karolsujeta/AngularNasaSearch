import { Component, OnInit, Query } from '@angular/core';
import { SearchServiceService } from '../search-service.service';
// const axios = require('axios');

// export default {
//   name: 'search',
//   data() {
//     return {
//       msg: 'Search',
//       query: '',
//       results: ''
//     }
//   },

// }

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  results;

  constructor(
    private searchService: SearchServiceService
  ) { }

  ngOnInit() {
  }

  doSearch(term: string) {
    this.searchService.search(term);
  }

}


