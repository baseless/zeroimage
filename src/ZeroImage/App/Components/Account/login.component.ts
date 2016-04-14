import { Component, OnInit }                                    from "angular2/core";
import { ROUTER_DIRECTIVES }                            from "angular2/router";
import { ControlGroup, FormBuilder, Validators }        from "angular2/common";

@Component({
    selector: "login",
    templateUrl: "app/components/account/login.component.html",
    directives: [ROUTER_DIRECTIVES]
})


export class LoginComponent implements OnInit {
    loginForm: ControlGroup;

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.loginForm = this.fb.group({
            userName: ['', Validators.compose([Validators.required])],
            password: ['', Validators.compose([Validators.required])]
        });
    }

    doLogin() {
        
    }
}