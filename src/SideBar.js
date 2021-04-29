import { Button, IconButton } from '@material-ui/core'
import React from 'react'
import "./SideBar.css"
import AddIcon from  "@material-ui/icons/Add"
import InboxIcon from '@material-ui/icons/Inbox';
import SidebarOption from './SidebarOption';
import StartIcon from '@material-ui/icons/Star'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import LabelImportantIcon from "@material-ui/icons/LabelImportant"
import NearMeIcon from '@material-ui/icons/NearMe'
import NoteIcon from '@material-ui/icons/Note'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import PersonIcon from '@material-ui/icons/Person'
import DuoIcon from '@material-ui/icons/Duo'
import PhoneIcon from '@material-ui/icons/Phone'




function SideBar() {
    return (
        <div className="sidebar">
            <Button startIcon={<AddIcon font-size="large"  />} className="sidebar__compose">Compose </Button>
            <SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected ={true} />
            <SidebarOption Icon={StartIcon} title="Starred" number={54} />
            <SidebarOption Icon={AccessTimeIcon} title="Starred" number={54} />
            <SidebarOption Icon={LabelImportantIcon} title="Starred" number={54} />
            <SidebarOption Icon={NearMeIcon} title="Starred" number={54} />
            <SidebarOption Icon={NoteIcon} title="Starred" number={54} />
            <SidebarOption Icon={ExpandMoreIcon} title="Starred" number={54} />
            <div className="sidebar__footer">
                <div className="sidebar__footerIcons">
                    <IconButton>
                        <PersonIcon/>
                    </IconButton>
                    <IconButton>
                        <DuoIcon/>
                    </IconButton> 
                    <IconButton>
                        <PhoneIcon/>
                    </IconButton>
                </div>
            </div>

        </div>
    )
}

export default SideBar
