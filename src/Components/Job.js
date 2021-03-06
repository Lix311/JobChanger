import React from 'react';
import {Card} from 'react-bootstrap';
import '../App.css';



const Job = (props) => {
    let paragraphs = props.job.description.split('</p>')
    let firstparagraph = paragraphs[0];
    
    return (  
        <div className='job'>
            <Card border="primary" style={{ width: '18rem', float: 'right',margin:'5px' }}>
    <Card.Header>
    <img className='movie-img' src={props.job.logo} />
    <Card.Link href='#' onClick={(event) => props.change(props.job,event)}>{props.job.title}</Card.Link> 
    {/* change from props.job to event */}
    

    {/* add url to backend */}
    
    </Card.Header>
    
                <Card.Body>
                <Card.Title><small>{props.job.company}</small></Card.Title>
               
                <Card.Text>
                    {props.job.location}
                </Card.Text>
                </Card.Body>
                <small></small>
            </Card>
        </div>
    );
}
 
export default Job;