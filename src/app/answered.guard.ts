import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { QuestionsService } from './services/questions.service';

@Injectable({
  providedIn: 'root'
})
export class AnsweredGuard implements CanActivate {
  constructor(
    private router: Router,
    private _questions: QuestionsService,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this._questions.areAnsweredAll()) {
      return this.router.parseUrl('/')
    }

    return true;
  }
  
}
