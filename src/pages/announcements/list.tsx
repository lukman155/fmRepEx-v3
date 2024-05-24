import { useSimpleList } from "@refinedev/antd";
import { List, Skeleton, Typography } from "antd";
import { Announcement } from "../../types";

const { Text } = Typography;

export const AnnouncementList: React.FC = () => {
  const { listProps, queryResult } = useSimpleList<Announcement>({
    resource: "announcements",
    pagination: {
      pageSize: 12,
    },
    sorters: {
      initial: [
        {
          field: "created_at",
          order: "desc",
        },
      ],
    },
  });

  const { isLoading } = queryResult;

  const renderItem = (item: Announcement) => {
    const { id, title, message, created_at } = item;
  
    return (
      <List.Item actions={[<Text key={id}>{created_at}</Text>]}>
        <List.Item.Meta title={title} description={message} />
      </List.Item>
    );
  };

  return (
    <div className="container">
      <Text><h1>Announcements</h1></Text> 
      <div className="paper">
        {isLoading ? (
          <div className="canvas-skeleton-list">
            {[...Array(12)].map((_, index) => (
              <Skeleton key={index} paragraph={{ rows: 8 }} />
            ))}
          </div>
        ) : (
          <List
            {...listProps}
            renderItem={renderItem}
            bordered
            pagination={{      position: 'top',
            align: 'center',}}

          />
        )}
      </div>
    </div>
  );

};