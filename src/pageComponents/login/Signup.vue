<script lang="ts" setup>
interface Props {
  step: number
}
interface Emits {
  (e: "onLogInBtnClick"): void;
}

const emit = defineEmits<Emits>()

const onLoginBtnClick = () => {
  emit('onLogInBtnClick')
}
</script>
<template>
  <v-row>
    <v-col cols="12" md="6" class="bg-green-accent-4 rounded-br-xl">
      <div style="text-align: center; padding: 180px 0;">
        <v-card-text class="text-white" >
          <h3 class="text-center mb-1">Alredy Signed up?</h3>
          <h5 class="text-center text-grey-darken-4">
            Log in to your account so you can continue building and<br>editing your onboarding flows
          </h5>
        </v-card-text>
        <div class="text-center">
          <v-btn color="grey-darken-4" @click="onLoginBtnClick">Log in</v-btn>
        </div>
      </div>
    </v-col>

    <v-col cols="12" md="6">
      <v-card-text class="mt-12">
        <h3 class="text-center mb-1">
          Sign Up for an Account
        </h3>
        <h5 class="text-center text-grey-lighten-1">Let's get you all set up so you can start creating your<br>first onboarding experiance
        </h5>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="10" md="9">
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  label="First Name"
                  variant="outlined"
                  density="comfortable"
                  color="green-accent-4"
                  class="mt-4"
                />
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  label="Last Name"
                  variant="outlined"
                  density="comfortable"
                  color="green-accent-4"
                  class="mt-4"
                />
              </v-col>
            </v-row>
            <v-text-field
              label="Email"
              variant="outlined"
              density="comfortable"
              color="green-accent-4"
            />
            <v-text-field
              label="Password"
              variant="outlined"
              density="comfortable"
              color="green-accent-4"
              type="password"
            />
            <v-row>
              <v-col cols="12" sm="7">
                <v-checkbox
                  label="I Accept AAE"
                  class="mt-n1"
                  color="green-accent-4"
                ></v-checkbox>
              </v-col>
              <v-col cols="12" sm="5" class="ma-auto">
                <span class="caption text-green-accent-4">Terms &Conditions</span>
              </v-col>
            </v-row>
            <v-btn color="green-accent-4" block>Sign up</v-btn>

            <h5
              class="text-center  grey--text mt-4 mb-3"
            >Or Sign up using</h5>
            <div class="d-flex  justify-space-between align-center mx-10 mb-11">
              <v-btn variant="outlined" color="grey">
                <v-icon color="red">mdi-google</v-icon>
              </v-btn>
              <v-btn variant="outlined" color="grey">
                <v-icon color="blue">mdi-facebook</v-icon>
              </v-btn>
              <v-btn variant="outlined" color="grey">
                <v-icon color="light-blue lighten-3">mdi-twitter</v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
.v-application .rounded-bl-xl {
  border-bottom-left-radius: 300px !important;
}

.v-application .rounded-br-xl {
  border-bottom-right-radius: 300px !important;
}
</style>
