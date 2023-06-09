import { Link } from "react-router-dom";
import Sidenav from "../../main/Sidenav";
import styles from "./styles.module.css";

function Login() {
	const googleAuth = () => {
		window.open(
			`https://docaidbackend.onrender.com/auth/google/callback`,
			"_self"
		);
	};
	return (
		<div className={styles.container}>
			<h1 className={styles.heading}>Log in Form</h1>
			<div className={styles.form_container}>
				<div className={styles.left}>
					<img className={styles.img123} src="https://res.cloudinary.com/dxxjc0u2h/image/upload/v1679332664/Screenshot__704_-removebg-preview_jdspqe.png" alt="login" />
				</div>
				<div className={styles.right}>
					{/* <h2 className={styles.from_heading}>Members Log in</h2>
					<input type="text" className={styles.input} placeholder="Email" />
					<input type="text" className={styles.input} placeholder="Password" />
					<button className={styles.btn}>Log In</button>
					<p className={styles.text}>or</p> */}
					<button className={styles.google_btn} onClick={googleAuth}>
						<img src="https://res.cloudinary.com/dxxjc0u2h/image/upload/v1679504717/google_op5vwe.png" alt="google icon" />
						<span>Sign in with Google</span>
					</button>
					<p className={styles.text}>
						New Here ? <Link to="/signup">Sign Up</Link>
					</p>
				</div>
			</div>
			</div>
	);
}

export default Login;
