// // import { createStyles, Header, Navbar } from '@mantine/core';
// import Header from '@mui/material/AppBar';
// import { Link } from 'react-router-dom';

// const useStyles = createStyles((theme) => ({
//   navbar: {
//     backgroundColor: theme.colors.blue[7],
//     padding: theme.spacing.md,
//     fontSize: theme.fontSizes.md,
//     color: theme.colors.gray[0],
//   },
//   link: {
//       textDecoration: 'none',
//       color: theme.colors.gray[0],
//   },
// }))


// const AppHeader = ({ incomplete }) => {
//   const { classes } = useStyles();

//   return (
//     <Header data-testid="todo-header">
//       <Navbar className={classes.navbar} style={{
//         display: 'inline-block'
//       }}>
//           <div
//             style={{
//               display: 'inline-block',
//               padding: 10,
//             }}>
//             <Link className={classes.link} to="/">Home</Link>
//           </div>

//           <div
//             style={{
//               display: 'inline-block',
//               padding: 10,
//               color: 'white',
//             }}>
//             <Link className={classes.link} to="/settings">Settings</Link>
//           </div>
//       </Navbar>
//     </Header>
//   )
// }
// // const Header = () => {
// // 	return (
// // 		<AppBar>
// // 			<Toolbar>
// //                 <Typography>OUR STORE</Typography>
// //                 <Typography sx={{marginLeft: '95rem'}}>CART</Typography>
// // 			</Toolbar>
// // 		</AppBar>
// // 	);
// // };

// export default AppHeader;