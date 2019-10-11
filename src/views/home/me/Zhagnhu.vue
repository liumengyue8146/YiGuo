<template>
  <!-- 账户管理 -->
  <div class="accMan">
    <van-popup
      v-model="show"
      closeable
      close-icon="success"
      close-icon-position="top-right"
      @closed="send"
      :style="{ height: '50%',width:'100%' }"
    >
      <van-cell-group>
        <van-field
          v-model="people.name"
          type="text"
          required
          clearable
          label="请输入昵称"
          right-icon="question-o"
          placeholder="请输入昵称"
          @click-right-icon="$toast('question')"
        />
        <van-field
          v-model="people.password"
          type="password"
          required
          clearable
          label="请输入密码"
          right-icon="question-o"
          placeholder="请输入密码"
        />
        <van-field
          v-model="people.birthday"
          type="text"
          required
          clearable
          label="请输入出生日期"
          right-icon="question-o"
          placeholder="请输入出生日期"
        />
        <van-field
          v-model="people.sex"
          type="text"
          required
          clearable
          label="请输入性别"
          right-icon="question-o"
          placeholder="请输入性别"
        />
      </van-cell-group>
    </van-popup>
    <van-nav-bar title="账户管理" @click-left="onClickLeft" left-arrow />
    <div class="headPortrait">
      <p>头像</p>
      <span class="uploader">
        <!--  v-model="fileList" -->
        <van-uploader :after-read="afterRead" :max-count="1" />
      </span>
      <van-icon name="arrow" />
    </div>
    <div class="perMessage">
      <p>昵称</p>
      <span class="name-text">{{this.people.name}}</span>
      <van-icon name="arrow" @click="updateinfo" />
    </div>
    <div class="perMessage">
      <p>密码</p>
      <span class="password-text">{{this.people.password}}</span>
      <van-icon name="arrow" @click="updateinfo" />
    </div>
    <div class="perMessage">
      <p>出生日期</p>
      <span class="birthday-text">{{this.people.birthday}}</span>
      <van-icon name="arrow" @click="updateinfo" />
    </div>
    <div class="perMessage">
      <p>性别</p>
      <span class="sex-text">{{this.people.sex}}</span>
      <van-icon name="arrow" @click="updateinfo" />
    </div>
    <div class="perMessage">
      <p>实名认证</p>
      <span>未认证</span>
      <van-icon name="arrow" />
    </div>
  </div>
</template>
<script>
import { mapActions, mapMutations } from 'vuex';
import { Toast } from 'vant';
export default {
  name: 'manage',
  created() {
    this.info = this.$route.params.str; //"phone=15037692705&code=600056"
    this.token = this.$route.params.token; //phone=15037692705&code=600056 8eeeac5452ad04454545ffed6c590330
    console.log(
      '用户完善信息',
      this.$route.params.str,
      this.$route.params.token,
    );
    //this.token = '8eeeac5452ad04454545ffed6c590330';
  },
  data() {
    return {
      fileList: [{ url: 'https://img.yzcdn.cn/vant/cat.jpeg' }],
      info: '',
      show: false,
      token: '',
      //name: '',
      people: {
        name: '欧了咳咳',
        password: '****',
        birthday: '只能修改一次',
        sex: '男',
        imgurl: '',
      },
    };
  },
  methods: {
    ...mapMutations('user', {
      updateperson: 'updateperson',
    }),
    ...mapActions('user', {
      sendimg: 'sendimg',
      setPeople: 'setPeople',
    }),
    afterRead(file) {
      console.log(2222, file);
      let content = file.file;
      let data = new FormData();
      data.append('upload', content);
      this.sendimg(data);
      this.axios
        .get('http://47.105.138.0:8080/yiguo/imgUrl/', data)
        .then(res => {
          let datas = res.data.datas.path;
          console.log('图片地址为', datas);
        });
    },
    onClickLeft() {
      this.$router.push({
        name: 'me',
      });
    },
    updateinfo() {
      this.show = true;
    },
    send() {
      //this.setPeople({ token: this.token, people: this.people });
      this.people.token = this.token;
      console.log(this.info);
      this.people.phone = this.info.str.split('&')[0].split('=')[1];
      console.log(this.people);
      this.setPeople(this.people);
      this.updateperson(this.people);
    },
  },
};
</script>
<style >
.accMan .van-popup__close-icon {
  color: #32d683;
  font-size: 30px;
}
.accMan .van-popup__close-icon--top-right {
  right: 180px;
  top: 270px;
}

.accMan {
  width: 100%;
  height: 100%;
}
.accMan .van-nav-bar {
  border-bottom: 1px solid rgba(238, 238, 238, 1);
  height: 60px;
  line-height: 60px;
}
.accMan .van-icon-arrow-left {
  color: black;
  line-height: 30px;
  background: none;
}
.accMan .van-nav-bar__title {
  font-size: 24px;
  font-weight: 550;
  color: #333333;
}
.accMan .headPortrait {
  width: 100%;
  height: 80px;
  border-bottom: 1px solid rgba(238, 238, 238, 1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
.accMan .headPortrait p {
  margin-left: 5%;
  font-size: 15px;
  color: #333333;
  font-weight: 550;
}
.accMan .headPortrait .van-icon-arrow {
  margin-right: 5%;
  font-size: 15px;
  color: #333333;
}
.accMan .uploader {
  width: 80px;
  height: 80px;
  position: absolute;
  top: 0;
  right: 15%;
}
.accMan .perMessage {
  width: 100%;
  height: 60px;
  border-bottom: 1px solid rgba(238, 238, 238, 1);
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.accMan .perMessage p {
  margin-left: 5%;
  font-size: 15px;
  font-weight: 580;
  color: #333333;
}
.accMan .perMessage .van-icon-arrow {
  margin-right: 5%;
  font-size: 15px;
  color: #333333;
}
.accMan .perMessage span {
  font-size: 15px;
  line-height: 15px;
  position: absolute;
  right: 12%;
  top: 50%;
  margin-top: -10px;
  font-weight: 600;
  color: #333333;
  font-weight: 550;
}
</style>
