const TimeEdit = require('../index.js');

const lth = new TimeEdit('https://se.timeedit.net/web/lu/db1/lth1/');

// First get course id from course code,
// then use course id to get the course schedule
lth.getCourseId('V:N1', 182)
.catch(e => console.log(e))
.then(roomId => lth.getRoom(roomId))
.then(room => console.log(room))
.catch(e => console.log(e));
