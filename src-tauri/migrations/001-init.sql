CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    price UNSIGNED BIG INT NOT NULL,
    quantity INTEGER NOT NULL,
    description TEXT
);

CREATE TABLE IF NOT EXISTS categories (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL UNIQUE,
  parent_category_id INTEGER,
  description TEXT,
  FOREIGN KEY (parent_category_id) REFERENCES categories(id)
);
