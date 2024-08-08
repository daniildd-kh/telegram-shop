import React, { useState } from "react";
import styles from "./form.module.css";

const Form = () => {
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [payment, setPayment] = useState("card");

  const onChangeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };
  const onChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onChangePayment = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPayment(e.target.value);
  };

  return (
    <div className={styles.form}>
      <h1>Введите данные для оформления</h1>
      <input
        type="text"
        placeholder="Введите ваш адрес"
        className={styles.formInput}
        value={address}
        onChange={onChangeAddress}
      />
      <input
        type="tel"
        placeholder="Введите ваш номер телефона"
        className={styles.formInput}
        value={phone}
        onChange={onChangePhone}
      />
      <input
        type="email"
        placeholder="Введите вашу почту"
        className={styles.formInput}
        value={email}
        onChange={onChangeEmail}
      />
      <select
        name="choice-payment"
        value={payment}
        onChange={onChangePayment}
        className={styles.formSelect}
      >
        <option value="cash">Оплата наличными</option>
        <option value="card" selected>
          Оплата картой
        </option>
      </select>
    </div>
  );
};

export default Form;
