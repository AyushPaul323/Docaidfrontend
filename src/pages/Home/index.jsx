import styles from "./styles.module.css";
import Sidenav from "../../main/Sidenav"
function Home(userDetails) {
	const user = userDetails.user;
	const logout = () => {
		window.open(`https://docaidbackend.onrender.com/auth/logout`, "_self");
	};
	return (
		<div>
			<Sidenav />

		<div className={styles.container}>
			<h1 className={styles.heading}>Home</h1>
			<div className={styles.form_container}>
				<div className={styles.left}>
					<img className={styles.img} src="https://res.cloudinary.com/dxxjc0u2h/image/upload/v1679332664/Screenshot__704_-removebg-preview_jdspqe.png" alt="login" />
				</div>
				<div className={styles.right}>
					<h2 className={styles.from_heading}>Profile</h2>
					<img
						src={user.picture}
						alt="profile"
						className={styles.profile_img}
					/>
					<input
						type="text"
						defaultValue={user.name}
						className={styles.input}
						placeholder="UserName"
					/>
					<input
						type="text"
						defaultValue={user.email}
						className={styles.input}
						placeholder="Email"
					/>
					<button className={styles.btn} onClick={logout}>
						Log Out
					</button>
				</div>
			</div>
		</div>
		</div>
	);
}

export default Home;
