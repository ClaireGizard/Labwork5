import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TodolistPage } from './todolist';

/**
 * Claire Gizard -- 1106363
 * Pierre Munin -- 1106420
 */

@NgModule({
  declarations: [
    TodolistPage,
  ],
  imports: [
    IonicPageModule.forChild(TodolistPage),
  ],
})
export class TodolistPageModule {}
