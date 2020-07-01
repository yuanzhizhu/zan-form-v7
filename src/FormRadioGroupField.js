import React from "react";
import { FormRadioGroupField as OldFormRadioGroupField } from "zent";

class FormRadioGroupField extends React.Component {
  render = () => {
    let { data = [], ...restProps } = this.props;

    return (
      <OldFormRadioGroupField {...restProps}>
        {data.map((item, index) => {
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
