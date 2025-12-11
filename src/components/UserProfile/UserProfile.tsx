import type { FC } from 'react'
import VirtualizedList from '../VirtualizedList/VirtualizedList'
import PersonIcon from '@mui/icons-material/Person'
import './UserProfile.css'
import useTelegram from '../../hooks/useTelegram'

const UserProfile: FC = () => {
	const { user } = useTelegram()

	return (
		<div className='Wrapper'>
			<div className='Content'>
				<div className='UserProfile'>
					<PersonIcon
						fontSize='inherit'
						sx={{ fontSize: 40, color: 'var(--tg-theme-text-color)' }}
					/>
					{/* Максимум 26 */}
					<div className='UserProfileName'>{user?.username}</div>
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
