import { registerRoute, Route } from 'workbox-routing';
import { NetworkFirst } from 'workbox-strategies';

self.fetch = new Proxy(self.fetch, {
  apply: (target, ctx, args) => {
    console.log('--------- proxy fetch call', ...args);
    return target.apply(ctx, args as any);
  },
});

registerRoute(
  new Route(({ request }) => {
    return request.url.includes('test.js');
  }, new NetworkFirst())
);
