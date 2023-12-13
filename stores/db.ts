import Database from 'tauri-plugin-sql-api'
import { dbInit } from '~/init/dbInit'

export const useDatabaseStore = defineStore('database', () => {
  const db = ref<Database | null>(null)
  const initDbData = dbInit

  const init = async () => {
    try {
      db.value = await Database.load('sqlite:propim.db')
      const insertQuery =
        'INSERT OR IGNORE INTO categories (name, description) VALUES ($1, $2)'
      const result = await db.value.execute(insertQuery, [
        'test',
        'test description',
      ])
      console.log('result', result)
    } catch (error) {
      if (error instanceof Error) {
        console.error('error loading DB', error.message)
      }
    }
  }

  return {
    db,
    init,
  }
})
