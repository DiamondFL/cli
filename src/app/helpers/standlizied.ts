import {IMAGE_DOMAIN} from "../configs/app.config";
/**
 * Created by e on 3/3/17.
 */
function origin(data) {
  for(let i in data) {
    data[i].image = IMAGE_DOMAIN + JSON.parse(data.images)[0]['origin'];
  }
  return data;
}

function setHeaders(data, res) {
  data['headers']['audio'] = res.headers.get('domain.audio');
  data['headers']['video'] = res.headers.get('domain.video');
  data['headers']['image'] = res.headers.get('domain.image');
  return data;
}

function normalizeResult(res) {
  let data: any = {headers: {}, data: []};
  data = setHeaders(data, res);
  data['data'] = res.json();
  return data;
}

function normalizeAudioSrc(domain, data) {
  for (let i in data) {
    data[i].src = domain + data[i].path;
  }
  return data;
}

function normalizeImageSrc(domain, data) {
  for(let i in data) {
    data[i].image = domain + JSON.parse(data[i].images)[0]['origin'];
  }
  return data;
}

function normalizeVideoSrc(domain, data) {
  if(data.length > 0){
    for(let i in data) {
      data[i].src = domain + data[i].path;
    }
  } else {
    data.src = domain + data.path;
  }

  return data;
}

// ?s=WAP&ot=video&oid=229753&rt=cp
//   play nok -->?s=WAP&ot=video&oid=229753&rt=wp --> ?s=WAP&ot=video&oid=229753&rt=p

function normalizeSrc(domains: any[], data) {
  for(let domain of domains) {
    if(domain[0] === 'audio') {
      data = normalizeAudioSrc(domain[1], data);
    }
    if(domain[0] === 'image') {
      data = normalizeImageSrc(domain[1], data);
    }
    if(domain[0] === 'video') {
      data = normalizeVideoSrc(domain[1], data);
    }
  }
  return data;
}

export {origin, setHeaders, normalizeResult, normalizeAudioSrc, normalizeImageSrc, normalizeSrc, normalizeVideoSrc}
