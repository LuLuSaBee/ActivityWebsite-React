import React from 'react';
import { Link } from 'react-router-dom';


export default class Footeritems extends React.Component {
    render() {
        return (
            <div style={{ backgroundColor: "#E5E0E0" }}>
                <div>
                    <Link to="/qa" class="linktext">常見問題</Link>
                    <div class="line" ></div>
                    <Link to="/contactus" class="linktext">聯絡我們</Link>
                    <div class="line" ></div>
                    <Link to="/team" class="linktext">製作團隊</Link>
                </div>
                {/* <img src="https://i.imgur.com/8pot6Bl.png" alt="Activity Hunter" width={120} height={24} />  */}
                <font color="red">A</font>ctivity<font color="red">H</font>unter©2020
                Created by <Link to="/team" class="linktext footertext">Self Shark Squad +</Link>
            </div >
        );
    }
}