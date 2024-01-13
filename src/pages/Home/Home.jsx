import React from 'react';
import styles from './Home.module.css';
import Input from '../../components/Form/Input';
import useForm from '../../hooks/useForm';
import Checkbox from '../../components/Form/Checkbox';
import Button from '../../components/Form/Button';
import Group from '../../assets/images/Group.svg?react';

const Home = () => {
  const email = useForm('email');
  const password = useForm('senha');

  const [termos, setTermos] = React.useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    if (email.validate() && password.validate()) {
      console.log('Send it');
    } else {
      console.log('Dont send it');
    }
  }

  return (
    <>
      <main>
        <div className={styles.wrapper}>
          <div className={styles.imgBx}>
            <Group />
          </div>
          <div className={styles.details}>
            <div className={styles.content}>
              <p>Welcome</p>
              <h1>Log in to your account</h1>
              <form onSubmit={handleSubmit}>
                <div className={styles.inputControl}>
                  <Input
                    label="E-mail"
                    id="email"
                    type="email"
                    placeholder="exemplo@gmail.com"
                    {...email}
                  />
                </div>
                <div className={styles.inputControl}>
                  <Input
                    label="Password"
                    id="senha"
                    type="password"
                    {...password}
                  />
                </div>
                <dir className={styles.passwordTerm}>
                  <div className={styles.terms}>
                    <Checkbox
                      options={[' Remeber me']}
                      value={termos}
                      setValue={setTermos}
                    />
                  </div>
                  <div className={styles.myPassword}>
                    <a href="#">Forgot your password?</a>
                  </div>
                </dir>
                <div className={styles.buttonWrapper}>
                  <div className={styles.buttonControl}>
                    <Button type="primary">Log in</Button>
                  </div>
                  <p style={{ textAlign: 'center', fontWeight: 100 }}>Or</p>
                  <div className={styles.buttonControl}>
                    <Button type="secondary">Log in with Google</Button>
                    <img src="src/assets/images/iconfinder_Google.svg" alt="" />
                  </div>
                </div>
                <div className={styles.register}>
                  <p>
                    Don't have an account? <a href="#">Sign up</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
