import { Component } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { Message } from './message';
import { Notification } from './notification';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class AppHeaderComponent {
    public config: PerfectScrollbarConfigInterface = {};

    notifications: Notification[] = [{
      round: 'round-danger',
      status: 'read',
      icon: 'ti-link',
      title: 'Admin',
      subject: 'New Settings available!',
      time: '9:30 AM'
    }, {
      round: 'round-success',
      status: 'read',
      icon: 'ti-calendar',
      title: 'Event today',
      subject: 'Just a reminder that need to start a new ECL calculation',
      time: '9:10 AM'
    }, {
      round: 'round-info',
      status: 'read',
      icon: 'ti-settings',
      title: 'Settings',
      subject: 'You can choose "Mini Sidebar"',
      time: '9:08 AM'
    }, {
      round: 'round-primary',
      status: 'read',
      icon: 'ti-user',
      title: 'Contact Mr. Meier',
      subject: 'Contact Mr. Meier regarding Vectors before doing the ECL calculation!',
      time: '9:00 AM'
    }];

    mymessages: Message[] = [{
      useravatar: 'assets/images/users/1.jpg',
      status: 'online',
      from: 'Peter Sagan',
      subject: 'Just call me when your back!',
      time: '9:30 AM'
    }, {
      useravatar: 'assets/images/users/2.jpg',
      status: 'busy',
      from: 'Nina Singer',
      subject: 'ECL Vectors inconsistent',
      time: '9:10 AM'
    }, {
      useravatar: 'assets/images/users/2.jpg',
      status: 'away',
      from: 'Nina Singer',
      subject: 'ECL Vectors not yet available!',
      time: '9:08 AM'
    }, {
      useravatar: 'assets/images/users/4.jpg',
      status: 'offline',
      from: 'Matthias Knecht',
      subject: 'Credit departement not yet finished with EOM',
      time: '9:00 AM'
    }];

    activeMessageCount(): number {
      let messagecount: number;
      messagecount = 0;

      for (let idx = 0; this.mymessages.length > idx; idx++) {
        if (this.mymessages[idx].status === 'online') {
          messagecount = messagecount + 1;
        }
      }

      return messagecount;
    }

    activeNotifcationCount(): number {
      let notifcationcount: number;
      notifcationcount = 0;

      for (let idx = 0; this.notifications.length > idx; idx++) {
        if (this.notifications[idx].status === 'unread') {
          notifcationcount = notifcationcount + 1;
        }
      }

      return notifcationcount;
    }
  }
