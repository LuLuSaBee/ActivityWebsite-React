import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import SearchActivity from './SearchActivity';

export default class Headeritems extends React.Component {

    render() {

        return (
            <div style={{ backgroundColor: "#E5E0E0" }}>
                <Row>
                    <Col span={8}>
                        <Link to="/">
                            <img src="https://i.imgur.com/8pot6Bl.png" alt="" width={330} height={60} />
                        </Link>
                    </Col>
                    <Col span={8}>
                        <SearchActivity />
                    </Col>
                    <Col span={8} >
                        <Row justify="start">
                            <Col span={5}><Link to="/" className="linktext">所有活動</Link></Col>
                            <Col span={5}><Link to="/activity/update" className="linktext">修改活動</Link></Col>
                            <Col span={5}><Link to="/activity/create" className="linktext">新增活動</Link></Col>
                        </Row>
                    </Col>
                </Row>
            </div>

        )
    }
}