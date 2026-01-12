import { Routes } from '@angular/router';
import { AssignmentRootComponent } from './pages/assignment-root/assignment-root';
import { AssignmentPageComponent } from './pages/assignment-page/assignment-page';

export const routes: Routes = [
  {
    path: '',
    component: AssignmentRootComponent,
    children: [
      {
        path: '',
        component: AssignmentPageComponent,
      },
    ],
  },
];
