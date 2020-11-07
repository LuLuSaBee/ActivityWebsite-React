import React from 'react';
import { Card, Col, Row, Typography, Divider, Space } from 'antd';

const { Meta } = Card;

export default class Team extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        const { teamname, description, img, introduce } = this.props.member;
        return (
            <div >
                <b><p style={{ fontSize: "250%", color: "#000000" }} >團隊介紹</p></b>
                <table style={{ width: "100%", textAlign: "left" }} border="0">
                    <tbody align="center">
                        <tr>
                            <td rowSpan="2"><img src={img} alt="" width={250} height={250} /></td>
                            <td><p style={{ fontSize: "300%" }} ><b>{teamname}</b></p></td>
                        </tr>
                        <tr>
                            <td valign="top"><p style={{ fontSize: "150%" }} >{introduce}</p></td>
                        </tr>
                    </tbody>
                </table>
                <hr />
                <b><p style={{ fontSize: "250%", color: "#000000" }} >成員介紹</p></b>
                <br />
                <Row gutter={16} align="center">
                    {description.map((data) => {
                        const { img, name, birthday, anything } = data;
                        const { Paragraph } = Typography;
                        return (
                            <Col span={8} align="center">
                                <Card style={{ width: 300 }}>
                                    <img alt="" src={img} width={250} height={250} />
                                    <br />
                                    <br />
                                    <Meta title={name} description={birthday} />
                                    <br />
                                    <Paragraph ellipsis={{ rows: 2, expandable: true, symbol: 'more' }} style={{ textAlign: 'left' }}>
                                        {anything}
                                    </Paragraph>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        )
    }
}