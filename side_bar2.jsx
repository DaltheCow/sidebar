import React from 'react';
import SideBarContainer from './side_bar_container';

//this component is a bare rendering of the base sidebar component

class SideBar2 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { visible } = this.props;
    return (
      visible ? (
        <div className="sidebar sidebar-2">
          <SideBarContainer />
        </div>
      ) : <div></div>
    );
  }
}

export default SideBar2;
