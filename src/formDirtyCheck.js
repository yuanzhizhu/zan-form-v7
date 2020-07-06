import React from "react";

const loop = fn => {
  const next = () => {
    return fn(next);
  };

  return fn(next);
};

const formDirtyCheck = FormComponent => {
  class NewFormComponent extends React.Component {
    constructor(props) {
      super(props);
      this.oldFormData = JSON.stringify({});
      this.started = false;
    }

    getFormInstance = _form => {
      this.form = _form;
    };

    componentDidMount = () => {
      this.started = true;
      this.dirtyCheck();
    };

    componentWillUnmount = () => {
      this.started = false;
    };

    dirtyCheck = () => {
      loop(next => {
        if (this.started === true) {
          const formData = JSON.stringify(this.form.getValue());
          if (formData !== this.oldFormData) {
            this.oldFormData = formData;
            this.forceUpdate(() => {
              setTimeout(() => {
                next();
              }, 200);
            });
          } else {
            setTimeout(() => {
              next();
            }, 200);
          }
        }
      });
    };

    render = () => {
      return (
        <FormComponent {...this.props} getFormInstance={this.getFormInstance} />
      );
    };
  }

  return NewFormComponent;
};

export default formDirtyCheck;
