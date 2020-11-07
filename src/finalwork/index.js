import React from 'react';
import { Layout, Result, Space } from 'antd';
import { Switch, Route, withRouter } from 'react-router-dom';

//OurWork
import './index.css';
import QAPage from './footeritems/QAPage';
import HomePage from './homepage/HomePage';
import InsideActivity from './homepage/InsideActivity';
import HeaderItems from './headeritems/Headeritems';
import FooterItems from './footeritems/Footeritems';
import Team from './footeritems/Team';
import ContactUs from './footeritems/ContactUs';
import CreateActivity from './manage_activity/CreateActivity';
import UpdateActivity from './manage_activity/UpdateActivity';

//import api
import { apiActivityRead, apiActivityInsert, apiActivityUpdate, apiActivityDelete, apiCategoryRead } from './api';

//data source
import { QAdata, Contactinfo, Member, CategoryData } from './data.source';

class index extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            activity: [
                apiActivityRead()
                    .then(response => response.data.results)
                    .then((data) => {
                        this.setState({ activity: data })
                    })
                    .catch(console.log)
            ],
            category: [
                apiCategoryRead()
                    .then(response => response.data.results)
                    .then((data) => {
                        this.setState({ category: data })
                    })
                    .catch(console.log)
            ]
        }
    }

    render() {
        const { Header, Content, Footer } = Layout;
        const { activity, category } = this.state;
        return (
            <Layout style={{ position: "relative", minHeight: "100vh", backgroundColor: 'white' }}>
                <Space direction="vertical" size={80} style={{ backgroundColor: 'white' }}>
                    <Header id="head" class="Header">
                        <HeaderItems />
                    </Header >
                    <Content style={{ padding: '0 50px', backgroundColor: 'white', display: "40%" }}>
                        <Switch>
                            <Route exact path={['/', '/activity']}>
                                <HomePage CategoryData={CategoryData} activity={activity} category={category} />
                            </Route>
                            <Route exact path='/activity/create'>
                                <CreateActivity catedata={category} apiActInsert={apiActivityInsert} />
                            </Route>
                            <Route exact path='/activity/update'>
                                <UpdateActivity activity={activity} catedata={category} apiActUpdate={apiActivityUpdate} apiActdelete={apiActivityDelete} />
                            </Route>
                            <Route path='/activity/:actid'>
                                <InsideActivity activity={activity} />
                            </Route>
                            <Route path='/qa'><QAPage qalist={QAdata.qalist} /></Route>
                            <Route path='/contactus'><ContactUs info={Contactinfo.info} /></Route>
                            <Route path='/team'><Team member={Member} /></Route>
                            <Route render={() =>
                                <Result
                                    status="404"
                                    title="404"
                                    subTitle="NOT FOUND ERROR"
                                />
                            } />
                        </Switch>
                    </Content>
                    <Footer class="footer" >
                        <FooterItems />
                    </Footer>
                </Space>
            </Layout >
        );
    }
}
export default withRouter(index);