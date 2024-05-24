import { Create, useForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select } from "antd";

export const AnnouncementCreate = () => {
  const { formProps, saveButtonProps } = useForm({});

  const { selectProps: propertySelectProps } = useSelect({
    resource: "properties",
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label={"Title"}
          name={["title"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Content"}
          name="content"
          rules={[
            {
              required: true,
            },
          ]}
        >
        </Form.Item>
        <Form.Item
          label={"Property"}
          name={"propertyId"}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...propertySelectProps} />
        </Form.Item>
        <Form.Item
          label={"Status"}
          name={["status"]}
          initialValue={"draft"}
          rules={[
            {
              required: true,
            },
          ]}
        >
        </Form.Item>
      </Form>
    </Create>
  );
};
