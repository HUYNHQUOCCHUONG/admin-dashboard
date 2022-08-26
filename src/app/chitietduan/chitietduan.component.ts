import { Component, Input, OnInit } from '@angular/core';
import { DuLieuService } from '../du-lieu.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-chitietduan',
  templateUrl: './chitietduan.component.html',
  styleUrls: ['./chitietduan.component.css']
})
export class ChitietduanComponent implements OnInit {
  listDuAn:any

  constructor(private d:DuLieuService,
    private _http:HttpClient,
    private ActivatedRoute: ActivatedRoute,
    private router:Router
    ) { }
  ngOnInit(): void {
    this._http.get('http://localhost:3000/duan').subscribe((data: any) => {
      this.listDuAn = data;
      // console.log("Dự Án :  ", data);       
    });
    this.loadData();
  }
loadData(){
  this.da = this.ActivatedRoute.params.subscribe(data => {
    console.log(data);
    let id =data['id'];
    this.da = this.d.getMotDuAn(id).subscribe(data => {
      this.da = data
    })
  })
}
@Input() da:any;
}
