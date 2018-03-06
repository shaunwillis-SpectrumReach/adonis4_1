'use strict'

const Schema = use('Schema')

class PidSchema extends Schema {
  up () {
    this.create('pids', table => {
      table.increments()
      table.string('pid').notNullable()
      table.string('psid')
      table.string('firstname').notNullable()
      table.string('lastname').notNullable()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.string('managername').notNullable()
      table.string('division').notNullable()
      table.string('region').notNullable()
      table.boolean('is_admin').default('false')
      table.boolean('is_approved').default('true')
      table.timestamps()
      table.string('jobtitle').notNullable()
      table.string('profile_pic_url').default('nav_generic_thumb.svg')
      table.string('profile_pic_extension').default('svg')
      table.boolean('is_ae').default('false')
      table.boolean('is_guest').default('false')
    })
  }

  down () {
    this.drop('pids')
  }
}

module.exports = PidSchema
