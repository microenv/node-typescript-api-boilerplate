import { Router } from 'express';
import core from './module/core/router';
import justAnotherModule from './module/justAnotherModule/router';

const routes: Router[] = [
  core,
  justAnotherModule,
];

export default routes;
