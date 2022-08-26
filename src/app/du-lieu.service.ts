import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DuLieuService {
  constructor(private h:HttpClient) { }
  //
  dangKy(dk:any){
    return this.h.post('http://localhost:3000/user',dk);
  }
themDuAn(da:any){
    return this.h.post('http://localhost:3000/duan',da);
}
xoaDuan(id:number){
  return this.h.delete('http://localhost:3000/duan/'+ id)
}
duanSua(da:any){
  return this.h.put('http://localhost:3000/duan/' + da.id ,da);
}
getMotDuAn(id:number){
  return this.h.get('http://localhost:3000/duan/' + id);
}
getDuAn(){
  return this.h.get('http://localhost:3000/duan');
}
//
NVthem(da:any){
  return this.h.post('http://localhost:3000/tennhanvien',da);
}
xoaNhanVien(id:number){
  return this.h.delete('http://localhost:3000/tennhanvien/'+ id)
}
getMotNhanVien(id:number){
  return this.h.get('http://localhost:3000/tennhanvien/' + id);
}
nvSua(sp:any){
  return this.h.put('http://localhost:3000/tennhanvien/' + sp.id ,sp);
}
//
themTask(task:any){
  return this.h.post('http://localhost:3000/listTask',task);
}
xoaTask(task:number){
  return this.h.delete('http://localhost:3000/listTask/'+ task)
}
taskSua(sp:any){
  return this.h.put('http://localhost:3000/listTask/' + sp.id ,sp);
}
getMotTask(id:number){
  return this.h.get('http://localhost:3000/listTask/' + id);
}
}
