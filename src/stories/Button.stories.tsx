// Alert.stories.js|jsx
import { StoryFn, Meta } from "@storybook/react";
import { RiCustomerServiceFill } from "react-icons/ri";
import { BsTrash } from "react-icons/bs";
import { Button } from "../components";

export default {
  title: "Button",
  component: Button,
} as Meta<typeof Button>;

export const PrimaryButton: StoryFn<typeof Button> = () => <Button variant="primary" text="Primary" />;

export const PrimaryButtonWithIcon: StoryFn<typeof Button> = () => <Button variant="primary" text="Primary" icon={<RiCustomerServiceFill />} />;

export const OnlyIcon: StoryFn<typeof Button> = () => <Button variant="secondary" icon={<RiCustomerServiceFill />} />;

export const IconWithCounter: StoryFn<typeof Button> = () => <Button variant="secondary" icon={<RiCustomerServiceFill />} count={3} />;

export const SolidWithNoHover: StoryFn<typeof Button> = () => <Button variant="solid" icon={<RiCustomerServiceFill />} count={3} />;

export const Neutral: StoryFn<typeof Button> = () => <Button variant="neutral" icon={<BsTrash />} text='REMOVER' iconClasses="mr-[7px] text-purple-dark" />;
