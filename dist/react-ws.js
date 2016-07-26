(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactWS"] = factory(require("react"));
	else
		root["ReactWS"] = factory(root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _flex = __webpack_require__(3);

	var _flex2 = _interopRequireDefault(_flex);

	__webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by Administrator on 2016/7/26.
	 */
	module.exports = {
	  Flex: _flex2.default
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames() {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg === 'undefined' ? 'undefined' : _typeof(arg);

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if ("function" === 'function' && _typeof(__webpack_require__(1)) === 'object' && __webpack_require__(1)) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	})();

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
	                                                                                                                                                                                                                                                                   * Created by Administrator on 2016/7/26.
	                                                                                                                                                                                                                                                                   */


	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(2);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Flex = _react2.default.createClass({
	    displayName: 'Flex',

	    propTypes: {
	        flex: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.number, _react2.default.PropTypes.bool]),
	        auto: _react2.default.PropTypes.bool,
	        none: _react2.default.PropTypes.bool,
	        width: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.number, _react2.default.PropTypes.string]),
	        height: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.number, _react2.default.PropTypes.string]),
	        row: _react2.default.PropTypes.bool,
	        column: _react2.default.PropTypes.bool,
	        wrap: _react2.default.PropTypes.bool,
	        nowrap: _react2.default.PropTypes.bool,
	        justifyStart: _react2.default.PropTypes.bool,
	        justifyEnd: _react2.default.PropTypes.bool,
	        justifyCenter: _react2.default.PropTypes.bool,
	        justifyBetween: _react2.default.PropTypes.bool,
	        justifyAround: _react2.default.PropTypes.bool,
	        alignStart: _react2.default.PropTypes.bool,
	        alignEnd: _react2.default.PropTypes.bool,
	        alignCenter: _react2.default.PropTypes.bool,
	        alignBaseline: _react2.default.PropTypes.bool,
	        alignStretch: _react2.default.PropTypes.bool
	    },
	    render: function render() {
	        var cn = (0, _classnames2.default)({
	            'ws-flex': true,

	            'ws-flex-auto': this.props.auto,
	            'ws-flex-none': this.props.none || this.props.width || this.props.height,

	            'ws-flex-row': this.props.row,
	            'ws-flex-column': this.props.column,

	            'ws-flex-wrap': this.props.wrap,
	            'ws-flex-nowrap': this.props.nowrap,

	            'ws-flex-justify-start': this.props.justifyStart,
	            'ws-flex-justify-end': this.props.justifyEnd,
	            'ws-flex-justify-center': this.props.justifyCenter,
	            'ws-flex-justify-between': this.props.justifyBetween,
	            'ws-flex-justify-around': this.props.justifyAround,

	            'ws-flex-align-start': this.props.alignStart,
	            'ws-flex-align-end': this.props.alignEnd,
	            'ws-flex-align-center': this.props.alignCenter,
	            'ws-flex-align-baseline': this.props.alignBaseline,
	            'ws-flex-align-stretch': this.props.alignStretch
	        }, this.props.className);

	        var style = Object.assign({}, this.props.style);
	        if (this.props.flex) {
	            style.flex = typeof this.props.flex === 'boolean' ? 1 : this.props.flex;
	        }
	        if (this.props.height) {
	            style.height = this.props.height;
	        }
	        if (this.props.width) {
	            style.width = this.props.width;
	        }

	        return _react2.default.createElement(
	            'div',
	            _extends({}, this.props, { className: cn, style: style }),
	            this.props.children
	        );
	    }
	});

	exports.default = Flex;

/***/ },
/* 4 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }
/******/ ])
});
;