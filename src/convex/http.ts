import { httpRouter } from 'convex/server';
import { actions } from './http_actions';

const http = httpRouter();

Object.values(actions).map(
  (action) => {
    http.route(action);
  }
)

export default http;
