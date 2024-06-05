import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserDashboardModule } from './user-dashboard/user-dashboard.module';
import { AdminDashboardModule } from './admin-dashboard/admin-dashboard.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserDashboardModule, AdminDashboardModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ns';
}
