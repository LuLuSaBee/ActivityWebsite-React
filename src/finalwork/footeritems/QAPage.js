import React from 'react';
import { Collapse } from 'antd';

export default class QAPage extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        const { qalist } = this.props;
        const { Panel } = Collapse;
        return (
            <Collapse accordion>
                {qalist.map((data) => {
                    const { catename, list } = data;
                    return (
                        <Panel header={catename} key={catename}>
                            <Collapse accordion>
                                {list.map((data) => {
                                    const { number, question, answer } = data;
                                    return (
                                        <Panel header={question} key={number}>
                                            <p>{answer}</p>
                                        </Panel>
                                    )
                                })}
                            </Collapse>
                        </Panel>
                    )
                })}
            </Collapse>
        );
    }
}