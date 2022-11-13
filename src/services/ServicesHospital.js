import axios from "axios";
import Global from "@/Global";
import { Promise } from "core-js";
export default class ServicesHospital {
  loadHospitales() {
    return new Promise(function (resolve) {
      var request = "/api/Hospitales";
      var url = Global.urlhospital + request;
      var hospitales = [];
      axios.get(url).then(res => {
        hospitales = res.data;
        resolve(hospitales);
      });
    });
  }
  //insertar hospitales
  insertHospital(datos) {
    return new Promise(function (resolve) {
      var request = "api/Hospitales";
      var url = Global.urlhospital + request;
      axios.post(url, datos).then(res => {
        resolve(res.data);
      });
    });
  }

  //encontar el hospital por id
  findHospital(id) {
    return new Promise(function (resolve) {
      var request = "/api/Hospitales/" + id;
      var url = Global.urlhospital + request;
      var hospital = {}
      axios.get(url).then(res => {
        hospital = res.data;
        resolve(hospital);
      });
    });
  }
  //modificar 
  updateHospital(hospital){
    return new Promise(function(resolve){
        var request = "api/Hospitales"
        var url = Global.urlhospital + request;
        axios.put(url,hospital).then(res=>{
            resolve(res);
        })
    })
  }

  //borarr hospital 
  borrarHospital(id){
    return new Promise(function(resolve){
      var request = "/api/Hospitales/" + id;
      var url = Global.urlhospital + request;
      axios.delete(url).then(res=>{
        resolve(res.data);
      })
    })
  }
}
