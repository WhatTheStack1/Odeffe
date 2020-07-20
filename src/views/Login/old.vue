<template>
    <div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      state: false,
      errEmail: '',
      errPassword: ''
    }
  },
  methods: {
    onSubmit (e) {
      e.preventDefault()
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('userLogin', payload)
        .then(
          (response) => {
            // console.log(response)
            localStorage.setItem('currentUser', JSON.stringify(response.data.data))
            localStorage.setItem('token', response.data.data.token)
            localStorage.setItem('userId', response.data.data._id)
            if (response.data.data.verified === 'Yes') {
              window.location.replace('http://localhost:8080/dashboard')
              // window.location.replace('https://odeffe.herokuapp.com/dashboard')
            } else {
              this.$router.push('/verify')
            }
          }
        )
        .catch(
          (error) => {
            if (error.response.data.errEmail) {
              this.errEmail = error.response.data.errEmail
            } else if (error.response.data.errPassword) {
              this.errPassword = error.response.data.errPassword
            } else {
              this.makeToast('danger', error.response.data.status, error.response.data.message)
            }
          }
        )
    },
    handleChange () {
      this.errEmail = this.errPassword = ''
    },
    forgotPassword () {
      console.log('Clicked on forgot Password')
    },
    goBack () {
      this.$router.push('/')
    },
    makeToast (variant, title, message) {
      this.$bvToast.toast(message, {
        title: title,
        variant: variant,
        solid: true
      })
    }
  },
  created () {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))
    if (currentUser) {
      this.$router.push('/dashboard')
    }
  }
}
</script>

<style scoped>
.left-container {
    /* background-image: url(https://s12.directupload.net/images/200708/48u47iwu.jpg); */
    background-color: black;
    background-repeat: no-repeat;
    width: 50%;
    position: relative;
}
.right-container {
    background: #fff;
    background-repeat: no-repeat;
    width: 50%;
    position: relative;
    display: flex;
    align-items: center;
    z-index: 2;
}
.flex-container {
    display: flex;
}
.fill-available {
    height: 100vh;
}
.container {
  width: 500px;
  text-align: center;
}
.login-form {
  text-align: left;
}
.form-heading {
  color: #e8854f;
  font-size: 50px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;
  font-family: 'Gilroy';
}
.form-container {
  margin: 0px auto;
}
#input-1, #input-2 {
    background-color: #f3faff;
    border: solid 1px #d7dce3;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    border-radius: 5px;
    width: 100%;
    height: 50px;
    -webkit-box-shadow: inset 7px 7px 8px 0px rgba(0, 0, 0, 0.07);
    -moz-box-shadow: inset 7px 7px 8px 0px rgba(0, 0, 0, 0.07);
    box-shadow: inset 7px 7px 8px 0px rgba(0, 0, 0, 0.07);
    padding: 0 15px;
    margin-top: 9px;
    font-size: 18px;
}
.btn {
  padding: 0;
  width: 100%;
  height: 50px;
  font-size: 18px;
  font-weight: 900;
}
.btn-orange{
  color: #fff;
  background: #e8854f;
  background: -moz-linear-gradient(left, #e8854f 0%, #e8854f 100%);
  background: -webkit-gradient(left top, right top, color-stop(0%, #e8854f), color-stop(100%, #e8854f));
  background: -webkit-linear-gradient(left, #e8854f 0%, #e8854f 100%);
  background: -o-linear-gradient(left, #e8854f 0%, #e8854f 100%);
  background: -ms-linear-gradient(left, #e8854f 0%, #e8854f 100%);
  background: linear-gradient(to right, #e8854f 0%, #e8854f 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7bb0f6', endColorstr='#5685e3', GradientType=1);
  -webkit-box-shadow: 33px 33px 33px 0px rgba(189, 205, 242, 0.77);
  -moz-box-shadow: 33px 33px 33px 0px rgba(189, 205, 242, 0.77);
  box-shadow: 33px 33px 33px 0px rgba(189, 205, 242, 0.77);
  border-color: #e8854f;
}
#checkbox-1 {
  height: 18px;
  width: 40px;
}
label {
  color: black;
}
.signup-text {
  margin-top: 50px;
  text-align: center;
}
.signup-text ~p {
  font-size: 18px;
  color: black;
}
.invalid-feedback {
  color: red;
}
.back-button {
  width: 50px;
  height: 50px;
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: #e8854f;
  /* background: none; */
  border: none;
  color: white;
  font-size: 22px;
  border-radius: 50%;
  font-weight: 600;
}
.logo-image {
  height: 480px;
  position: absolute;
  top: 150px;
  left: 70px;
}
</style>
