import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

import { API_URL } from 'src/app/core/const';
import { InsertRating } from 'src/app/core/interfaces/insertRating';
import { Rating } from 'src/app/core/interfaces/rating';
import { HeaderService } from 'src/app/shared/services/header.service';

const URL = `${API_URL}/ratings`;

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(
    private http: HttpClient,
    private headerService: HeaderService
  ) { }

  getUserRating(ci: string): Observable<Rating[]> {
    const userCI = JSON.stringify(ci);
    return this.http.post<Rating[]>(`${URL}/get-ratings-by-user`, userCI, { headers: this.headerService.getHeader() }).pipe(
      catchError(this.handleError<Rating[]>(`getUserRating`))
    );
  }

  insertNRating(info: InsertRating) {
    return this.http.post<any>(`${URL}/insert-rating`, info, { headers: this.headerService.getHeader() }).pipe(
      catchError(this.handleError<any>(`insertNRating`))
    );
  }

  private handleError<T>(operation: string, result?: T){
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.error}`);
      return of(result as T);
    }
  }
}
