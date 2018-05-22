const getDate = require('../model/quires/get_date');
const getPresentStudent = require('../model/quires/get_present_students');
const getAbsentStudent = require('../model/quires/get_absent_students');
const getLateStudent = require('../model/quires/get_late_students');
const getLeaveStudent = require('../model/quires/get_leave_students');
const getWeekMentors = require('../model/quires/get_week_mentors');
const getWeekworkshops = require('../model/quires/get_workshops');


exports.get = (req, res) => {
  getDate((getDateErr, getDateResult) => {
    if (getDateErr) return res.status(500);
    getPresentStudent((getPresentStudentErr, getPresentStudentResult) => {
      if (getPresentStudentErr) return res.status(500);
      getAbsentStudent((getAbsentStudentErr, getAbsentStudentResult) => {
        if (getAbsentStudentErr) return res.status(500);
        getLateStudent((getLateStudentErr, getLateStudentResult) => {
          if (getLateStudentErr) return res.status(500);
          getLeaveStudent((getLeaveStudentErr, getLeaveStudentResult) => {
            if (getLeaveStudentErr) return res.status(500);
            getWeekMentors((getWeekMentorsErr, getWeekMentorsResult) => {
              if (getWeekMentorsErr) return res.status(500);
              getWeekworkshops((getWeekworkshopsErr, getWeekworkshopsResult) => {
                if (getWeekworkshopsErr) return res.status(500);
                return res.render('home', {
                  date: getDateResult[0],
                  presentSts: getPresentStudentResult,
                  absentSts: getAbsentStudentResult,
                  lateSts: getLateStudentResult,
                  leaveSts: getLeaveStudentResult,
                  weekMentors: getWeekMentorsResult[0],
                  weekWorkshops: getWeekworkshopsResult,
                  weekWorkshops1: getWeekworkshopsResult[0],
                  style_home: 'home_style.css',
                });
              });
            });
          });
        });
      });
    });
  });
};
