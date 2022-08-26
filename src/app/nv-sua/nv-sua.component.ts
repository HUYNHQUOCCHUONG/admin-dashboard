import { Component, OnInit } from '@angular/core';
import { DuLieuService } from '../du-lieu.service';
import { Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-nv-sua',
  templateUrl: './nv-sua.component.html',
  styleUrls: ['./nv-sua.component.css']
})
export class NvSuaComponent implements OnInit {
  constructor(private d:DuLieuService,private _http:HttpClient ,private ActivatedRoute:ActivatedRoute ) { }
  loadData(){
    this.sp = this.ActivatedRoute.params.subscribe(data => {
      console.log(data);
      let id = data['id'];
      this.sp = this.d.getMotNhanVien(id).subscribe(data => {
        console.log(data);
        this.sp = data;
      })
    })
  }
  ngOnInit(): void {
    this.loadData();
  }
  @Input() sp:any;
  nvSua(show:any){
    this.d.nvSua(show).subscribe ( data => { 
      console.log("Sửa",data);
      alert('Sửa thành công');
    });
}
}
