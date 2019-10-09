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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/base/Link.ts":
/*!**************************!*\
  !*** ./src/base/Link.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Link = /** @class */ (function () {
    function Link() {
        this.length = 0;
        this.header = null;
    }
    Link.prototype.appendNode = function (node) {
        var current = null;
        // 如果头节点不存在
        if (!this.header) {
            // 给头节点赋予初值
            this.header = node;
        }
        else {
            // 头指针为初值
            current = this.header;
            // 便利循环头指针，找到最后一个指针
            while (current.next) {
                current = current.next;
            }
            // 最后一个指针的下一个指针为当前node
            current.next = node;
        }
        this.length++;
    };
    /**
     * 删除一个节点，如果不传值则默认删除最后一个
     * @param {Integer} index - 删除的行数
     */
    Link.prototype.removeNode = function (index) {
        if ((index < 0) || (index > this.length + 1)) {
            console.error('越界啦');
            return;
        }
        var t_index = index || this.length; // 目标索引
        var current = this.header; // 当前节点
        var c_index = 0; // 当前索引节点index
        var previous = null; // 用来记录上一个节点，当当前节点删除了，将上个节点指向下个节点
        if (index === 0) {
            current = this.header;
        }
        else {
            while (c_index++ < t_index) {
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.length--;
        return this;
    };
    /**
     * 插入节点位置
     * @param {Integer} index - 节点插入位置
     * @param {LinkedNode} node - 节点
     */
    Link.prototype.insertNode = function (index, node) {
        if ((index < 0) || (index > this.length + 1)) {
            console.error('越界啦');
            return;
        }
        var current = this.header;
        var t_index = index;
        var c_index = 0;
        var previous = null;
        if (t_index === 0) {
            node.next = current;
            this.header = node;
        }
        else {
            while (c_index++ < t_index) {
                previous = current;
                current = current.next;
            }
            previous.next = node;
            node.next = current;
        }
        this.length++;
        return this;
    };
    return Link;
}());
exports.Link = Link;
var Queue = /** @class */ (function (_super) {
    __extends(Queue, _super);
    function Queue() {
        var _this = _super.call(this) || this;
        _this.header = null;
        _this.footer = null;
        return _this;
    }
    Queue.prototype.setHeader = function (node) {
        this.header = node;
    };
    Queue.prototype.setFooter = function (node) {
        this.footer = node;
    };
    Queue.prototype.appendNode = function (node) {
        var current = null;
        // 如果头节点不存在
        if (!this.header) {
            // 给头节点赋予初值
            this.header = node;
        }
        else {
            // 头指针为初值
            current = this.header;
            // 便利循环头指针，找到最后一个指针
            while (current.next) {
                current = current.next;
            }
            // 最后一个指针的下一个指针为当前node
            current.next = node;
        }
        this.length++;
    };
    return Queue;
}(Link));
exports.Queue = Queue;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Link_1 = __webpack_require__(/*! ./base/Link */ "./src/base/Link.ts");
var queue = new Link_1.Queue();
console.log(queue);


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map