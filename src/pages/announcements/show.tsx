import { useParsed } from '@refinedev/core';
import { Badge, Descriptions } from 'antd';
import type { DescriptionsProps } from 'antd';

// import { Announcement } from "../../types";

export const AnnouncementShow: React.FC = () => {
  const { pathname } = useParsed();
  const items: DescriptionsProps['items'] = [
    {
      key: '1',
      label: 'UserName',
      children: 'Zhou Maomao',
    },
    {
      key: '2',
      label: 'Telephone',
      children: '1810000000',
    },
    {
      key: '3',
      label: 'Live',
      children: 'Hangzhou, Zhejiang',
    },
    {
      key: '4',
      label: 'Address',
      span: 2,
      children: 'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China',
    },
    {
      key: '5',
      label: 'Remark',
      children: 'empty',
    },
  ];
  
  return ( <Descriptions title="" layout="vertical" items={items} />)
}
  