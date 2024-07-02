import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import '@umijs/max';
import React from 'react';
const Footer: React.FC = () => {
  // const defaultMessage = '编程导航知识星球出品';
  // const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      // copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'AI数据可视化平台',
          title: 'AI数据可视化平台',
          href: 'https://github.com/jiuria/bi-chart',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/jiuria/bi-chart',
          blankTarget: true,
        },
        {
          key: 'AI数据可视化平台',
          title: 'AI数据可视化平台',
          href: 'https://github.com/jiuria/bi-chart',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
