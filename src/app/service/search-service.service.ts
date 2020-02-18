import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';

export class SearchItem {
  constructor(
    public links: string,
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  constructor(private http: HttpClient) {
    this.results = [];
  }

  apiRoot: string = 'https://images-api.nasa.gov/search?q=';
  results: SearchItem[];

  search(term: string) {
    let apiURL = `${this.apiRoot}${term}&media_type=image`;
    let promise = new Promise((resolve, reject) => {
      this.http
        .get<SearchItem[]>(apiURL)
        .toPromise()
        .then((res: any) => {
          console.log(apiURL);
          this.results = res.map((res: any) => {
            return new SearchItem(
              res.links
            );
          }
          );
          resolve();
        },
          err => {
            reject(err);
          }
        );
    });
    return promise;
  }
}
