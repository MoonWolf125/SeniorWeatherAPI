var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "weatherstation2"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE weather (temperature real, airpressure real, humidity real)`,
        (err) => {
            if (err) {
                // Table already created
            }else{
                // Table just created, creating some rows
                var insert = 'INSERT INTO weather (temperature, airpressure, humidity) VALUES (?,?,?)'
                db.run(insert, ["72","29.5","22.4"])
                db.run(insert, ["71","29.43","18.64"])
            }
        });  
    }
});


module.exports = db
