import { Link } from "react-router-dom";
import avatarPlaceholder from "../../assets/images/avatar.png";
import styles from "./index.module.css";

const Avatar = ({
  image,
  name,
  id,
  isRedirect = false,
  className = "",
  imgClassName = "",
  nameClassName = "",
  onClick,
}) => {
  if (isRedirect) {
    return (
      <Link to={`/user/${id}`}>
        <AvatarUI
          image={image}
          name={name}
          className={className}
          imgClassName={imgClassName}
          nameClassName={nameClassName}
        />
      </Link>
    );
  }
  return (
    <AvatarUI
      image={image}
      name={name}
      className={className}
      imgClassName={imgClassName}
      nameClassName={nameClassName}
      onClick={onClick}
    />
  );
};

const AvatarUI = ({
  image,
  name,
  imgClassName,
  nameClassName,
  className,
  onClick,
}) => {
  return (
    <div className={`${className}  d-flex align-items-center`} onClick={onClick}>
      <img
        src={image || avatarPlaceholder}
        alt="avatar"
        className={`${imgClassName} ${styles.avatar} bg-white rounded-circle me-2`}
      />
      <span className={`${nameClassName} ${styles.name}`}>{name}</span>
    </div>
  );
};

export default Avatar;
