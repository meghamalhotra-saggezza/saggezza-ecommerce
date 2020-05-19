import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.css']
})
export class BannersComponent implements OnInit {
  public feature:String='feature';
  public sale:String='sale';
  
  constructor() { }

  ngOnInit(): void {
  }

}
