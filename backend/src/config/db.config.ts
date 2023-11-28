export const config = {
    host: "localhost",
    user: "postgres",
    password: "loveVP228",
    DB: "test_db",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
}
export const dialect = "postgres"