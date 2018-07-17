import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { ToasterService } from '../../services/toaster.service';

@Component({
  selector: 'app-dialog-edit-element',
  templateUrl: './dialog-edit-element.component.html',
  styleUrls: ['./dialog-edit-element.component.css']
})
export class DialogEditElementComponent implements OnInit {

  @Output()
  onAdd = new EventEmitter();
  
  constructor(
    public dialogRef: MatDialogRef<DialogEditElementComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dataService: DataService,
    public toasterService: ToasterService 
    ) { 

    }

  ngOnInit() {
  }

  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Not a valid email' :
        '';
  }

  submit() {
    // emppty stuff
  }


  onSaveWithErrorsClick() {

    
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  stopEdit(): void {
    //Call the Data Service to do the save
    this.dataService.updateIssue(this.data);
    this.toasterService.showToaster('Successfully updated');
    // Pass the data back up to the parent
    this.onAdd.emit(this.data);
  }


}
