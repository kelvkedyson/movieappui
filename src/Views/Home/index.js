import React from 'react';
import { Card, Space, Col, Divider, Row, Image } from 'antd';

const Home = () => {
  return (
    <Row gutter={[10,10]}>
        <Col lg={18} sm={24} md={24}>
            <Space
                direction="vertical"
                size="middle"
                style={{
                display: 'flex',
                }}
            >
                <Card 
                    size="small"
                    style={{borderRadius: 14}}
                >
                    <img
                        className="imageHome"
                        src="https://res.cloudinary.com/kelvkedyson/image/upload/v1605250522/sample.jpg"
                    />
                </Card>
            </Space>
        </Col>
        <Col lg={6} sm={24} md={24}>
            <Space
                direction="vertical"
                size="middle"
                style={{
                display: 'flex',
                }}
            >
                <Card 
                    size="small"
                    style={{borderRadius: 14}}
                >
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </Space>
        </Col>
    </Row>
  )
}

export default Home;