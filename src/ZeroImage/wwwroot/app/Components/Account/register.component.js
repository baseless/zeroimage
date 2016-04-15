System.register(["angular2/core", "angular2/router", "angular2/common", "../../app-validators", "../../Services/auth.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, common_1, app_validators_1, auth_service_1;
    var RegisterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (app_validators_1_1) {
                app_validators_1 = app_validators_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            }],
        execute: function() {
            RegisterComponent = (function () {
                function RegisterComponent(fb, authService) {
                    this.fb = fb;
                    this.authService = authService;
                    this.processing = false;
                    this.errorMessage = null;
                }
                RegisterComponent.prototype.ngOnInit = function () {
                    this.registerForm = this.fb.group({
                        userName: ['', common_1.Validators.compose([common_1.Validators.required])],
                        password: ['', common_1.Validators.compose([app_validators_1.AppValidators.validatePassword])],
                        passwordConfirm: ['', common_1.Validators.compose([common_1.Validators.required])]
                    });
                };
                RegisterComponent.prototype.doRegister = function () {
                    this.processing = true;
                    var status = false;
                    if (this.registerForm.valid) {
                    }
                    else {
                        this.errorMessage = "Login failed";
                        this.processing = false;
                    }
                };
                RegisterComponent = __decorate([
                    core_1.Component({
                        selector: "register",
                        templateUrl: "app/components/account/register.component.html",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, auth_service_1.AuthService])
                ], RegisterComponent);
                return RegisterComponent;
            }());
            exports_1("RegisterComponent", RegisterComponent);
        }
    }
});
//# sourceMappingURL=register.component.js.map