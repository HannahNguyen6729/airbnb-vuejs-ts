<template>
  <div
    class="mfp-wrap mfp-close-btn-in mfp-auto-cursor my-mfp-zoom-in mfp-ready my-bg"
    tabindex="-1"
    style="background-image: url(images/bg-login.jpeg)"
  >
    <div class="mfp-container mfp-inline-holder">
      <div class="mfp-content">
        <div id="sign-in-dialog" class="zoom-anim-dialog">
          <div class="small-dialog-header">
            <h3>Sign Up</h3>
          </div>

          <!--Tabs -->
          <div class="sign-in-form style-1">
            <div class="tabs-container alt">
              <!-- Register -->
              <div class="tab-content" id="tab2">
                <form
                  @submit.prevent="handleSubmit"
                  method="post"
                  class="register"
                >
                  <p class="form-row form-row-wide">
                    <label for="username2"
                      >Username:
                      <i class="im im-icon-Male"></i>
                      <input
                        type="text"
                        class="input-text"
                        name="username"
                        id="username2"
                        v-model="userData.name"
                      />
                    </label>
                  </p>

                  <p class="form-row form-row-wide">
                    <label for="email2"
                      >Email Address:
                      <i class="im im-icon-Mail"></i>
                      <input
                        type="text"
                        class="input-text"
                        name="email"
                        id="email2"
                        v-model="userData.email"
                      />
                    </label>
                  </p>

                  <p class="form-row form-row-wide">
                    <label for="phone"
                      >Phone number:
                      <i class="im im-icon-Phone"></i>
                      <input
                        type="number"
                        class="input-text"
                        name="phone"
                        id="phone"
                        v-model="userData.phone"
                      />
                    </label>
                  </p>

                  <p class="form-row form-row-wide">
                    <label for="phone"
                      >Birthday:
                      <div style="display: flex">
                        <select name="year" v-model="userData.year">
                          <option label="year">Year</option>
                          <option
                            v-for="year in yearArray"
                            :key="year"
                            :value="year"
                          >
                            {{ year }}
                          </option>
                        </select>
                        <select name="month" id="" v-model="userData.month">
                          <option label="month">Month</option>
                          <option
                            v-for="month in monthArray"
                            :key="month"
                            :value="month"
                          >
                            {{ month }}
                          </option>
                        </select>
                        <select name="day" id="" v-model="userData.day">
                          <option label="day">Day</option>
                          <option
                            v-for="day in dayArray"
                            :key="day"
                            :value="day"
                          >
                            {{ day }}
                          </option>
                        </select>
                      </div>
                    </label>
                  </p>

                  <p class="form-row form-row-wide">
                    <label for="gender"
                      >Gender:
                      <select name="gender" id="" v-model="userData.gender">
                        <option value="true">Male</option>
                        <option value="false">Female</option>
                      </select>
                    </label>
                  </p>

                  <p class="form-row form-row-wide">
                    <label for="address"
                      >Address:
                      <i class="im im-icon-Location-2"></i>
                      <input
                        type="text"
                        class="input-text"
                        name="address"
                        id="address"
                        v-model="userData.address"
                      />
                    </label>
                  </p>

                  <p class="form-row form-row-wide">
                    <label for="password1"
                      >Password:
                      <i class="im im-icon-Lock-2"></i>
                      <input
                        class="input-text"
                        type="password"
                        name="password1"
                        id="password1"
                        v-model="userData.password"
                      />
                    </label>
                  </p>

                  <p class="form-row form-row-wide">
                    <label for="password2"
                      >Confirm Password:
                      <i class="im im-icon-Lock-2"></i>
                      <input
                        class="input-text"
                        type="password"
                        name="password2"
                        id="password2"
                        v-model="userData.resetPassword"
                      />
                    </label>
                  </p>

                  <input
                    type="submit"
                    class="button border fw margin-top-10"
                    name="register"
                  />
                </form>
              </div>
            </div>
          </div>
          <button title="Close (Esc)" type="button" class="mfp-close"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { createNumberArray } from "../utils/helper";

export default defineComponent({
  name: "SignUp",
  setup() {
    const store = useStore();
    const router = useRouter();

    const monthArray = createNumberArray(1, 12);
    const yearArray = createNumberArray(1960, 2023);
    const dayArray = createNumberArray(1, 31);

    const userData = reactive({
      name: "",
      email: "",
      password: "",
      resetPassword: "",
      phone: "",
      year: "",
      month: "",
      day: "",
      gender: "",
      address: "",
    });

    const handleSubmit = () => {
      if (userData.password === userData.resetPassword) {
        const modifiedUserData = {
          name: userData.name,
          email: userData.email,
          password: userData.password,
          phone: userData.phone,
          birthday: `${userData.year}/${userData.month}/${userData.day}`,
          gender: userData.gender === "true", //male-true/ female-false
          address: userData.address,
        };

        store.dispatch("moduleSignUp/signUpAction", {
          modifiedUserData,
          router,
        });
      } else {
        alert("Password & Confirm Password do not match");
      }
    };

    return { monthArray, yearArray, dayArray, userData, handleSubmit };
  },
});
</script>

<style lang="scss">
.my-bg {
  background-size: cover;
  top: 0px;
  position: absolute;
  height: 100vh;
  overflow: scroll;
}
</style>
