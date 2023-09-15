import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/service/data.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private dataServ: DataService, private http: HttpClient) { }

  selected: boolean = false;

  items: any = '';

  ngOnInit(): void {

    this.dataServ.getData().subscribe((data) => {

      this.items = data
      console.log(data)
    })

  }

  userData(event: any) {

    if (event.target.checked == true) {
      console.log('checkbox is checked');

    }
    else {
      console.log('checkbox is unchecked');
    }
  }

}
