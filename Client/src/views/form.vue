<script>
import { mapActions, mapState } from 'pinia'
import { usePasienStore } from '../stores/pasien'

export default {
  data() {
    return {
      dataNewPasien: {
        name: '',
        sex: '',
        religion: '',
        phone: '',
        address: '',
        nik: ''
      }
    }
  },
  computed: {
    ...mapState(usePasienStore, ['isEdit', 'editPasienData'])
  },
  methods: {
    async backToLogin() {
      this.$router.push('/')
    },
    ...mapActions(usePasienStore, ['addPasien']),
    async newPasien() {
      this.addPasien(this.dataNewPasien)
    },
    ...mapActions(usePasienStore, ['cancelEdit']),
    async cancel(id) {
      this.cancelEdit(id)
    },
    ...mapActions(usePasienStore, ['updatePasien']),
    async updateData() {
      this.updatePasien(this.dataNewPasien,this.editPasienData.id)
    },
  },
  created() {
    if (this.isEdit) {
      this.dataNewPasien.name = this.editPasienData.name
      this.dataNewPasien.sex = this.editPasienData.sex
      this.dataNewPasien.religion = this.editPasienData.religion
      this.dataNewPasien.phone = this.editPasienData.phone
      this.dataNewPasien.address = this.editPasienData.address
      this.dataNewPasien.nik = this.editPasienData.nik
    }
  }
}
</script>

<template>
  <div class="container-fluid py-1">
    <div class="container py-3">
      <div class="row">
        <div class="col-12 my-4 text-center">
          <h1 v-if="isEdit === false" class="fw-bold">Create New Pasien Data</h1>
          <h1 v-if="isEdit === true" class="fw-bold">Update Pasien Data</h1>
        </div>
      </div>
    </div>

    <div
      class="container-fluid d-flex justify-content-center card text-center col-8"
      style="border-radius: 1rem"
    >
      <form>
        <div class="d-flex flex-column my-4">
          <div class="row">
            <div class="col-auto text-end ms-5">
              <label for="name" class="col-form-label">Name:</label><br />
              <label for="sex" class="col-form-label">Sex:</label><br />
              <label for="religion" class="col-form-label">Religion:</label><br />
              <label for="phone" class="col-form-label pt-2">Phone:</label><br />
              <label for="nik" class="col-form-label">NIK:</label><br />
              <label for="address" class="col-form-label mb-3">Address:</label><br />
            </div>

            <div class="col-9 pt-1">
              <input
                type="text"
                class="form-control form-control-sm mb-2"
                v-model="dataNewPasien.name"
              />
              <div class="btn-group-sm d-flex flex-start mb-2" role="group" aria-label="Basic radio toggle button group">
                <input
                  type="radio"
                  class="btn-check"
                  name="btnradio"
                  id="male"
                  autocomplete="off"
                  value="Male"
                  v-model="dataNewPasien.sex"
                />
                <label class="btn me-2 btn-outline-secondary male" for="male">Male</label>

                <input
                  type="radio"
                  class="btn-check female"
                  name="btnradio"
                  id="female"
                  autocomplete="off"
                  value="Female"
                  v-model="dataNewPasien.sex"
                />
                <label class="btn btn-outline-secondary female" for="female">Female</label>
              </div>
              <select class="form-select form-select-sm mb-2 d-flex flex-start w-25" v-model="dataNewPasien.religion">
                <option value="" selected disabled>Select One</option>
                <option value="Islam">Islam</option>
                <option value="Catholic">Catholic</option>
                <option value="Protestan">Protestan</option>
                <option value="Buddha">Buddha</option>
                <option value="Hindu">Hindu</option>
                <option value="Confusius">Confusius</option>
              </select>
              <input
                type="text"
                class="form-control form-control-sm mb-2 w-50"
                v-model="dataNewPasien.phone"
              />

              <input
              type="text"
              class="form-control form-control-sm mb-2 w-50"
              v-model="dataNewPasien.nik"
              />
              <textarea
                class="form-control form-control-sm mb-2"
                rows="3"
                v-model="dataNewPasien.address"
              ></textarea>
            </div>
          </div>
        </div>

        <button
        v-if="isEdit === false"
          type="submit"
          class="btn btn-outline-success btn-block mb-3 col-2 me-3"
        @click.prevent="newPasien"
          >
          Add
        </button>
        <RouterLink
        v-if="isEdit === false"
          to="/"
          type="button"
          class="btn btn-outline-warning btn-block mb-3 col-2"
        >
          Cancel
        </RouterLink>

        <button
        v-if="isEdit === true"
          type="submit"
          class="btn btn-outline-success btn-block mb-3 col-2 me-3"
        @click.prevent="updateData"
          >
          Update
        </button>
        <button
        v-if="isEdit === true"
          type="submit"
          class="btn btn-outline-warning btn-block mb-3 col-2 me-3"
        @click.prevent="cancel(editPasienData.id)"
          >
          Cancel
        </button>
        
      </form>
    </div>
  </div>
</template>
