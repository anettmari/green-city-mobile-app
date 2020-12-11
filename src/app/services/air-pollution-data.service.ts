import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AngularFireStorage } from "@angular/fire/storage";
import { Observable } from "rxjs";
import { SignInService } from './sign-in.service';

@Injectable({
  providedIn: "root",
})
export class AirPollutionDataService {
  profileUrl: Observable<string | null>;

  constructor(
    private http: HttpClient,
    private storage: AngularFireStorage,
    private auth: SignInService
  ) {}

  getAirPollutionData() {
    return new Promise((resolve) => {
      return this.auth.signIn().then(() => {
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
