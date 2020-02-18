import { Component, OnInit } from '@angular/core';
import { SearchServiceService } from 'src/app/service/search-service.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private searchService: SearchServiceService) { }

  ngOnInit() {
  }

}
