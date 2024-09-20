import type { Meta, StoryObj } from "@storybook/angular";
import { ButtonComponent } from "@angular-monorepo-ds/button";

const meta: Meta<ButtonComponent> =  { 
    component: ButtonComponent,
    title: 'Button'
}

export default meta;

type Story = StoryObj<ButtonComponent>;

export const PrimaryButton: Story = {};
export const SecondaryButton: Story = {};