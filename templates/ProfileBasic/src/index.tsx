import React, { FunctionComponent, useEffect } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card, Descriptions, Divider } from 'antd';

interface IProps {
}

const Component: FunctionComponent<IProps> = props => {
  useEffect(() => {

  }, []);

  return (
    <PageHeaderWrapper>
      <Card bordered={false}>
        <Descriptions title="退款申请">
          <Descriptions.Item label="取货单号">1000000000</Descriptions.Item>
          <Descriptions.Item label="状态">已取货</Descriptions.Item>
          <Descriptions.Item label="销售单号">1234123421</Descriptions.Item>
          <Descriptions.Item label="子订单">3214321432</Descriptions.Item>
        </Descriptions>
        <Divider />
        <Descriptions title="用户信息">
          <Descriptions.Item label="用户姓名">付小小</Descriptions.Item>
          <Descriptions.Item label="联系电话">18100000000</Descriptions.Item>
          <Descriptions.Item label="常用快递">菜鸟仓储</Descriptions.Item>
          <Descriptions.Item label="取货地址">浙江省杭州市西湖区万塘路18号</Descriptions.Item>
          <Descriptions.Item label="备注">无</Descriptions.Item>
        </Descriptions>
      </Card>
    </PageHeaderWrapper>
  )
};

export default Component;
