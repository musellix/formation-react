import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../features/users';
import spinner from '../../assets/spinner.svg';
// import fuji from "./assets/fuji.jpg"

export default function Users() {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users)
    console.log(users);

    if(!users.data && !users.loading && !users.error) {
        dispatch(getData());
    }

    let content;
    if(users.loading) {
        content = <img src={spinner} alt="spinning loader" />
    }
    else if(users.error) {
        content = <p className='text-red-300'>An error has occured</p>
    }
    else if(users.data) {
        content = (
            <ul>
                {users.data.map(user => (
                    <li className='text-slate-50 text-xl' key={user.id}>
                        {user.name}
                    </li>
                ))}
            </ul>
        )
    }

  return (
    <div>
        <p className='text-2-xl mb-5 text-slate-100'>Users list</p>
        {content}
    </div>
  )
}
