import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { QuickViewComponent } from '../components/quick-view/quick-view.component';
import { Product } from '../models/product.model';

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

  openQuickView(data:Product | undefined){
    return this.openDialog(QuickViewComponent, {maxHeight:'596px',data:data})
  }

  closeAll(){
    this.dialog.closeAll();
  }
}
