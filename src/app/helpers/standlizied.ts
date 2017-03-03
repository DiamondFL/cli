import {IMAGE_DOMAIN} from "../configs/app.config";
/**
 * Created by e on 3/3/17.
 */
export function origin(data) {
  for(let i in data) {
    data[i].image = IMAGE_DOMAIN + JSON.parse(data.images)[0]['origin'];
  }
  return data;
}

