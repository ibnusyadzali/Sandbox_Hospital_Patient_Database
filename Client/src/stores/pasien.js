import { defineStore } from 'pinia'
import axios from 'axios'
const server = "http://localhost:5000/";
// const server = 'http://194.233.68.255:5000/'

export const usePasienStore = defineStore('pasien', {
  state() {
    if (localStorage.getItem('pasien')) return JSON.parse(localStorage.getItem('pasien'))
    return {
      pasiens: [],
      pasiendata: {},
      isEdit: false,
      editPasienData: {}
    }
  },
  actions: {
    async addPasien(dataNewPasien) {
      try {
        console.log(dataNewPasien)
        await axios({
          method: 'POST',
          url: server + 'pasien',
          data: {
            name: dataNewPasien.name,
            sex: dataNewPasien.sex,
            religion: dataNewPasien.religion,
            phone: dataNewPasien.phone,
            address: dataNewPasien.address,
            nik: dataNewPasien.nik
          },
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true
        })
        Swal.fire('Great!', 'Success added new pasien', 'success')
        this.isEdit = false
        this.router.push('/')
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Something Wrong !',
          text: `Failed to add new pasien`
        })
      }
    },

    async fetchAllPasiens() {
      try {
        const { data } = await axios({
          method: 'GET',
          url: server + 'pasien'
        })
        this.pasiens = data.result
      } catch (error) {
        console.log(error)
      }
    },

    async fetchPasienDetail(pasienId) {
      console.log('test masuk apa ngga')
      try {
        const { data } = await axios({
          method: 'GET',
          url: server + `pasien/${pasienId}`
        })
        this.pasiendata = data.result
        console.log(this.pasiendata)
        this.router.push(`/detail/${pasienId}`)
      } catch (error) {
        console.log(error)
      }
    },

    async fetchEditPasien(id) {
      try {
        this.isEdit = true
        const { data } = await axios({
          method: 'GET',
          url: server + `pasien/${id}`
        })
        this.editPasienData = data.result
        this.router.push(`/form`)
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Something Wrong !',
          text: `Failed to get pasien data`
        })
      }
    },

    async updatePasien(updateDataPasien,id) {
      try {
        await axios({
          method: 'PUT',
          url: server + `pasien/${id}`,
          data: {
            name: updateDataPasien.name,
            sex: updateDataPasien.sex,
            religion: updateDataPasien.religion,
            phone: updateDataPasien.phone,
            address: updateDataPasien.address,
            nik: updateDataPasien.nik
          },
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true
        })
        Swal.fire('Great!', 'Success edit pasien data', 'success')
        this.isEdit = false
        this.editPasienData = {}
        this.fetchPasienDetail(id)
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Something Wrong !',
          text: `Failed to add new pasien`
        })
      }
    },

    async addForm() {
      this.isEdit = false
      this.editPasienData = {}
      this.router.push(`/form`)
    },

    async cancelEdit(id) {
      this.isEdit = false
      this.editPasienData = {}
      this.router.push(`/detail/${id}`)
    },

    async deletePasienById(id) {
      try {
        const { data } = await axios({
          method: 'DELETE',
          url: server + `pasien/${id}`,
          withCredentials: true
        })
        await this.fetchAllPasiens()
      } catch (error) {
        console.log(error)
      }
    }
  }
})
