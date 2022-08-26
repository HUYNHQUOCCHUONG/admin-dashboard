import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DuLieuService } from '../du-lieu.service';

@Component({
  selector: 'app-dang-ky',
  templateUrl: './dang-ky.component.html',
  styleUrls: ['./dang-ky.component.css']
})
export class DangKyComponent implements OnInit {
  listNhanVien: any;
  listDuAn: any;
  
  constructor(private d: DuLieuService,private _http:HttpClient , private router:Router) { }
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
  dangky(dk: any) {
    this.d.dangKy(dk).subscribe( () => alert('Thêm thành công'));
    this.router.navigateByUrl('/dangnhap');
  }
  username:string='';
  password:string='';
}
