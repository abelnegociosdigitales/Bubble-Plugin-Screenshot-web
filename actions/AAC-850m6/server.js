async function(properties, context) {

var access_key =  context.keys.accessKey;
var textAditional = "data:image/"+properties.format+";base64,"

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

var response = await fetch("https://api.apiflash.com/v1/urltoimage?access_key="+access_key+"&url="+properties.url+"&delay="+properties.delay+"&format="+properties.format+"&quality="+properties.quality+"&width="+properties.width+"&height="+properties.height+"&no_cookie_banners=true&no_ads=true&no_tracking=true", requestOptions)
var buffer = await response.arrayBuffer();
var base64Image = btoa(String.fromCharCode(...new Uint8Array(buffer)));
var rs = textAditional+base64Image;
return {
  image: rs
};

}