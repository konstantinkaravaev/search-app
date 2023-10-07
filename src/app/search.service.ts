import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private query: string = '';

  setQuery(query: string) {
    this.query = query;
  }

  getQuery(): string {
    return this.query;
  }
}
