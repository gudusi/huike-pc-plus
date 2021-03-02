<!--
    auto created by @ztwx vue3 template!!

    @pageAuthor  :  'zhan'
    @AuthorEmail :  zhantewei@gmail.com
    @pageCreated :  2021-2-24 13:31:9
-->

<template src="./login-page.html"> </template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { projectName } from "@config";
import { Form, requiredValidator } from "@ztwx/form";

@Options({})
export default class extends Vue {
  form: Form = new Form([
    { id: "username", validator: [new requiredValidator("账号不能为空")] },
    { id: "password", validator: [new requiredValidator("密码不能为空")] }
  ]);
  projectName = projectName;
  async login() {
    const pass = await this.form.checkValidators();
    if (!pass) {
      const i: any = this.form.controllers.find(
        i => i.errors && i.errors.length
      );
      const err: string = i.errors[0];
      this.$store.dispatch("dialog", {
        html: "ccc"
      });
      // this.$store.dispatch("toast", { message: err });
      return;
    }
    this.$store.dispatch("user/userLoginFromAccount", {});
  }
}
</script>
<style scoped src="./login-page.scss" lang="scss"></style>
