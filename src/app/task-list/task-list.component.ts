import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { HttpClient } from '@angular/common/http';
import { DuLieuService } from '../du-lieu.service';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  constructor(private _http:HttpClient, private d:DuLieuService) { }
  // tukhoa:string='';
  listTask:any;
  listNhanVien:any;
  ngOnInit(): void{
    this._http.get('http://localhost:3000/listTask').subscribe(data => {
      this.listTask=data;
      // console.log("DS TASK :  ", data);       
    });
    this._http.get('http://localhost:3000/tennhanvien').subscribe(data => {
      this.listNhanVien=data;
      // console.log("Loại sản phẩm: ", data);       
    });
  }
  xoaTask(id: number) {
    if (confirm('Xóa thật không') == true) {
      this.d.xoaTask(id).subscribe(data => alert('Xóa thành công'))
    }
  }
  // locTASK(){ //lọc các SP mà tên chứa giá trị nhập trong input
  //   console.log(this.tukhoa);
  //   const regex = new RegExp(this.tukhoa, "gi");
  //   console.log(regex);
  //   this.listTask= this.listProduct.filter( p=>p.tenTask.toUpperCase().includes(this.tukhoa.toUpperCase ()))
  // }

}
