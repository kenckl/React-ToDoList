import React, { Component } from 'react';
import { Input } from 'antd';
import { Card, Col, Row, Button } from 'antd';

class AddLabel extends Component {
    render() {
        return (
            <div>
                <Row gutter={16}>
                    <Col span={4}>
                        <Card title="Add Labels">
                            <Input />
                            <Button>Add Label</Button>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default AddLabel; 