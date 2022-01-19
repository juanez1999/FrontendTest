import React, {useState,useEffect} from 'react'
import { CurrentEvent } from './CurrentEvent/CurrentEvent';
import { ButtonEvents } from './ButtonEvents/ButtonEvents';
import { ContentSliderEvent } from './ContentSliderEvent/ContentSliderEvent';
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
    
    const [eventSlider, setEventSlider] = useState([
        {
            eventSliderTitle: 'Youth Talent & Education',
            eventSliderDate: 'May, 20',
        },
        {
            eventSliderTitle: 'Webinar: The basics of Figma',
            eventSliderDate: 'July, 20',
        },
        {
            eventSliderTitle: 'Team Building Activity',
            eventSliderDate: 'April, 15',
        },
    ]);

    const [elementActive, setElementActive] = useState(0);
    const [previous, setPrevious] = useState(eventSlider.length - 1);
    const [next, setNext] = useState(elementActive + 1);

    useEffect(() => {
        if (elementActive === 0) {
            setPrevious(eventSlider.length - 1);
            setNext(elementActive + 1);
        } else if (elementActive === eventSlider.length - 1) {
            setPrevious(elementActive - 1);
            setNext(0);
        } else {
            setPrevious(elementActive - 1);
            setNext(elementActive + 1);
        }
    }, [elementActive]);

    //mover elemento
    const moveImageRight = () => {
        // Si es el último elemento, restablezca a 0, de lo contrario +1
        if (elementActive === eventSlider.length - 1) {
            setElementActive(0);
        } else {
            setElementActive(elementActive + 1);
        }
    };

    //mover elemento
    const moveImageLeft = () => {
        if (elementActive === 0) {
            setElementActive(eventSlider.length - 1);
        } else {
            setElementActive(elementActive - 1);
        }
    };

    return (
        <div className='events'>
            <h1>Events</h1>
            <div className='events__content'>
                <div className='events__contentSlider' style={{backgroundImage: `url(${process.env.PUBLIC_URL}/resources/slider.png)`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%', backgroundPosition: 'center', minHeight: '200px'}}>
                    <div className='events__contentSliderCategory'>
                        <p>SCIENCE</p>
                    </div>
                    <div className='events__contentSliderData'>
                        <ButtonEvents direction={'left'} click={moveImageLeft}/>  
                        <div className='carrousel'>
                            {eventSlider.map((event,index) => <ContentSliderEvent key={index} eventTitle={event.eventSliderTitle} eventDate={event.eventSliderDate} active={elementActive === index}
                            previous={previous === index}
                            next={next === index}/>)}
                        </div>
                        <ButtonEvents direction={'right'} click={moveImageRight}/>
                        <div className="events__contentSliderDataButtons">
                            <ButtonEvents direction={'left'} click={moveImageLeft}/>
                            <ButtonEvents direction={'right'} click={moveImageRight}/>
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
