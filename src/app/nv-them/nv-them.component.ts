import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { DuLieuService } from '../du-lieu.service';
@Component({
  selector: 'app-nv-them',
  templateUrl: './nv-them.component.html',
  styleUrls: ['./nv-them.component.css']
})
export class NvThemComponent implements OnInit {
 
  constructor(private d: DuLieuService,private _http:HttpClient) { }
  addnv!: FormGroup;
  ngOnInit(): void {
    this.addnv = new FormGroup({
      tenNV: new FormControl('',[Validators.minLength(3),Validators.maxLength(15)]),
      ngayNV: new FormControl('', Validators.minLength(8)),
      phai: new FormControl('', Validators.minLength(1)),
      khuvuc: new FormControl('', Validators.minLength(1)),
    });
  }
  NVthem(nv: any) {
    // var tenDuAn=da.tenDuAn;
    // var ngayStart=da.ngayStart;
    // var tien=da.tien;
    // var leader=da.leader;
    // console.log(tenDuAn, ngayStart, tien,leader);
    this.d.NVthem(nv).subscribe( () => alert('Thêm thành công'));
  }
}
