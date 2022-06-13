import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ModalRegisterUserOfflineComponent } from 'src/app/components/modal-register-user-offline/modal-register-user-offline.component';
import { NetworkService, RequestService, Usernterface } from 'src/app/services';
import { user } from './parent.constants';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  destroy$: Subject<boolean> = new Subject<boolean>();

  isUsersSavedOffline: any;
  usersSavedOffline: Usernterface[] = [];
  valueChange: any;
  isConnection: boolean = false;

  constructor(private networkService: NetworkService,
    private requestService: RequestService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.initializeApp();
  }

  initializeApp() {
    this.initializeLocalStorageUser();
    this.initializeNetworkService();
  }

  initializeNetworkService() {
    this.networkService.initConnection().subscribe(isOnline => {
      if (isOnline) {
        if (this.isUsersSavedOffline) {
          this.openDialog()
        }
      }
      this.isConnection = isOnline;
    });
  }

  initializeLocalStorageUser() {
    this.isUsersSavedOffline = localStorage.getItem('pending-registered-offline-angular-test');
    this.isUsersSavedOffline ? this.usersSavedOffline = JSON.parse(this.isUsersSavedOffline) : [];
  }

  addRegister(value: Usernterface) {
    if (this.isConnection) {
      this.sendRequestService(value);
    } else {
      this.usersSavedOffline.push(value)
      localStorage.setItem('pending-registered-offline-angular-test', JSON.stringify(this.usersSavedOffline));
    }
  }

  sendRequestService(value: any) {
    this.requestService.postUser(value)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => { })
  }

  valueChanges() {
    this.valueChange = user;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalRegisterUserOfflineComponent, {
      width: '300px',
      data: { usersQuantity: this.usersSavedOffline.length }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.sendRequestService(this.usersSavedOffline);
        localStorage.removeItem('pending-registered-offline-angular-test');
        this.initializeLocalStorageUser();
      }
    });
  }
}
