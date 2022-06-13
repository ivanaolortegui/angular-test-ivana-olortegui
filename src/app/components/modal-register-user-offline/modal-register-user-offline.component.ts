import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  usersQuantity: number
}
@Component({
  selector: 'app-modal-register-user-offline',
  templateUrl: './modal-register-user-offline.component.html',
  styleUrls: ['./modal-register-user-offline.component.scss']
})
export class ModalRegisterUserOfflineComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalRegisterUserOfflineComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  ngOnInit(): void {
  }

  onLoadUsersClick(): void {
    this.dialogRef.close(true);
  }

  onPostponeUsersClick(): void {
    this.dialogRef.close(false);
  }

}
