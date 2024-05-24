import { useSimpleList, useModal } from "@refinedev/antd";
import { List, Skeleton, Typography } from "antd";
import { Announcement } from "../../types";
import { Modal, Button } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";


const { Title, Text } = Typography;

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
  const { show, modalProps } = useModal();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);


  const { isLoading } = queryResult;

  const renderItem = (item: Announcement) => {
    const { id, title, message, created_at } = item;
    const isHovered = hoveredItem === id; // Check if current item is hovered


    return (
      <div style={{cursor:'pointer', backgroundColor: isHovered ? '#eee' : '',}} 
      onMouseEnter={() => setHoveredItem(id)} 
      onMouseLeave={() => setHoveredItem(null)}>
        <List.Item onClick={show} actions={[<Text key={id}>{created_at}</Text>]}>
          <List.Item.Meta title={title} description={message} />
        </List.Item>
        <Modal title="Basic Modal" {...modalProps}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  };

  return (
    <div className="container">
      <Title>Announcements</Title> 
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