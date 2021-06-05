import { Routes } from '@angular/router';
import { AuthGuard } from '@app/@core/guards';
import { Path } from '@app/@core/structs';

export const PRIVATE_ROUTES: Routes = [
  {
    path: Path.Tweets,
    canActivate: [AuthGuard],
    loadChildren: () =>
    import('@app/pages/private/tweets/tweets.module').then(
      (m) => m.TweetsModule,
    ),
  },
  {
    path: '',
    redirectTo: Path.Tweets,
    pathMatch: 'full'
  },
];
