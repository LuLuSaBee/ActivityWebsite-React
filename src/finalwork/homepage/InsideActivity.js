import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class InsideActivity extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        const { actid } = this.props.match.params;
        const { activity } = this.props;
        this.state = {
            actinfo: activity.filter(data => data.Actid === actid),
        }
    }

    render() {
        const { Actname, Actdate, Actlocate, Srcurl, Descript, Ta, Fee, Deadline } = this.state.actinfo[0];
        return (
            <div>
                <div style={{ width: "300px", margin: "0px auto", }}>
                    <img src={Srcurl} alt={Actname} width={300} height={380} />
                </div>
                <hr />
                <div>
                    <p style={{ textAlign: "center", fontSize: "34px" }} ><b>【 {Actname} 】</b></p>
                </div>
                <table align="center" border="0" style={{ fontSize: "18px" }}>
                    <tbody>
                        <tr>
                            <td style={{ width: "50%" }}><b>活動日期：</b>{Actdate}</td>
                            <td style={{ width: "50%" }}><b>活動地點：</b>{Actlocate}</td>
                        </tr>
                        <tr>
                            <td style={{ width: "50%" }}><b>活動對象：</b>{Ta}</td>
                            <td style={{ width: "50%" }}><b>活動費用：</b>{Fee}</td>
                        </tr>
                        <tr>
                            <td><b>報名截止日：</b>{Deadline}</td>
                        </tr>
                        <tr>
                            <td colSpan="2"><b>活動介紹：</b><pre style={{ fontFamily: "Noto Sans TC" }}>{Descript}</pre></td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <Link to="/activity">回首頁</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <a href="#top">回到最上方</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div >
        );
    }
}
export default withRouter(InsideActivity);