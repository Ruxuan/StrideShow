import * as names from '../../constants/actionNames';
import io from 'socket.io-client';

export const socket = io(window.strideshow.devServer);

export function socketInit() {
  return (dispatch) => {

    // Setup socketio's core socket listeners
    coreSocketListenersInit(dispatch);

    // Demo Room Key
    socket.on('demoRoomKey', function (data) {
      console.log('Received private room: ' + data);
      dispatch(socketReceiveRoomKey(data));
    });

    // Retrieve browser name
    var featureBrowser = featureBrowserDetection();
    // Retrieve browser version
    var userAgentBrowser = userAgentBrowserDetection();
    // Retrieve computer info
    var navigatorInfo = fullNavigatorInfo();

    // Dispatch computer info
    dispatch(computerInfo(featureBrowser, userAgentBrowser.version, navigatorInfo.os));
  }
}

// Module functions ***********************************************************

const socketReceiveRoomKey = (roomKey) => {
  return {
    type: names.SOCKET_RECEIVE_ROOM_KEY,
    room: roomKey
  }
};

const computerInfo = (browserName, browserVersion, os) => {
  return {
    type: names.SOCKET_COMPUTER_INFO,
    computerInfo: {
      browser: {
        name: browserName,
        version: browserVersion
      },
      OS: os
    }
  };
};

export const socketActiveProject = (index) => {
  return {
    type: names.SOCKET_ACTIVE_PROJECT,
    index
  }
};

// Core socket functions ***********************************************************
// TODO: put into another file?
const coreSocketListenersInit = (dispatch) => {
  socket.on('connect', function() {
    dispatch(socketConnect());
  });

  // Socket Listeners
  socket.on('disconnect', function() {
    dispatch(socketDisconnect());
  });

  socket.on('error', function(object) {
    console.log('An error has occurred, Socket IO\'s error event has fired');
    // object is error data
    dispatch(socketError(object));
  });

  socket.on('reconnect', function(number) {
    console.log('Successfully reconnected');
    // number is reconnection attempt number
    dispatch(socketReconnect(number));
  });

  socket.on('reconnecting', function(number) {
    console.log('Attempting to reconnect');
    // number is reconnection attempt number
    dispatch(socketReconnecting(number));
  });

  socket.on('reconnect_error', function(object) {
    console.log('An error has occured while reconnecting');
    // object is error object
    dispatch(socketReconnectError(object));
  });

  socket.on('reconnect_failed', function() {
    console.log('Reconnect failed');
    dispatch(socketReconnectFailed());
  });
};

const socketConnect = () => {
  return {
    type: names.SOCKET_CONNECT
  }
};

const socketDisconnect = () => {
  return {
    type: names.SOCKET_DISCONNECT
  }
};

const socketError = (error_msg) => {
  return {
    type: names.SOCKET_ERROR,
    error_msg: error_msg
  }
};

const socketReconnect = (attempt_num) => {
  return {
    type: names.SOCKET_RECONNECT,
    attempt_num: attempt_num
  }
};

const socketReconnecting = (attempt_num) => {
  return {
    type: names.SOCKET_RECONNECTING,
    attempt_num: attempt_num
  }
};

const socketReconnectError = (error_msg) => {
  return {
    type: names.SOCKET_RECONNECT_ERROR,
    error_msg: error_msg
  }
};

const socketReconnectFailed = () => {
  return {
    type: names.SOCKET_RECONNECT_FAILED
  }
};

// Helper Functions ***********************************************************
// TODO: put into another file?
const featureBrowserDetection = () => {
  if ((!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0) {
    return "Opera";
  } else if (typeof InstallTrigger !== 'undefined') {
    return "Firefox";
  } else if (Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0) {
    return "Safari";
  } else if (!!document.documentMode) {
    return "IE";
  } else if (!document.documentMode && !!window.StyleMedia) {
    return "Edge";
  } else if (!!window.chrome && !!window.chrome.webstore) {
    return "Chrome";
  } else {
    return "Unknown";
  }
};

const userAgentBrowserDetection = () => {
  var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
  if(/trident/i.test(M[1])){
    tem=/\brv[ :]+(\d+)/g.exec(ua) || [];
    return {name:'IE',version:(tem[1]||'')};
  }
  if(M[1]==='Chrome'){
    tem=ua.match(/\bOPR\/(\d+)/)
    if(tem!=null)   {return {name:'Opera', version:tem[1]};}
  }
  M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
  if((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}
  return {
    name: M[0],
    version: M[1]
  };
};

const fullNavigatorInfo = () => {
  /**
   * JavaScript Client Detection
   * (C) viazenetti GmbH (Christian Ludwig)
   */
  var unknown = '-';

  // browser
  var nVer = navigator.appVersion;
  var nAgt = navigator.userAgent;
  var browser = navigator.appName;
  var version = '' + parseFloat(navigator.appVersion);
  var majorVersion = parseInt(navigator.appVersion, 10);
  var nameOffset, verOffset, ix;

  // Opera
  if ((verOffset = nAgt.indexOf('Opera')) != -1) {
    browser = 'Opera';
    version = nAgt.substring(verOffset + 6);
    if ((verOffset = nAgt.indexOf('Version')) != -1) {
      version = nAgt.substring(verOffset + 8);
    }
  }
  // Opera Next
  if ((verOffset = nAgt.indexOf('OPR')) != -1) {
    browser = 'Opera';
    version = nAgt.substring(verOffset + 4);
  }
  // MSIE
  else if ((verOffset = nAgt.indexOf('MSIE')) != -1) {
    browser = 'Microsoft Internet Explorer';
    version = nAgt.substring(verOffset + 5);
  }
  // Chrome
  else if ((verOffset = nAgt.indexOf('Chrome')) != -1) {
    browser = 'Chrome';
    version = nAgt.substring(verOffset + 7);
  }
  // Safari
  else if ((verOffset = nAgt.indexOf('Safari')) != -1) {
    browser = 'Safari';
    version = nAgt.substring(verOffset + 7);
    if ((verOffset = nAgt.indexOf('Version')) != -1) {
      version = nAgt.substring(verOffset + 8);
    }
  }
  // Firefox
  else if ((verOffset = nAgt.indexOf('Firefox')) != -1) {
    browser = 'Firefox';
    version = nAgt.substring(verOffset + 8);
  }
  // MSIE 11+
  else if (nAgt.indexOf('Trident/') != -1) {
    browser = 'Microsoft Internet Explorer';
    version = nAgt.substring(nAgt.indexOf('rv:') + 3);
  }
  // Other browsers
  else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
    browser = nAgt.substring(nameOffset, verOffset);
    version = nAgt.substring(verOffset + 1);
    if (browser.toLowerCase() == browser.toUpperCase()) {
      browser = navigator.appName;
    }
  }
  // trim the version string
  if ((ix = version.indexOf(';')) != -1) version = version.substring(0, ix);
  if ((ix = version.indexOf(' ')) != -1) version = version.substring(0, ix);
  if ((ix = version.indexOf(')')) != -1) version = version.substring(0, ix);

  majorVersion = parseInt('' + version, 10);
  if (isNaN(majorVersion)) {
    version = '' + parseFloat(navigator.appVersion);
    majorVersion = parseInt(navigator.appVersion, 10);
  }

  // mobile version
  var mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(nVer);

  // system
  var os = unknown;
  var clientStrings = [
    {s: 'Windows 10', r: /(Windows 10.0|Windows NT 10.0)/},
    {s: 'Windows 8.1', r: /(Windows 8.1|Windows NT 6.3)/},
    {s: 'Windows 8', r: /(Windows 8|Windows NT 6.2)/},
    {s: 'Windows 7', r: /(Windows 7|Windows NT 6.1)/},
    {s: 'Windows Vista', r: /Windows NT 6.0/},
    {s: 'Windows Server 2003', r: /Windows NT 5.2/},
    {s: 'Windows XP', r: /(Windows NT 5.1|Windows XP)/},
    {s: 'Windows 2000', r: /(Windows NT 5.0|Windows 2000)/},
    {s: 'Windows ME', r: /(Win 9x 4.90|Windows ME)/},
    {s: 'Windows 98', r: /(Windows 98|Win98)/},
    {s: 'Windows 95', r: /(Windows 95|Win95|Windows_95)/},
    {s: 'Windows NT 4.0', r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},
    {s: 'Windows CE', r: /Windows CE/},
    {s: 'Windows 3.11', r: /Win16/},
    {s: 'Android', r: /Android/},
    {s: 'Open BSD', r: /OpenBSD/},
    {s: 'Sun OS', r: /SunOS/},
    {s: 'Linux', r: /(Linux|X11)/},
    {s: 'iOS', r: /(iPhone|iPad|iPod)/},
    {s: 'Mac OS X', r: /Mac OS X/},
    {s: 'Mac OS', r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},
    {s: 'QNX', r: /QNX/},
    {s: 'UNIX', r: /UNIX/},
    {s: 'BeOS', r: /BeOS/},
    {s: 'OS/2', r: /OS\/2/},
    {s: 'Search Bot', r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}
  ];
  for (var id in clientStrings) {
    var cs = clientStrings[id];
    if (cs.r.test(nAgt)) {
      os = cs.s;
      break;
    }
  }

  var osVersion = unknown;

  if (/Windows/.test(os)) {
    osVersion = /Windows (.*)/.exec(os)[1];
    os = 'Windows';
  }

  switch (os) {
    case 'Mac OS X':
      osVersion = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1];
      break;

    case 'Android':
      osVersion = /Android ([\.\_\d]+)/.exec(nAgt)[1];
      break;

    case 'iOS':
      osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
      osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
      break;
  }

  return {
    browser: browser,
    browserVersion: version,
    browserMajorVersion: majorVersion,
    mobile: mobile,
    os: os,
    osVersion: osVersion
  };
};
