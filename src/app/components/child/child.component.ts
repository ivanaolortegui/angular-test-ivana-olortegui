import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usernterface } from 'src/app/services';
import { user_validation } from './child.constants';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  get formControls() {
    return this.formSignup.controls;
  }

  @Input('value') inputValue: any;
  @Output('value') outputValue: EventEmitter<Usernterface> = new EventEmitter();

  formSignup: FormGroup;

  user_validation_messages = user_validation;

  constructor(private fb: FormBuilder) {
    this.formSignup = this.initForm();
  }


  ngOnInit(): void {
  }

  ngOnChanges(changes: any) {
    if (!changes.inputValue.firstChange) {
      this.formSignup.setValue({ ...this.inputValue })
    }

  }
  initForm(): FormGroup {
    return this.fb.group({
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

  register() {
    if (this.formSignup.valid) {
      const data = this.formSignup.value;
      this.outputValue.emit(data);
      this.formSignup.reset();
      this.formSignup = this.initForm();
      this.formSignup.value.setErrors(null);
    }
  }

}
