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
/*! exports provided: Link, Queue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Queue", function() { return Queue; });
class Link {
    constructor() {
        this.length = 0;
        this.header = null;
    }
    appendNode(node) {
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
            current.setNext(node);
        }
        this.length++;
        return node;
    }
    /**
     * 删除一个节点，如果不传值则默认删除最后一个
     * @param {Integer} index - 删除的行数
     */
    removeNode(index) {
        if (index < 0 || index > (this.length - 1)) {
            console.error('越界啦');
            return;
        }
        const [previous, current] = this.getNodeByIndex(index);
        if (index !== 0 && index !== this.length - 1) {
            previous.setNext(current.next);
        }
        if (index === 0) {
            this.header = current.next;
        }
        if (index === (this.length - 1)) {
            previous.setNext(null);
        }
        this.length--;
        return this;
    }
    getNodeByIndex(index) {
        let c_index = 0; // 当前索引节点index
        let current = this.header; // 当前节点
        let t_index = index || 0; // 目标索引
        var previous = null; // 用来记录上一个节点，当当前节点删除了，将上个节点指向下个节点
        if (index === 0) {
            previous = current;
        }
        else {
            while (c_index++ < t_index) {
                previous = current;
                current = current.next;
            }
        }
        return [previous, current];
    }
    /**
     * 插入节点位置
     * @param {Integer} index - 节点插入位置
     * @param {LinkedNode} node - 节点
     */
    insertNode(index, node) {
        if (index < 0 || index > this.length) {
            console.error('越界啦');
            return;
        }
        let current = this.header;
        let t_index = index;
        let c_index = 0;
        let previous = null;
        if (t_index === 0) {
            node.setNext(current);
            this.header = node;
        }
        else {
            while (c_index++ < t_index) {
                previous = current;
                current = current.next;
            }
            previous.setNext(node);
            node.setNext(current);
        }
        this.length++;
        return this;
    }
}
class Queue extends Link {
    constructor() {
        super();
        this.header = null;
        this.footer = null;
    }
    setHeader(node) {
        this.header = node;
    }
    setFooter(node) {
        this.footer = node;
    }
    appendNode(node) {
        super.appendNode(node);
        node.setPrev(this.footer);
        this.setFooter(node);
        return node;
    }
    /**
     * 删除一个节点，如果不传值则默认删除最后一个
     * @param {Integer} index - 删除的行数
     */
    removeNode(index) {
        const [previous, current] = super.getNodeByIndex(index);
        if (index > 0 && index < (this.length - 1)) {
            previous.setNext(current.next);
            current.next.setPrev(previous);
        }
        if (index === 0) {
            this.header = current.next;
        }
        if (index === (this.length - 1)) {
            this.footer = previous;
            previous.setNext(null);
        }
        this.header.setPrev(null);
        this.footer.setNext(null);
        return this;
    }
}


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_Link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/Link */ "./src/base/Link.ts");

let queue = new _base_Link__WEBPACK_IMPORTED_MODULE_0__["Queue"]();


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map