import { Injectable } from '@angular/core';

/*
  Generated class for the SwishProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SwishProvider {

  constructor() {}

  createPaymentURL(receiver: number, amount: number, message: string){
  return `swish://payment/?data=${encodeURI(
    `{
      "version":1,
      "payee": {
        "value":"${receiver}",
        "editable":false
      },
      "amount": {
        "value":"${amount}",
        "editable":false
      },
      "message": {
        "value":"${message}",
        "editable":false}
      }`)}`
  }

}
