import { Injectable } from '@angular/core';

@Injectable()
export class AccessLogService {

  // logMessages: {person: string, message: string, createdAt:Date}[]=[]
logMessages: any[] = [];
  newVisit: Object = {};

  constructor() { }

 addAccessItem(person: string, message: string){
   let newVisit = {
     person: person,
     message:  message,
     createdAt: Date()
   }
   this.logMessages.push(newVisit);
   console.log(newVisit)
 }
 getAccessLog(){
   console.log(this.logMessages);
   return this.logMessages;
 }
}
