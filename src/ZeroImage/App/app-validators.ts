import { Control }      from "angular2/common";

export class AppValidators {
    static validateUserName(c: Control) {
        return c.value.match("^[a-f]+$") ? null : { validateUserName: { valid: false } };
    }

    static validatePassword(c: Control) {
        return c.value.match("(?=^.{8,60}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$") ? null : { validatePassword: { valid: false } };
    }
}