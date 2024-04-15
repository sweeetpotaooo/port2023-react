import Button from "./Button";

export default {
  title: "Practice/Button",
  component: Button,

  
  argTypes: {
    color: { control: "color" },
    size: { control: { type: "radio", options: ["big", "small"] } },
    text: { control: "text" },
    design: {type: "figma", url:"https://www.figma.com/file/mU8kd8r8RG63Emlntu0Fyg/%EA%B9%80%EC%84%B8%ED%98%84's-team-library?type=design&node-id=2354%3A3228&mode=design&t=fCS2aI1oN3ek1wi2-1"}
  },
};

export const StorybookButton = (args) => <Button {...args}></Button>;