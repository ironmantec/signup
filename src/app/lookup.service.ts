import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LookupService {
  constructor() {}

    public emailExist(email: string): Observable<boolean> {
      const currentEmails = ['abc@signup.com', 'def@test.com', 'ghi@go.com'];
      const isExist: boolean = currentEmails.includes(email);
      console.log(isExist);
      return of(isExist);
  }
}
