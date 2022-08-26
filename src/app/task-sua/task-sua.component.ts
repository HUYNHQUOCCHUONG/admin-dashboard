import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { DuAn } from '../du-an';
import { DuLieuService } from '../du-lieu.service';
import { NhanVien } from '../nhan-vien';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-task-sua',
  templateUrl: './task-sua.component.html',
  styleUrls: ['./task-sua.component.css']
})
export class TaskSuaComponent implements OnInit {
  listTask:any;
  listNhanVien:any;
  listDuAn:any;
  constructor(private d: DuLieuService,private _http:HttpClient , private ActivatedRoute:ActivatedRoute) { }
  loadData(){
    this.sp = this.ActivatedRoute.params.subscribe(data => {
      console.log(data);
      let id = data['id'];
      this.sp = this.d.getMotTask(id).subscribe(data => {
        console.log(data);
        this.sp = data;
      })
    })
  }
  ngOnInit(): void {
    this._http.get('http://localhost:3000/listTask').subscribe(data => {
      this.listTask=data;
      // console.log("DS TASK :  ", data);       
    });
    this._http.get('http://localhost:3000/tennhanvien').subscribe(data => {
      this.listNhanVien=data;
      // console.log("Loại sản phẩm: ", data);       
    });
    this._http.get('http://localhost:3000/duan').subscribe(data => {
      this.listDuAn = data;
      // console.log("Dự Án :  ", data);       
    });
    this.loadData();
  }
  themTask(task: any) {
    // var tenDuAn=da.tenDuAn;
    // var ngayStart=da.ngayStart;
    // var tien=da.tien;
    // var leader=da.leader;
    // console.log(tenDuAn, ngayStart, tien,leader);
    this.d.themTask(task).subscribe( () => alert('Thêm thành công'));
  }
  @Input() sp:any;
  taskSua(show:any){
    this.d.taskSua(show).subscribe ( data => { 
      console.log("Sửa",data);
      alert('Sửa thành công');
    });
}

}
