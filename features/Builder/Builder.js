import React, { useState } from "react";

const initialState = [
  {
    component: "page",
    label: "Page 1",
    id: "0c946643-5a83-4545-baea-055b27b51e8a",
    fields: [],
  },
];

const formTypeLookup = {
  short_text: {
    type: "text",
    _uid: "",
    component: "short_text",
    label: "",
    hint: "",
    placeholder: "",
  },
  text_area: {
    type: "textarea",
    _uid: "",
    component: "text_area",
    label: "",
    hint: "",
    placeholder: "",
  },
};

export function Builder() {
  const [formState, setFormState] = useState(initialState);

  const updateState = () => {
    setFormState((prevState) => {
      prevState[0].fields.push(formTypeLookup[short_text]);

      return {
        ...prevState,
      };
    });
  };

  return (
    <div>
      <button onClick={updateState}>Update</button>
    </div>
  );
}
