import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DuLieuService } from '../du-lieu.service';
// import { DuAn } from '../du-an';
@Component({
  selector: 'app-duan-list',
  templateUrl: './duan-list.component.html',
  styleUrls: ['./duan-list.component.css']
})

export class DuanListComponent implements OnInit {
  constructor(private _http: HttpClient, private d: DuLieuService) { }
  listDuAn: any;
  listNhanVien:any;
  // tukhoa:string='';
  ngOnInit(): void {
    this._http.get('http://localhost:3000/duan').subscribe(data => {
      this.listDuAn = data;
      // console.log("Dự Án :  ", data);       
    });
    this._http.get('http://localhost:3000/tennhanvien').subscribe(data => {
      this.listNhanVien=data;
      // console.log("Loại sản phẩm: ", data);       
    });
  }
  xoaDuAn(id: number) {
    if (confirm('Xóa thật không') == true) {
      this.d.xoaDuan(id).subscribe(data => alert('Xóa thành công'))
    }
  }
}

  // locDA(){ //lọc các SP mà tên chứa giá trị nhập trong input
  //   console.log(this.tukhoa);
  //   const regex = new RegExp(this.tukhoa, "gi");
  //   console.log(regex);
  //   this.listDuAn= this.listProduct.filter( p=>p.tenDuAn.toUpperCase().includes(this.tukhoa.toUpperCase ()))
  // }
  // @Output() capnhatidDA = new EventEmitter();
  // xemChiTiet(id: number = 0) {
  //   var da = this.listDuAn.find(da => da.id == id);
  //   this.capnhatidDA.emit(da);
  //   // console.log('hi');
  //   // console.log(da);
  //    }
