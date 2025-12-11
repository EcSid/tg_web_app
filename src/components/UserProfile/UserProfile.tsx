import type { FC } from 'react'
import VirtualizedList from '../VirtualizedList/VirtualizedList'
import PersonIcon from '@mui/icons-material/Person'
import './UserProfile.css'

const UserProfile: FC = () => {
	return (
		<div className='Wrapper'>
			<div className='Content'>
				<div className='UserProfile'>
					<PersonIcon fontSize='inherit' sx={{ fontSize: 40 }} />
					{/* Максимум 26 */}
					<div className='UserProfileName'>В маске страшный монстр</div>
				</div>
				<div className='Section'>
					<div className='Text'>Твои любимые фильмы</div>
					<VirtualizedList tp='films' />
				</div>
				<div className='Section'>
					<div className='Text'>Твои любимые песни</div>
					<VirtualizedList tp='songs' />
				</div>
				<div className='Section'>
					<div className='Text'>Твои любимые книги</div>
					<VirtualizedList tp='books' />
				</div>
			</div>
		</div>
	)
}

export default UserProfile
