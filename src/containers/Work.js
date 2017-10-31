import React from 'react';
import { connect } from 'react-redux';
import WorkList from './WorkList';

const Work = ({ work }) => 
  <div>
    <WorkList work={work} />
  </div>;

const mapStateToProps = (state) => {
  return {
    work: state.work
  };
}

export default connect(mapStateToProps)(Work);