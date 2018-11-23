import * as http from '../utils/httpUtil';

export function fetchTodos(url) {
    return http.get(url);
}