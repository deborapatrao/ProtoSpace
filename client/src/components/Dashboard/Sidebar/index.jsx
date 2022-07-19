import React from 'react';
import {
    useLocation,
    useParams
} from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import CustomLink from './CustomLink';


import './sidebar.scss'


const Sidebar = ({ width }) => {
    let location = useLocation();
    const { protocolId } = useParams();
    const classForSidebar = width > 1000 ? 'sidebarDesktop' : 'sidebarMobile';


    return (
        <div className={classForSidebar}>
            {
                location.pathname.includes('/protocols') ?

                    <div className={`${classForSidebar}__container`}>
                        <div className={`${classForSidebar}__btn`}>
                            <CustomLink to={location.pathname.includes('/protocols/run') ? `/protocols/run/${protocolId}/description` : `/protocols/description`}>Description</CustomLink>
                        </div>
                        <div className={`${classForSidebar}__btn`}>
                            <CustomLink to={location.pathname.includes('/protocols/run') ? `/protocols/run/${protocolId}/guidelines` : `/protocols/guidelines`}>Guidelines</CustomLink>

                        </div>
                        <div className={`${classForSidebar}__btn`}>
                            <CustomLink to={location.pathname.includes('/protocols/run') ? `/protocols/run/${protocolId}/materials` : `/protocols/materials`}>Materials</CustomLink>
                        </div>
                        <div className={`${classForSidebar}__btn`}>
                            <CustomLink to={location.pathname.includes('/protocols/run') ? `/protocols/run/${protocolId}/steps` : `/protocols/steps`}>Steps</CustomLink>
                        </div>
                    </div>


                    :

                    <div className={`${classForSidebar}__container`}>
                        <div className={`${classForSidebar}__btn`}>
                            <PersonIcon />
                            <div>Shared with me</div>
                        </div>
                        <div className={`${classForSidebar}__btn`}>
                            <CreateNewFolderIcon />
                            <div>My workspace</div>
                        </div>
                    </div>
            }
        </div>
    );
}

export default Sidebar;
