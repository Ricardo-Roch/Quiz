import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '10s', target: 10 },   // sube a 10 usuarios
    { duration: '20s', target: 50 },   // luego 50
    { duration: '30s', target: 100 },  // luego 100
    { duration: '30s', target: 200 },  // prueba con 200
    { duration: '20s', target: 0 },    // baja a 0
  ],
};

export default function () {
  http.get('https://ricardo-roch.github.io/Quiz/');
  sleep(1);
}