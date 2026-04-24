import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/core/model/navigation-model';
import { MENU_ITEMS } from 'src/app/data/menu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  menuList !: MenuItem[];
  name='fas fa-tachometer-alt';
  ngOnInit(): void {
    this.menuList = MENU_ITEMS
  }

}
