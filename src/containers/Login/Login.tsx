import React, { useState } from "react";
import styles from "./Login.module.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Soccer from "../../components/SoccerIcon/Soccer";

export default function Login() {
  const [loginLeftPosition, setLoginLeftPosition] = useState("0%");
  const [registerLeftPosition, setRegisterLeftPosition] = useState("100%");

  function handleLeftPosition() {
    if (loginLeftPosition === "0%") {
      setLoginLeftPosition("-100%");
      setRegisterLeftPosition("0%");
    } else {
      setLoginLeftPosition("0%");
      setRegisterLeftPosition("100%");
    }
  }

  return (
    <div className={styles.root}>
      <div className={styles.animateWrapper}>
        <ul className={styles.animate}>
          <li>
            <Soccer />
          </li>
          <li>
            <Soccer />
          </li>
          <li>
            <Soccer />
          </li>
          <li>
            <Soccer />
          </li>
          <li>
            <Soccer />
          </li>
          <li>
            <Soccer />
          </li>
          <li>
            <Soccer />
          </li>
          <li>
            <Soccer />
          </li>
          <li>
            <Soccer />
          </li>
          <li>
            <Soccer />
          </li>
          <li>
            <Soccer />
          </li>
          <li>
            <Soccer />
          </li>
        </ul>
      </div>
      <section className={styles.wrapper}>
        <div className={styles.toggleForms}>
          <Button className={styles.formButton} onClick={() => handleLeftPosition()} id="login">
            Login
          </Button>
          <Button className={styles.formButton} onClick={() => handleLeftPosition()} id="register">
            Register
          </Button>
        </div>
        <form style={{ left: loginLeftPosition }}>
          <div className={styles.formWrapper}>
            <div className={styles.worldCupLogoContainer}>
              <img src="./worldCup-Logo.png" />
            </div>
            <div className={styles.inputContainer}>
              <div className={styles.inputWrapper}>
                <div>
                  <Input id="email" type="email" placeholder="Email" />
                </div>
                <div>
                  <Input id="password" type="password" placeholder="Password" />
                </div>
                <p>Forgot Password?</p>
              </div>
              <div className={styles.btContainer}>
                <Button className="">Login</Button>
              </div>
            </div>
          </div>
        </form>
        <form style={{ left: registerLeftPosition }}>
          <div className={styles.formWrapper}>
            <div className={styles.inputContainer}>
              <div className={styles.inputWrapper}>
                <div>
                  <Input id="regEmail" type="email" placeholder="email" />
                </div>
                <div>
                  <Input
                    id="regPassword"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <div>
                  <Input
                    id="regePassword"
                    type="password"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className={styles.btContainer}>
                <Button className="">Register</Button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}
