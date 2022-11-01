import React from "react";
import styles from "./Register.module.css";
import Input from "../../components/Input/Input";

export default function Register() {
  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <span>Username</span>
        <Input />
        <span>Password</span>
        <Input />
      </div>
    </div>
  );
}
