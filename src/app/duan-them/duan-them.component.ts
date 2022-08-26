import { Component, OnInit } from '@angular/core';
import { NhanVien } from '../nhan-vien';
// import { DuAn } from '../du-an';
import { DuLieuService } from '../du-lieu.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-duan-them',
  templateUrl: './duan-them.component.html',
  styleUrls: ['./duan-them.component.css']
})
export class DuanThemComponent implements OnInit {
  constructor(private d: DuLieuService,private _http:HttpClient) { }
  listDuAn:any;
  listNhanVien:any;
  // da: DuAn = <DuAn>{};
  // n: DuAn = <DuAn>{};
  ngOnInit(): void {
    this._http.get('http://localhost:3000/duan').subscribe(data => {
      this.listDuAn = data;
      console.log("Dự Án :  ", data);       
    });
    this._http.get('http://localhost:3000/tennhanvien').subscribe(data => {
      this.listNhanVien=data;
      // console.log("Loại sản phẩm: ", data);       
    });
  }
  duanthem(da: any) {
    // var tenDuAn=da.tenDuAn;
    // var ngayStart=da.ngayStart;
    // var tien=da.tien;
    // var leader=da.leader;
    // console.log(tenDuAn, ngayStart, tien,leader);
    this.d.themDuAn(da).subscribe( () => alert('Thêm thành công'));
  }
  // khai báo bắt lỗi
  tenDuAn: string = '';
  ngayStart: string = '';
  tien: string = '';
  tennhanvien: string = '';
 //
   
}
