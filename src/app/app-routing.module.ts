import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchInputComponent } from './search-input/search-input.component';
import { SearchResultComponent } from './search-result/search-result.component';

const routes: Routes = [
  { path: '', component: SearchInputComponent }, // Путь по умолчанию
  { path: 'search', component: SearchResultComponent }, // Путь для отображения результатов
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
