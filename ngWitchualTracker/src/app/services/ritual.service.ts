import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Ritual } from '../models/ritual';

@Injectable({
  providedIn: 'root'
})
export class RitualService {
  private baseUrl = 'http://localhost:8082/'; // adjust port to match server
  private url = this.baseUrl + 'api/ritual'; // change 'todos' to your API path
  constructor(private http: HttpClient) { }

  index() {
    return this.http.get<Ritual[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error (
            'RitualService.index(): error retrieving Ritual List: ' + err
          )
        )
      }
      )
      )
  }

  create(ritual: Ritual) {
    return this.http.post<Ritual>(this.url, ritual).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error (
            'RitualService.create(): error creating Ritual: ' + err
          )
        );
      })
    );
  }



  update(ritual: Ritual) {
    return this.http.put<Ritual>(this.url + '/' + ritual.id, ritual).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error (
            'RitualService.update(): error updating Ritual: ' + err
          )
        );
      })
    );
  }

  destroy(id: number) {
    return this.http.delete<Ritual>(this.url + '/' + id).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error (
            'RitualService.destroy(): error deleting Ritual: ' + err
          )
        );
      })
    );
  }
}




