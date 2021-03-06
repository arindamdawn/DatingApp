import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../../core/services/auth.service";
import { NbToastrService } from "@nebular/theme";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loading = false;
  loginUserForm: FormGroup;
  alertMsg: string;
  authenticated: boolean = null;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastrService: NbToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginUserForm = this.fb.group({
      username: ["", [Validators.required]],
      password: ["", [Validators.required]]
    });
  }
  o;
  toggleLoadingAnimation() {
    this.loading = true;
    setTimeout(() => (this.loading = false), 3000);
  }

  onClickLogin() {
    this.authService.login(this.loginUserForm.value).subscribe(
      next => {
        this.alertMsg = "Successfully logged in";
        this.toastrService.success(this.alertMsg, "Login", {
          preventDuplicates: true
        });
        this.authenticated = true;
        this.router.navigate(["/members"]);
      },
      error => {
        this.alertMsg = "Failed to login";
        this.toastrService.danger(this.alertMsg, "Login", {
          preventDuplicates: true
        });
        this.authenticated = false;
      }
    );
  }
}
