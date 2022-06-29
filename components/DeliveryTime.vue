<template>
    <p>
        {{ deliveryTime }}
    </p>
</template>

<script>
import Vue from "vue";
import moment from "moment";

export default Vue.extend({
    computed: {
        weekDayNumber() {
            return moment().isoWeekday();
        },

        deliveryTime() {
            switch (this.weekDayNumber) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    return 'An Werktagen vor 23:30 Uhr bestellt, am nächsten Werktag geliefert';
                case 6:
                    // return 'Vandaag besteld, maandag thuis';
                      return 'An Werktagen vor 23:30 Uhr bestellt, am nächsten Werktag geliefert';
                case 7:
                    return 'Vandaag voor 20:30 besteld, morgen thuis';
            }
        },
    },
});
</script>