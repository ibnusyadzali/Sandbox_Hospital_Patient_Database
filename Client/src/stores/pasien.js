import { defineStore } from "pinia";
import axios from "axios";
// const server = "http://localhost:3000/";
const server = "http://194.233.68.255:5000/";

export const usePasienStore = defineStore("pasien", {
  state() {
    if (localStorage.getItem("pasien"))
      return JSON.parse(localStorage.getItem("pasien"));
    return {
      pasiens: [],
      pasien:{},
      name: "",
      sex: "",
      religion: "",
      phone: "",
      address: "",
      nik: "",
    };
  },
  actions: {

    async fetchAllPasiens() {
      try {
        const { data } = await axios({
          method: "GET",
          url: server + "pasien",
        });
        this.pasiens = data.result;

      } catch (error) {
        console.log(error);
      }
    },
    
    async deletePasienById(id) {
      try {
        const { data } = await axios({
          method: "DELETE",
          url: server + `pasien/${id}`,
          headers: {
            // 'Access-Control-Allow-Origin': '*',
            // 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            // 'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
            'Content-Type' : 'application/x-www-form-urlencoded'
          },
          withCredentials: true
        });
        await this.fetchAllPasiens()

      } catch (error) {
        console.log("aaaaa")
        console.log(error);
      }
    },

    // async register(dataRegis) {
    //   try {
    //     await axios({
    //       method: "POST",
    //       url: server + "customers/register",
    //       data: {
    //         username: dataRegis.username,
    //         email: dataRegis.email,
    //         password: dataRegis.password,
    //       },
    //     });
    //     Swal.fire("Great!", "Success create a new user", "success");
    //     this.router.push("/");
    //     (this.email = ""),
    //       (this.password = ""),
    //       (this.phoneNumber = ""),
    //       (this.address = "");
    //   } catch (error) {
    //     Swal.fire({
    //       icon: "error",
    //       title: "Oops...",
    //       text: `${error.response.data.message}`
    //     });
    //   }
    // },
    // async login(dataLogin) {
    //   try {
    //     const { data } = await axios({
    //       method: "POST",
    //       url: server + "customers/login",
    //       data: {
    //         email: dataLogin.email,
    //         password: dataLogin.password,
    //       },
    //     });
    //     this.page = "home";
    //     this.username = data.username;
    //     localStorage.setItem("access_token", data.access_token);
    //     localStorage.setItem("username", data.username);
    //     this.isLogin = true
    //       this.password = ""
    //       this.email = ""
    //       Swal.fire({
    //         title: `Welcome on board ${data.username}`,
    //         showClass: {
    //           popup: "animate__animated animate__fadeInDown",
    //         },
    //         hideClass: {
    //           popup: "animate__animated animate__fadeOutUp",
    //         }
    //       })
    //       this.router.push("/")
    //   } catch (error) {
    //     Swal.fire({
    //       icon: "error",
    //       title: "Oops...",
    //       text: `${error.response.data.message}`
    //     });
    //   }
    // },
    // async logout() {
    //   try {
    //     Swal.fire({
    //       title: `Bey bye~ ${this.username}`,
    //       showClass: {
    //         popup: "animate__animated animate__fadeInDown",
    //       },
    //       hideClass: {
    //         popup: "animate__animated animate__fadeOutUp",
    //       }
    //     })
    //     localStorage.clear();
    //     this.username = ""
    //     this.email = "";
    //     this.password = "";
    //     this.isLogin = false;
    //     this.page = "home";
    //     this.router.push("/");
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
    
    // async moveHome() {
    //   this.page = "home";
    //   this.router.push("/");
    // },

  },
});