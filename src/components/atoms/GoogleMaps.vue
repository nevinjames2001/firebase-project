<template>
    <div>

    </div>
</template>
<script>
import axios from 'axios'
import {reactive,watch,toRefs} from 'vue'
export default{
    props:{
        address:String
    },
    setup(props){
        const position=reactive({
            lat:0,
            long:0
        })
        const addressRef=toRefs(props).address
            watch(addressRef,(newVal)=>{
                axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${newVal}&key=${process.env.VUE_APP_GOOGLE_MAP_KEY}`)
                .then(res=>{
                    console.log(res.data);
            })
        })
        return{
            position
        }
       
            }
}
</script>
