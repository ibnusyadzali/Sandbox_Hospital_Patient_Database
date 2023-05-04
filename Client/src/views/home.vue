<script>
import { mapActions, mapState } from 'pinia'
import { usePasienStore } from '../stores/pasien'
import pasiensRow from '../components/pasiensRow.vue'

export default {
  components: {
    pasiensRow,
  },
  computed: {
    ...mapState(usePasienStore, ['pasiens'])
  },
  methods: {
    ...mapActions(usePasienStore, ['fetchAllPasiens'])
  },
  created() {
    this.fetchAllPasiens()
  }
}
</script>

<template>
  <div class="container-fluid py-1">
    <div class="container py-3">
      <div class="row">
        <div class="col-12 text-center headertext">
          <h1 class="mt-4">Welcome to Sandbox Hospital</h1>
          <h3 class="">Pasien Management System</h3>
        </div>
      </div>
    </div>

    <div class="container-fluid py-4 d-flex flex-row justify-content-between">
      <h4>Total Pasien: {{ pasiens.length }}</h4>
      <button type="button" class="btn shadow-lg btn-outline-secondary addbtn">Add New Pasien</button>
    </div>

    <div class="tbl-container text-center bdr">
      <table class="table table-hover overflow-auto">
        <thead>
          <tr>
            <th>No.</th>
            <th>ID</th>
            <th>Name</th>
            <th>Sex</th>
            <th>Religion</th>
            <th>Phone</th>
            <th>Address</th>
            <th>NIK</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <pasiensRow
          v-for="(el, i) in pasiens"
          :key="el.id"
          :el="el"
          :i="i"
        />
        </tbody>
      </table>
    </div>

   
  </div>
</template>
