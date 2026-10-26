import { neon } from '@neondatabase/serverless';

const isPlaceholder = !process.env.DATABASE_URL || 
                      process.env.DATABASE_URL.includes("host") || 
                      process.env.DATABASE_URL.includes("password");

let sql;
if (false) {
  console.warn("⚠️ Database URL is a placeholder or not provided. Database operations will be bypassed gracefully.");
  // Dummy template tag that does nothing and returns successfully
  sql = async (strings, ...values) => {
    return [];
  };
} else {
  try {
    sql = neon("postgresql://neondb_owner:npg_2KNAsmxtUJ3k@ep-cold-mode-apq4cz41.c-7.us-east-1.aws.neon.tech/neondb?sslmode=require");
  } catch (err) {
    console.error("⚠️ Failed to initialize Neon database client:", err.message);
    sql = async (strings, ...values) => {
      return [];
    };
  }
}

export default sql;

