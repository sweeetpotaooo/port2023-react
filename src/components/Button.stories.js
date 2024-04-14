import Button from "./Button";

export default {
  title: "Practice/Button",
  component: Button,

  // 이번에 작성한 전달인자의 타입은 Storybook을 보고 직접 확인해보세요.
  argTypes: {
    color: { control: "color" },
    size: { control: { type: "radio", options: ["big", "small"] } },
    text: { control: "text" },
    design: {type:'.figma', url:'https://www.figma.com/file/mU8kd8r8RG63Emlntu0Fyg/%EA%B9%80%EC%84%B8%ED%98%84's-team-library?type=design&node-id=2348%3A2506&mode=design&t=9tHaOa6mnnZjb74p-1'}
  },
};

export const StorybookButton = (args) => <Button {...args}></Button>;