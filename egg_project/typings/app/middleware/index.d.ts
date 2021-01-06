// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportJwt from '../../../app/middleware/jwt';
import ExportTracer from '../../../app/middleware/tracer';

declare module 'egg' {
  interface IMiddleware {
    jwt: typeof ExportJwt;
    tracer: typeof ExportTracer;
  }
}
