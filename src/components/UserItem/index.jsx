import React from 'react';
const UserItem = props => {
    const {
        isSelected,
        user:{id,fName,lName},
    } = props;
    return(
        <li>UserID: "{id}" UserFullName:"{fName} {lName}"; </li>
    );
};
export default UserItem;