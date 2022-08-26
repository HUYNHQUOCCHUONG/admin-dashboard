import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { DuLieuService } from '../du-lieu.service';
import { NhanVien } from '../nhan-vien';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-duan-sua',
  templateUrl: './duan-sua.component.html',
  styleUrls: ['./duan-sua.component.css']
})
export class DuanSuaComponent implements OnInit {
  da: any;
  listNhanVien:any;
  constructor(private d: DuLieuService,private _http:HttpClient , private ActivatedRoute:ActivatedRoute) { }
  loadData(){
    this.da = this.ActivatedRoute.params.subscribe(data => {
      console.log(data);
      let id = data['id'];
      this.da = this.d.getMotDuAn(id).subscribe(data => {
        console.log(data);
        this.da = data;
      })
    })
  }
  ngOnInit(): void {
    this._http.get('http://localhost:3000/tennhanvien').subscribe(data => {
      this.listNhanVien=data;
      // console.log("Loại sản phẩm: ", data);       
    });
    this.loadData();
  }
  @Input() sp:any;
  duanSua(show:any){
    this.d.duanSua(show).subscribe ( data => { 
      console.log("Sửa",data);
      alert('Sửa thành công');
    });
  }
}
