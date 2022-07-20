let iframe = document.getElementsByTagName('iframe');
for (let i = 0; i < iframe.length; i++) {
  let src = iframe[i].getAttribute('src');
  if(src.indexOf('https://www.youtube.com') !== -1) {
    let src_m = 'https://www.youtube.com/' + src.substring(src.indexOf('embed/'),src.indexOf('?')) + '?feature=youtu.be&rel=0'
    iframe[i].setAttribute('src',src_m);
  } else {
    console.log('The embedded YouTube videos do not exist on this page.');
  }
}