import zanFormCore from "zan-form-core";
import {
  FormInputField,
  FormSelectField,
  FormCheckboxField,
  FormNumberInputField,
  FormSwitchField,
  FormColorPickerField,
  FormDatePickerField,
  FormWeekPickerField,
  FormMonthPickerField,
  FormQuarterPickerField,
  FormYearPickerField,
  FormTimePickerField,
  FormTimeRangePickerField,
  FormDateRangePickerField,
  FormDateRangeQuickPickerField
} from "zent";
import FormCheckboxGroupField from "./FormCheckboxGroupField";
import FormRadioGroupField from "./FormRadioGroupField";

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
zanFormCore.register(
  "FormDateRangeQuickPickerField",
  FormDateRangeQuickPickerField
);
zanFormCore.register("FormCheckboxGroupField", FormCheckboxGroupField);
zanFormCore.register("FormRadioGroupField", FormRadioGroupField);

// 为props增加validator
const addValidator = props => {
  props.validations = props.validations || {};
  props.validationErrors = props.validationErrors || {};

  if (typeof props.required === "string") {
    const requiredText = props.required;
    props.required = true;
    props.validations.required = true;
    props.validationErrors.required = requiredText;
  } else if (props.required === true) {
    props.required = true;
  } else if (props.required === false) {
    props.required = false;
  }
};

const setValues = (data, formInstance, callback) => {
  if (data) {
    const { zentForm } = formInstance.props;
    let prevValues = null;

    const setValuesAsync = () =>
      setTimeout(() => {
        const values = zentForm.getFormValues();
        if (JSON.stringify(prevValues) !== JSON.stringify(values)) {
          prevValues = values;
          zentForm.setFieldsValue(data);
          setValuesAsync();
        } else {
          callback && callback();
        }
      }, 0);

    setValuesAsync();
  }
};

zanFormCore.setValues = setValues;
zanFormCore.onProps = addValidator;

export default zanFormCore;
