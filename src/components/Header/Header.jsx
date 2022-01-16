import React, {useState} from 'react'
import Badge from '@mui/material/Badge';
import styled from '@emotion/styled';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import { HeaderNotification } from './HeaderNotification/HeaderNotification';

export const Header = () => {

    const [notifications, setNotifications] = useState([
        {
            notificationTitle: 'You have a new 5 followers including',
            notificationImage: 'notificationThumb',
            notificationDay: `Today`,
            notificationTime: '10:30AM'
        },
        {
            notificationTitle: '3 new events were added to your calendar',
            notificationImage: 'notificationThumb',
            notificationDay: `Yesterday`,
            notificationTime: '9:45PM'
        },
        {
            notificationTitle: 'You have 3 pending readings to complete 🤓',
            notificationImage: 'notificationThumb',
            notificationDay: `Yesterday`,
            notificationTime: '10:00PM'
        }
    ]);

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const BadgeStyle = styled (Badge) (() => ({
        '& .MuiBadge-dot': {
            borderRadius: '10px',
            minWidth: '13px',
            height: '13px',
            bottom: '4px',
            right: '-2px',
            backgroundColor: '#3D84FF'
        }
    }));

    const PopoverStyle = styled (Popover) (() => ({
        '& .MuiPaper-root': {
            border: '1px solid rgba(186,185,216,0.22)',
            backgroundColor: '#FFFFFF',
            boxShadow: '0 22px 34px 0 rgba(27,20,119,0.11)',
            marginTop: '32px',
            padding: '0px 25px'
        }
    }));
    return (
        <div className='header'>
            <img className="header__logo" src={process.env.PUBLIC_URL +'/resources/logo.png'} alt=""/>
            <div className='textfield textfield--imgLeft'>
                <input type="text" className="textfield__input" placeholder="Search and Find" />
                <img src={process.env.PUBLIC_URL +'/resources/lupa.png'} alt="" className="textfield__icon"></img>
            </div>
            <div className='header__options'>
                <button className='btnAdd'>+ ADD</button>

                <div className='header__optionsProfile'>
                    <div className='header__optionsProfileNotifications'>
                        <IconButton aria-label="notifications" aria-describedby={id} onClick={handleClick}>
                            <BadgeStyle color="primary" anchorOrigin={{vertical: 'bottom', horizontal: 'right',}} variant="dot">
                                <img src={process.env.PUBLIC_URL +'/resources/notification.png'} alt="" />
                            </BadgeStyle>
                        </IconButton>
                        <PopoverStyle id={id} open={open} anchorEl={anchorEl} onClose={handleClose} anchorOrigin={{vertical: 'bottom',horizontal: 'center'}} transformOrigin={{vertical: 'top',horizontal: 'center'}} disableScrollLock>
                            {notifications.map((notification,index) => <HeaderNotification key={index} notificationDay={notification.notificationDay} notificationImage={notification.notificationImage} 
                            notificationTime={notification.notificationTime} notificationTitle={notification.notificationTitle} />)}
                        </PopoverStyle>
                        <img src={process.env.PUBLIC_URL +'/resources/chat.png'} alt="" />
                    </div>

                    <div className='header__optionsProfileUser'>
                        <p>Clarence Russell</p>
                        <img src={process.env.PUBLIC_URL +'/resources/profile.png'} alt="" />
                        <img src={process.env.PUBLIC_URL +'/resources/arrowDown.png'} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}