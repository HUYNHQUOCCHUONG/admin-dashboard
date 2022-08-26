import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

import * as moment  from 'moment';
@Component({
  selector: 'app-dang-nhap',
  templateUrl: './dang-nhap.component.html',
  styleUrls: ['./dang-nhap.component.css']
})
export class DangNhapComponent implements OnInit {

  constructor( private auth:AuthService, private router: Router) { }
  ngOnInit(): void {}
  xulyDN(data:any){    
    console.log(data, data.un , data.pw);
    this.auth.login( data.un, data.pw).subscribe( 
      res =>{          
          var d = JSON.parse(res);
          console.log("Đăng nhập thành công ", res);          
          const expiresAt = moment().add(d.expiresIn,'second');
           localStorage.setItem('id_token', d.idToken);
           localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
           this.router.navigateByUrl('/');
      },
      error => {
        console.log('Ko có quyền truy cập trang này', error);
        this.router.navigateByUrl('/dangnhap');
      }
    )
   } //xulyDN
username:string='';
password:string='';
}
