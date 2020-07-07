'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var zanFormCore = _interopDefault(require('zan-form-core'));
var zent = require('zent');
var React = _interopDefault(require('react'));

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
      return /*#__PURE__*/React.createElement(zent.FormCheckboxGroupField, _extends({
        value: []
      }, _this.props), _this.props.props.data.map(function (item, index) {
        var value = item.value,
            text = item.text,
            restProps = _objectWithoutProperties(item, ["value", "text"]);

        return /*#__PURE__*/React.createElement(zent.Checkbox, _extends({}, restProps, {
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
      return /*#__PURE__*/React.createElement(zent.FormRadioGroupField, _this.props, _this.props.props.data.map(function (item, index) {
        var value = item.value,
            text = item.text,
            restProps = _objectWithoutProperties(item, ["value", "text"]);

        return /*#__PURE__*/React.createElement(zent.Radio, _extends({}, restProps, {
          key: index,
          value: value
        }), text);
      }));
    });

    return _this;
  }

  return FormRadioGroupField;
}(React.Component);

var loop = function loop(fn) {
  var next = function next() {
    return fn(next);
  };

  return fn(next);
};

var formDirtyCheck = function formDirtyCheck(FormComponent) {
  var NewFormComponent = /*#__PURE__*/function (_React$Component) {
    _inherits(NewFormComponent, _React$Component);

    var _super = _createSuper(NewFormComponent);

    function NewFormComponent(props) {
      var _this;

      _classCallCheck(this, NewFormComponent);

      _this = _super.call(this, props);

      _defineProperty(_assertThisInitialized(_this), "getFormInstance", function (_form) {
        _this.form = _form;
      });

      _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
        _this.started = true;

        _this.dirtyCheck();
      });

      _defineProperty(_assertThisInitialized(_this), "componentWillUnmount", function () {
        _this.started = false;
      });

      _defineProperty(_assertThisInitialized(_this), "dirtyCheck", function () {
        loop(function (next) {
          if (_this.started === true) {
            var formData = JSON.stringify(_this.form.getValue());

            if (formData !== _this.oldFormData) {
              _this.oldFormData = formData;

              _this.forceUpdate(function () {
                setTimeout(function () {
                  next();
                }, 200);
              });
            } else {
              setTimeout(function () {
                next();
              }, 200);
            }
          }
        });
      });

      _defineProperty(_assertThisInitialized(_this), "render", function () {
        return /*#__PURE__*/React.createElement(FormComponent, _extends({}, _this.props, {
          getFormInstance: _this.getFormInstance
        }));
      });

      _this.oldFormData = JSON.stringify({});
      _this.started = false;
      return _this;
    }

    return NewFormComponent;
  }(React.Component);

  return NewFormComponent;
};

zanFormCore.onProps = function () {};

zanFormCore.howToGetFormValues = function (formInstance) {
  return formInstance.getValue();
};

zanFormCore.howToSetFormValues = function (formInstance, data) {
  return formInstance.patchValue(data);
};

zanFormCore.mapDecoratorStateToProps = {
  get: function get(props) {
    if (props.props && props.props.data) {
      return props.props.data;
    }
  },
  set: function set(props, data) {
    if (!props.props) {
      props.props = {};
    }

    props.props.data = data;
  }
};
zanFormCore.formDirtyCheck = formDirtyCheck;
zanFormCore.register("FormInputField", zent.FormInputField);
zanFormCore.register("FormSelectField", zent.FormSelectField);
zanFormCore.register("FormCheckboxField", zent.FormCheckboxField);
zanFormCore.register("FormNumberInputField", zent.FormNumberInputField);
zanFormCore.register("FormSwitchField", zent.FormSwitchField);
zanFormCore.register("FormColorPickerField", zent.FormColorPickerField);
zanFormCore.register("FormDatePickerField", zent.FormDatePickerField);
zanFormCore.register("FormWeekPickerField", zent.FormWeekPickerField);
zanFormCore.register("FormMonthPickerField", zent.FormMonthPickerField);
zanFormCore.register("FormQuarterPickerField", zent.FormQuarterPickerField);
zanFormCore.register("FormYearPickerField", zent.FormYearPickerField);
zanFormCore.register("FormTimePickerField", zent.FormTimePickerField);
zanFormCore.register("FormTimeRangePickerField", zent.FormTimeRangePickerField);
zanFormCore.register("FormDateRangePickerField", zent.FormDateRangePickerField);
zanFormCore.register("FormDateRangeQuickPickerField", zent.FormDateRangeQuickPickerField);
zanFormCore.register("FormCheckboxGroupField", FormCheckboxGroupField);
zanFormCore.register("FormRadioGroupField", FormRadioGroupField);

module.exports = zanFormCore;
