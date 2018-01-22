import React from 'react';
import SideBarContainer from './side_bar_container';
import Header from '../header';

//this sidebar component includes the header component which is just the sidebar hamburger button and the Blutube button
//this component is always rendered (as seen in app.jsx) but it usually appears offscreen. When it's 'visible' props is true
//it will transition into the screen due to the added class 'sidebar-1-on'
class SideBar1 extends React.Component {
  render() {
    const { visible } = this.props;
    return (
      <div className={"sidebar sidebar-1" + (visible ? " sidebar-1-on" : "")}>
        <Header />
        <SideBarContainer />
      </div>
    );
  }
}

export default SideBar1;
