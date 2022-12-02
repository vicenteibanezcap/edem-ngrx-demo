import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICatFact } from '../interfaces/cat.interface';

@Injectable({
  providedIn: 'root',
})
export class CatService {
  constructor(private httpClient: HttpClient) {}

  getCatFact(): Observable<ICatFact> {
    return this.httpClient.get<ICatFact>('https://catfact.ninja/fact');
  }
}
