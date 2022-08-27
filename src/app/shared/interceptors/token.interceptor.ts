import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor

} from "@angular/common/http";
import { Observable } from "rxjs";
import { UserService } from '../services/user.service'

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private auth: UserService) {
  }

  addAuth(req: HttpRequest<any>) {
    const getToken = this.auth.getToken();

    // @ts-ignore
    if (!getToken.token) return req

    return req.clone({
      setHeaders: {
        // @ts-ignore
        Authorization: `Bearer ${getToken.token}`
      }
    })
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(this.addAuth(req));

  }
}
