import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AccessLogService } from '../services/access-log.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers:[AccessLogService]
})
export class LogFormComponent implements OnInit {

  newVisit: Object = {};

  constructor(private theAccessLog: AccessLogService) { }

  ngOnInit() {
  }
  addAccess(person, message){
    this.theAccessLog.addAccessItem(person, message)
  }

  getAccessLog(){
    this.theAccessLog.getAccessLog();
  }

}
