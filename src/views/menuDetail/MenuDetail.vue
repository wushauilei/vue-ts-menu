<template>
  <div class="menu_detail"></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class MenuDetail extends Vue {
  public created() {
    console.log(this.$route.query.id)
  }
}
</script>

<style lang="scss" scoped>

</style>