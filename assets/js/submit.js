function submit() {
  let URL = document.getElementById('inputURL').value;
　　const textinput = document.getElementById('inputURL');
  const iframe = document.getElementById('iframe');
  const error_message = document.getElementById('error_message');
  let search_result = URL.indexOf('youtube.com/watch?v=');
  let msearch_result = URL.indexOf('youtu.be/');
  let amp = URL.indexOf('&');
  let quest = URL.indexOf('?');
　　let length = URL.length;
    if( search_result !== -1 ) {
      if( !error_message.hasAttribute('class') ) {
        error_message.setAttribute('class','hide');
      }
      hide('output_placeholder');
      if( amp !== -1 ) {
        let v = URL.substring(search_result+20,amp);
        let newURL = 'https://www.youtube.com/embed/' + v + '?start=0&rel=0&feature=youtu.be';
        iframe.setAttribute('src',newURL);
      } else {
        let v = URL.substring(search_result+20,length);
        let newURL = 'https://www.youtube.com/embed/' + v + '?start=0&rel=0&feature=youtu.be';
        iframe.setAttribute('src',newURL);
      }
    } else if( msearch_result !== -1 ) {
      if( !error_message.hasAttribute('class') ) {
        error_message.setAttribute('class','hide');
      }
      hide('output_placeholder');
      if( quest !== -1) {
      let v = URL.substring(msearch_result+9,quest);
      let newURL = 'https://www.youtube.com/embed/' + v + '?start=0&rel=0&feature=youtu.be';
      iframe.setAttribute('src',newURL);
      } else {
      let v = URL.substring(msearch_result+9,length);
      let newURL = 'https://www.youtube.com/embed/' + v + '?start=0&rel=0&feature=youtu.be';
      iframe.setAttribute('src',newURL);
      }
    } else {
      if( iframe.hasAttribute('src') ) {
        iframe.removeAttribute('src');
      }
      hide('output_placeholder');
      show('error_message');
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
document.getElementById('inputURL').onkeypress = (e) => {
  const key = e.keyCode || e.charCode || 0;
  if (key == 13) {
    submit();
  }
}
