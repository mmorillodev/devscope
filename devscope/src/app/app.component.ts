import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title: string;
  showMenu: boolean;

  ngOnInit(): void {
    this.title = 'devscope';
    this.showMenu = window.location.pathname === '/';
  }
}
