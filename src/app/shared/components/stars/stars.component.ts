import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  @Input() stars!: number;
  
  constructor() { }

  ngOnInit(): void {
    if (this.stars === undefined) {
      this.stars = 0;
    }
  }

}
