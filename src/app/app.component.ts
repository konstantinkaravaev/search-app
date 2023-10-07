import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private route: ActivatedRoute, private router: Router) {}

  submitQuery(query: string) {
    // Передача параметра 'query' при переходе на маршрут '/search'
    this.router.navigate(['/search'], { queryParams: { q: query } });
  }
}
