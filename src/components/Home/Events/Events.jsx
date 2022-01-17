import React, {useState} from 'react'
import { CurrentEvent } from './CurrentEvent/CurrentEvent';
import { ButtonEvents } from './ButtonEvents/ButtonEvents';

export const Events = () => {

    const [currentEvents, setCurrentEvents] = useState([
        {
            eventTime: '10:30 AM',
            eventTitle: 'Webinar: the basics of Figma and React',
            eventImg: 'eventImg'
        },
        {
            eventTime: '2:15 PM',
            eventTitle: 'Team Building Activity 🔥',
            eventImg: 'eventImg'
        },
    ]);

    const [featuredEvents, setFeaturedEvents] = useState([
        {
            featuredEventTitle: 'Youth Talent & Education',
            featuredEventDate: 'May, 20',
        },
        {
            featuredEventTitle: 'Youth Talent & Education',
            featuredEventDate: 'May, 20',
        },
    ]);
    return (
        <div className='events'>
            <h1>Events</h1>
            <div className='events__content'>
                <div className='events__contentSlider' style={{backgroundImage: `url(${process.env.PUBLIC_URL}/resources/slider.png)`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%', backgroundPosition: 'center', minHeight: '200px'}}>
                    <div className='events__contentSliderCategory'>
                        <p>SCIENCE</p>
                    </div>
                    <div className='events__contentSliderData'>
                        <ButtonEvents direction={'left'}/>
                        <div className='events__contentSliderDataInfo'>
                            <div className='events__contentSliderDataInfoTitle'>
                                <h1>Youth Talent & Education</h1>
                            </div>
                            <h1 className='events__contentSliderDataInfoTime'>May, 20</h1>
                        </div>
                        <ButtonEvents direction={'right'}/>
                        <div className="events__contentSliderDataButtons">
                            <ButtonEvents direction={'left'}/>
                            <ButtonEvents direction={'right'}/>
                        </div>
                    </div>
                </div>
                <div className='events__contentToday'>
                    <div className='events__contentTodayTitle'>
                        <h2>EVENTS TODAY</h2>
                        <div className='events__contentTodayTitleLine'></div>
                    </div>
                    <div className='events__contentTodayCards'>
                        {currentEvents.map( (event,index) => <CurrentEvent key={index} eventImg={event.eventImg} eventTime={event.eventTime} eventTitle={event.eventTitle} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}
