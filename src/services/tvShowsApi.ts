import axios from "axios";
import { getEnvVariables } from "../utilities/getEnvVariables";

const { VITE_API_URL } = getEnvVariables();

// El colocar el baseURL nos ayuda no estar colocando el endpoint varias veces ya que esto se repite y tambien por eso creamos la variable de entorno para la url.

const tvShowApi = axios.create({
    baseURL: VITE_API_URL,
});

// Todo: Configurar interceptores
// *  Los interceptores es algo que nos va a ayudar a interceptar una peticion antes o despues de que se haga y añadir o modificar la respuesta

export default tvShowApi;