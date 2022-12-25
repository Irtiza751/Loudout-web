import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navrail',
  templateUrl: './navrail.component.html',
  styleUrls: ['./navrail.component.scss']
})
export class NavrailComponent implements OnInit {
  primaryNavItmes = [
    { url: '#', icon: 'icon-home' },
    { url: '#', icon: 'icon-playlist' },
    { url: '#', icon: 'icon-radio' },
    { url: '#', icon: 'icon-videos' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
