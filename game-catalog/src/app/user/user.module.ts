import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'login',
        component: LoginComponent,
      },
    ]),
  ],
  providers: [AuthService],
})
export class UserModule {}
