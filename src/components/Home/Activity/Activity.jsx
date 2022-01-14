import React, {useState} from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { makeStyles, createStyles } from '@mui/styles';

export const Activity = () => {

    const [activities, setActivities] = useState([
        {
            activityText: 'You have new 5 followers including Kathryn Crawford and Piper Shaw',
            activityImg: 'follow',
            activityDescription: `Is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem`
        },
        {
            activityText: '3 new events were added to your calendar',
            activityImg: 'calendar',
            activityDescription: `Is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem`
        },
        {
            activityText: 'You have 3 pending readings to complete 🤓',
            activityImg: 'assignments',
            activityDescription: `Is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem`
        }
    ]);

    const classes = useStyles();

    return (
        <div className='activity'>
            <div className='activity__title'>
                <h1>Activity</h1>
                <div className='activity__titleLine'></div>
                <button style={{backgroundImage: `url(${process.env.PUBLIC_URL}/resources/rightArrow.png)`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: '50%'}}></button>
            </div>
            <div className='activity__cards'>
                {activities.map( (activity,index) => 
                    <Accordion key={index} classes={{root: classes.accordionRoot}}> 
                        <AccordionSummary
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            expandIcon={<img src={`${process.env.PUBLIC_URL}/resources/expandArrow.png`} alt="" />}
                            classes={{root: classes.accordionSummaryRoot}}
                            >
                            <img src={`${process.env.PUBLIC_URL}/resources/${activity.activityImg}.png`} alt="" />
                            <p>{activity.activityText}</p>
                        </AccordionSummary>
                        <AccordionDetails classes={{root: classes.accordionDetailsRoot}}>
                            <p>{activity.activityDescription}</p>
                        </AccordionDetails>
                    </Accordion>
                )}
            </div>
        </div>
    )
}

const useStyles = makeStyles(() =>
    createStyles({
        accordionRoot:{
            borderRadius: '5px !important',
            backgroundColor: '#FFFFFF',
            boxShadow: '0 22px 34px 0 rgba(27,20,119,0.11)',
            '&:before': {
                display: 'none',
            },
            '&:not(:last-child)': {
                boxShadow: 'none',
            },
            '&:last-child': {
                boxShadow: 'none',
            },
        },
        accordionSummaryRoot:{
            '& .MuiAccordionSummary-content': {
                alignItems: 'center',
                gap: '20px',
                color: '#9D9BB6'
            },
        },
        accordionDetailsRoot:{
            '& p ': {
                padding: '0px 60px',
                color: '#103460',
                fontSize: '0.9rem',
                fontWeight: '500',
            },
            
        },
    })
);