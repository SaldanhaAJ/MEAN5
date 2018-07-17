import { Injectable } from '@angular/core';
//import { SharedModule } from '../../_shared/shared.module';
import { MatSnackBar } from '@angular/material';


@Injectable()
export class ToasterService {

  constructor(private snackBar: MatSnackBar) {
  }

  showToaster(msg: string) {
      this.snackBar.open(msg, null, {
          duration: 3000,
      });
  }
}
