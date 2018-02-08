'use strict'
const Pid = use('App/Models/Pid')


class PidController {


  async index({ request, response, params: { id } }) {
  try {
    if (request.input('current')) {
      console.log(request.get(id))
      return response.json({
        message: "Here is the current User",
        data: {
          attributes: id
        }
      })
    }

    const pids = await Pid.with('AE15m').fetch()
    response.status(200).json({
      message: 'Here are all your current Users',
      data: {
        attributes: pids
      }
    })

  } catch (e) {

  } finally {

  }

  }

  async store({ request, response, params: { id } }) {

    try {
      let { data : { attributes } } = request.post()

      const { pid, psid, firstname, lastname, email, password, managername, division, region, is_admin, is_approved, jobtitle, profile_pic_url, profile_pic_extension, rank } =  attributes
      // console.log( { pid, psid, firstname, lastname, email, password, managername, division, region, is_admin, is_approved, jobtitle, profile_pic_url, profile_pic_extension, rank })
      const pids = await Pid.create({ pid, psid, firstname, lastname, email, password, managername, division, region, is_admin, is_approved, jobtitle, profile_pic_url, profile_pic_extension, rank })

      response.status(201).json({
        message: 'Your new user account is now created!',
          data: {
            attributes: pids
          }
      })

    } catch (e) {
      response.status(500).json({
        message: 'Warning! Bobby must have touch something.',

      })
    } finally {

    }
  }

  async show({ request, response, params: { id } }) {
    const pids = await Pid.find(id)

    if (pids) {
      response.status(200).json({
        message: 'Here is your user.',
        data: {
          attributes: pids
        }
      })
    } else {
      response.status(404).json({
        message: 'User not found',
        id
      })
    }
  }


  async lsmSort({ request, response, params: { id } }) {
    try {
      const lsm = await Pid.findAll().sortBy('')


        // Sql query builder


    } catch (e) {

    } finally {

    }
  }

  async update() {
  }

  async delete() {
  }
}

module.exports = PidController
