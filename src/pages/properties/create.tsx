import { Create, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select } from "antd";

export const PropertyCreate = () => {
  const { formProps, saveButtonProps } = useForm({});

  const { selectProps: propertySelectProps } = useSelect({
    resource: "properties",
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">

        <Form.Item
          label={"Property Name"}
          name={["property_name"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={"Address"}
          name={["address"]}
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={"City"}
          name={["city"]}
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={"State"}
          name={["state"]}
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={"Zip Code"}
          name={["zip_code"]}
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={"Property"}
          name={"propertyId"}
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Select {...propertySelectProps} />
        </Form.Item>

      </Form>
    </Create>
  );
};
