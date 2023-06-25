<script setup>
import Captcha from '@/components/Captcha/Captcha.vue'
import CONFIG from '@/global/config'
import { Lock, User } from '@element-plus/icons-vue'
import { getCode } from '@/api/login'
import { crypto } from '@/utils/crypto'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

const router = useRouter()

const loginFormRef = ref()

const loginData = reactive({
  username: '',
  password: '',
  code: ''
})

const loading = ref(false)

const verifyCode = ref('')
const verifyImg = ref('')

const handleLogin = () => {
  loginFormRef.value.validate(async (valid) => {
    if (valid) {
      try {
        loading.value = true
        const params = {
          username: crypto.encryptByAES(loginData.username),
          password: crypto.encryptByDES(loginData.password),
          codeVerify: verifyCode.value,
          appKey: CONFIG.APP_KEY
        }
        await userStore.loginAction(params)
        router.push('/')
      } catch (error) {
        console.log(error)
      } finally {
        loading.value = false
      }
    }
  })
}

onMounted(() => {
  getCaptcha()
})

const getCaptcha = () => {
  getCode().then((res) => {
    if (res.success) {
      const { data, msg } = res
      verifyCode.value = msg
      verifyImg.value = `data:image/png;base64,${data}`
    }
  })
}

const validateVerifyCode = (rule, value, callback) => {
  if (!value) return callback(new Error('请输入验证码'))

  const reg = /^\d{4}$/
  if (reg.test(value)) {
    if (verifyCode.value === value) {
      callback()
    } else {
      return callback(new Error('请输入正确的验证码'))
    }
  } else {
    return callback(new Error('请输入4位数字'))
  }
}

const rules = {
  username: [{ required: true, message: '请填写用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请填写密码', trigger: 'blur' }],
  code: [{ validator: validateVerifyCode, trigger: 'blur' }]
}
</script>

<template>
  <div class="login">
    <div class="login-left"></div>
    <div class="login-right">
      <div class="login-right-wrap">
        <img class="logo" src="@/assets/image/common/logo.svg" alt="" />
        <p class="title">{{ CONFIG.APP_INFO.systemNameCN }}</p>
        <p class="subtitle">{{ CONFIG.APP_INFO.systemNameEN }}</p>
        <el-form
          class="login-form"
          ref="loginFormRef"
          :model="loginData"
          :rules="rules"
          size="large"
        >
          <el-form-item prop="username">
            <el-input
              :prefix-icon="User"
              placeholder="请输入用户名"
              v-model="loginData.username"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              :prefix-icon="Lock"
              v-model="loginData.password"
              placeholder="请输入密码"
              type="password"
              @keyup.enter="handleLogin"
            ></el-input>
          </el-form-item>
          <el-form-item prop="code">
            <el-input
              :prefix-icon="Lock"
              v-model="loginData.code"
              placeholder="请输入验证码"
              type="password"
              @keyup.enter="handleLogin"
            >
              <template #append>
                <img class="verifyCode" @click="getCaptcha" :src="verifyImg" alt="" />
              </template>
            </el-input>
          </el-form-item>
          <el-button type="primary" style="width: 100%" @click="handleLogin" :loading="loading"
            >登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</el-button
          >
        </el-form>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.login {
  width: 100vw;
  height: 100vh;
  display: flex;

  &-left {
    flex: 1;

    background: url('@/assets/image/common/login-bg.svg') no-repeat 0 0/ 100% 100%;
  }

  &-right {
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: center;

    .login-right-wrap {
      margin-top: -100px;

      display: flex;
      flex-direction: column;
      align-items: center;
      .logo {
        width: 5vw;
        height: 5vw;
        margin-bottom: 20px;
      }

      .title {
        margin-bottom: 10px;
        font-size: 24px;
        font-weight: 700;
        font-family: Microsoft Yahei, sans-serif;
      }
      .subtitle {
        font-size: 14px;
        opacity: 0.5;
        font-family: CGuLiHKS, sans-serif;
        margin-bottom: 90px;
      }

      .login-form {
        width: 320px;

        --el-border-radius-base: 0px;
        --el-color-primary: #0052d9;

        :deep(.el-input-group__append) {
          padding: 0px;
        }

        .verifyCode {
          width: 112px;
          height: 40px;
        }
      }
    }
  }
}
</style>
