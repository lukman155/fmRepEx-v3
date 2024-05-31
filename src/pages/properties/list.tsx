import {
  DateField,
  useSimpleList,
  useModalForm,
  Show,
  CreateButton,
} from "@refinedev/antd";

import { Avatar,
          Card, 
          Skeleton, 
          Space,  
          Typography,
          List,
          Flex,
          Grid,
} from "antd";

import { EditOutlined, EyeOutlined } from '@ant-design/icons';


import { Property } from "../../types";
import { useState } from "react";
import { useShow } from "@refinedev/core";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;

export const PropertyList = () => {
  const { listProps, queryResult: simpleListQueryResult } = useSimpleList<Property>({
    resource: "properties",
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

  const {
    modalProps: createModalProps,
    formProps: createFormProps,
    show: createModalShow,
    formLoading: createFormLoading,
  } = useModalForm<Property>({
    action: "create",
    syncWithLocation: true,
  });

  // Edit Modal
  const {
    modalProps: editModalProps,
    formProps: editFormProps,
    show: editModalShow,
    formLoading: editFormLoading,
  } = useModalForm<Property>({
    action: "edit",
    syncWithLocation: true,
  });

  // Show Modal
  const [visibleShowModal, setVisibleShowModal] = useState<boolean>(false);

  const { queryResult, setShowId } = useShow<Property>();

  const { data: showQueryResult } = queryResult;
  const record = showQueryResult?.data;

  const { isLoading } = simpleListQueryResult;

  const renderItem = (item: Property) => {
    const { id, name, address, created_at } = item;
    const { Meta } = Card;
  
    return (

      <Link to={`show/${id}`} style={{ width: 300 }}>
        <Card hoverable key={id}
          style={{ width: 300 }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          
        >
          <Meta
            avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
            title={name}
            description={address}
          />
        </Card>
        </Link>
    );
  };

  return (
        <Flex vertical>

          {isLoading ? (
            <div className="canvas-skeleton-list">
              {[...Array(12)].map((_, index) => (
                <Skeleton key={index} paragraph={{ rows: 8 }} />
              ))}
            </div>
          ) : (
            
            <Show title={'Announcements'} headerButtons={<CreateButton />}>
            <List
            {...listProps}
            renderItem={renderItem}
            pagination={{ position: 'bottom',
            align: 'center',}}
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 2,
            }}
          />
          </Show>
          )}
          </Flex>

  );
};
