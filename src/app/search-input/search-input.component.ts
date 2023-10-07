// search-input.component.ts

import { Component } from '@angular/core';
import { SearchService } from '../search.service'; // Импортируйте сервис

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css'],
})
export class SearchInputComponent {
  query: string = '';
  isFocused: boolean = false; // Изначально поле не в фокусе

  constructor(private searchService: SearchService) {}

  onFocus() {
    this.isFocused = true; // Установите флаг при фокусировке
  }

  onBlur() {
    this.isFocused = false; // Сбросьте флаг при потере фокуса
  }

  submitQuery() {
    this.searchService.setQuery(this.query); // Устанавливаем значение запроса через сервис
  }
}
