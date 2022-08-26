import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NhanVien } from '../nhan-vien';
import { DuLieuService } from '../du-lieu.service';
@Component({
  selector: 'app-nv-list',
  templateUrl: './nv-list.component.html',
  styleUrls: ['./nv-list.component.css']
})
export class NvListComponent implements OnInit {
  constructor(private _http:HttpClient , private d:DuLieuService) { }
  listNhanVien:any;
  tukhoa:string='';
  ngOnInit(): void{
    this._http.get('http://localhost:3000/tennhanvien').subscribe(data => {
      this.listNhanVien=data;
      // console.log("Loại sản phẩm: ", data);       
    });
  }
  xoaNV(id:number){
    if (confirm('Xóa thật không')==true){
      this.d.xoaNhanVien(id).subscribe(data => alert('Xóa thành công'))
    }
  // locNV(){ //lọc các SP mà tên chứa giá trị nhập trong input
  //   console.log(this.tukhoa);
  //   const regex = new RegExp(this.tukhoa, "gi");
  //   console.log(regex);
  //   this.listNhanVien= this.listProducts.filter( p=>p.ho.toUpperCase().includes(this.tukhoa.toUpperCase ()))
  // }
}
nvSua(sp:any){
  this.d.nvSua(sp).subscribe ( data => { 
    alert('Sửa thành công');
    console.log("Sửa",data);
  });
}
}
