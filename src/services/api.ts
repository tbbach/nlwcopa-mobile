import axios from 'axios'

export const api = axios.create({
    // colocar o ip ao invés do localhost para Android
    // baseURL: 'http://192.168.7.106:3333'
    // baseURL: 'http://0.0.0.0:3333'
    baseURL: 'http://localhost:3333'
})