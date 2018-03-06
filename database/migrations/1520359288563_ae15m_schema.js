'use strict'

const Schema = use('Schema')

class ae15mSchema extends Schema {
  up () {
    this.create('ae15ms', (table) => {
      table.increments()
      table.string('week_number', 3).default('NULL')
      table.string('name', 80).default('NULL')
      table.string('budget_group', 20).default('NULL')
      table.float('fullyear').default('NULL')
      table.string('division', 80).default('NULL')
      table.string('region', 80).default('NULL')
      table.string('pid', 8).default('NULL')
      table.integer('pid_id').unsigned().references('id').inTable('pids')
      table.string('psid', 20).default('NULL')
      table.bigint('budget_goal', 20).default('NULL')
      table.timestamps()
      table.string('managername', 80).default('NULL')
      table.string('profile_pic_url', 40).default('nav_generic_thumb.svg')
      table.string('profile_pic_extension', 4).default('svg')
    })
  }

  down () {
    this.drop('ae15ms')
  }
}

module.exports = ae15mSchema
