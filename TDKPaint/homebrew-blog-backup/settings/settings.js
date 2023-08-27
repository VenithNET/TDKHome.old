function showInfo() {
  var userAgent = navigator.userAgent;
  var isMobile = /Mobile/.test(userAgent);
  var isIOS = /iPad|iPhone|iPod/.test(userAgent);
  var isAndroid = /Android/.test(userAgent);
  var browser = getBrowser();
  var ram = navigator.deviceMemory;
  var model = navigator.platform;
  var isPWA = window.matchMedia('(display-mode: standalone)').matches;

  var info = "App Version: 1.1\n\nDev Tools:\n\n" +
             "User-Agent: " + userAgent + "\n" +
             "Mobile: " + isMobile + "\n" +
             "iOS: " + isIOS + "\n" +
             "Android: " + isAndroid + "\n" +
             "Browser: " + browser + "\n" +
             "RAM: " + ram + " GB\n" +
             "Model: " + model + "\n" +
             "PWA: " + isPWA;

  alert(info);
}

function getBrowser() {
  if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) {
    return 'Opera';
  } else if (navigator.userAgent.indexOf("Chrome") != -1 ) {
    return 'Chrome';
  } else if (navigator.userAgent.indexOf("Safari") != -1) {
    return 'Safari';
  } else if (navigator.userAgent.indexOf("Firefox") != -1 ) {
    return 'Firefox';
  } else if ((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) {
    return 'IE';
  } else {
    return 'Unknown';
  }
}
