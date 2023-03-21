const current_url = window.location.href;
const http_ = current_url.split('/')[2];
export const IP = http_.split(':')[0];
export const SERVER = "http://"+ IP + ":5001";