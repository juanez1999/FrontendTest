import React, {useState} from 'react'
import { CurrentEvent } from './CurrentEvent/CurrentEvent';

export const Events = () => {

    const [events, setEvents] = useState([
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

    return (
        <div className='events'>
            <h1>Events</h1>
            <div className='events__content'>
                <div className='events__contentSlider' style={{backgroundImage: `url(${process.env.PUBLIC_URL}/resources/slider.png)`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%', backgroundPosition: 'center', minHeight: '200px'}}>
                    <div className='events__contentSliderCategory'>
                        <p>SCIENCE</p>
                    </div>
                    <div className='events__contentSliderData'>
                        <button className='events__contentSliderDataBtn' style={{backgroundImage: `url(${process.env.PUBLIC_URL}/resources/leftArrow.png)`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: '50%'}}></button>
                        <div className='events__contentSliderDataInfo'>
                            <div className='events__contentSliderDataInfoTitle'>
                                <h1>Youth Talent &</h1>
                                <h1>Education</h1>
                            </div>
                            <h1 className='events__contentSliderDataInfoTime'>May, 20</h1>
                        </div>
                        <button className='events__contentSliderDataBtn' style={{backgroundImage: `url(${process.env.PUBLIC_URL}/resources/rightArrow.png)`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: '50%'}}></button>
                        <div className="events__contentSliderDataButtons">
                            <button style={{backgroundImage: `url(${process.env.PUBLIC_URL}/resources/leftArrow.png)`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: '50%'}}></button>
                            <button style={{backgroundImage: `url(${process.env.PUBLIC_URL}/resources/rightArrow.png)`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: '50%'}}></button>
                        </div>
                    </div>
                </div>
                <div className='events__contentToday'>
                    <div className='events__contentTodayTitle'>
                        <h2>EVENTS TODAY</h2>
                    </div>
                    <div className='events__contentTodayCards'>
                        {events.map( (event,index) => <CurrentEvent key={index} eventImg={event.eventImg} eventTime={event.eventTime} eventTitle={event.eventTitle} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}
