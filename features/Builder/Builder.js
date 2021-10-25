import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {
  AtSymbolIcon,
  UserIcon,
  MenuAlt4Icon,
  MenuAlt2Icon,
  LinkIcon,
} from "@heroicons/react/solid";
import { v4 as uuidv4 } from "uuid";

import {
  InputField,
  TextAreaField,
  SelectField,
} from "../../components/Fields";
import {
  SelectMulti,
  SelectOne,
  Heading1Icon,
  Heading2Icon,
  Heading3Icon,
  ParagraphIcon,
} from "./Icons";

const icons = {
  name: <UserIcon className="h-6 w-6 text-gray-600" />,
  email: <AtSymbolIcon className="h-6 w-6 text-gray-600" />,
};

const initialState = {
  component: "page",
  label: "Page 1",
  id: uuidv4(),
  fields: [],
};

const fieldComponentLookup = {
  short_text: <InputField label="Short Text" />,
  text_area: <TextAreaField label="Text Area" />,
  select: <SelectField label="Select Field" options={[{label: 'Option A', value: 'Option A'}]} />
};



export function Builder() {
  const [formState, setFormState] = useState(initialState);

  const formTypeLookup = {
    short_text: {
      type: "text",
      id: uuidv4(),
      component: "short_text",
      label: "Short Text",
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
    select: {
      type: "select",
      id: uuidv4(),
      component: "select",
      label: "",
      hint: "",
      placeholder: "",
    },
  };

  const createElement = (element) => {
    console.log("element", element);
    setFormState((prevState) => {
      return {
        ...prevState,
        fields: [...prevState.fields, formTypeLookup[element]],
      };
    });
  };

  const handleDragEnd = (result) => {
    if(!result.destination) return;

    const items = {...formState}
    const [reorderedItem] = items.fields.splice(result.source.index, 1)
    items.fields.splice(result.destination.index, 0, reorderedItem)

    setFormState(items)
    // const reorderItem = items.splice()
  }
  console.log("formState", formState);
  return (
    <div className="flex h-screen overflow-hidden bg-white rounded-md">
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-96">
          <div className="flex flex-col flex-grow pt-5 overflow-y-auto  bg-white border-r border-gray-100 shadow-sm">
            <div>
              <h4 className="px-4 py-2 text-sm font-normal text-gray-500">
                Content
              </h4>
              <div className="flex items-center px-4">
                <div className="flex justify-center h-20 w-20 hover:bg-gray-100 hover:cursor-pointer text-center">
                  <button
                    type="button"
                    className="m-auto"
                    onClick={() => createElement("h1")}
                  >
                    <Heading1Icon />
                    <p className="text-sm">Heading 1</p>
                  </button>
                </div>
                <div className="flex justify-center h-20 w-20 hover:bg-gray-100 text-center">
                  <button
                    type="button"
                    className="m-auto"
                    onClick={() => createElement("h2")}
                  >
                    <Heading2Icon />
                    <p className="text-sm">Heading 2</p>
                  </button>
                </div>
                <div className="flex justify-center h-20 w-20 hover:bg-gray-100 text-center">
                  <button
                    type="button"
                    className="m-auto"
                    onClick={() => createElement("h3")}
                  >
                    <Heading3Icon />
                    <p className="text-sm">Heading 3</p>
                  </button>
                </div>
                <div className="flex justify-center h-20 w-20 hover:bg-gray-100 text-center">
                  <button
                    type="button"
                    className="m-auto"
                    onClick={() => createElement("p")}
                  >
                    <ParagraphIcon />
                    <p className="text-sm">Paragraph</p>
                  </button>
                </div>
              </div>
            </div>

            <div>
              <h4 className="px-4 py-2 text-sm font-normal text-gray-500">
                Input
              </h4>
              <div className="px-4 flex items-center">
                <div className="flex justify-center h-20 w-20 hover:bg-gray-100 text-center">
                  <button
                    type="button"
                    className="m-auto"
                    onClick={() => createElement("user")}
                  >
                    <UserIcon className="mx-auto h-6 w-6 text-gray-600" />
                    <p className="text-sm">User</p>
                  </button>
                </div>
                <div className="flex justify-center h-20 w-20 hover:bg-gray-100 text-center">
                  <button
                    type="button"
                    className="m-auto"
                    onClick={() => createElement("email")}
                  >
                    <AtSymbolIcon className="mx-auto h-6 w-6 text-gray-600" />
                    <p className="text-sm">Email</p>
                  </button>
                </div>
                <div className="flex justify-center h-20 w-20 hover:bg-gray-100 text-center">
                  <button
                    type="button"
                    className="m-auto"
                    onClick={() => createElement("short_text")}
                  >
                    <MenuAlt4Icon className="mx-auto h-6 w-6 text-gray-600" />
                    <p className="text-sm">Short Text</p>
                  </button>
                </div>
                <div className="flex justify-center h-20 w-20 hover:bg-gray-100 text-center">
                  <button
                    type="button"
                    className="m-auto"
                    onClick={() => createElement("text_area")}
                  >
                    <MenuAlt2Icon className="mx-auto h-6 w-6 text-gray-600" />
                    <p className="text-sm">Text Area</p>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <div className="px-4 flex items-center">
                  <div className="flex justify-center h-20 w-20 hover:bg-gray-100 text-center">
                    <button
                      type="button"
                      className="m-auto"
                      onClick={() => createElement("number")}
                    >
                      <LinkIcon className="mx-auto h-6 w-6 text-gray-600" />
                      <p className="text-sm">Number</p>
                    </button>
                  </div>
                  <div className="flex justify-center h-20 w-20 hover:bg-gray-100 text-center">
                    <button
                      type="button"
                      className="m-auto"
                      onClick={() => createElement("url")}
                    >
                      <LinkIcon className="mx-auto h-6 w-6 text-gray-600" />
                      <p className="text-sm">URL</p>
                    </button>
                  </div>
                  <div className="flex justify-center h-20 w-20 hover:bg-gray-100 text-center">
                    <button
                      type="button"
                      className="m-auto"
                      onClick={() => createElement("select")}
                    >
                      <SelectOne />
                      <p className="text-sm">Select</p>
                    </button>
                  </div>
                  <div className="flex justify-center h-20 w-20 hover:bg-gray-100 text-center">
                    <button
                      type="button"
                      className="m-auto"
                      onClick={() => createElement("multi_select")}
                    >
                      <SelectMulti />
                      <p className="text-sm">Multi-Select</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 mx-auto ">
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="fields">
            {(provided) => (
              <ul
                className="w-full"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {formState.fields.map((field, index) => {
                  return (
                    <Draggable
                      key={field.id}
                      draggableId={field.id}
                      index={index}
                    >
                      {(provided) => (
                        <li
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          {fieldComponentLookup[field.component]}
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
}
