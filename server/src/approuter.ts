import { initTRPC } from '@trpc/server';

const t = initTRPC.create();

export const appRouter = t.router({
  getHello: t.procedure.query(() => {
    console.log('getHello called');
    return {message: 'Hello World'};
  }),
  logToServer: t.procedure.mutation((req)=>{
    console.log(`client says: ${req.input}`);
    return {message: `Server received: ${req.input}`};
  })
});

export type AppRouter = typeof appRouter;