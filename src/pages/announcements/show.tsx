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
import { HttpError, useList, useShow } from "@refinedev/core";
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

  const { data, isLoading, isError } = useList<Property, HttpError>({
    resource: "properties",
  });

  const properties = data?.data ?? [];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong!</div>;
  }

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
            {properties.map((pro) => (
              <Link style={{ width: 300, display:'block' }} to={`show/${pro.id}`}>
                <Card hoverable key={pro.id}
                  style={{ width: 300 }}
                  cover={
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                  }                  
                >
                </Card>
              </Link>
            ))}
          </Show>
          )}
          </Flex>

  );
};
