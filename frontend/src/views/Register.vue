<template>
  <div class="regrister">
    <form v-on:submit.prevent="becomeMember">
      <h3>Bli medlem</h3>
      <input v-model="name" required type="text" />
      <label>Förnamn</label>
      <input v-model="lastName" required type="text" />
      <label>Efternamn</label>
      <input v-model="email" required type="email" />
      <label>E-post</label>
      <input v-model="password" required type="password" />
      <label>Lösenord</label>
      <p v-if="alreadyMember">Emailen är upptagen..</p>
      <button>Bli medlem</button>
    </form>
  </div>
  <div class="container"></div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      lastName: "",
      email: "",
      password: "",
      alreadyMember: false,
    };
  },
  methods: {
    async becomeMember() {
      let user = {
        name: this.name,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
      };

      if (!this.userLoggedIn) {
        const isNotRegistered = await this.$store.dispatch("register", user)
        // if not logged in
        if(isNotRegistered){
          this.alreadyMember = false
          this.$router.push("/");
          M.toast({ html: "✓ Inloggning lyckades", classes: "color: green" });
        }
        else{
          this.alreadyMember = true
          return
        }
      }
    }
  },
  computed: {
    userLoggedIn() {
      return this.$store.state.user != null;
    },
  }
};
</script>

<style scoped>
h3 {
  text-align: center;
  margin: 0 0 10px 0;
  color: white;
}
.regrister {
  max-width: 40%;
  background: rgba(49, 45, 45, 0.664);
  margin: 50px auto;
  padding: 20px;
  border-radius: 10px;
}
label {
  color: white;
  text-align: center;
}
input {
  color: white;
}
button {
  cursor: pointer;
  display: block;
  margin: 20px auto;
  padding: 10px 32px;
  border: none;
  border-radius: 8px;
  background: #4caf50;
  opacity: 75%;
  color: white;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: medium;
}
button:hover {
  opacity: 100%;
}
p {
  color: red;
}

.container {
  margin-bottom: 12.5vw; /* For the footer */
}
@media only screen and (max-width: 480px){
 .regrister {
  max-width: 70%;
  margin: 25px auto;
  padding: 20px;
  border-radius: 10px;
}
h3{
  font-size: 2em;
}
}
</style>