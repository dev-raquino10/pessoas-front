import { Component } from '@angular/core';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  collapsed = true;

  constructor(private sidebarService: SidebarService) { }

  toggle() {
    this.collapsed = !this.collapsed;
  }

  toggleSidebar() {
    this.sidebarService.toggle();
  }
}
