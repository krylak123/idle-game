import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Stats } from '../enums/stats.enum';

@Injectable({
  providedIn: 'root',
})
export class StatsApiService {
  constructor(private http: HttpClient) {}

  public loadStats() {
    return this.http.get<Stats>(`${environment.API_URL}/stats`);
  }
}
