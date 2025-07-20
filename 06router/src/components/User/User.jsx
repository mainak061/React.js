import { useParams } from 'react-router'

function User() {
    const {userId}=useParams()
  return (
    <div className='bg-gray-500 text-center text-white p-4 text-2xl'>User: {userId}</div>
  )
}

export default User