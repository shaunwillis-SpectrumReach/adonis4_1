'use strict'

const Schema = use('Schema')

class AllaeSchema extends Schema {
  up () {
    this.create('allaes', (table) => {
      table.increments()

      table.string('pid').notNullable()
      table.string('psid')
      table.string('firstname').notNullable()
      table.string('lastname').notNullable()

      table.string('managername').notNullable()
      table.string('division').notNullable()
      table.string('region').notNullable()
      table.string('jobtitle').notNullable()
      table.string('profile_pic_url').default('nav_generic_thumb.svg')
      table.string('profile_pic_extension').default('svg')
      table.string('rank')
      table.string('budget_group')
      table.float('fullyear')
      table.timestamps()
    })
  }

  down () {
    this.drop('allaes')
  }
}

module.exports = AllaeSchema
