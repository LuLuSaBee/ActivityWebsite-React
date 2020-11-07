import React from 'react';

export default class ContactUs extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        const { info } = this.props;
        return (
            <div>
                {info.map((info) => {
                    const { how, url, img, detail } = info;
                    return (
                        <div class="contactus">
                            <h1 ><b>｜{how}</b></h1>
                            <a href={url} target="_blank"><img src={img} width="100px" alt="" /></a>
                            <h1 style={{ paddingTop: "10px" }}>{detail}</h1>
                            <br />
                            <hr />
                            <br />
                        </div>
                    )
                })}
            </div>
        );
    }
}