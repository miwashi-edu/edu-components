import SampleComponent from './SampleComponent';

export default {
    title: 'Util/SampleComponent',
    component: SampleComponent,
    argTypes: {
        textColor: { control: 'color' },  // Define a color control for textColor prop
    },
};

const Template = (args) => <SampleComponent {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const CustomColor = Template.bind({});
CustomColor.args = {
    textColor: 'blue',  // Example of passing a custom textColor prop
};
