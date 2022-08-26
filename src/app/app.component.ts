import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { DuLieuService } from './du-lieu.service';
import { AuthService } from './auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ASMFINAL';
  constructor(private _http: HttpClient, private d: DuLieuService,private auth:AuthService) { }
  thoat(){ this.auth.thoat();  }
  daDangNhap() { return this.auth.daDangNhap()}
  listDuAn: any;
  listTask:any;
  listNhanVien:any;
  // tukhoa:string='';
  ngOnInit(): void {
    this._http.get('http://localhost:3000/duan').subscribe(data => {
      this.listDuAn = data;
      // console.log("Dự Án :  ", data);       
    });
    this._http.get('http://localhost:3000/listTask').subscribe(data => {
      this.listTask=data;
      // console.log("DS TASK :  ", data);       
    });
    this._http.get('http://localhost:3000/tennhanvien').subscribe(data => {
      this.listNhanVien=data;
      // console.log("Loại sản phẩm: ", data);       
    });
    this.d.getDuAn().subscribe((data: any) => {
      data.forEach((_item: any) => {
          this.totalPrice = this.totalPrice + parseInt(_item.tien);
      });
      this.totalPrice = this.nFormatter(this.totalPrice);
  });
  }
  nFormatter(num: number) {
    if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + ' Tỷ';
    }
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + ' Triệu';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, '') + ' Nghìn';
    }
    return num;
}
@Input() totalPrice: any = 0;
}
