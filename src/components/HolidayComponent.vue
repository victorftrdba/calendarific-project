<template>
  <v-expand-transition>
    <v-card class="mx-auto" max-width="344">
      <v-card-text>
        <div>{{ holiday.name }}</div>
        <p class="text-h5 text--primary my-2">
          {{ moment(holiday.date.iso).format("DD/MM/YYYY") }}
        </p>
        <div class="text--primary">
          {{ holiday.description }}
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn
          @click="learnMore(holiday.canonical_url)"
          variant="text"
          color="blue lighten-3"
        >
          Leia mais
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-expand-transition>
</template>

<script>
import moment from "moment";

export default {
  props: ["holiday"],
  methods: {
    moment,
    learnMore(url) {
      window.open(url, "_blank");
    },
  },
};
</script>
