const dbConnections = require('../db_connection');

const leaveStudents = (cb) => {
  const sql = 'SELECT user_id FROM attendance WHERE clock_out < \'17:00:00\' and day_id = 2 ;';
  dbConnections.query(
    sql,
    (err, res) => {
      if (err) {
        cb(err);
      } else {
        cb(null, res.rows.length);
      }
    },
  );
};


module.exports = leaveStudents;
