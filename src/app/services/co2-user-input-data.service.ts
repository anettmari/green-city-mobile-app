import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Transports } from "../model/transports";
import { SignInService } from "./sign-in.service";
import { TransportType } from "../enums/transport-type";

@Injectable({
  providedIn: "root",
})
export class Co2UserInputDataService {
  constructor(
    private firestore: AngularFirestore,
    private auth: SignInService
  ) {}

  checkIfExist() {
    return new Promise((resolve) => {
      this.auth.signIn().then((id) => {
        this.firestore.firestore
          .doc("/userData/" + id)
          .get()
          .then((docSnapshot) => {
            resolve(docSnapshot.exists);
          });
      });
    });
  }

  uploadCarData(data: number) {
    this.auth.signIn().then((id: string) => {
      this.checkIfExist().then((exists) => {
        if (exists) {
          this.firestore.collection("userData").doc(id).update({
            car: data,
          });
        } else {
          this.firestore.collection("userData").doc(id).set({
            car: data,
          });
        }
      });
    });
  }

  uploadMotorData(data: number) {
    this.auth.signIn().then((id: string) => {
      this.checkIfExist().then((exists) => {
        if (exists) {
          this.firestore.collection("userData").doc(id).update({
            motor: data,
          });
        } else {
          this.firestore.collection("userData").doc(id).set({
            motor: data,
          });
        }
      });
    });
  }

  uploadBusData(data: number) {
    this.auth.signIn().then((id: string) => {
      this.checkIfExist().then((exists) => {
        if (exists) {
          this.firestore.collection("userData").doc(id).update({
            bus: data,
          });
        } else {
          this.firestore.collection("userData").doc(id).set({
            bus: data,
          });
        }
      });
    });
  }

  uploadTramData(data: number) {
    this.auth.signIn().then((id: string) => {
      this.checkIfExist().then((exists) => {
        if (exists) {
          this.firestore.collection("userData").doc(id).update({
            tram: data,
          });
        } else {
          this.firestore.collection("userData").doc(id).set({
            tram: data,
          });
        }
      });
    });
  }

  getUserCalculatedData() {
    return new Promise((resolve) => {
      this.auth.signIn().then((id: string) => {
        this.firestore
          .collection("userData")
          .doc<Transports>(id)
          .valueChanges()
          .subscribe((res: Transports) => {
            resolve(res);
          });
      });
    });
  }

  calculateCo2Emission(data: number, type: TransportType) {
    switch (type) {
      case TransportType.CAR:
        data *= 0.133;
        break;
      case TransportType.MOTOR:
        data *= 0.094;
        break;
      case TransportType.BUS:
        data *= 0.069;
        break;
      case TransportType.TRAM:
        data *= 0.042;
        break;
    }
    return data;
  }
}
