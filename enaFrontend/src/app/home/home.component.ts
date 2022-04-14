import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public annee: any;

  constructor() { }

  ngOnInit(): void {
    this.annee = Date.now();
  }

}
