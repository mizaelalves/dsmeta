import icon from "../assets/notification-icon.svg"
import "./styles/NotificationButton.css"
export function NotificationButton(){
  return(
    <div className="red-btn">
      <img src={icon} alt="icone avatar"/>
    </div>
  )
}