import { registerRoute, Route } from 'workbox-routing';
import { NetworkFirst } from 'workbox-strategies';

registerRoute(
  new Route(({ request }) => {
    return request.url.includes('test.js');
  }, new NetworkFirst())
);
