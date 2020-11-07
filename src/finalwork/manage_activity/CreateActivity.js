import React from 'react';
import InsertPage from './CUActivity';

export default class CreateActivity extends React.Component {
    constructor(props) {
        super(props);
        const { catedata, apiActInsert } = props;
        this.State = {
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
                category: "請選擇",
            },
            catedata: catedata,
            apiActInsert: apiActInsert
        }
    }

    render() {
        const { actinfo, catedata, apiActInsert } = this.State;
        return (
            <div>
                <InsertPage actinfo={actinfo} catedata={catedata} apiActAction={apiActInsert} disabled={false} type={"insert"} />
            </div>
        )
    }
}