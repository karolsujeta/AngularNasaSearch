import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class SearchItem {
  constructor(
    public links: string
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  constructor(private http: HttpClient) {
    this.results = [];
  }

  // getAlbums() {
  //   return this.http.get('https://jsonplaceholder.typicode.com/albums');
  // }

  apiRoot: string = 'https://images-api.nasa.gov/search?q=';
  results: SearchItem[];

  search(term: string) {
    let apiURL = `${this.apiRoot}${term}&media_type=image`;
    let promise = new Promise((resolve, reject) => {
      this.http.get(apiURL)
        .toPromise()
        .then(
          (res: any) => {
            console.log(apiURL);
            this.results = this.results.map(item => {
              return new SearchItem(
                item.links,
              );
            })
            console.log(res);
          },
          msg => { reject() }
        )
    });
    return promise;
  }
}
