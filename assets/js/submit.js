function submit() {
　const textinput = document.getElementById('inputURL');
  const iframe = document.getElementById('iframe');
  const error_message = document.getElementById('error_message');
  let URL = document.getElementById('inputURL').value;
  let search_result = URL.indexOf('youtube.com/watch?v=');
  let msearch_result = URL.indexOf('youtu.be/');
  let amp = URL.indexOf('&');
  let quest = URL.indexOf('?');
　let length = URL.length;
  if( search_result !== -1 ) {
    if( !error_message.hasAttribute('class') ) {
      hide('error_message');
    }
    hide('output_placeholder');
    if( amp !== -1 ) {
      ytdisplay(search_result+20,amp);
    } else {
      ytdisplay(search_result+20,length);
    }
  } else if( msearch_result !== -1 ) {
    if( !error_message.hasAttribute('class') ) {
      hide('error_message');
    }
    hide('output_placeholder');
    if( quest !== -1) {
      ytdisplay(msearch_result+9,quest);
    } else {
      ytdisplay(msearch_result+9,length);
    }
  } else {
    if( iframe.hasAttribute('src') ) {
      iframe.removeAttribute('src');
    }
    hide('output_placeholder');
    show('error_message');
    textinput.blur();
  }
}
function hide(element_name) {
  let element = document.getElementById(element_name);
  element.setAttribute('class','hide');
}
function show(element_name) {
  let element = document.getElementById(element_name);
  element.removeAttribute('class');
}
function ytdisplay(start,end) {
　　const textinput = document.getElementById('inputURL');
  let URL = document.getElementById('inputURL').value;
  let v = URL.substring(start,end);
  let newURL = 'https://www.youtube.com/embed/' + v + '?start=0&rel=0&feature=youtu.be';
  iframe.setAttribute('src',newURL);
  textinput.blur();
}
document.getElementById('inputURL').onkeypress = (e) => {
  const key = e.keyCode || e.charCode || 0;
  if (key == 13) {
    submit();
  }
}
function getParam(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
  results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
let data = decodeURIComponent(getParam('q'));
if(data) {
 　document.getElementById('inputURL').value = data;
  submit();
}
