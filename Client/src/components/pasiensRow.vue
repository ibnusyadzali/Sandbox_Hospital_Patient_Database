<script>
import { usePasienStore } from "../stores/pasien";
import { mapActions, mapState } from "pinia";

export default{
    props: ["el","i"],
    methods: {
        ...mapActions(usePasienStore, ["deletePasienById"]),
        async deletePasien(id) {
            this.deletePasienById(id)
        }
    }
}
</script>

<template>
<tr class="container text-center">
<td>{{ i + 1 }}</td>
<td>{{ el.id }}</td>
<td>{{ el.name }}</td>
<td>{{ el.sex }}</td>
<td>{{ el.religion}}</td>
<td>{{ el.phone }}</td>
<td>{{ el.address }}</td>
<td>{{ el.nik }}</td>
<td class="d-flex justify-content-evenly">
    <a
    
    href=""
    class="btn btn-sm"
    ><i class="fa-solid fa-circle-info fa-xl icon detailicon"></i></a>
    
    <a
    
    href=""
    class="btn btn-sm"
    ><i class="fa-solid fa-pen-to-square fa-xl icon editicon"></i></a>
    <a
    @click.prevent="deletePasien(el.id)"
    href=""
    class="btn btn-sm"
    ><i class="fa-solid fa-trash-can fa-xl icon deleteicon"></i></a>
</td>
</tr>
</template>