<template>
  <v-row>
    <v-col cols="5">
      <v-select label="Filtrar por dia" :items="days" v-model="day"></v-select>
    </v-col>
    <v-col cols="5">
      <v-select
        label="Filtrar por mês"
        :items="months"
        v-model="month"
      ></v-select>
    </v-col>
    <v-col cols="2">
      <v-btn color="blue lighten-3" @click="clearFilters()">
        <small>Limpar filtros</small>
      </v-btn>
    </v-col>
    <v-col v-if="loading" cols="12" class="flex justify-center items-center">
      <v-progress-circular
        indeterminate
        color="blue lighten-3"
      ></v-progress-circular>
    </v-col>
    <v-col cols="3" v-for="holiday in holidays" :key="holiday.urlid">
      <HolidayComponent :holiday="holiday" />
    </v-col>
  </v-row>
</template>

<script>
import { get } from "@/services/holiday";
import HolidayComponent from "@/components/HolidayComponent.vue";

export default {
  name: "CalendarView",
  data() {
    return {
      holidays: [],
      day: "",
      month: "",
      loading: false,
    };
  },
  watch: {
    async day() {
      await this.getHolidays();
    },
    async month() {
      await this.getHolidays();
    },
  },
  async created() {
    await this.getHolidays();
  },
  computed: {
    days() {
      return Array.from({ length: 31 }, (_, i) => i + 1);
    },
    months() {
      return Array.from({ length: 12 }, (_, i) => i + 1);
    },
  },
  methods: {
    get,
    async getHolidays() {
      this.loading = true;
      this.holidays = await this.get(this.day, this.month);
      this.loading = false;
    },
    clearFilters() {
      this.day = "";
      this.month = "";
    },
  },
  components: { HolidayComponent },
};
</script>
