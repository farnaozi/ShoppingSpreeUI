import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { QuickViewComponent } from '../components/quick-view/quick-view.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(public dialog: MatDialog) { 
  }

  openDialog(component:ComponentType<unknown>, dialogConfig?:MatDialogConfig) {
    const dialogRef = this.dialog.open(component,dialogConfig);

    return dialogRef;
  }

  openQuickView(){
    return this.openDialog(QuickViewComponent)
  }

  closeAll(){
    this.dialog.closeAll();
  }
}
