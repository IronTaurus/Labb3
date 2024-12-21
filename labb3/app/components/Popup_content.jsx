import { NavLink } from "react-router-dom";

const Popup_content = (props) => {
    return(
        <li className="popup-content">
            <NavLink to={props.path}>
                <img className="popup-content-img" src={props.src}/>
            </NavLink>
        </li>


    );
}

export default Popup_content;