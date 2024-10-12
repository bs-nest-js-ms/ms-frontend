import { Component, Input, OnInit } from '@angular/core';

export interface MenuItem {
  icon: string;
  label: string;
  route: string;
}

@Component({
  selector: 'app-shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {

  @Input() public avatarSize!: string;
  public menuItems: MenuItem[] = [
    {
      icon: 'account_circle',
      label: 'Profile',
      route: '/pages/profile',
    },
    {
      icon: 'supervised_user_circle',
      label: 'Users',
      route: '/pages/users'
    },
    {
      icon: 'reorder',
      label: 'Orders',
      route: '/pages/orders'
    },
    {
      icon: 'add_shopping_cart',
      label: 'Products',
      route: '/pages/products'
    },
  ];

  ngOnInit(): void {
    if (!this.avatarSize) throw new Error('Avatar Size property is mandatory');
  }

}
