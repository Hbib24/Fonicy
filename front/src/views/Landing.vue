<template>
  <div>
    <div class="bg">
      <img
        src="../assets/logo.png"
        alt="logo"
        style="width: 250px; margin: 3%; margin-left: 5%"
      />
      <div class="separator"></div>
      <h2 class="signup">SIGN IN</h2>

      <!-- EMAIL INPUT -->

      <div class="form__group field">
        <input
          type="text"
          class="form__field"
          placeholder="Email"
          name="email"
          id="email"
          required
        />
        <label for="email" class="form__label">Email</label>
      </div>

      <!-- PASSWORD INPUT -->

      <div class="form__group field">
        <input
          type="password"
          class="form__field"
          placeholder="Password"
          name="password"
          id="password"
          required
        />
        <label for="password" class="form__label">Password</label>
      </div>
      <p
        style="color: gray; font-family: Roboto; position: relative;left: 37px;
    top: 50px;font-size: 18px"
      >
        No account? <router-link to="/signup">Sign Up</router-link>
      </p>
      <button class="btn">Sign In</button>
    </div>
    <footer
      class="banner"
      style="text-align: center; color: white; font-size: 20px;"
    >
      <h5 style="position: relative; top: 50%">Fonicy - 2021</h5>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Landing"
};
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 150px;
  background: linear-gradient(
    0deg,
    rgba(17, 153, 142, 1) 0%,
    rgba(28, 107, 101, 1) 100%
  );
  overflow: hidden;
}

.circle {
  border-radius: 50%;
  position: relative;
  background: white;
  opacity: 0.2;
}

.btn {
  width: 150px;
  height: 50px;
  background-color: transparent;
  font-family: Roboto;
  border-radius: 10px;
  font-weight: bold;
  color: #363f5a;
  font-size: 20px;
  border: 2px solid #11998e;
  transition-duration: 0.4s;
  position: relative;
  left: 240px;
  top: 20px;
}

.btn:hover {
  background-color: #11998e;
}

.bg {
  height: 100vh;
  background-image: url("../assets/bg.jpg");
}
.separator {
  height: 13px;
  width: 60vh;
  border-top-right-radius: 21px;
  border-bottom-right-radius: 21px;
  background: #2daca1;
}
.signup {
  width: 193px;
  height: 71px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 47px;
  color: #363f5a;
  margin: 2%;
  margin-left: 6%;
}
$primary: #2daca1;
$secondary: #11998e;
$white: #fff;
$gray: #11998e;
.form__group {
  margin: 2%;
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 40vh;
}

.form__field {
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid $gray;
  outline: 0;
  font-size: 1.3rem;
  color: $white;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .form__label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }
}

.form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: #363f5a;
}

.form__field:focus {
  ~ .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: $primary;
    font-weight: 700;
  }
  padding-bottom: 6px;
  font-weight: 700;
  border-width: 3px;
  border-image: linear-gradient(to right, $primary, $secondary);
  border-image-slice: 1;
}
/* reset input */
.form__field {
  &:required,
  &:invalid {
    box-shadow: none;
  }
}
/* demo */
body {
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-size: 1.5rem;
  background-color: #222222;
}
</style>
