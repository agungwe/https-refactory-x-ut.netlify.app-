<template>
  <div class="row justify-content-center">
    <div class="col-10 align-self-center">
      <div class="mb-3 row">
        <label for="staticEmail" class="col-sm-2 col-form-label">Username</label>
        <div class="col-sm-10">
          <input type="text" v-model="username" class="form-control" placeholder="username" />
        </div>
      </div>
      <div class="mb-3 row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
        <div class="col-sm-10">
          <input type="password" v-model="password" class="form-control" placeholder="password" />
        </div>
      </div>
      <button type="submit" class="btn btn-primary mb-3 btn-block" @click="login">Login</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },

  methods: {
    login() {
      const userLoginCondition =
        this.username === "root" && this.password === "password";

      if (userLoginCondition) {
        localStorage.setItem("login", JSON.stringify(true));
        return this.$router.push({
          name: "Dashboard",
          query: { login: true },
        });
      }

      alert("Username / Password salah ");
    },
  },
};
</script>

<style scoped>
</style>