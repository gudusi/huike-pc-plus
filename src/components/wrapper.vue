<script lang="ts">
import { h } from "vue";
import { Options, Vue } from "vue-class-component";

@Options({
  props: {},
  render: function(this: any) {
    return h("div", {}, ["re", this.$slots.default()]);
  }
})
export default class Wrapper extends Vue {
  name = "str";
}
</script>

<style scoped></style>
