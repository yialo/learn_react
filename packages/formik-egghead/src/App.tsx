import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

type State = {
  items: string[];
};

const INITIAL_STATE: State = {
  items: [],
};

const FIELD_ID = 'value-field';

const VALIDATION_SCHEMA = yup.object().shape({
  value: yup.string().required('Cannot be empty'),
});

export function App() {
  const [state, setState] = React.useState(INITIAL_STATE);

  return (
    <div>
      <div className="title">Regular Maintenance</div>

      {state.items.length > 0 ? (
        <ul>
          {state.items.map((item, i) => (
            <li key={`${item}-${i}`}>{item}</li>
          ))}
        </ul>
      ) : (
        <div>No items</div>
      )}

      <Formik
        initialValues={{ value: '' }}
        validationSchema={VALIDATION_SCHEMA}
        onSubmit={(values, actions) => {
          setState((prevState) => ({
            items: [...prevState.items, values.value],
          }));
          actions.resetForm();
        }}
      >
        {({ errors }) => (
          <Form className="form">
            <label className="label" htmlFor={FIELD_ID}>
              New item
            </label>

            <div className="field-wrapper">
              <Field id={FIELD_ID} type="text" name="value" />
              <button className="button" type="submit" disabled={!!errors.value}>
                Add
              </button>
            </div>

            <ErrorMessage name="value" className="error" component="div" />
          </Form>
        )}
      </Formik>
    </div>
  );
}
