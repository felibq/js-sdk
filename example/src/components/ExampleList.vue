<template>
  <div class="api-list">
    <div v-for="(service, index) in apis" :key="index" class="api-list__item">
      <van-cell
        :title="service.title"
        :arrow-direction="service.active ? 'down' : ''"
        :class="{ actived: service.active }"
        @click="toggle(index)"
      >
        <div class="api" slot="title">
          <span class="api-title">{{ service.title }}</span>
          <span class="api-module">{{ service.module }}</span>
        </div>
        <van-icon
          slot="right-icon"
          class="api-icon"
          :name="service.active ? 'arrow-up' : 'arrow-down'"
          size="18"
        />
      </van-cell>
      <div class="api_list">
        <van-cell-group v-show="service.active">
          <van-cell
            v-for="api in service.apis"
            :key="api.title"
            @click="toExecPage(service.module, api.action)"
          >
            <template slot="title">
              <span class="custom-title">{{ api.module }}</span>
              <span>{{ api.title }}</span>
            </template>
            <van-icon slot="right-icon" name="arrow" style="line-height: inherit;" />
          </van-cell>
        </van-cell-group>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Cell, CellGroup, Icon } from 'vant';
import apis from '../api';

@Component({
  name: 'ExampleList',
  components: {
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
  },
})
export default class ExampleList extends Vue {
  /* life cycle */

  private apis = apis;

  /* method */
  private toExecPage(service: string, action: string) {
    this.$router.push({
      name: 'api',
      params: {
        service,
        action,
      },
    });
  }

  toggle(index: number) {
    this.apis[index].active = !this.apis[index].active;
  }
}
</script>


<style lang="scss" scoped>
.api-list {
  padding: 15px;
  margin-top: -30px;

  &__item {
    margin-bottom: 10px;
    > .van-cell:after {
      display: none;
    }
    .actived {
      color: $color-light-gray;
      .api {
        color: $color-light-gray;
      }
    }
  }
}

.api {
  display: flex;
  align-items: center;
  color: $color-black;
  height: 36px;
  line-height: 36px;

  * + * {
    margin-left: 10px;
  }

  &-title {
    font-weight: bold;
  }

  &-icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
