/* ======================================================================
   TRACKING PIXELS — replace the two IDs below.
   Loads on idle (after the page is usable) so it never slows first paint.
   Skipped entirely while the IDs are still placeholders.
   PageView fires on every page. thank-you.html adds the sign-up conversion
   via window.PAM_ON_PIXELS (Meta "Lead", TikTok "CompleteRegistration").
   ====================================================================== */
var PAM_PIXELS = { meta: "META_PIXEL_ID", tiktok: "TIKTOK_PIXEL_ID" };

(function(w,d){
  function load(){
    var P = PAM_PIXELS;
    if (P.meta && !/^META_/.test(P.meta)) {
      !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(w,d,'script','https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', P.meta); fbq('track', 'PageView');
    }
    if (P.tiktok && !/^TIKTOK_/.test(P.tiktok)) {
      !function(w,d,t){w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=d.createElement("script");o.type="text/javascript",o.async=!0,o.src=r+"?sdkid="+e+"&lib="+t;var a=d.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};
      ttq.load(P.tiktok); ttq.page();}(w,d,'ttq');
    }
    if (typeof w.PAM_ON_PIXELS === "function") w.PAM_ON_PIXELS();
  }
  function idle(){ (w.requestIdleCallback || function(cb){ setTimeout(cb, 1200); })(load); }
  if (d.readyState === "complete") idle(); else w.addEventListener("load", idle);
})(window, document);
