import * as React from 'react'
import Box from '@mui/material/Box'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import PersonSearchIcon from '@mui/icons-material/PersonSearch'
import UserProfile from './components/UserProfile/UserProfile'
import SearchUsers from './components/SearchUsers/SearchUsers'

function App() {
	const [value, setValue] = React.useState(0)

	return (
		<>
			{/* Navigation */}
			<Box sx={{ width: '100%' }}>
				<BottomNavigation
					sx={{
						bgcolor: 'var(--tg-theme-bg-color)',
						'& .MuiBottomNavigationAction-root': {
							color: 'grey.600',
						},
						'& .Mui-selected': {
							'& .MuiBottomNavigationAction-label': {
								color: 'var(--tg-theme-button-color)',
							},
							'& .MuiSvgIcon-root': {
								color: 'var(--tg-theme-button-color)',
							},
						},
					}}
					showLabels
					value={value}
					onChange={(_, newValue) => {
						setValue(newValue)
					}}
				>
					<BottomNavigationAction
						label='Мой профиль'
						icon={<AccountCircleIcon />}
					/>
					<BottomNavigationAction
						label='Искать людей'
						icon={<PersonSearchIcon />}
					/>
				</BottomNavigation>
			</Box>
			{/* Content */}
			{value == 0 && <UserProfile />}
			{value == 1 && <SearchUsers />}
		</>
	)
}

export default App
