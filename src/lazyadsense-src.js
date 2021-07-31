domready(function () {

function addClass(el, className) {
  if (el.classList)
    el.classList.add(className)
  else if (!hasClass(el, className)) el.className += " " + className
}

function removeClass(el, className) {
  if (el.classList)
    el.classList.remove(className)
  else if (hasClass(el, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
    el.className=el.className.replace(reg, ' ')
  }
}	


function removeAttributes(el) {

    // get its attributes and cast to array, then loop through
    Array.prototype.slice.call(el.attributes).forEach(function(attr) {

        // remove each attribute
        el.removeAttribute(attr.name);
    });
}

  var adunits = document.querySelectorAll('div.lazyadsense');

  var lazyAdsenseLoad = function lazyAdsenseLoad(target) {
    var io = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var currentunit = entry.target;
          var adslot = currentunit.getAttribute('data-ad-slot');
          var adclient = currentunit.getAttribute('data-ad-client');

  var x = entry.target;
  var txt = "";
  var i;
  for (i = 0; i < x.attributes.length; i++) {
    txt = txt + x.attributes[i].name + '=' +'"'+ x.attributes[i].value + '" ';

  }
  

  

var inscode = txt.replace("lazyadsense", "adsbygoogle");
        var scriptcode = '(adsbygoogle = window.adsbygoogle || []).push({ google_ad_slot: ' + adslot + ' });';
        scriptcode = '<script>' + scriptcode + '</'+ 'script>';
                 removeAttributes(entry.target);
postscribe( entry.target, '<ins ' + inscode + '></ins>'+ scriptcode);


   //       console.log(adslot);
  //        console.log(adclient);


			addClass(entry.target, 'lazy-adsense-loaded');
          observer.disconnect();
        }
      });
    });
    io.observe(target);
  };

  adunits.forEach(lazyAdsenseLoad);

console.log("Powered by Lazyload Adsense: https://github.com/Niresh12495/LazyAdsense");
})