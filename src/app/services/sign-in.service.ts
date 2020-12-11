import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor(private auth: AngularFireAuth) { }

  signIn(){
    return new Promise((resolve) => {
      return this.auth.signInAnonymously().then(({user}) => {
        //@ts-ignore
        resolve(user.l);
      })
    })
  }
}
