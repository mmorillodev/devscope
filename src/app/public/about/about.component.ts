import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public window: Window;

  constructor() { }

  ngOnInit(): void {
    this.window = window;
  }

  onscroll() {

  }

  onresize() {

  }

  scroll(id: string) {
    const element: Element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }
}
