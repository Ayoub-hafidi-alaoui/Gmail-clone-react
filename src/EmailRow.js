import { IconButton } from '@material-ui/core'
import React from 'react'
import './EmailRow.css'
import CheckBox from '@material-ui/icons/CheckBox';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';
import { useHistory } from 'react-router';


function EmailRow({id,title,subject,description,time}) {
    const history=useHistory();
    return (
        <div onClick={()=> history.push("/mail")} className="emailRow">
            <div className="emailRow__options">
                <IconButton>
                <CheckBox/>
                </IconButton>
                <IconButton>
                    <StarBorderIcon/>
                </IconButton>
                <IconButton>
                    <LabelImportantOutlinedIcon/>
                </IconButton>
             </div>  
            <h3 className="emailRow__title">
                 {title}
            </h3> 
            <div className="emailRow__message">
                <h4>
                    {subject}{" "}
                    <span className="emailRow__description">
                        {description}
                    </span>
                </h4>
            </div>
            <p className="emailRow__time">
                    {time}
            </p>
        </div>
    )
}

export default EmailRow
