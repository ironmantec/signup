import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;
    success = false;
    person = { first: '', last: '', phone: '', email: ''};

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            phone: ['', Validators.required],
            email: ['', [Validators.required, Validators.email, this.duplicateEmail]]
        });
    }

    private duplicateEmail(control: FormControl) {
      const currentEmails = {'abc@signup.com': true, 'def@test.com': true, 'ghi@go.com': true };
      if (currentEmails[control.value]) {
          return { 'duplicateEmail': true };
      }
      return null;
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.success = true;
    }
}
