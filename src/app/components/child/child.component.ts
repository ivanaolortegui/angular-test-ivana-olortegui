import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  formSignup: FormGroup;

  @Input('value') inputValue: any;
  @Output('value') outputValue: EventEmitter<any> = new EventEmitter();
  constructor(private fb: FormBuilder) {

    this.formSignup = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      lastname: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{5,}')
      ]]
    });
  }


  ngOnInit(): void {

  }

  ngOnChanges(changes: any) {
    if (!changes.inputValue.firstChange) {

      this.formSignup.setValue({ ...this.inputValue })
    }
    console.log(changes);
  }

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();

  register() {

    const data = this.formSignup.value;
    /*  const data = {
       name: 'Jessica', lastname: 'Olortegui', email: 'angular@qservus.com',
       password: 'angularV13'
     } */
    this.outputValue.emit(data);
    console.log(data);
  }


}

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}