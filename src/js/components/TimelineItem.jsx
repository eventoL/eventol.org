import React from 'react';
import PropTypes from 'prop-types';

import TimelineCard from './TimelineCard.jsx';

const getCard = () => <TimelineCard {...cardProps} /> : <div className='col-sm' />;

const TimelineItem = ({
  align, active, isLast, isFirst, ...cardProps
}) => (
  <div className='row no-gutters'>
    {getCard(align === 'left', {...cardProps, active})}
    <div className='col-sm-1 text-center flex-column d-none d-sm-flex'>
      <div className='row h-50'>
        <div className={`col ${!isFirst && 'border-right'}`}>&nbsp;</div>
        <div className='col'>&nbsp;</div>
      </div>
      <h5 className='m-2'>
        <span className={`badge badge-pill ${active ? 'bg-eventol' : 'bg-light border'}`}>&nbsp;</span>
      </h5>
      <div className='row h-50'>
        <div className={`col ${!isLast && 'border-right'}`}>&nbsp;</div>
        <div className='col'>&nbsp;</div>
      </div>
    </div>
    {getCard(!align === 'left', {...cardProps, active})}
  </div>
);

TimelineItem.propTypes = {
  active: PropTypes.bool,
  date: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  align: PropTypes.string,
  muted: PropTypes.bool,
  details: PropTypes.bool,
  isLast: PropTypes.bool,
  isFirst: PropTypes.bool,
};

TimelineItem.defaultProps = {
  active: false,
  date: '',
  title: '',
  text: '',
  align: 'right',
  muted: false,
  details: false,
  isLast: false,
  isFirst: false,
};

export default TimelineItem;
