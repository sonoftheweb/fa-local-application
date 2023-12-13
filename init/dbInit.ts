export interface DbInit {
  tables: Table[]
}

export interface Table {
  name: string
  columns: Column[]
}

export interface Column {
  name: string
  type: ColumnType
  length?: number
  primaryKey?: boolean
  foreignKey?: boolean
  references?: string
  referencedColumn?: string
  nullable?: boolean
  default?: boolean | number | string
}

export type ColumnType = 'number' | 'string' | 'datetime' | 'boolean'

export const dbInit = {
  tables: {
    products: {
      migrate: `CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        price UNSIGNED BIG INT NOT NULL,
        quantity INTEGER NOT NULL,
        description TEXT
      );`,
    },
    categories: {
      migrate: `CREATE TABLE IF NOT EXISTS categories (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        parent_category_id INTEGER,
        description TEXT,
        FOREIGN KEY (parent_category_id) REFERENCES categories(id)
      );`,
    },
    product_categories: {
      migrate: `CREATE TABLE IF NOT EXISTS product_categories (
        product_id INTEGER NOT NULL,
        category_id INTEGER NOT NULL,
        PRIMARY KEY (product_id, category_id),
        FOREIGN KEY (product_id) REFERENCES products(id),
        FOREIGN KEY (category_id) REFERENCES categories(id)
      );`,
    },
  },
}
