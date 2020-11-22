import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AngularFireStorage } from "@angular/fire/storage";
import { Observable } from "rxjs";
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: "root",
})
export class AirPollutionService {
  profileUrl: Observable<string | null>;

  constructor(
    private http: HttpClient,
    private storage: AngularFireStorage,
    private auth: AngularFireAuth
  ) {}

  getInfo() {
    return new Promise((resolve) => {
      return this.auth.signInAnonymously().then(() => {
        this.storage
          .ref("air/air-quality-month.csv")
          .getDownloadURL()
          .subscribe((downloadUrl) => {
            this.http
              .get(downloadUrl, { responseType: "text" })
              .subscribe((data) => {
                resolve(data);
              });
          });
      });
    });
  }
}
