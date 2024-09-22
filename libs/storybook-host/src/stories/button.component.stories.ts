import type { Meta, StoryObj } from "@storybook/angular";
import { ButtonComponent } from "@angular-monorepo-ds-alura/button";

const meta: Meta<ButtonComponent> =  { 
    component: ButtonComponent,
    title: 'Button'
}

export default meta;

type Story = StoryObj<ButtonComponent>;

export const PrimaryButton: Story = {
    args: {
        text: 'Primary Button',
        disabled: false
    }
};

export const SecondaryButton: Story = {
    args: {
        text: 'Secondary Button',
        variant: 'secondary',
        disabled: false
    }
};

export const TerciaryButton: Story = {
    args: {
        text: 'Tertiary Button',
        variant: 'tertiary',
        disabled: false
    }
};

// Violet 

export const PrimaryButtonViolet: Story = {
    args: {
        ...PrimaryButton.args,
        theme: 'violet'
    }
};

export const SecondaryButtonViolet: Story = {
    args: {
        ...SecondaryButton.args,
        theme: 'violet'
    }
};

export const TerciaryButtonViolet: Story = {
    args: {
        ...TerciaryButton.args,
        theme: 'violet'
    }
};