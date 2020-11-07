import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import Item from './Homeitems';

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            category: "all"
        }
    }

    handleCateClick = (name) => {
        const { category } = this.props;
        {/* if (name == category.Catename){
                this.setState({
                    cate: category.Cateid
                })
        } */}
    }

    mouseover = (e, id) => {
        document.getElementById(id);
    }

    render() {
        const { cate } = this.state;
        const { activity: act } = this.props;
        const { data: CategoryData } = this.props.CategoryData;
        return (
            <div className="flex1" >
                <div className="data">{/* 這邊改成不要LINK */}
                    {CategoryData.map((data) => {
                        return (
                            <Link to={"/category/" + data.name} className="linktext cate" key={data.name}>
                                <Row gutter={4}>
                                    <Col span={4} ><img src={data.url} onMouseOver={this.mouseover(data.id)} width="180" alt={data.name} /></Col>
                                </Row>
                                <br />
                            </Link>
                        );
                    })}
                </div>
                <div style={{ display: "70%", background: "white", textAlign: "center" }}>
                    {act.map((act) => {
                        return <Item data={act} key={act.Actid} />
                    })}
                </div>
            </div >
        );
    }
}