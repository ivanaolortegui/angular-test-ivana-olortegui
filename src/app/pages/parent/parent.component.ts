import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  valueChange: any;
  constructor() { }

  ngOnInit(): void {
  }

  addRegister(value: any) {
    console.log(value);
  }

  valueChanges() {
    this.valueChange = {
      name: 'Ivana', lastname: 'Olortegui', email: 'angular@qservus.com',
      password: 'angularV13'
    }
  }


}
