// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"21c8X":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "062e9a7565ca912a5f7d6b832142d36c";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, /*: {|[string]: boolean|}*/
acceptedAssets, /*: {|[string]: boolean|}*/
/*: {|[string]: boolean|}*/
assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) /*: {data: string, ...}*/
  {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = /*: HMRMessage*/
    JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('???? [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] ???? Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ??? Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          ???? ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = /*: string*/
      links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, /*: ParcelRequire*/
asset) /*:  HMRAsset*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, /*: ParcelRequire*/
id, /*: ParcelRequire*/
/*: string*/
depsByBundle) /*: ?{ [string]: { [string]: string } }*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, /*: ParcelRequire*/
id) /*: string*/
{
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"3L8AI":[function(require,module,exports) {
var _objects = require("./objects");
(function () {
  let score = 0;
  const lengthOfArray = _objects.quizQuestions.length;
  let sliceLengthOne = lengthOfArray;
  let sliceLengthTwo = lengthOfArray - 1;
  let newQuesArray;
  let index = 0;
  // starting padge add
  _objects.DOMselectors.startBtn.addEventListener("click", () => {
    _objects.DOMselectors.displayContainer.classList.remove("d-none");
    _objects.DOMselectors.startPage.classList.add("d-none");
    displayQues();
  });
  // lengthOfArray -lengthOfArray will give me 0 which is the first index const newQuesArray = quizQuestions.slice(lengthOfArray - lengthofArray, lengthOfArray - 1
  // const newQuesArray = quizQuestions.slice(lengthOfArray - 1, lengthOfArray); to keep going down need to subtract to both
  // displays questions
  const displayQues = function () {
    newQuesArray = _objects.quizQuestions.slice(lengthOfArray - sliceLengthOne, lengthOfArray - sliceLengthTwo);
    _objects.DOMselectors.quizQuestion.innerHTML = newQuesArray[0].question;
    _objects.DOMselectors.quizImg.innerHTML = newQuesArray[0].img;
    _objects.DOMselectors.choiceA.innerHTML = newQuesArray[0].answersChoices[0].a;
    _objects.DOMselectors.choiceB.innerHTML = newQuesArray[0].answersChoices[1].b;
    _objects.DOMselectors.choiceC.innerHTML = newQuesArray[0].answersChoices[2].c;
    _objects.DOMselectors.choiceD.innerHTML = newQuesArray[0].answersChoices[3].d;
  };
  // for each button add a event lister that goes green when correct red when not
  _objects.DOMselectors.btns.forEach(btn => {
    btn.addEventListener("click", e => {
      const selectedTarget = e.target;
      const asnwer = e.target.innerHTML;
      if (asnwer === newQuesArray[0].correctAnswer) {
        score++;
        selectedTarget.classList.remove("btn-light");
        selectedTarget.classList.add("btn-success");
      } else {
        selectedTarget.classList.remove("btn-light");
        selectedTarget.classList.add("btn-danger");
      }
      if (sliceLengthTwo >= 0 && sliceLengthOne >= 1) {
        sliceLengthTwo -= 1;
        sliceLengthOne -= 1;
      }
      index++;
      // will run after 700 mil
      setTimeout(() => {
        if (selectedTarget.classList === "btn-success") {
          selectedTarget.classList.add("btn-light");
          selectedTarget.classList.remove("btn-success");
        } else {
          selectedTarget.classList.add("btn-light");
          selectedTarget.classList.remove("btn-danger");
        }
        displayQues();
      }, 700);
      endResultPage();
    });
  });
  function endResultPage() {
    if (index === lengthOfArray) {
      _objects.DOMselectors.endPage.classList.remove("d-none");
      _objects.DOMselectors.displayContainer.classList.add("d-none");
      _objects.DOMselectors.score.innerHTML = "you got a " + score / index * 100 + " out of 100";
    }
    _objects.DOMselectors.redoQuizBtn.addEventListener("click", () => {
      index = 0;
      score = 0;
      sliceLengthOne = lengthOfArray;
      sliceLengthTwo = lengthOfArray - 1;
      _objects.DOMselectors.displayContainer.classList.remove("d-none");
      _objects.DOMselectors.endPage.classList.add("d-none");
      displayQues();
    });
  }
})();

},{"./objects":"4eaG9"}],"4eaG9":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "quizQuestions", function () {
  return quizQuestions;
});
_parcelHelpers.export(exports, "DOMselectors", function () {
  return DOMselectors;
});
const quizQuestions = [{
  img: '<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/66439990-408d-44fc-988a-2375b88d6183/de7cg0p-e2dcc2c3-b548-4c51-808e-b44efc8ca690.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNjY0Mzk5OTAtNDA4ZC00NGZjLTk4OGEtMjM3NWI4OGQ2MTgzXC9kZTdjZzBwLWUyZGNjMmMzLWI1NDgtNGM1MS04MDhlLWI0NGVmYzhjYTY5MC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.7Qe7SGvhwWqLbrh5ALVBTn1a-lDJNh0v1IbDinvuBy0" id="img" class="img-fluid" alt="sumi">',
  question: "Who is this girl?",
  answersChoices: [{
    a: "Chizuru Ichinose"
  }, {
    b: "Ruka Sarashina"
  }, {
    c: "Sumi Sakurasawa"
  }, {
    d: "Mami Nanami"
  }],
  correctAnswer: "Sumi Sakurasawa"
}, {
  img: '<img src="https://cdn.discordapp.com/attachments/686048772857397451/831297245172465684/image0.jpg" id="img" class="img-fluid" alt="Lucy Heartfilia">',
  question: "Who is this girl?(from fariy tale)",
  answersChoices: [{
    a: "Natsu Dragneel"
  }, {
    b: "Happy"
  }, {
    c: "Lucy Heartfilia"
  }, {
    d: "Juvia Lockser"
  }],
  correctAnswer: "Lucy Heartfilia"
}, {
  img: '<img src="https://static3.cbrimages.com/wordpress/wp-content/uploads/2020/04/Featured-Image-Shirou-and-Saber-Cropped.jpg?q=50&fit=crop&w=943&h=500" id="img" class="img-fluid" alt="Fate">',
  question: "Which anime series is this character from?",
  answersChoices: [{
    a: "Fate"
  }, {
    b: "Fairy tale"
  }, {
    c: "black clover"
  }, {
    d: "Rent a girlfriend"
  }],
  correctAnswer: "Fate"
}, {
  img: '<img src="https://i1.wp.com/anitrendz.net/news/wp-content/uploads/2020/09/Horimiya-Feature-Image.png?w=636&ssl=1" id="img" class="img-fluid" alt="Izumi Miyamura">',
  question: "What is the name of the boy in the image?",
  answersChoices: [{
    a: "kyouko Hori"
  }, {
    b: "Izumi Miyamura"
  }, {
    c: "Yuki Yoshikawa"
  }, {
    d: "Kakeru Sengoku"
  }],
  correctAnswer: "Izumi Miyamura"
}, {
  img: '<img src="https://i.pinimg.com/originals/c3/d5/06/c3d5066c1f9ca74e32c19ed029fef4bd.jpg"id="img" class="img-fluid" alt="sumi Miskasa Ackerman">',
  question: "What is the name of the girl in the image?",
  answersChoices: [{
    a: "Levi"
  }, {
    b: "Historia Reiss"
  }, {
    c: "Miskasa Ackerman"
  }, {
    d: "Hange Zoe"
  }],
  correctAnswer: "Miskasa Ackerman"
}];
const DOMselectors = {
  btns: document.querySelectorAll(".btn-light"),
  quizQuestion: document.querySelector("#question"),
  quizImg: document.querySelector("#img-container"),
  displayContainer: document.querySelector("#question-container"),
  startPage: document.querySelector("#start-page"),
  startBtn: document.querySelector("#start-quiz-btn"),
  redoQuizBtn: document.querySelector("#redo-quiz-btn"),
  score: document.querySelector("#score"),
  endPage: document.querySelector("#end-page"),
  choiceA: document.querySelector("#button-a"),
  choiceB: document.querySelector("#button-b"),
  choiceC: document.querySelector("#button-c"),
  choiceD: document.querySelector("#button-d")
};

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"5gA8y":[function(require,module,exports) {
"use strict";

exports.interopDefault = function (a) {
  return a && a.__esModule ? a : {
    default: a
  };
};

exports.defineInteropFlag = function (a) {
  Object.defineProperty(a, '__esModule', {
    value: true
  });
};

exports.exportAll = function (source, dest) {
  Object.keys(source).forEach(function (key) {
    if (key === 'default' || key === '__esModule') {
      return;
    } // Skip duplicate re-exports when they have the same value.


    if (key in dest && dest[key] === source[key]) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function () {
        return source[key];
      }
    });
  });
  return dest;
};

exports.export = function (dest, destName, get) {
  Object.defineProperty(dest, destName, {
    enumerable: true,
    get: get
  });
};
},{}]},["21c8X","3L8AI"], "3L8AI", "parcelRequire3684")

//# sourceMappingURL=index.2142d36c.js.map
