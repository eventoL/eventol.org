import React from 'react';

const TimelineCard = ({active, date, title, text, muted, details}) => (
  <div className='col-sm py-2'>
    <div className={`card ${active && 'border-eventol shadow'}`}>
      <div className='card-body'>
        <div className={`float-right ${muted ? 'text-muted' : ''}  ${active && 'text-eventol'} small`}>{date}</div>
        <h4 className={`card-title ${muted ? 'text-muted' : ''}  ${active && 'text-eventol'}`}>{title}</h4>
        <p>{text}</p>
        {details && (
          <React.Fragment>
            <button className='btn btn-sm btn-outline-secondary' type='button' data-target='#t22_details' data-toggle='collapse'>Show Details ▼</button>
            <div className='collapse border' id='t22_details'>
              <div className='p-2 text-monospace'>
                <div>08:30 - 09:00 Breakfast in CR 2A</div>
                <div>09:00 - 10:30 Live sessions in CR 3</div>
                <div>10:30 - 10:45 Break</div>
                <div>10:45 - 12:00 Live sessions in CR 3</div>
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  </div>
);

const TimelineElement = props => (
  <div className='row no-gutters'>
    {props.align === 'left' ? <TimelineCard {...props} /> : <div className='col-sm' />}
    <div className='col-sm-1 text-center flex-column d-none d-sm-flex'>
      <div className='row h-50'>
        <div className={`col ${!props.isFirst && 'border-right'}`}>&nbsp;</div>
        <div className='col'>&nbsp;</div>
      </div>
      <h5 className='m-2'>
        <span className={`badge badge-pill ${props.active ? 'bg-eventol' : 'bg-light border'}`}>&nbsp;</span>
      </h5>
      <div className='row h-50'>
        <div className={`col ${!props.isLast && 'border-right'}`}>&nbsp;</div>
        <div className='col'>&nbsp;</div>
      </div>
    </div>

    {props.align !== 'left' ? <TimelineCard {...props} /> : <div className='col-sm' />}
  </div>
);

const Timeline = () => (
  <div className='container py-2'>
    <TimelineElement
      date='Jan 9th 2019 7:00 AM'
      title='Day 1 Orientation'
      text='Welcome to the campus, introduction and get started with the tour.'
      muted
      isFirst
    />

    <TimelineElement
      date='Jan 10th 2019 8:30 AM'
      title='Day 2 Sessions'
      text='Sign-up for the lessons and speakers that coincide with your course syllabus. Meet and greet with instructors.'
      align='left'
      details
      active
    />

    <TimelineElement
      date='Jan 11th 2019 8:30 AM'
      title='Day 3 Sessions'
      text='Shoreditch vegan artisan Helvetica. Tattooed Codeply Echo Park Godard kogi, next level irony ennui twee squid fap selvage. Meggings flannel Brooklyn literally small batch, mumblecore PBR try-hard kale chips. Brooklyn vinyl lumbersexual bicycle rights, viral fap cronut leggings squid chillwave pickled gentrify mustache.'
    />

    <TimelineElement
      date='Jan 12th 2019 11:30 AM'
      title='Day 4 Wrap-up'
      text='Join us for lunch in Bootsy cafe across from the Campus Center.'
      align='left'
      isLast
    />
  </div>

);

export default Timeline;
