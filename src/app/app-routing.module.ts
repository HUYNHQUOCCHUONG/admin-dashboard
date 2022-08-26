import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { DuanListComponent } from './duan-list/duan-list.component';
import { DuanSuaComponent } from './duan-sua/duan-sua.component';
import { DuanThemComponent } from './duan-them/duan-them.component';
import { ChitietduanComponent } from './chitietduan/chitietduan.component';

import { NvListComponent } from './nv-list/nv-list.component';
import { NvSuaComponent } from './nv-sua/nv-sua.component';
import { NvThemComponent } from './nv-them/nv-them.component'; 

import { TaskListComponent } from './task-list/task-list.component';
import { TaskSuaComponent } from './task-sua/task-sua.component';
import { TaskThemComponent } from './task-them/task-them.component';

import { DangNhapComponent } from './dang-nhap/dang-nhap.component';
import { DangKyComponent } from './dang-ky/dang-ky.component';
import { BaoveGuard } from './baove.guard';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'duanlist',
  component:DuanListComponent,
  canActivate:[BaoveGuard],
},
  {path:'duansua/:id',component:DuanSuaComponent},
  {path:'duanthem',component:DuanThemComponent},
  {path:'chitietduan/:id',component:ChitietduanComponent},

  {path:'nvlist',
  component:NvListComponent,
  canActivate:[BaoveGuard],
},
  {path:'nvsua/:id',component:NvSuaComponent},
  {path:'nvthem',component:NvThemComponent},

  {path:'tasklist',
  component:TaskListComponent,
  canActivate:[BaoveGuard],
},
  {path:'tasksua/:id',component:TaskSuaComponent},
  {path:'taskthem',component:TaskThemComponent},

  { path:'dangnhap', component:DangNhapComponent},
  { path:'dangky', component:DangKyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule ]
})
export class AppRoutingModule { }
