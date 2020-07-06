import React from "react";
import { FormRadioGroupField as OldFormRadioGroupField } from "zent";

class FormRadioGroupField extends React.Component {
  render = () => {
    return (
      <OldFormRadioGroupField {...this.props}>
        {this.props.props.data.map((item, index) => {
          const { value, text, ...restProps } = item;

          return (
            <Radio {...restProps} key={index} value={value}>
              {text}
            </Radio>
          );
        })}
      </OldFormRadioGroupField>
    );
  };
}

export default FormRadioGroupField;
