import { Meta, StoryObj } from "@storybook/react";
import Navigation from "./Navigation";
import { NavigationTabs } from "src/app/(dashboard)/constants";

const meta: Meta<typeof Navigation> = {
  component: Navigation
};

type Story = StoryObj<typeof Navigation>;

export const NavComponent: Story = {
  args: {
    isUserAtHomePage: false,
    tabs: NavigationTabs,
    titleContent: "Harmonia",
  }
}

export default meta;