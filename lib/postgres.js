import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

// optional (connection check)
pool.on("connect", () => {
  console.log("✅ PostgreSQL Connected");
});

export default pool;