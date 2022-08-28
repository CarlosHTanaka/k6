import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    //Parte 1
    //vus: 10,
   // duration: '30s',
    //Parte 2
    stages: [
        {duration: '3s', target: 20 },
        {duration: '13s', target: 10 },
        {duration: '2s', target: 0 },
    ]

}

export default function () {
  //Parte 1
 // http.get('https://test.k6.io');

  //Parte2
  const res = http.get('https://httpbin.org/');
  check(res, { 'status was 200': (r) => r.status ==400});
  sleep(1);
}
