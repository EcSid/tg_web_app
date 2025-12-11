import type { FC } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import './SearchUsers.css'
import { Button } from '@mui/material'
import VurtualizedListUsers from '../VirtualizedListUsers/VirtualizedListUsers'

const SearchUsers: FC = () => {
	return (
		<div className='Wrapper'>
			<div className='Content'>
				<Button variant='contained' startIcon={<SearchIcon />}>
					Найти людей с похожим вкусом
				</Button>
				<VurtualizedListUsers />
			</div>
		</div>
	)
}

export default SearchUsers
