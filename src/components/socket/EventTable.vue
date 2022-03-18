<template>
  <el-table
    ref="eventTable"
    highlight-current-row
    :data="tableData"
    height="457"
    max-height="457"
    :fit="true"
    empty-text="Нет событий"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="Date">
    </el-table-column>
    <el-table-column
      prop="event"
      label="Event">
    </el-table-column>
  </el-table>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'EventTable',

  data() {
    return {
      tableData: [],
      socketStatus: '',
    };
  },

  computed: {
    ...mapGetters([
      'socketMessage',
      'socketConnected',
      'socketReconnectError',
    ]),
  },

  methods: {
    showSocketStatus(color, duration) {
      const h = this.$createElement;
      this.$notify({
        title: '',
        message: h('i', { style: `color: ${color}` }, this.socketStatus),
        duration,
      });
    },

    selectLastRow() {
      const lastIndex = this.$refs.eventTable.data.length - 1;
      this.$refs.eventTable.setCurrentRow(this.$refs.eventTable.data[lastIndex]);
    },

    scrollTableToLastRow() {
      const newHeight = this.$refs.eventTable.bodyWrapper.scrollHeight;
      this.$refs.eventTable.bodyWrapper.scrollTop = newHeight;
    },
  },

  watch: {
    socketMessage(message) {
      if (!message?.event) {
        return;
      }

      const data = [...this.tableData, ...[message]];
      this.tableData = [...data];

      this.$nextTick(() => {
        this.selectLastRow();
        this.scrollTableToLastRow();
      });
    },

    socketConnected(value) {
      let color = '';
      let duration = 0;
      if (value) {
        this.socketStatus = 'Socket connected';
        color = 'teal';
        duration = 5000;
      } else {
        this.socketStatus = 'Socket disconnected';
        color = '#E6A23C';
        duration = 30000;
      }
      this.$nextTick(() => {
        this.showSocketStatus(color, duration);
      });
    },

    socketReconnectError(value) {
      if (!value) {
        return;
      }
      this.socketStatus = 'Socket reconnect error';
      this.$nextTick(() => {
        this.showSocketStatus('#E6A23C', 30000);
      });
    },
  },
};
</script>
