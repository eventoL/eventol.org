import React from 'react';
import PropTypes from 'prop-types';

import {TimelineCard} from './TimelineCard.jsx';

const getCard = (show, cardProps) => (show ? <TimelineCard {...cardProps} /> : <div className='col-sm' />);

const TimelineItem = ({
  align, active, isLast, isFirst, release, ...cardProps
}) => (
  <div className='row no-gutters'>
    {getCard(align === 'left', {...cardProps, active, release})}
    <div className='col-sm-1 text-center flex-column d-none d-sm-flex'>
      <div className='row h-50'>
        <div className={`col ${!isFirst && 'border-right'}`}>&nbsp;</div>
        <div className='col'>&nbsp;</div>
      </div>
      <h5 className='m-2'>
        <span className={`badge badge-pill ${active && 'bg-active'} ${release && 'bg-eventol'} ${!active && !release && 'bg-light border'}`}>&nbsp;</span>
      </h5>
      <div className='row h-50'>
        <div className={`col ${!isLast && 'border-right'}`}>&nbsp;</div>
        <div className='col'>&nbsp;</div>
      </div>
    </div>
    {getCard(align === 'right', {...cardProps, active, release})}
  </div>
);

TimelineItem.propTypes = {
  active: PropTypes.bool,
  release: PropTypes.bool,
  date: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  align: PropTypes.string,
  muted: PropTypes.bool,
  detail: PropTypes.string,
  isLast: PropTypes.bool,
  isFirst: PropTypes.bool,
  index: PropTypes.number.isRequired,
};

TimelineItem.defaultProps = {
  active: false,
  release: false,
  date: '',
  title: '',
  text: '',
  align: 'right',
  muted: false,
  detail: '',
  isLast: false,
  isFirst: false,
};

export default TimelineItem;
