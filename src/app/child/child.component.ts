import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private dataServ:DataService,private http:HttpClient) { }

  selected:boolean=false;
  
  items:any='';
  candidates:any[]=[];
  filterObj={
    "userId":'',
    "id":'',
    "title":'',
    "completed":"",
    "PageNumber":"1",
    "PageSize":"5"
  }

  ngOnInit(): void {

    this.dataServ.getData().subscribe((data)=>{

      this.items=data
      console.log(data)
    })
    // this.filterCandidates();
    
  }
  
  doSomething(event:any){
  
    if(event.target.checked==true){
      console.log('checkbox is checked');
      
      
      
      // ng-class="{strike:task.completed != false}"
    }
    else{
      console.log('checkbox is unchecked');
    }
  }
  // filterCandidates(){
  //   let url='https://jsonplaceholder.typicode.com/todos'
  //   return this.http.post('https://jsonplaceholder.typicode.com/todos',this.filterObj).subscribe((res:any)=>{
  //   this.candidates=res.data
  //   })
  //  }



}
