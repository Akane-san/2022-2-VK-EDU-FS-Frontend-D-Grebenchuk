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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var input = document.querySelector('input');\ninput.focus();\n\n// находим кнопки\nvar clearButton = document.querySelector('.clear');\n\n// находим контейнер\nvar box = document.getElementById('outgoing-chats-elem');\nvar options = {\n  timezone: 'UTC',\n  hour: 'numeric',\n  minute: 'numeric',\n  month: 'long',\n  day: 'numeric'\n};\nif (localStorage.templates) {\n  // формируем переписку\n  var t = JSON.parse(localStorage.templates);\n  t\n  //.split('</p>,|</span>,')\n  .map(function (p) {\n    return box.insertAdjacentHTML('beforeend', p);\n  });\n}\nwindow.addEventListener('keydown', function (e) {\n  if (e.keyCode == 13) {\n    // получаем текст сообщения\n    var text = document.querySelector('input').value;\n    // формируем шаблон\n    var template = \"<p>\".concat(text, \"</p><span class=\\\"time\\\">\").concat(new Date().toLocaleTimeString('ru-RU', options), \"</span>\");\n    // добавляем шаблон в контейнер\n    box.insertAdjacentHTML('beforeend', template);\n    // сбрасываем значение инпута\n    input.value = '';\n    // записываем сообщение в хранилище\n    localStorage.message = template;\n    var arr2 = JSON.parse(localStorage.getItem('templates')) || [];\n    arr2.push(template);\n    localStorage.setItem('templates', JSON.stringify(arr2));\n  }\n});\n\n// обрабатываем событие \"storage\"\nwindow.addEventListener('storage', function (event) {\n  // если ключом события является \"messages\"\n  // игнорируем его\n  if (event.key == 'messages') return;\n  // если новое значение события равняется null\n  // нажимаем кнопку для очистки хранилища\n  // иначе добавляем сообщение в контейнер\n  event.newValue == null ? clearButton.click() : box.insertAdjacentHTML('afterbegin', event.newValue);\n});\n\n// очищаем хранилище и контейнер\nclearButton.addEventListener('click', function () {\n  localStorage.clear();\n  document.querySelectorAll('p').forEach(function (p) {\n    return box.removeChild(p);\n  });\n  input.focus();\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });