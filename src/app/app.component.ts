import {
  Component,
  OnInit,
  PLATFORM_ID,
  TransferState,
  inject,
  makeStateKey,
} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserDashboardModule } from './user-dashboard/user-dashboard.module';
import { AdminDashboardModule } from './admin-dashboard/admin-dashboard.module';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UserDashboardModule,
    AdminDashboardModule,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  // platformId = inject(PLATFORM_ID);
  // transferState = inject(TransferState);

  // browserTime?: string;
  // serverTime?: string;

  ngOnInit() {
    // const serverTimeStateKey = makeStateKey<string>('serverTime');
    // if (isPlatformBrowser(this.platformId)) {
    //   this.setBrowserTime();
    //   setInterval(() => {
    //     this.setBrowserTime();
    //   }, 1000);
    //   this.serverTime = this.transferState.get(
    //     serverTimeStateKey,
    //     "I don't know, I wasn't generated on the server."
    //   );
    // } else if (isPlatformServer(this.platformId)) {
    //   this.serverTime = new Date().toLocaleTimeString('en-US');
    //   this.transferState.set(serverTimeStateKey, this.serverTime);
    //   console.log('I am being rendered on the server');
    // }
  }

  // setBrowserTime() {
  //   this.browserTime = new Date().toLocaleTimeString('en-US');
  // }
}
