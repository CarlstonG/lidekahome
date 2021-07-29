<template>
  <div aria-live="assertive" class="fixed inset-0 z-40 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start">
    <div ref="notificationsRef" class="w-full flex flex-col items-center space-y-4 sm:items-end">
      <transition-group name="fade" class="w-full flex flex-col items-center space-y-4 sm:items-end">
        <Alert v-for="notification in notifications" :key="notification.id" :title="notification.title" :message="notification.message" :type="notification.type" :duration="notification.duration" @close="closeNotification(notification.id)" />
      </transition-group>
    </div>
  </div>
</template>

<script lang="ts">
import Alert from "./Alert.vue";
import {INotification} from "~/interfaces/notifications";
import Vue from "vue";
import _ from 'lodash';

export default Vue.extend({
  components: {Alert},

  data() {
    return {
      notifications: [] as INotification[],
    }
  },

  mounted() {
    //@ts-ignore
    this.$root.$on('addNotification', (title: string, message: string, type: string, duration = 2000 as number) => {
      this.addNotification(title, message, type, duration);
    })
  },

  methods: {
    addNotification(title: string, message: string, type: string, duration: number) {
      this.notifications.push({
        id: Date.now().toString(),
        title: title,
        message: message,
        type: type,
        duration: duration
      } as INotification)
    },

    closeNotification(id: string) {
      this.notifications = _.reject(this.notifications, (notification: INotification) => {
        return notification.id === id;
      })
    }
  }
});
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s, all .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(100px);
}
</style>
