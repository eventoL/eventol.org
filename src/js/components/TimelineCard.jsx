import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';


export const TimelineCard = ({
  active, date, title,
  text, muted, details,
}) => (
  <div className='col-sm py-2'>
    <div className={`card ${active && 'border-eventol shadow'}`}>
      <div className='card-body'>
        <div className={`float-right ${muted ? 'text-muted' : ''}  ${active && 'text-eventol'} small`}>{date}</div>
        <h4 className={`card-title ${muted ? 'text-muted' : ''}  ${active && 'text-eventol'}`}>{title}</h4>
        <p>{text}</p>
        {!_.isEmpty(details) && (
          <React.Fragment>
            <button className='btn btn-sm btn-outline-secondary' type='button' data-target='#t22_details' data-toggle='collapse'>Show Details ▼</button>
            <div className='collapse border' id='t22_details'>
              <div className='p-2 text-monospace'>
                {details.map(detail => <div>{detail}</div>)}
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  </div>
);

TimelineCard.propTypes = {
  active: PropTypes.bool,
  date: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  muted: PropTypes.bool,
  details: PropTypes.bool,
};

TimelineCard.defaultProps = {
  active: false,
  date: '',
  title: '',
  text: '',
  muted: false,
  details: false,
};

export default TimelineCard;
