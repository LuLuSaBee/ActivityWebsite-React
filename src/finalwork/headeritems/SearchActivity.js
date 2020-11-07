import React from 'react';
import { Input } from 'antd';

export default class SearchActivity extends React.Component {
    render() {
        const { Search } = Input;

        // const suffix = (
        //     <AudioOutlined
        //         style={{
        //             fontSize: 16,
        //             color: '#1890ff',
        //         }}
        //     />
        // );
        return <Search placeholder="請輸入關鍵字..." onSearch={value => console.log(value)} />;
    }
}