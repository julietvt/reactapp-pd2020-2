import React, { Component } from 'react';
import UserItem from '../../components/UserItem';
const dbUsers = [
                {
                    id: 1,
                    fName: 'firstName1',
                    lName: 'lastName1',
                },
                {
                    id: 2,
                    fName: 'firstName2',
                    lName: 'lastName2',
                },
                {
                    id: 3,
                    fName: 'firstName3',
                    lName: 'lastName3',
                },
                {
                    id: 4,
                    fName: 'firstName4',
                    lName: 'lastName4',
                },
                {
                    id: 5,
                    fName: 'firstName5',
                    lName: 'lastName5',
                },
            ];
class UserList extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: dbUsers.map(u=>({...u, isSelected:false})),
        };
    }
    mapUser = (user, index) => {
        const {users} = this.state;
        const selectUsersHandler = () => {
            const newUsers = [...users];
            this.setState({users: newUsers});
        };
        return(
            <UserItem key={user.id} user={user} onSelectUsers={selectUsersHandler} isSelected={user.isSelected} />
        );
    }
    
  render() {
      const {users} = this.state;
    return (
      <ul> {users.map(this.mapUser)} </ul>
    );
  }
}

export default UserList;
