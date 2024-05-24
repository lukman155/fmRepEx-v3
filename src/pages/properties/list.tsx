import {
  DateField,
  DeleteButton,
  EditButton,
  List,
  MarkdownField,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import { BaseRecord, useMany } from "@refinedev/core";
import { Space, Table } from "antd";

export const PropertyList = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
    meta: {
      select: "*, properties(id,title)",
    },
  });

  const { data: propertyData, isLoading: propertyIsLoading } = useMany({
    resource: "properties",
    ids:
      tableProps?.dataSource
        ?.map((item) => item?.properties?.id)
        .filter(Boolean) ?? [],
    queryOptions: {
      enabled: !!tableProps?.dataSource,
    },
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title={"ID"} />
        <Table.Column
          dataIndex={"properties"}
          title={"Property"}
          render={(value) =>
            propertyIsLoading ? (
              <>Loading...</>
            ) : (
              propertyData?.data?.find((item) => item.id === value?.id)?.title
            )
          }
        />
        <Table.Column dataIndex="address" title={"Address"} />
        <Table.Column dataIndex="city" title={"City"} />
        <Table.Column dataIndex="state" title={"State"} />
        <Table.Column
          dataIndex={["createdAt"]}
          title={"Created at"}
          render={(value: any) => <DateField value={value} />}
        />
        <Table.Column
          title={"Actions"}
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
              <ShowButton hideText size="small" recordItemId={record.id} />
              <DeleteButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
