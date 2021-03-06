import React, { Component } from 'react'
import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment)
class TaskCal extends Component {
    state = {  
        events: [],
        deletedevents: [],
        addedevents:[]
    }

    
    checkDates = () => {
        let datecount = 0;
        this.props.currentJobs.map(job =>  {
            if (job.job_date != null) {
                datecount++
            }
        })
        return datecount
    }
    
    setDates = () => {

        this.props.currentJobs.map(job => {
            // let starttime = new Date(newtime)
            // let m = moment(newtime)
            let newtime = ''
            
            if(job.job_time){
                console.log('null')
                job.job_time.length < 7 ? newtime = job.job_date + 'T' + job.job_time + ':00.000' : newtime = job.job_date + job.job_time.replace('2000-01-01','').replace('Z','')
            
            let newevent = {
                start: new Date(newtime), // newtime is '2020-10-17T21:45' 
                end: new Date(newtime), 
                title: `${job.company}`
            }

            
                this.state.events.push(newevent);

    }
            const newDateWithTimezonedString = new Date("2020-10-28T21:32:00.000Z");  // Wed Oct 28 2020 17:32:00 GMT-0400 (Eastern Daylight Time)
            const newDateNoTimezonedString = new Date("2020-10-28T21:32:00.000");  // Wed Oct 28 2020 21:32:00 GMT-0400 (Eastern Daylight Time)
        })
    }

    render() { 
        this.state.events = [];
        this.setDates();
        return (  
            
        <div className='wierdcal'>
            <Calendar
                localizer={localizer}
                events={this.state.events}
                startAccessor="start"
                endAccessor="end"
                views={['month','agenda']}
            />
         </div>
        );
    }
}
 
export default TaskCal;