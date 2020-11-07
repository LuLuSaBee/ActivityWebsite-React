import React from 'react';
import CUActivity from './CUActivity';
import { Select } from 'antd'

export default class UpdateActivity extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        const { catedata } = props;
        this.state = {
            actinfo: {
                Actid: "",
                Clubid: "nkusticsa",
                Actname: "",
                Actdate: "",
                Actlocate: "",
                Srcurl: "",
                Descript: "",
                Ta: "",
                Fee: "",
                Deadline: "",
                category: "",
            },
            catedata: catedata,
            choseid: "",
        }
    }

    handleChange = (e) => {
        const { activity } = this.props;
        this.setState({
            actinfo: activity.filter(act => act.Actid === e)[0],
            choseid: e
        })
    }

    render() {
        const { Option } = Select;
        const { activity, apiActUpdate, apiActdelete } = this.props;
        const { choseid, catedata, actinfo } = this.state;
        return (
            <div style={{ textAlign: "center" }}>
                <font style={{ fontSize: "150%", color: "#000000" }}>請選擇活動：</font>
                <Select defaultValue="請選擇活動" style={{ width: 300 }} onChange={this.handleChange}>
                    {activity.map(act => <Option value={act.Actid}>{act.Actname}</Option>)}
                </Select>
                {(choseid !== "")
                    ? <CUActivity actinfo={actinfo} catedata={catedata} disabled={true} apiActAction={apiActUpdate} type={"update"} apiActdelete={apiActdelete} />
                    : <div></div>
                }
            </div >

        )
    }
}