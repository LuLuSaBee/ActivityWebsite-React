import React from "react";
import { withRouter } from 'react-router-dom';
import { Form, Input, Button, DatePicker, Space, Select, message } from 'antd';

class CUActivity extends React.Component {
    constructor(props) {
        super(props);
        const { actinfo, catedata } = props;
        this.props = props;
        this.state = {
            ...actinfo,
            catedata: catedata
        }
    }

    hanleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleselectChange = (e) => {
        this.setState({
            category: e
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { catedata, ...actinfo } = this.state;
        const { apiActAction, history } = this.props;
        apiActAction({ ...actinfo })
            .then(response => response.data.results)
            .then((result) => {
                if (result === "InsertSccuess") {
                    message.success('新增活動成功');
                }
                else if (result === "UpdateSccuess") {
                    message.success('修改活動成功');
                }
                this.onReset();
                history.push('/');
            })
            .catch(console.log)
    }

    handleClear = (e) => {
        e.preventDefault()
        this.onReset();
    }

    onReset = () => {
        this.setState({
            Actid: "",
            Clubid: "",
            Actname: "",
            Actdate: "",
            Actlocate: "",
            Srcurl: "",
            Descript: "",
            Ta: "",
            Fee: "",
            Deadline: "",
            category: "請選擇",
        })
    }

    handleDelete = (e) => {
        e.preventDefault()
        const { apiActdelete, history } = this.props;
        const { Actid } = this.state;
        apiActdelete({ Actid })
            .then(response => response.data.results)
            .then((result) => {
                if (result === "ActivityDelete") {
                    this.onReset();
                    history.push('/');
                    message.success('刪除活動成功');
                }
            })
            .catch(console.log)
    }

    render() {
        const { Option } = Select;
        const { category, Actname, Actdate, Actlocate, Srcurl, Descript, Ta, Fee, catedata } = this.state;
        const { disabled, type } = this.props;
        const tailLayout = {
            wrapperCol: { offset: 8, span: 16 },
        };
        const butto =
            (type === "update")
                ? <Button
                    htmlType="button"
                    danger
                    onClick={this.handleDelete}>
                    刪除活動
                </Button>
                : <Button
                    htmlType="button"
                    onClick={this.handleClear}>
                    清除資料
        </Button>

        return (
            <div class="from">
                <Form>
                    <br />
                    <Form.Item label="活動分類" >
                        <Select style={{ width: "500px" }} name="category" onSelect={this.handleselectChange} value={category}>
                            {catedata.map(data => <Option value={data.Cateid} key={data.Cateid}>{data.Catename}</Option>)}
                        </Select>
                    </Form.Item>
                    <Form.Item label="活動名稱" >
                        <Input name="Actname" style={{ width: "500px" }} onChange={this.hanleChange} value={Actname} disabled={disabled} />
                    </Form.Item>
                    <Form.Item label="活動時間">
                        <DatePicker
                            name="Actdate"
                            style={{ width: "500px" }}
                            showTime="true"
                            onChange={(e, data) => {
                                return this.hanleChange({ target: { name: "Actdate", value: data } })
                            }}
                        />
                    </Form.Item>
                    <Form.Item label="活動地點">
                        <Input name="Actlocate" style={{ width: "500px" }} onChange={this.hanleChange} value={Actlocate} />
                    </Form.Item>
                    <Form.Item label="活動海報">
                        <Input name="Srcurl" style={{ width: "500px" }} placeholder="圖片網址" onChange={this.hanleChange} value={Srcurl} />
                    </Form.Item>
                    <Form.Item label="活動介紹">
                        <Input.TextArea name="Descript" style={{ width: "500px", height: "100px" }} onChange={this.hanleChange} value={Descript} />
                    </Form.Item>
                    <Form.Item label="活動對象">
                        <Input name="Ta" style={{ width: "500px" }} onChange={this.hanleChange} value={Ta} />
                    </Form.Item>
                    <Form.Item label="收費方式">
                        <Input.TextArea name="Fee" style={{ width: "500px", height: "100px" }} onChange={this.hanleChange} value={Fee} />
                    </Form.Item>
                    <Form.Item label="報名截止">
                        <DatePicker
                            name="Deadline"
                            style={{ width: "500px" }}
                            showTime="true"
                            onChange={(e, data) => {
                                return this.hanleChange({ target: { name: "Deadline", value: data } })
                            }}
                        /><br />
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Space>
                            <Button type="primary" htmlType="submit" onClick={this.handleSubmit} >
                                送出資料
                            </Button>
                            {/* {(type === "update")
                                ? <Button
                                    htmlType="button"
                                    danger
                                    onClick={() => {
                                        document.getElementsByName("Actdate")[0].value = "";
                                        document.getElementsByName("Deadline")[0].value = "";
                                        return this.handleDelete()
                                    }}>
                                    刪除活動
                                    </Button>
                                : <Button
                                    htmlType="button"
                                    onClick={() => {
                                        document.getElementsByName("Actdate")[0].value = "";
                                        document.getElementsByName("Deadline")[0].value = "";
                                        return this.handleClear
                                    }}>
                                    清除資料
                            </Button>
                            } */}
                            {butto}
                        </Space>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}
export default withRouter(CUActivity);