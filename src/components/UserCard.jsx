import React from "react";
import PropTypes from "prop-types";
import "./UserCard.scss";

const UserCard = ({ user, onUpdate, onDelete }) => {
  const { avatar, first_name, last_name, email } = user;

  return (
    <div className="user-card">
      <img src={avatar} alt={`${first_name} ${last_name}`} />
      <div className="user-info">
        <h4>
          {first_name} {last_name}
        </h4>
        <p>{email}</p>
      </div>
      <div className="actions">
        <button className="btn edit" onClick={() => onUpdate(user)}>
          Edit
        </button>
        <button className="btn delete" onClick={() => onDelete(user.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.object.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default UserCard;
