import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from '../customValdators';
import { UserService } from '../user.service';
import { uniqueEmailValidator } from '../email-validator.directive';

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

    constructor(private formBuilder: FormBuilder, private userService: UserService) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            phone: ['', [ Validators.required, CustomValidators.invalidPhone ]],
            email: ['', [ Validators.required, Validators.email ], uniqueEmailValidator(this.userService) ]
        });
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
