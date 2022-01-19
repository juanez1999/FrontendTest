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

    const [elementoActivo, setElementoActivo] = useState(0);
    const [anterior, setAnterior] = useState(eventSlider.length - 1);
    const [siguiente, setSiguiente] = useState(elementoActivo + 1);

    useEffect(() => {
        if (elementoActivo === 0) {
            setAnterior(eventSlider.length - 1);
            setSiguiente(elementoActivo + 1);
        } else if (elementoActivo === eventSlider.length - 1) {
            setAnterior(elementoActivo - 1);
            setSiguiente(0);
        } else {
            setAnterior(elementoActivo - 1);
            setSiguiente(elementoActivo + 1);
        }
    }, [elementoActivo]);

    //mover elemento
    const moverImagenDerecha = () => {
        // Si es el último elemento, restablezca a 0, de lo contrario +1
        if (elementoActivo === eventSlider.length - 1) {
        setElementoActivo(0);
        } else {
        setElementoActivo(elementoActivo + 1);
        }
    };

    //mover elemento
    const moverImagenIzquierda = () => {
        if (elementoActivo === 0) {
        setElementoActivo(eventSlider.length - 1);
        } else {
        setElementoActivo(elementoActivo - 1);
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
                        <ButtonEvents direction={'left'} click={moverImagenIzquierda}/>  
                        <div className='carrousel'>
                            {eventSlider.map((event,index) => <ContentSliderEvent key={index} eventTitle={event.eventSliderTitle} eventDate={event.eventSliderDate} activo={elementoActivo === index}
                            anterior={anterior === index}
                            siguiente={siguiente === index}/>)}
                        </div>
                        <ButtonEvents direction={'right'} click={moverImagenDerecha}/>
                        <div className="events__contentSliderDataButtons">
                            <ButtonEvents direction={'left'} click={moverImagenIzquierda}/>
                            <ButtonEvents direction={'right'} click={moverImagenDerecha}/>
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
