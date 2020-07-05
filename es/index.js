import zanFormCore from 'zan-form-core';
import { FormCheckboxGroupField as FormCheckboxGroupField$1, FormRadioGroupField as FormRadioGroupField$1, FormInputField, FormSelectField, FormCheckboxField, FormNumberInputField, FormSwitchField, FormColorPickerField, FormDatePickerField, FormWeekPickerField, FormMonthPickerField, FormQuarterPickerField, FormYearPickerField, FormTimePickerField, FormTimeRangePickerField, FormDateRangePickerField, FormDateRangeQuickPickerField } from 'zent';
import React from 'react';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

var FormCheckboxGroupField = /*#__PURE__*/function (_React$Component) {
  _inherits(FormCheckboxGroupField, _React$Component);

  var _super = _createSuper(FormCheckboxGroupField);

  function FormCheckboxGroupField() {
    var _this;

    _classCallCheck(this, FormCheckboxGroupField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      var _this$props = _this.props,
          _this$props$data = _this$props.data,
          data = _this$props$data === void 0 ? [] : _this$props$data,
          restProps = _objectWithoutProperties(_this$props, ["data"]);

      return /*#__PURE__*/React.createElement(FormCheckboxGroupField$1, _extends({
        value: []
      }, restProps), data.map(function (item, index) {
        var value = item.value,
            text = item.text,
            restProps = _objectWithoutProperties(item, ["value", "text"]);

        return /*#__PURE__*/React.createElement(Checkbox, _extends({}, restProps, {
          key: index,
          value: value
        }), text);
      }));
    });

    return _this;
  }

  return FormCheckboxGroupField;
}(React.Component);

var FormRadioGroupField = /*#__PURE__*/function (_React$Component) {
  _inherits(FormRadioGroupField, _React$Component);

  var _super = _createSuper(FormRadioGroupField);

  function FormRadioGroupField() {
    var _this;

    _classCallCheck(this, FormRadioGroupField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      var _this$props = _this.props,
          _this$props$data = _this$props.data,
          data = _this$props$data === void 0 ? [] : _this$props$data,
          restProps = _objectWithoutProperties(_this$props, ["data"]);

      return /*#__PURE__*/React.createElement(FormRadioGroupField$1, restProps, data.map(function (item, index) {
        var value = item.value,
            text = item.text,
            restProps = _objectWithoutProperties(item, ["value", "text"]);

        return /*#__PURE__*/React.createElement(Radio, _extends({}, restProps, {
          key: index,
          value: value
        }), text);
      }));
    });

    return _this;
  }

  return FormRadioGroupField;
}(React.Component);

zanFormCore.register("FormInputField", FormInputField);
zanFormCore.register("FormSelectField", FormSelectField);
zanFormCore.register("FormCheckboxField", FormCheckboxField);
zanFormCore.register("FormNumberInputField", FormNumberInputField);
zanFormCore.register("FormSwitchField", FormSwitchField);
zanFormCore.register("FormColorPickerField", FormColorPickerField);
zanFormCore.register("FormDatePickerField", FormDatePickerField);
zanFormCore.register("FormWeekPickerField", FormWeekPickerField);
zanFormCore.register("FormMonthPickerField", FormMonthPickerField);
zanFormCore.register("FormQuarterPickerField", FormQuarterPickerField);
zanFormCore.register("FormYearPickerField", FormYearPickerField);
zanFormCore.register("FormTimePickerField", FormTimePickerField);
zanFormCore.register("FormTimeRangePickerField", FormTimeRangePickerField);
zanFormCore.register("FormDateRangePickerField", FormDateRangePickerField);
zanFormCore.register("FormDateRangeQuickPickerField", FormDateRangeQuickPickerField);
zanFormCore.register("FormCheckboxGroupField", FormCheckboxGroupField);
zanFormCore.register("FormRadioGroupField", FormRadioGroupField);

zanFormCore.howToGetValues = function (formInstance) {
  return formInstance.getValue();
};

export default zanFormCore;
