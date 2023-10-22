/* eslint-disable import/no-anonymous-default-export */
import axios from "../config/endpoint"

const getNews = async() => {
    return axios.get("/news")
}

const createNews = async(data) => {
    return axios.post("/news/create", data)
}

export default { getNews, createNews }