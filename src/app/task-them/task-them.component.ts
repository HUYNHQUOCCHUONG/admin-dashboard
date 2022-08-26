import { Component, OnInit } from '@angular/core';
import { DuAn } from '../du-an';
import { NhanVien } from '../nhan-vien';
import { DuLieuService } from '../du-lieu.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-task-them',
  templateUrl: './task-them.component.html',
  styleUrls: ['./task-them.component.css']
})
export class TaskThemComponent implements OnInit {
  // xuly(fullinfo: any) {
  //   console.log("Full data : ", fullinfo);
  // }
  constructor(private d: DuLieuService,private _http:HttpClient) { }

  ngOnInit(): void {
  }
  themTask(task: any) {
    // var tenDuAn=da.tenDuAn;
    // var ngayStart=da.ngayStart;
    // var tien=da.tien;
    // var leader=da.leader;
    // console.log(tenDuAn, ngayStart, tien,leader);
    this.d.themTask(task).subscribe( () => alert('Thêm thành công'));
  }
  tenTask: string = '';
  moTa: string = '';
  duAnID: string = '';
  nhanvienID: string = '';
  priority: string = '';
  status: string = '';
  listDuAn: DuAn[] = [
    { id: 1, tenDuAn: 'Quản lý trại heo', ngayStart: '2022-03-01', tien: 67000000, leader: 1, thanhvien: [1, 3, 4] },
    { id: 2, tenDuAn: 'Cây xanh công viên', ngayStart: '2022-04-02', tien: 98500000, leader: 1, thanhvien: [1, 3, 4] },
    { id: 3, tenDuAn: 'Website Văn hoá Việt', ngayStart: '2022-04-15', tien: 35000000, leader: 2, thanhvien: [2, 4] },
    { id: 4, tenDuAn: 'Website Du lịch Bụi', ngayStart: '2022-04-21', tien: 75500000, leader: 2, thanhvien: [2, 4] },
    { id: 5, tenDuAn: 'Quản lý nhà thuốc Vĩnh An', ngayStart: '2022-05-01', tien: 97000000, leader: 3, thanhvien: [3, 4] },
    { id: 6, tenDuAn: 'Chăm sóc thú cưng', ngayStart: '2022-02-11', tien: 18000000, leader: 3, thanhvien: [3, 4] },

  ];
  listNhanVien: NhanVien[] = [
    {
      id: 1,
      ho: 'Huỳnh Quốc',
      ten: 'Chương',
      ngaysinh: '12/03/2002',
      phai: true,
      khuvuc: 'Tây Nguyên'
    },
    {
      id: 2,
      ho: 'Phan Công ',
      ten: 'Đỉnh',
      ngaysinh: '27/07/2002',
      phai: true,
      khuvuc: 'Miền Tây'
    },
    {
      id: 3,
      ho: 'Phan Ngọc',
      ten: 'Truyền',
      ngaysinh: '19/05/2002',
      phai: true,
      khuvuc: 'Miền Trung'
    }
  ]

}
