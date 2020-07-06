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

zanFormCore.onProps = () => {};
zanFormCore.howToGetValues = formInstance => {
  return formInstance.getValue();
};
zanFormCore.howToSetValues = (formInstance, data) => {
  return formInstance.patchValue(data);
};

zanFormCore.mapDecoratorStateToProps = {
  get: props => {
    if (props.props && props.props.data) {
      return props.props.data;
    }
  },
  set: (props, data) => {
    if (!props.props) {
      props.props = {};
    }
    props.props.data = data;
  }
};

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

export default zanFormCore;
