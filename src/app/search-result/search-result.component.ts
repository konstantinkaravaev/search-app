import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service'; // Импортируйте сервис

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
})
export class SearchResultComponent implements OnInit {
  query: string = '';

  constructor(private searchService: SearchService) {}

  ngOnInit() {
    this.query = this.searchService.getQuery(); // Получаем значение запроса через сервис
  }
}
