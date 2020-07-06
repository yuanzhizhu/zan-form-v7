import React from "react";
import { FormCheckboxGroupField as OldFormCheckboxGroupField } from "zent";

class FormCheckboxGroupField extends React.Component {
  render = () => {
    return (
      <OldFormCheckboxGroupField value={[]} {...this.props}>
        {this.props.props.data.map((item, index) => {
          const { value, text, ...restProps } = item;

          return (
            <Checkbox {...restProps} key={index} value={value}>
              {text}
            </Checkbox>
          );
        })}
      </OldFormCheckboxGroupField>
    );
  };
}

export default FormCheckboxGroupField;
