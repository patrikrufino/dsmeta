import icon from "../../assets/img/notification-icon.svg";
import "./styles.css";
import axios, { Axios } from 'axios';
import { BASE_URL } from "../../utils/request";

type Props = {
  saleId: number;
};

function handleClick(saleId: number) {
  axios(`${BASE_URL}/sales/${saleId}/notification`)
    .then((response) => {
      console.log(response);
    }
  );
}

function NotificationButton( { saleId }: Props) {
  return (
    <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
      <img src={icon} alt="Notificar" />
    </div>
  );
}

export default NotificationButton;
