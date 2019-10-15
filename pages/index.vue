<template>
  <div id="chart" />
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  mounted () {
    this.$generate({
      bindto: '#chart',
      data: {
        columns: [
          ['data1', 30, 200, 100, 400, 150, 250],
          ['data2', 50, 20, 10, 40, 15, 25]
        ],
        // axes: {
        //   data2: 'y2'
        // }
      },
      // axis: {
      //   y: {
      //     label: { // ADD
      //       text: 'Y Label',
      //       position: 'outer-middle'
      //     }
      //   },
      //   y2: {
      //     show: true,
      //     label: { // ADD
      //       text: 'Y2 Label',
      //       position: 'outer-middle'
      //     }
      //   }
      // }
    });
  }
});
</script>
