import { Routes } from '@angular/router';
import { NoAuthGuard } from '@app/@core/guards';
import { Path } from '@app/@core/structs';

export const PUBLIC_ROUTES: Routes = [
  {
    path: Path.SignIn,
    loadChildren: () =>
      import('@app/pages/public/auth/sign-in/sign-in.module').then((m) => m.SignInModule),
  },
];
