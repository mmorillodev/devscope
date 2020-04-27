import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-about-floating-card',
  templateUrl: './about-floating-card.component.html',
  styleUrls: ['./about-floating-card.component.css']
})
export class AboutFloatingCardComponent implements OnInit {

  @Input()
  name: string;
  @Input()
  role: string;
  @Input()
  description: string;

  constructor() { }

  ngOnInit(): void {
  }

}
