<script setup lang="ts">
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "vue-chartjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data: ChartJS<"line">["data"] = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "貯金",
      backgroundColor: "#f87979",
      data: [40, 39, 10, 40, 39, 80, 40],
      fill: true,
    },
    // {
    //   label: "積立",
    //   backgroundColor: "black",
    //   data: [39, 10, 40, 80, 40, 21, 57],
    // },
  ],
};

const options: ChartJS<"line">["options"] = {
  responsive: true,
};
</script>

<template>
  <Line :data="data" :options="options" />
</template>

<style scoped></style>
