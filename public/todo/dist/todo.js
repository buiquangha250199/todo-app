/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/my-todo/style.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/my-todo/style.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"ul {\\r\\n\\tdisplay: table;\\r\\n\\tmargin: 15px 0px;\\r\\n}\\r\\ni {\\r\\n\\tfont-size: 14px;\\r\\n}\\r\\n\\r\\ni.fas.fa-pen {\\r\\n\\tcolor: green;\\r\\n}\\r\\n\\r\\ni.far.fa-trash-alt {\\r\\n\\tcolor: crimson;\\r\\n}\\r\\n\\r\\ntodo-list p {\\r\\n\\tdisplay: inline;\\r\\n}\\r\\n\\r\\np.done-true {\\r\\n\\ttext-decoration: line-through;\\r\\n\\tfont-style: italic;\\r\\n}\\r\\n\\r\\np.done-false {\\r\\n\\ttext-decoration: none;\\r\\n\\tfont-style: normal;\\r\\n}\\r\\n\\r\\n.search {\\r\\n    padding-bottom: 15px;\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\np.search-label {\\r\\n    color: darkmagenta;\\r\\n    font-size: 18px;\\r\\n}\\r\\n\\r\\n.inp {\\r\\n  position: relative;\\r\\n  margin: auto;\\r\\n  width: 100%;\\r\\n  max-width: 200px;\\r\\n}\\r\\n.inp .label {\\r\\n  position: absolute;\\r\\n  top: 16px;\\r\\n  left: 0;\\r\\n  font-size: 16px;\\r\\n  color: #9098a9;\\r\\n  font-weight: 500;\\r\\n  transform-origin: 0 0;\\r\\n  transition: all 0.2s ease;\\r\\n}\\r\\n.inp .border {\\r\\n  position: absolute;\\r\\n  bottom: 0;\\r\\n  left: 0;\\r\\n  height: 2px;\\r\\n  width: 100%;\\r\\n  background: #07f;\\r\\n  transform: scaleX(0);\\r\\n  transform-origin: 0 0;\\r\\n  transition: all 0.15s ease;\\r\\n}\\r\\n.inp input {\\r\\n  -webkit-appearance: none;\\r\\n  width: 100%;\\r\\n  border: 0;\\r\\n  font-family: inherit;\\r\\n  padding: 12px 0;\\r\\n  height: 36px;\\r\\n  font-size: 16px;\\r\\n  font-weight: 500;\\r\\n  border-bottom: 2px solid #c8ccd4;\\r\\n  background: none;\\r\\n  border-radius: 0;\\r\\n  color: mediumaquamarine;\\r\\n  transition: all 0.15s ease;\\r\\n}\\r\\n\\r\\n.inp input:not(:placeholder-shown) + span {\\r\\n  border-bottom: 0px;\\r\\n  color: #5a667f;\\r\\n  transform: translateY(-26px) scale(0.75);\\r\\n}\\r\\n.inp input:focus {\\r\\n\\tborder-bottom: 0px;\\r\\n  background: none;\\r\\n  outline: none;\\r\\n}\\r\\n.inp input:focus + span {\\r\\n\\tborder-bottom: 0px;\\r\\n  color: #07f;\\r\\n  transform: translateY(-26px) scale(0.75);\\r\\n}\\r\\n.inp input:focus + span + .border {\\r\\n\\tborder-bottom: 0px;\\r\\n  transform: scaleX(1);\\r\\n}\\r\\n\\r\\n.list {\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    justify-items: center;\\r\\n    padding: 20px 0px;\\r\\n}\\r\\n\\r\\nli.ng-scope {\\r\\n    color: aliceblue;\\r\\n    font-size: 20px;\\r\\n    padding-bottom: 5px;\\r\\n}\\r\\n\\r\\ninput.edit-field, input.add-field {\\r\\n    color: mediumaquamarine;\\r\\n    border: 1px solid seashell;\\r\\n    border-radius: 3px;\\r\\n    height: 18px;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n    color: darkmagenta;\\r\\n    background-color: blanchedalmond;\\r\\n    border-radius: 5px;\\r\\n    height: 20px;\\r\\n    width: fit-content;\\r\\n}\\r\\n\\r\\n.add-todo {\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    margin-bottom: 30px;\\r\\n}\\r\\n\\r\\n.add-button {\\r\\n\\tmargin-left: 10px;\\r\\n}\\r\\n\\r\\ninput.add-field {\\r\\n\\twidth: 250px;\\r\\n}\\r\\n\\r\\nli form {\\r\\n    display: inline;\\r\\n}\\r\\n\\r\\nlabel {\\r\\n    color: aliceblue;\\r\\n    font-size: 18px;\\r\\n    margin-right: 15px;\\r\\n    font-weight: bolder;\\r\\n}\\r\\n\\r\\ni.fas.fa-plus {\\r\\n    font-size: larger;\\r\\n    width: 18px;\\r\\n}\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/my-todo/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const myTodo = __webpack_require__(/*! ./my-todo */ \"./src/my-todo/index.js\");\r\nlet appModule = angular.module(\"todoApp\", [myTodo]);\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/my-service/index.js":
/*!*********************************!*\
  !*** ./src/my-service/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const moduleName = \"myService\";\r\nmodule.exports = moduleName;\r\n\r\nangular.module(moduleName, []).service(moduleName, function() {  \r\n    return {\r\n        message() {\r\n            return 'Welcome to my Todo App!';\r\n        }\r\n\r\n    };\r\n\r\n})\n\n//# sourceURL=webpack:///./src/my-service/index.js?");

/***/ }),

/***/ "./src/my-todo/index.js":
/*!******************************!*\
  !*** ./src/my-todo/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const componentName = \"myTodo\";\r\nmodule.exports = componentName;\r\nconst myService = __webpack_require__(/*! ../my-service */ \"./src/my-service/index.js\");\r\n\r\nangular.module(componentName, [myService])\r\n\t.component(\"todoList\", {\r\n\t\tbindings: {\r\n\t\t\tlist: '='\r\n\t\t},\r\n\t\tcontroller: myTodoController,\r\n\t\tcontrollerAs: \"self\",\r\n\t\ttemplate: __webpack_require__(/*! ./template.html */ \"./src/my-todo/template.html\"),\r\n\t\tstyle: __webpack_require__(/*! ./style.css */ \"./src/my-todo/style.css\")\r\n\t});\r\n\r\nfunction myTodoController(myService) {\r\n\tconsole.log(\"todo works!\");\r\n\tlet self = this;\r\n\r\n\tself.message = myService.message();\r\n\r\n\tself.removeTodo = function(id) {\r\n\t\t\r\n\t\tif(self.todoList.length === 1) self.todoList.pop();\r\n\r\n\t\tself.todoList.splice(id,1);\r\n\t}\r\n\r\n\tself.addNewTodo = function(name) {\r\n\t\tvar newTodo = {'id': self.todoList.length,'name': name, 'status': false};\r\n\t\tself.todoList.push(newTodo);\r\n\t\ttodoDb.addTodo(newTodo);\r\n\t}\r\n\r\n\r\n}\n\n//# sourceURL=webpack:///./src/my-todo/index.js?");

/***/ }),

/***/ "./src/my-todo/style.css":
/*!*******************************!*\
  !*** ./src/my-todo/style.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/my-todo/style.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/my-todo/style.css?");

/***/ }),

/***/ "./src/my-todo/template.html":
/*!***********************************!*\
  !*** ./src/my-todo/template.html ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<h1>{{self.message}}</h1>\\r\\n<div class=\\\"search\\\">\\r\\n\\t<label for=\\\"inp\\\" class=\\\"inp\\\">\\r\\n\\t\\t<input type=\\\"text\\\" id=\\\"inp\\\" placeholder=\\\"&nbsp;\\\" ng-model=\\\"key\\\">\\r\\n\\t\\t<span class=\\\"label\\\">Search</span>\\r\\n\\t\\t<span class=\\\"border\\\"></span>\\r\\n\\t</label>\\r\\n</div>\\r\\n<div class=\\\"list\\\">\\t\\t\\r\\n\\t\\t<ul>\\r\\n\\t\\t\\t<li ng-repeat=\\\"todo in self.list | filter: key\\\" >\\r\\n\\t\\t\\t\\t<form action=\\\"done\\\" method=\\\"post\\\" accept-charset=\\\"utf-8\\\">\\r\\n\\t\\t\\t\\t\\t<input type=\\\"text\\\" name=\\\"checkName\\\" value=\\\"{{todo.name}}\\\" ng-hide=\\\"true\\\">\\r\\n\\t\\t\\t\\t\\t<input type=\\\"checkbox\\\" ng-model=\\\"todo.status\\\" name=\\\"status\\\" onChange=\\\"this.form.submit()\\\">\\r\\n\\t\\t\\t\\t</form>\\r\\n\\t\\t\\t\\t<p class=\\\"done-{{todo.status}}\\\" >{{todo.name}}<p>\\r\\n\\t\\t\\t\\t<button><i class=\\\"fas fa-pen\\\" ng-click=\\\"show=true\\\"></i></button>\\r\\n\\t\\t\\t\\t<form action=\\\"removeTodo\\\" method=\\\"post\\\" accept-charset=\\\"utf-8\\\">\\r\\n\\t\\t\\t\\t\\t<input type=\\\"text\\\" name=\\\"deleteName\\\" value=\\\"{{todo.name}}\\\" ng-hide=\\\"true\\\">\\r\\n\\t\\t\\t\\t\\t<button type=\\\"submit\\\"><i class=\\\"far fa-trash-alt\\\" ></i></button>\\r\\n\\t\\t\\t\\t</form>\\r\\n\\t\\t\\t\\t<form action=\\\"editTodo\\\" method=\\\"post\\\" accept-charset=\\\"utf-8\\\" ng-show=\\\"show\\\">\\r\\n\\t\\t\\t\\t\\t<input type=\\\"text\\\" name=\\\"editName\\\" value=\\\"{{todo.name}}\\\" ng-hide=\\\"true\\\">\\r\\n\\t\\t\\t\\t\\t<input type=\\\"text\\\" name=\\\"nameEditted\\\" value=\\\"{{todo.name}}\\\" class=\\\"edit-field\\\">\\r\\n\\t\\t\\t\\t\\t<button ng-click=\\\"show=false\\\" type=\\\"submit\\\"><i class=\\\"fas fa-check\\\"></i></button>\\r\\n\\t\\t\\t\\t</form>\\r\\n\\t\\t\\t</li>\\r\\n\\t\\t</ul>\\r\\n</div>\\r\\n\\r\\n<form action=\\\"addTodo\\\" method=\\\"POST\\\" >\\r\\n\\t<div class=\\\"add-todo\\\">\\r\\n\\t\\t<label for=\\\"\\\">Add todo:</label>\\r\\n\\t\\t<input type=\\\"text\\\" class=\\\"add-field\\\" name='newTodoName' placeholder=\\\" Input here and press enter.\\\" required=\\\"\\\"> \\r\\n\\t</div>\\r\\n</form>\\r\\n\\r\\n\";\n\n//# sourceURL=webpack:///./src/my-todo/template.html?");

/***/ })

/******/ });