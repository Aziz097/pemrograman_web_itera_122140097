// app.js

/*****************************************
 * DATA STRUCTURE & CLASSES
 *****************************************/
class Course {
  constructor(id, name, day, time, room) {
    this.id = id;
    this.name = name;
    this.day = day;
    this.time = time;
    this.room = room;
    this.meetings = []; // array Meeting
  }
}

class Meeting {
  constructor(id, title) {
    this.id = id;
    this.title = title;
    this.note = null; // Satu note per meeting
  }
}

class CornellNote {
  constructor(id, keypoints, note, summary) {
    this.id = id;
    this.keypoints = keypoints;
    this.note = note;
    this.summary = summary;
  }
}

/*****************************************
 * LOCAL STORAGE FUNCTIONS
 *****************************************/
const getCourses = () => {
  const data = localStorage.getItem('courses');
  return data ? JSON.parse(data) : [];
};

const saveCourses = (courses) => {
  localStorage.setItem('courses', JSON.stringify(courses));
};

/*****************************************
 * VIEW NAVIGATION (SPA) 
 *****************************************/
const scheduleView = document.getElementById('schedule-view');
const meetingsView = document.getElementById('meetings-view');
const meetingDetailView = document.getElementById('meeting-detail-view');

const showView = (viewId) => {
  [scheduleView, meetingsView, meetingDetailView].forEach(view => view.style.display = 'none');
  document.getElementById(viewId).style.display = 'block';
};

/*****************************************
 * SCHEDULE VIEW LOGIC
 *****************************************/
// Form Elements
const courseForm = document.getElementById('course-form');
const courseIdInput = document.getElementById('course-id');
const courseNameInput = document.getElementById('course-name');
const courseDayInput = document.getElementById('course-day');
const courseTimeInput = document.getElementById('course-time');
const courseRoomInput = document.getElementById('course-room');
const scheduleGrid = document.getElementById('schedule-grid');

// Render schedule: grid dengan Bootstrap row/col
const renderSchedule = () => {
  const courses = getCourses();
  scheduleGrid.innerHTML = '';

  // Kelompokkan courses berdasarkan day
  const days = ['Senin','Selasa','Rabu','Kamis','Jumat'];
  days.forEach(day => {
    // Filter courses per day, urutkan berdasarkan time
    const dayCourses = courses.filter(c => c.day === day).sort((a,b) => a.time.localeCompare(b.time));
    if(dayCourses.length){
      const col = document.createElement('div');
      col.className = 'col-md-6';
      col.innerHTML = `<div class="day-column">
        <h3>${day}</h3>
      </div>`;
      const dayColumn = col.querySelector('.day-column');

      dayCourses.forEach(course => {
        const card = document.createElement('div');
        card.className = 'course-card';
        card.innerHTML = `
          <div>
            <strong>${course.name}</strong>
            <div class="text-muted">${course.time} @ ${course.room}</div>
          </div>
          <div class="course-actions">
            <button class="edit-course-btn" title="Edit"><i class="bi bi-pencil"></i></button>
            <button class="delete-course-btn" title="Delete"><i class="bi bi-trash"></i></button>
          </div>
        `;
        // Card click (bukan tombol) untuk membuka meetings view
        card.addEventListener('click', (e) => {
          if(e.target.closest('.course-actions')) return; // biarkan tombol handle
          openMeetingsView(course.id);
        });
        // Edit Course
        card.querySelector('.edit-course-btn').addEventListener('click', (e) => {
          e.stopPropagation();
          startEditCourse(course.id);
        });
        // Delete Course
        card.querySelector('.delete-course-btn').addEventListener('click', (e) => {
          e.stopPropagation();
          if(confirm("Yakin menghapus matakuliah ini?")){
            deleteCourse(course.id);
          }
        });
        dayColumn.appendChild(card);
      });

      scheduleGrid.appendChild(col);
    }
  });
};

courseForm.addEventListener('submit', e => {
  e.preventDefault();
  const id = courseIdInput.value ? Number(courseIdInput.value) : Date.now();
  const name = courseNameInput.value.trim();
  const day = courseDayInput.value;
  const time = courseTimeInput.value;
  const room = courseRoomInput.value.trim();

  if(!name || !time || !room){
    alert("Mohon isi seluruh field.");
    return;
  }

  const courses = getCourses();
  if(courseIdInput.value){
    // Edit
    const idx = courses.findIndex(c => c.id === id);
    if(idx > -1){
      const existingMeetings = courses[idx].meetings;
      courses[idx] = new Course(id, name, day, time, room);
      courses[idx].meetings = existingMeetings;
    }
  } else {
    // Add new
    courses.push(new Course(id, name, day, time, room));
  }
  saveCourses(courses);
  courseForm.reset();
  // Tutup collapse form (gunakan Bootstrap Collapse instance)
  const collapseCourse = bootstrap.Collapse.getInstance(document.getElementById('courseFormCollapse'));
  if(collapseCourse) collapseCourse.hide();
  renderSchedule();
});

const startEditCourse = (courseId) => {
  const courses = getCourses();
  const course = courses.find(c => c.id === courseId);
  if(course){
    courseIdInput.value = course.id;
    courseNameInput.value = course.name;
    courseDayInput.value = course.day;
    courseTimeInput.value = course.time;
    courseRoomInput.value = course.room;
    // Buka form collapse
    new bootstrap.Collapse(document.getElementById('courseFormCollapse'), {toggle:true});
  }
};

const deleteCourse = (courseId) => {
  let courses = getCourses();
  courses = courses.filter(c => c.id !== courseId);
  saveCourses(courses);
  renderSchedule();
};

/*****************************************
 * MEETINGS VIEW LOGIC
 *****************************************/
const meetingsTitle = document.getElementById('meetings-title');
const meetingForm = document.getElementById('meeting-form');
const meetingIdInput = document.getElementById('meeting-id');
const meetingTitleInput = document.getElementById('meeting-title');
const meetingsList = document.getElementById('meetings-list');

let activeCourseId = null;

const openMeetingsView = (courseId) => {
  activeCourseId = courseId;
  const courses = getCourses();
  const course = courses.find(c => c.id === courseId);
  if(course){
    meetingsTitle.textContent = course.name;
    showView('meetings-view');
    renderMeetings();
  }
};

const renderMeetings = () => {
  const courses = getCourses();
  const course = courses.find(c => c.id === activeCourseId);
  if(!course) return;
  meetingsList.innerHTML = '';

  course.meetings.forEach(meeting => {
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.innerHTML = `
      <div>
        <strong>${meeting.title}</strong>
      </div>
      <div class="meeting-actions">
        <button class="edit-meeting-btn" title="Edit"><i class="bi bi-pencil"></i></button>
        <button class="delete-meeting-btn" title="Delete"><i class="bi bi-trash"></i></button>
      </div>
    `;
    // Klik li (bukan tombol) membuka Meeting Detail View
    li.addEventListener('click', e => {
      if(e.target.closest('.meeting-actions')) return;
      openMeetingDetailView(meeting.id);
    });
    li.querySelector('.edit-meeting-btn').addEventListener('click', e => {
      e.stopPropagation();
      startEditMeeting(meeting.id);
    });
    li.querySelector('.delete-meeting-btn').addEventListener('click', e => {
      e.stopPropagation();
      if(confirm("Hapus pertemuan ini?")){
        deleteMeeting(meeting.id);
      }
    });
    meetingsList.appendChild(li);
  });
};

meetingForm.addEventListener('submit', e => {
  e.preventDefault();
  const id = meetingIdInput.value ? Number(meetingIdInput.value) : Date.now();
  const title = meetingTitleInput.value.trim();
  if(!title){
    alert("Judul pertemuan wajib diisi.");
    return;
  }
  const courses = getCourses();
  const course = courses.find(c => c.id === activeCourseId);
  if(!course) return;

  if(meetingIdInput.value){
    // Edit
    const idx = course.meetings.findIndex(m => m.id === id);
    if(idx > -1){
      // Pertahankan note jika sudah ada
      const existingNote = course.meetings[idx].note;
      course.meetings[idx] = new Meeting(id, title);
      course.meetings[idx].note = existingNote;
    }
  } else {
    // Add new
    course.meetings.push(new Meeting(id, title));
  }
  saveCourses(courses);
  meetingForm.reset();
  const collapseMeeting = bootstrap.Collapse.getInstance(document.getElementById('meetingFormCollapse'));
  if(collapseMeeting) collapseMeeting.hide();
  renderMeetings();
});

const startEditMeeting = (meetingId) => {
  const courses = getCourses();
  const course = courses.find(c => c.id === activeCourseId);
  if(!course) return;
  const meeting = course.meetings.find(m => m.id === meetingId);
  if(meeting){
    meetingIdInput.value = meeting.id;
    meetingTitleInput.value = meeting.title;
    new bootstrap.Collapse(document.getElementById('meetingFormCollapse'), {toggle:true});
  }
};

const deleteMeeting = (meetingId) => {
  const courses = getCourses();
  const course = courses.find(c => c.id === activeCourseId);
  if(!course) return;
  course.meetings = course.meetings.filter(m => m.id !== meetingId);
  saveCourses(courses);
  renderMeetings();
};

/*****************************************
 * MEETING DETAIL VIEW (Cornell Notes)
 *****************************************/
const detailTitle = document.getElementById('detail-title');
const notesForm = document.getElementById('notes-form');
const notesModeInput = document.getElementById('notes-mode');
const notesKeypointsInput = document.getElementById('notes-keypoints');
const notesTextInput = document.getElementById('notes-text');
const notesSummaryInput = document.getElementById('notes-summary');
const notesContainer = document.getElementById('notes-container');
const toggleNotesBtn = document.getElementById('toggle-notes-btn');

let activeMeetingId = null;

const openMeetingDetailView = (meetingId) => {
  activeMeetingId = meetingId;
  const courses = getCourses();
  const course = courses.find(c => c.id === activeCourseId);
  if(!course) return;
  const meeting = course.meetings.find(m => m.id === meetingId);
  if(!meeting) return;
  detailTitle.textContent = meeting.title;
  showView('meeting-detail-view');
  renderMeetingDetail();
};

const renderMeetingDetail = () => {
  const courses = getCourses();
  const course = courses.find(c => c.id === activeCourseId);
  if(!course) return;
  const meeting = course.meetings.find(m => m.id === activeMeetingId);
  if(!meeting) return;
  
  // Update tombol collapse notes: jika note sudah ada, ubah teksnya menjadi "Edit Note"
  if(meeting.note){
    toggleNotesBtn.innerHTML = `<i class="bi bi-pencil"></i> Edit Note`;
  } else {
    toggleNotesBtn.innerHTML = `<i class="bi bi-plus-lg"></i> Tambah Note`;
  }
  
  // Tampilkan note jika ada, atau pesan kosong
  notesContainer.innerHTML = meeting.note
    ? `<div class="note-entry">
         <div><strong>Key Points:</strong> ${meeting.note.keypoints}</div>
         <div><strong>Notes:</strong> ${meeting.note.note}</div>
         <div><strong>Summary:</strong> ${meeting.note.summary}</div>
         <div class="note-actions">
           <button class="edit-note-btn" title="Edit"><i class="bi bi-pencil"></i></button>
           <button class="delete-note-btn" title="Delete"><i class="bi bi-trash"></i></button>
         </div>
       </div>`
    : `<p class="text-muted">Belum ada catatan, silakan tambahkan.</p>`;
  
  // Jika ada tombol edit note, tambahkan listener
  const editNoteBtn = notesContainer.querySelector('.edit-note-btn');
  const deleteNoteBtn = notesContainer.querySelector('.delete-note-btn');
  if(editNoteBtn){
    editNoteBtn.addEventListener('click', () => startEditNote(meeting.note.id));
  }
  if(deleteNoteBtn){
    deleteNoteBtn.addEventListener('click', () => {
      if(confirm("Hapus catatan ini?")){
        deleteNote();
      }
    });
  }
  
  // Reset form note
  resetNotesForm();
};

notesForm.addEventListener('submit', e => {
  e.preventDefault();
  const keypoints = notesKeypointsInput.value.trim();
  const noteText = notesTextInput.value.trim();
  const summary = notesSummaryInput.value.trim();
  if(!keypoints || !noteText || !summary){
    alert("Mohon isi seluruh field catatan.");
    return;
  }
  const courses = getCourses();
  const course = courses.find(c => c.id === activeCourseId);
  if(!course) return;
  const meeting = course.meetings.find(m => m.id === activeMeetingId);
  if(!meeting) return;
  
  // Karena hanya 1 note per meeting, jika mode edit maka ganti, jika tidak, langsung buat note baru
  if(notesModeInput.value === "edit"){
    meeting.note = new CornellNote(meeting.note.id, keypoints, noteText, summary);
  } else {
    meeting.note = new CornellNote(Date.now(), keypoints, noteText, summary);
  }
  saveCourses(courses);
  const collapseNotes = bootstrap.Collapse.getInstance(document.getElementById('notesFormCollapse'));
  if(collapseNotes) collapseNotes.hide();
  renderMeetingDetail();
});

const startEditNote = (noteId) => {
  const courses = getCourses();
  const course = courses.find(c => c.id === activeCourseId);
  if(!course) return;
  const meeting = course.meetings.find(m => m.id === activeMeetingId);
  if(!meeting || !meeting.note) return;
  notesModeInput.value = "edit";
  notesKeypointsInput.value = meeting.note.keypoints;
  notesTextInput.value = meeting.note.note;
  notesSummaryInput.value = meeting.note.summary;
  // Buka collapse form notes
  new bootstrap.Collapse(document.getElementById('notesFormCollapse'), {toggle:true});
};

const deleteNote = () => {
  const courses = getCourses();
  const course = courses.find(c => c.id === activeCourseId);
  if(!course) return;
  const meeting = course.meetings.find(m => m.id === activeMeetingId);
  if(!meeting) return;
  meeting.note = null;
  saveCourses(courses);
  renderMeetingDetail();
};

const resetNotesForm = () => {
  notesModeInput.value = "add";
  notesKeypointsInput.value = "";
  notesTextInput.value = "";
  notesSummaryInput.value = "";
};

/*****************************************
 * NAVIGATION BACK BUTTONS
 *****************************************/
document.querySelectorAll('.btn.btn-link').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-target');
    showView(target);
    if(target === 'schedule-view'){
      renderSchedule();
    } else if(target === 'meetings-view'){
      renderMeetings();
    }
  });
});

/*****************************************
 * INIT
 *****************************************/
showView('schedule-view');
renderSchedule();
