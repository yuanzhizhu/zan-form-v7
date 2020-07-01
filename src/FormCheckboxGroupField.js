import React from "react";
import { FormCheckboxGroupField as OldFormCheckboxGroupField } from "zent";

class FormCheckboxGroupField extends React.Component {
  render = () => {
    let { data = [], ...restProps } = this.props;

    return (
      <OldFormCheckboxGroupField value={[]} {...restProps}>
        {data.map((item, index) => {
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
