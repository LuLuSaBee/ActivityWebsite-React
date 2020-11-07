import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Space } from 'antd';
import { HeartOutlined, UserAddOutlined } from '@ant-design/icons';

export default class Heomeitems extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        const { Actid, Actname, Actdate, Actlocate, Srcurl, Ta, Fee, Deadline } = this.props.data;
        return (
            <Link to={"/activity/" + Actid} style={{ display: " flex", padding: "10px" }} >
                <Card bordered={true} style={{ width: "100vh", textAlign: "center", height: "100%" }} hoverable>
                    <table style={{ width: "100%", textAlign: "left" }} border="0">
                        <tbody>
                            <tr>
                                <td rowSpan="9" style={{ width: "30%" }}><img src={Srcurl} alt={Actname} width={200} height={250} />&nbsp;&nbsp;&nbsp;&nbsp;</td>
                                <td colSpan="2" style={{ fontSize: "24pt" }}><b>{Actname}</b></td>
                            </tr>
                            <tr>
                                <td colSpan="2"><b>活動地點</b></td>
                            </tr>
                            <tr>
                                <td colSpan="2">&nbsp;&nbsp;&nbsp;&nbsp;{Actlocate}</td>
                            </tr>
                            <tr>
                                <td><b>活動時間</b></td>
                                <td><b>報名截止</b></td>
                            </tr>
                            <tr>
                                <td>&nbsp;&nbsp;&nbsp;&nbsp;{Actdate}</td>
                                <td>&nbsp;&nbsp;&nbsp;&nbsp;{Deadline}</td>
                            </tr>
                            <tr>
                                <td><b>活動對象</b></td>
                                <td><b>活動費用</b></td>
                            </tr>
                            <tr>
                                <td>&nbsp;&nbsp;&nbsp;&nbsp;{Ta}</td>
                                <td>&nbsp;&nbsp;&nbsp;&nbsp;{Fee}</td>
                            </tr>
                            <tr>
                                <td colSpan="2" style={{ textAlign: "right" }}>
                                    <Space>
                                        <Button type="primary"><UserAddOutlined />我要報名</Button>
                                        <Button type="primary" danger><HeartOutlined />我的最愛</Button>
                                    </Space>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    {/* <div style={{ display: "flex" }}>
                        <div style={{ padding: "1%", display: "40%" }}><img src={Srcurl} width={200} height={250} /></div>
                        <div style={{ display: "60%" }}>
                            <div style={{ height: "flex" }}>
                                <div style={{ height: "20%" }}>
                                    <div><font>{Actname}</font></div>
                                </div>
                                <div style={{ height: "20%" }}>
                                    <p><b>活動地點：{Actlocate}</b></p>
                                    <p><b>活動日期:{Actdate}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;截止日期:{Deadline}</b></p>
                                    <p><b>活動對象:{Ta}</b></p>
                                    <p><b>活動費用:{Fee}</b></p>
                                </div>
                                <div>
                                    <Space>
                                        <Button type="primary"><UserAddOutlined />我要報名</Button>
                                        <Button type="primary"><HeartOutlined />我的最愛</Button>
                                    </Space>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </Card>
            </Link >
        );

        /*這裡面有 
                Actid       活動id
                Clubid      社團帳號
                Actname     活動名稱
                Actdate     活動日期
                Actlocate   活動地點
                Srcurl      要顯示的海報
                Descript    活動介紹
                Ta          活動對象
                Fee         活動費用
                Deadline    報名截止日期/時間
                預計之後要加上報名網址
        */
    }
}