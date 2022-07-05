import React from 'react';
import {
    useLocation,
    Link,
} from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import CustomLink from './CustomLink';

import './sidebar.scss'


const Sidebar = () => {
    let location = useLocation();

    return (
        <div className='sidebar'>
            {
                location.pathname.includes('/protocols') ?

                    <div className='sidebar__container'>
                        <div className='sidebar__btn'>
                            <CustomLink to={`/protocols/description`}>Description</CustomLink>
                        </div>
                        <div className='sidebar__btn'>
                            <CustomLink to="/protocols/guidelines">Guidelines</CustomLink>
                        </div>
                        <div className='sidebar__btn'>
                            <CustomLink to={`/protocols/materials`}>Materials</CustomLink>
                        </div>
                        <div className='sidebar__btn'>
                            <CustomLink to={`/protocols/steps`}>Steps</CustomLink>
                        </div>
                    </div>

                    :

                    <div className='sidebar__container'>
                        <div className='sidebar__btn'>
                            <PersonIcon />
                            <div>Shared with you</div>
                        </div>
                        <div className='sidebar__btn'>
                            <CreateNewFolderIcon />
                            <div>My workspace</div>
                        </div>
                    </div>
            }
        </div>
    );
}

export default Sidebar;
