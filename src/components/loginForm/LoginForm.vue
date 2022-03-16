<template>
  <div class="login_form__wrapper">
    <el-form
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      :hide-required-asterisk="true"
      :disabled="formDisabled"
      @validate="checkValidationResult"
      label-width="120px"
      class="demo-ruleForm">
      <el-form-item label="E-mail" prop="email">
        <el-input
          placeholder="Your email"
          autocomplete="on"
          :validate-event="true"
          v-model="ruleForm.email">
        </el-input>
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input
          placeholder="Password"
          autocomplete="off"
          minlength="8"
          :validate-event="true"
          v-model="ruleForm.password"
          show-password>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">
          Login
        </el-button>
      </el-form-item>
      <loading-widget :loading="formLoading"/>
    </el-form>
  </div>
</template>
<script>
import LoadingWidget from '@/components/loginForm/LoadingWidget.vue';

export default {
  components: {
    LoadingWidget,
  },
  data() {
    const validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password'));
        return;
      }
      if (value.length < 8) {
        callback(new Error('Password length should be more than 8'));
        return;
      }
      if (this.thereIsNotCapitalLetter) {
        callback(new Error('Must contain at least one capital letter'));
        return;
      }
      callback();
    };

    return {
      ruleForm: {
        email: '',
        password: '',
      },

      rules: {
        email: [
          { required: true, message: 'Please input email address', trigger: ['blur'] },
          { type: 'email', message: 'Please input correct email address', trigger: ['blur'] },
        ],
        password: [
          { validator: validatePassword, trigger: ['blur'] },
        ],
      },

      formDisabled: false,
      formLoading: false,
    };
  },

  computed: {
    thereIsNotCapitalLetter() {
      const password = this.ruleForm.password.split('');
      return password.every((char) => {
        if (/\d/.test(char)) {
          return true;
        }
        return char === char.toLowerCase();
      });
    },

    password() {
      return this.ruleForm.password;
    },
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.formDisabled = true;
          this.formLoading = true;
          setTimeout(() => {
            this.$router.push({ name: 'home' });
          }, 2000);
          return false;
        }
        return false;
      });
    },

    checkValidationResult(propName, result) {
      if (result === true) {
        return;
      }
      // чтобы сразу не выдавать сообщения при вводе
      // добавить "change" в правило только если валидация не пройдена после первого blur
      this.addEventToPropRule(propName, 'change');
    },

    addEventToPropRule(propName, eventName) {
      const rules = this.rules[propName];
      if (rules[0].trigger.includes(eventName)) {
        return;
      }
      rules.forEach((item) => {
        item.trigger.push(eventName);
      });
    },
  },

  watch: {
    password(value) {
      this.ruleForm.password = value.replaceAll(/\s/g, '');
    },
  },
};
</script>
