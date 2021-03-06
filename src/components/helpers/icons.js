import {
  faTrash,
  faSignOutAlt,
  faEdit,
  faSpinner,
  faCannabis,
  faPlusCircle,
  faPhone,
  faEnvelope,
  faMapMarkedAlt,
  faCity,
  faLock,
  faUser,
  faChevronCircleLeft,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
  return library.add(
    faTrash,
    faSignOutAlt,
    faEdit,
    faCannabis,
    faPlusCircle,
    faPhone,
    faEnvelope,
    faCity,
    faLock,
    faUser,
    faChevronCircleLeft,
    faTimes,
  );
};

export default Icons;
