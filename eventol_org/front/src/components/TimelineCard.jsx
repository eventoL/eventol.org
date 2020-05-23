import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

const getExtraClasses = (active, release, muted) =>
  `${muted ? 'text-muted' : ''}  ${active && 'text-active'} ${release &&
    'text-eventol'}`;

export function TimelineCard({
  active,
  date,
  title,
  index,
  text,
  muted,
  detail,
  release,
}) {
  return (
    <div className="col-sm py-2">
      <div
        className={`card ${release && 'border-eventol shadow'} ${active &&
          'border-active shadow'}`}
      >
        <div className="card-body">
          <div
            className={`float-right ${getExtraClasses(
              active,
              release,
              muted
            )} small`}
          >
            {date}
          </div>
          <h4
            className={`card-title ${getExtraClasses(active, release, muted)}`}
          >
            <ReactMarkdown source={title} />
          </h4>
          <p>
            <ReactMarkdown source={text} />
          </p>
          {!_.isEmpty(detail) && (
            <>
              <button
                className="btn btn-sm btn-outline-secondary"
                data-target={`#t${index}_details`}
                data-toggle="collapse"
                type="button"
              >
                Show Details ▼
              </button>
              <div className="collapse border" id={`t${index}_details`}>
                <div className="p-2 text-monospace">
                  <ReactMarkdown source={detail} />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

TimelineCard.propTypes = {
  active: PropTypes.bool,
  release: PropTypes.bool,
  date: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  muted: PropTypes.bool,
  detail: PropTypes.string,
  index: PropTypes.number.isRequired,
};

TimelineCard.defaultProps = {
  active: false,
  release: false,
  date: '',
  title: '',
  text: '',
  muted: false,
  detail: '',
};

export default TimelineCard;
