import superagent from 'superagent'

class WebService {
  constructor (url) {
    this.url = url
    this.agent = superagent
  }

  all () {
    return this.agent
      .get(this.url)
      .then((data) => { return data.body })
  }

  get (id) {
    return this.agent
      .get(`${this.url}/${id}`)
      .then((data) => { return data.body })
  }

  create (item) {
    return this.agent
      .post(this.url)
      .send(item)
      .then((data) => { return data.body })
  }

  update (item) {
    return this.agent
        .put(this.url)
        .send(item)
        .then((data) => { return data.body })
  }

  delete (id) {
    return this.agent
        .delete(`${this.url}/${id}`)
        .send()
        .then((data) => { return data.body })
  }

  filter (name, type, color, description) {
    return this.agent
        .get(`${this.url}/filter?name=${name}&type=${type}&color=${color}&description=${description}`)
        .then((data) => { return data.body })
  }
}

export default WebService
