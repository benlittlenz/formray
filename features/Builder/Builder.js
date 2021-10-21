import React, { useState } from "react";
import {
  AtSymbolIcon,
  UserIcon,
  MenuAlt4Icon,
  MenuAlt2Icon,
  LinkIcon
} from "@heroicons/react/solid";
import { v4 as uuidv4 } from "uuid";

import {
  InputField,
  TextAreaField,
  SelectField,
} from "../../components/Fields";
import { SelectMulti, SelectOne, Heading1Icon, Heading2Icon, Heading3Icon } from "./Icons";

const icons = {
  name: <UserIcon className="h-6 w-6 text-gray-600" />,
  email: <AtSymbolIcon className="h-6 w-6 text-gray-600" />,
};

const initialState = [
  {
    component: "page",
    label: "Page 1",
    id: "0c946643-5a83-4545-baea-055b27b51e8a",
    fields: [],
  },
];

const fieldComponentLookup = {
  short_text: <InputField />,
};

const formTypeLookup = {
  short_text: {
    type: "text",
    id: uuidv4(),
    component: "short_text",
    label: "",
    hint: "",
    placeholder: "",
  },
  text_area: {
    type: "textarea",
    id: uuidv4(),
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
      prevState[0].fields.push(formTypeLookup["short_text"]);

      return {
        ...prevState,
      };
    });
  };

  return (
    <div className="flex h-screen overflow-hidden bg-white rounded-md">
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-96">
          <div className="flex flex-col flex-grow pt-5 overflow-y-auto  bg-white border-r border-gray-100 shadow-sm">
            <div className="flex items-center px-4">
              <div className="flex justify-center h-20 w-20 hover:bg-gray-100 text-center">
                <div className="m-auto">
                  <Heading1Icon />
                  <p className="text-sm">Heading 1</p>
                </div>
              </div>
              <div className="flex justify-center h-20 w-20 hover:bg-gray-100 text-center">
                <div className="m-auto">
                  <Heading2Icon />
                  <p className="text-sm">Heading 2</p>
                </div>
              </div>
              <div className="flex justify-center h-20 w-20 hover:bg-gray-100 text-center">
                <div className="m-auto">
                  <Heading3Icon />
                  <p className="text-sm">Heading 3</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="px-4 py-2 text-sm font-normal text-gray-500">
                Input
              </h4>
              <div className="px-4 flex items-center">
                <div className="flex justify-center h-20 w-20 hover:bg-gray-100 text-center">
                  <div className="m-auto">
                    <UserIcon className="mx-auto h-6 w-6 text-gray-600" />
                    <p className="text-sm">User</p>
                  </div>
                </div>
                <div className="flex justify-center h-20 w-20 hover:bg-gray-100 text-center">
                  <div className="m-auto">
                    <AtSymbolIcon className="mx-auto h-6 w-6 text-gray-600" />
                    <p className="text-sm">Email</p>
                  </div>
                </div>
                <div className="flex justify-center h-20 w-20 hover:bg-gray-100 text-center">
                  <div className="m-auto">
                    <MenuAlt4Icon className="mx-auto h-6 w-6 text-gray-600" />
                    <p className="text-sm">Short Text</p>
                  </div>
                </div>
                <div className="flex justify-center h-20 w-20 hover:bg-gray-100 text-center">
                  <div className="m-auto">
                    <MenuAlt2Icon className="mx-auto h-6 w-6 text-gray-600" />
                    <p className="text-sm">Long Text</p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="px-4 flex items-center">
                  <div className="flex justify-center h-20 w-20 hover:bg-gray-100 text-center">
                    <div className="m-auto">
                      <LinkIcon className="mx-auto h-6 w-6 text-gray-600" />
                      <p className="text-sm">Number</p>
                    </div>
                  </div>
                  <div className="flex justify-center h-20 w-20 hover:bg-gray-100 text-center">
                    <div className="m-auto">
                      <LinkIcon className="mx-auto h-6 w-6 text-gray-600" />
                      <p className="text-sm">URL</p>
                    </div>
                  </div>
                  <div className="flex justify-center h-20 w-20 hover:bg-gray-100 text-center">
                    <div className="m-auto">
                      <SelectOne />
                      <p className="text-sm">Select</p>
                    </div>
                  </div>
                  <div className="flex justify-center h-20 w-20 hover:bg-gray-100 text-center">
                    <div className="m-auto">
                      <SelectMulti />
                      <p className="text-sm">Multi-Select</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// <div>
//   <button onClick={updateState}>Update</button>
//   <div className="bg-red-500 h-6 w-6"></div>
//   <ul>
//   {formState[0].fields.map((field) => {
//     return (
//         <li key={field.id}>{fieldComponentLookup[field.component]}</li>
//     );
//     // console.log('FIELD', field)
//   })}
//   </ul>
// </div>
