import React, { useState } from "react";
import "./App.css";

function App() {
  // ================= LOGIN =================
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // ================= NAVIGATION =================
  const [activePage, setActivePage] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // ================= STUDENTS =================
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Rahul Kumar",
      email: "rahul@gmail.com",
      phone: "9876543210",
      department: "Computer Science",
      year: "3rd Year",
      gender: "Male",
    },
    {
      id: 2,
      name: "Priya Sharma",
      email: "priya@gmail.com",
      phone: "9876543211",
      department: "Electronics",
      year: "2nd Year",
      gender: "Female",
    },
    {
      id: 3,
      name: "Arjun Reddy",
      email: "arjun@gmail.com",
      phone: "9876543212",
      department: "Mechanical",
      year: "4th Year",
      gender: "Male",
    },
  ]);

  const [studentForm, setStudentForm] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    year: "",
    gender: "",
  });

  const [editingStudent, setEditingStudent] = useState(null);
  const [studentSearch, setStudentSearch] = useState("");

  // ================= DEPARTMENTS =================
  const [departments, setDepartments] = useState([
    { id: 1, name: "Computer Science", hod: "Dr. Ramesh", students: 45 },
    { id: 2, name: "Electronics", hod: "Dr. Suresh", students: 30 },
    { id: 3, name: "Mechanical", hod: "Dr. Kumar", students: 25 },
    { id: 4, name: "Civil", hod: "Dr. Prasad", students: 20 },
  ]);

  const [departmentForm, setDepartmentForm] = useState({
    name: "",
    hod: "",
  });

  // ================= COURSES =================
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: "Data Structures",
      department: "Computer Science",
      credits: 4,
    },
    {
      id: 2,
      name: "Database Management",
      department: "Computer Science",
      credits: 3,
    },
    {
      id: 3,
      name: "Digital Electronics",
      department: "Electronics",
      credits: 4,
    },
  ]);

  const [courseForm, setCourseForm] = useState({
    name: "",
    department: "",
    credits: "",
  });

  // ================= FACULTY =================
  const [faculty, setFaculty] = useState([
    {
      id: 1,
      name: "Dr. Ramesh",
      email: "ramesh@college.com",
      department: "Computer Science",
      designation: "Professor",
    },
    {
      id: 2,
      name: "Dr. Suresh",
      email: "suresh@college.com",
      department: "Electronics",
      designation: "Associate Professor",
    },
    {
      id: 3,
      name: "Dr. Kumar",
      email: "kumar@college.com",
      department: "Mechanical",
      designation: "Professor",
    },
  ]);

  const [facultyForm, setFacultyForm] = useState({
    name: "",
    email: "",
    department: "",
    designation: "",
  });

  // ================= LOGIN =================

  const handleLogin = (e) => {
    e.preventDefault();

    if (username.trim() && password.trim()) {
      setLoggedIn(true);
    } else {
      alert("Please enter username and password");
    }
  };

  // ================= STUDENT FUNCTIONS =================

  const handleStudentSubmit = (e) => {
    e.preventDefault();

    if (
      !studentForm.name ||
      !studentForm.email ||
      !studentForm.phone ||
      !studentForm.department ||
      !studentForm.year ||
      !studentForm.gender
    ) {
      alert("Please fill all student details");
      return;
    }

    if (editingStudent) {
      setStudents(
        students.map((student) =>
          student.id === editingStudent.id
            ? { ...student, ...studentForm }
            : student
        )
      );

      setEditingStudent(null);
      alert("Student updated successfully");
    } else {
      const newStudent = {
        id: Date.now(),
        ...studentForm,
      };

      setStudents([...students, newStudent]);
      alert("Student added successfully");
    }

    setStudentForm({
      name: "",
      email: "",
      phone: "",
      department: "",
      year: "",
      gender: "",
    });
  };

  const editStudent = (student) => {
    setEditingStudent(student);

    setStudentForm({
      name: student.name,
      email: student.email,
      phone: student.phone,
      department: student.department,
      year: student.year,
      gender: student.gender,
    });

    window.scrollTo(0, 0);
  };

  const deleteStudent = (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      setStudents(students.filter((student) => student.id !== id));
    }
  };

  // ================= DEPARTMENT FUNCTIONS =================

  const addDepartment = (e) => {
    e.preventDefault();

    if (!departmentForm.name || !departmentForm.hod) {
      alert("Please fill all department details");
      return;
    }

    setDepartments([
      ...departments,
      {
        id: Date.now(),
        name: departmentForm.name,
        hod: departmentForm.hod,
        students: 0,
      },
    ]);

    setDepartmentForm({
      name: "",
      hod: "",
    });

    alert("Department added successfully");
  };

  const deleteDepartment = (id) => {
    if (window.confirm("Delete this department?")) {
      setDepartments(departments.filter((d) => d.id !== id));
    }
  };

  // ================= COURSE FUNCTIONS =================

  const addCourse = (e) => {
    e.preventDefault();

    if (!courseForm.name || !courseForm.department || !courseForm.credits) {
      alert("Please fill all course details");
      return;
    }

    setCourses([
      ...courses,
      {
        id: Date.now(),
        name: courseForm.name,
        department: courseForm.department,
        credits: courseForm.credits,
      },
    ]);

    setCourseForm({
      name: "",
      department: "",
      credits: "",
    });

    alert("Course added successfully");
  };

  const deleteCourse = (id) => {
    if (window.confirm("Delete this course?")) {
      setCourses(courses.filter((course) => course.id !== id));
    }
  };

  // ================= FACULTY FUNCTIONS =================

  const addFaculty = (e) => {
    e.preventDefault();

    if (
      !facultyForm.name ||
      !facultyForm.email ||
      !facultyForm.department ||
      !facultyForm.designation
    ) {
      alert("Please fill all faculty details");
      return;
    }

    setFaculty([
      ...faculty,
      {
        id: Date.now(),
        ...facultyForm,
      },
    ]);

    setFacultyForm({
      name: "",
      email: "",
      department: "",
      designation: "",
    });

    alert("Faculty added successfully");
  };

  const deleteFaculty = (id) => {
    if (window.confirm("Delete this faculty member?")) {
      setFaculty(faculty.filter((f) => f.id !== id));
    }
  };

  // ================= LOGOUT =================

  const logout = () => {
    setLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  // ================= LOGIN SCREEN =================

  if (!loggedIn) {
    return (
      <div className="login-page">
        <div className="login-left">
          <div className="login-content">
            <div className="college-logo">🎓</div>

            <h1>Student Management System</h1>

            <p>
              Manage students, departments, courses and faculty
              efficiently from one platform.
            </p>

            <div className="login-features">
              <div>✓ Student Management</div>
              <div>✓ Department Management</div>
              <div>✓ Course Management</div>
              <div>✓ Faculty Management</div>
            </div>
          </div>
        </div>

        <div className="login-right">
          <form className="login-box" onSubmit={handleLogin}>
            <h2>Welcome Back</h2>
            <p>Login to your account</p>

            <label>Username</label>

            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <label>Password</label>

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="login-button" type="submit">
              Login
            </button>

            <p className="login-note">
              Enter any username and password to continue
            </p>
          </form>
        </div>
      </div>
    );
  }

  // ================= DASHBOARD =================

  const Dashboard = () => (
    <>
      <div className="page-header">
        <div>
          <h1>Dashboard</h1>
          <p>Welcome to Student Management System</p>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon blue">👨‍🎓</div>
          <div>
            <h3>{students.length}</h3>
            <p>Total Students</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon green">🏢</div>
          <div>
            <h3>{departments.length}</h3>
            <p>Departments</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon orange">📚</div>
          <div>
            <h3>{courses.length}</h3>
            <p>Courses</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon purple">👨‍🏫</div>
          <div>
            <h3>{faculty.length}</h3>
            <p>Faculty</p>
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-panel">
          <div className="panel-header">
            <h2>Recent Students</h2>

            <button
              className="small-button"
              onClick={() => setActivePage("Students")}
            >
              View All
            </button>
          </div>

          <div className="recent-list">
            {students.slice(-5).reverse().map((student) => (
              <div className="recent-item" key={student.id}>
                <div className="avatar">
                  {student.name.charAt(0)}
                </div>

                <div>
                  <strong>{student.name}</strong>
                  <span>{student.department}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="dashboard-panel">
          <div className="panel-header">
            <h2>Quick Actions</h2>
          </div>

          <div className="quick-actions">
            <button onClick={() => setActivePage("Students")}>
              ➕ Add Student
            </button>

            <button onClick={() => setActivePage("Departments")}>
              🏢 Add Department
            </button>

            <button onClick={() => setActivePage("Courses")}>
              📚 Add Course
            </button>

            <button onClick={() => setActivePage("Faculty")}>
              👨‍🏫 Add Faculty
            </button>
          </div>
        </div>
      </div>
    </>
  );

  // ================= STUDENTS PAGE =================

  const StudentsPage = () => {
    const filteredStudents = students.filter(
      (student) =>
        student.name.toLowerCase().includes(studentSearch.toLowerCase()) ||
        student.email.toLowerCase().includes(studentSearch.toLowerCase()) ||
        student.department
          .toLowerCase()
          .includes(studentSearch.toLowerCase())
    );

    return (
      <>
        <div className="page-header">
          <div>
            <h1>Student Management</h1>
            <p>Add, edit, view and delete students</p>
          </div>
        </div>

        <div className="form-card">
          <div className="panel-header">
            <h2>
              {editingStudent ? "Edit Student" : "Add New Student"}
            </h2>
          </div>

          <form onSubmit={handleStudentSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label>Student Name</label>
                <input
                  type="text"
                  placeholder="Enter student name"
                  value={studentForm.name}
                  onChange={(e) =>
                    setStudentForm({
                      ...studentForm,
                      name: e.target.value,
                    })
                  }
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter email"
                  value={studentForm.email}
                  onChange={(e) =>
                    setStudentForm({
                      ...studentForm,
                      email: e.target.value,
                    })
                  }
                />
              </div>

              <div className="form-group">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="Enter phone number"
                  value={studentForm.phone}
                  onChange={(e) =>
                    setStudentForm({
                      ...studentForm,
                      phone: e.target.value,
                    })
                  }
                />
              </div>

              <div className="form-group">
                <label>Department</label>

                <select
                  value={studentForm.department}
                  onChange={(e) =>
                    setStudentForm({
                      ...studentForm,
                      department: e.target.value,
                    })
                  }
                >
                  <option value="">Select Department</option>
                  {departments.map((department) => (
                    <option
                      key={department.id}
                      value={department.name}
                    >
                      {department.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Year</label>

                <select
                  value={studentForm.year}
                  onChange={(e) =>
                    setStudentForm({
                      ...studentForm,
                      year: e.target.value,
                    })
                  }
                >
                  <option value="">Select Year</option>
                  <option>1st Year</option>
                  <option>2nd Year</option>
                  <option>3rd Year</option>
                  <option>4th Year</option>
                </select>
              </div>

              <div className="form-group">
                <label>Gender</label>

                <select
                  value={studentForm.gender}
                  onChange={(e) =>
                    setStudentForm({
                      ...studentForm,
                      gender: e.target.value,
                    })
                  }
                >
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="form-buttons">
              <button className="primary-button" type="submit">
                {editingStudent ? "Update Student" : "Add Student"}
              </button>

              {editingStudent && (
                <button
                  type="button"
                  className="secondary-button"
                  onClick={() => {
                    setEditingStudent(null);
                    setStudentForm({
                      name: "",
                      email: "",
                      phone: "",
                      department: "",
                      year: "",
                      gender: "",
                    });
                  }}
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        <div className="table-card">
          <div className="table-header">
            <h2>All Students</h2>

            <input
              className="search-input"
              type="text"
              placeholder="Search students..."
              value={studentSearch}
              onChange={(e) => setStudentSearch(e.target.value)}
            />
          </div>

          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Department</th>
                  <th>Year</th>
                  <th>Gender</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredStudents.map((student) => (
                  <tr key={student.id}>
                    <td>STU{student.id}</td>
                    <td>
                      <strong>{student.name}</strong>
                    </td>
                    <td>{student.email}</td>
                    <td>{student.phone}</td>
                    <td>
                      <span className="badge">
                        {student.department}
                      </span>
                    </td>
                    <td>{student.year}</td>
                    <td>{student.gender}</td>
                    <td>
                      <button
                        className="edit-button"
                        onClick={() => editStudent(student)}
                      >
                        Edit
                      </button>

                      <button
                        className="delete-button"
                        onClick={() => deleteStudent(student.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}

                {filteredStudents.length === 0 && (
                  <tr>
                    <td colSpan="8" className="empty">
                      No students found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  };

  // ================= DEPARTMENT PAGE =================

  const DepartmentsPage = () => (
    <>
      <div className="page-header">
        <div>
          <h1>Department Management</h1>
          <p>Manage college departments</p>
        </div>
      </div>

      <div className="form-card">
        <h2>Add Department</h2>

        <form onSubmit={addDepartment}>
          <div className="form-grid">
            <div className="form-group">
              <label>Department Name</label>

              <input
                type="text"
                placeholder="Enter department name"
                value={departmentForm.name}
                onChange={(e) =>
                  setDepartmentForm({
                    ...departmentForm,
                    name: e.target.value,
                  })
                }
              />
            </div>

            <div className="form-group">
              <label>Head of Department</label>

              <input
                type="text"
                placeholder="Enter HOD name"
                value={departmentForm.hod}
                onChange={(e) =>
                  setDepartmentForm({
                    ...departmentForm,
                    hod: e.target.value,
                  })
                }
              />
            </div>
          </div>

          <button className="primary-button">
            Add Department
          </button>
        </form>
      </div>

      <div className="table-card">
        <div className="table-header">
          <h2>Departments</h2>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Department</th>
                <th>HOD</th>
                <th>Students</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {departments.map((department) => (
                <tr key={department.id}>
                  <td>DEP{department.id}</td>
                  <td>
                    <strong>{department.name}</strong>
                  </td>
                  <td>{department.hod}</td>
                  <td>{department.students}</td>
                  <td>
                    <button
                      className="delete-button"
                      onClick={() =>
                        deleteDepartment(department.id)
                      }
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );

  // ================= COURSE PAGE =================

  const CoursesPage = () => (
    <>
      <div className="page-header">
        <div>
          <h1>Course Management</h1>
          <p>Manage courses offered by departments</p>
        </div>
      </div>

      <div className="form-card">
        <h2>Add Course</h2>

        <form onSubmit={addCourse}>
          <div className="form-grid">
            <div className="form-group">
              <label>Course Name</label>

              <input
                type="text"
                placeholder="Enter course name"
                value={courseForm.name}
                onChange={(e) =>
                  setCourseForm({
                    ...courseForm,
                    name: e.target.value,
                  })
                }
              />
            </div>

            <div className="form-group">
              <label>Department</label>

              <select
                value={courseForm.department}
                onChange={(e) =>
                  setCourseForm({
                    ...courseForm,
                    department: e.target.value,
                  })
                }
              >
                <option value="">Select Department</option>

                {departments.map((department) => (
                  <option
                    key={department.id}
                    value={department.name}
                  >
                    {department.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Credits</label>

              <input
                type="number"
                min="1"
                max="10"
                placeholder="Credits"
                value={courseForm.credits}
                onChange={(e) =>
                  setCourseForm({
                    ...courseForm,
                    credits: e.target.value,
                  })
                }
              />
            </div>
          </div>

          <button className="primary-button">
            Add Course
          </button>
        </form>
      </div>

      <div className="table-card">
        <div className="table-header">
          <h2>Courses</h2>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Course Name</th>
                <th>Department</th>
                <th>Credits</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {courses.map((course) => (
                <tr key={course.id}>
                  <td>CRS{course.id}</td>
                  <td>
                    <strong>{course.name}</strong>
                  </td>
                  <td>{course.department}</td>
                  <td>{course.credits}</td>
                  <td>
                    <button
                      className="delete-button"
                      onClick={() => deleteCourse(course.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );

  // ================= FACULTY PAGE =================

  const FacultyPage = () => (
    <>
      <div className="page-header">
        <div>
          <h1>Faculty Management</h1>
          <p>Manage faculty members</p>
        </div>
      </div>

      <div className="form-card">
        <h2>Add Faculty</h2>

        <form onSubmit={addFaculty}>
          <div className="form-grid">
            <div className="form-group">
              <label>Faculty Name</label>

              <input
                type="text"
                placeholder="Enter faculty name"
                value={facultyForm.name}
                onChange={(e) =>
                  setFacultyForm({
                    ...facultyForm,
                    name: e.target.value,
                  })
                }
              />
            </div>

            <div className="form-group">
              <label>Email</label>

              <input
                type="email"
                placeholder="Enter email"
                value={facultyForm.email}
                onChange={(e) =>
                  setFacultyForm({
                    ...facultyForm,
                    email: e.target.value,
                  })
                }
              />
            </div>

            <div className="form-group">
              <label>Department</label>

              <select
                value={facultyForm.department}
                onChange={(e) =>
                  setFacultyForm({
                    ...facultyForm,
                    department: e.target.value,
                  })
                }
              >
                <option value="">Select Department</option>

                {departments.map((department) => (
                  <option
                    key={department.id}
                    value={department.name}
                  >
                    {department.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Designation</label>

              <select
                value={facultyForm.designation}
                onChange={(e) =>
                  setFacultyForm({
                    ...facultyForm,
                    designation: e.target.value,
                  })
                }
              >
                <option value="">Select Designation</option>
                <option>Professor</option>
                <option>Associate Professor</option>
                <option>Assistant Professor</option>
                <option>Lecturer</option>
              </select>
            </div>
          </div>

          <button className="primary-button">
            Add Faculty
          </button>
        </form>
      </div>

      <div className="table-card">
        <div className="table-header">
          <h2>Faculty Members</h2>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Department</th>
                <th>Designation</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {faculty.map((member) => (
                <tr key={member.id}>
                  <td>FAC{member.id}</td>
                  <td>
                    <strong>{member.name}</strong>
                  </td>
                  <td>{member.email}</td>
                  <td>{member.department}</td>
                  <td>
                    <span className="badge">
                      {member.designation}
                    </span>
                  </td>
                  <td>
                    <button
                      className="delete-button"
                      onClick={() => deleteFaculty(member.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );

  // ================= PROFILE PAGE =================

  const ProfilePage = () => (
    <>
      <div className="page-header">
        <div>
          <h1>My Profile</h1>
          <p>Manage your account information</p>
        </div>
      </div>

      <div className="profile-card">
        <div className="profile-avatar">
          {username.charAt(0).toUpperCase()}
        </div>

        <h2>{username}</h2>

        <p>Administrator</p>

        <div className="profile-details">
          <div>
            <strong>Username</strong>
            <span>{username}</span>
          </div>

          <div>
            <strong>Role</strong>
            <span>Administrator</span>
          </div>

          <div>
            <strong>System</strong>
            <span>Student Management System</span>
          </div>
        </div>
      </div>
    </>
  );

  // ================= ABOUT PAGE =================

  const AboutPage = () => (
    <>
      <div className="page-header">
        <div>
          <h1>About</h1>
          <p>Student Management System</p>
        </div>
      </div>

      <div className="about-card">
        <div className="about-icon">🎓</div>

        <h2>Student Management System</h2>

        <p>
          The Student Management System is a web-based frontend
          application designed to manage students, departments,
          courses and faculty information efficiently.
        </p>

        <div className="about-features">
          <div>
            <strong>Student Management</strong>
            <p>Add, edit, search and delete student records.</p>
          </div>

          <div>
            <strong>Department Management</strong>
            <p>Manage departments and heads of departments.</p>
          </div>

          <div>
            <strong>Course Management</strong>
            <p>Manage courses and course credits.</p>
          </div>

          <div>
            <strong>Faculty Management</strong>
            <p>Manage faculty members and designations.</p>
          </div>
        </div>
      </div>
    </>
  );

  // ================= PAGE RENDER =================

  const renderPage = () => {
    switch (activePage) {
      case "Dashboard":
        return <Dashboard />;

      case "Students":
        return <StudentsPage />;

      case "Departments":
        return <DepartmentsPage />;

      case "Courses":
        return <CoursesPage />;

      case "Faculty":
        return <FacultyPage />;

      case "Profile":
        return <ProfilePage />;

      case "About":
        return <AboutPage />;

      default:
        return <Dashboard />;
    }
  };

  // ================= MAIN APP =================

  return (
    <div className="app">

      {/* TOP NAVBAR */}

      <header className="topbar">

        <div className="topbar-left">
          <button
            className="menu-button"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            ☰
          </button>

          <div className="topbar-logo">
            🎓 Student Management System
          </div>
        </div>

        <div className="topbar-right">
          <span className="welcome">
            Welcome, {username}
          </span>

          <button
            className="profile-button"
            onClick={() => setActivePage("Profile")}
          >
            👤
          </button>

          <button className="logout-button" onClick={logout}>
            Logout
          </button>
        </div>
      </header>

      <div className="main-layout">

        {/* SIDEBAR */}

        {sidebarOpen && (
          <aside className="sidebar">

            <div className="sidebar-title">
              MAIN MENU
            </div>

            <button
              className={
                activePage === "Dashboard"
                  ? "menu-item active"
                  : "menu-item"
              }
              onClick={() => setActivePage("Dashboard")}
            >
              <span>📊</span>
              Dashboard
            </button>

            <div className="sidebar-title">
              MANAGEMENT
            </div>

            <button
              className={
                activePage === "Students"
                  ? "menu-item active"
                  : "menu-item"
              }
              onClick={() => setActivePage("Students")}
            >
              <span>👨‍🎓</span>
              Students
            </button>

            <button
              className={
                activePage === "Departments"
                  ? "menu-item active"
                  : "menu-item"
              }
              onClick={() => setActivePage("Departments")}
            >
              <span>🏢</span>
              Departments
            </button>

            <button
              className={
                activePage === "Courses"
                  ? "menu-item active"
                  : "menu-item"
              }
              onClick={() => setActivePage("Courses")}
            >
              <span>📚</span>
              Courses
            </button>

            <button
              className={
                activePage === "Faculty"
                  ? "menu-item active"
                  : "menu-item"
              }
              onClick={() => setActivePage("Faculty")}
            >
              <span>👨‍🏫</span>
              Faculty
            </button>

            <div className="sidebar-title">
              SYSTEM
            </div>

            <button
              className={
                activePage === "Profile"
                  ? "menu-item active"
                  : "menu-item"
              }
              onClick={() => setActivePage("Profile")}
            >
              <span>👤</span>
              Profile
            </button>

            <button
              className={
                activePage === "About"
                  ? "menu-item active"
                  : "menu-item"
              }
              onClick={() => setActivePage("About")}
            >
              <span>ℹ️</span>
              About
            </button>

            <div className="sidebar-bottom">
              <div className="admin-box">
                <div className="admin-avatar">
                  {username.charAt(0).toUpperCase()}
                </div>

                <div>
                  <strong>{username}</strong>
                  <span>Administrator</span>
                </div>
              </div>
            </div>

          </aside>
        )}

        {/* MAIN CONTENT */}

        <main className="main-content">
          {renderPage()}

          <footer className="footer">
            <p>
              © 2026 Student Management System | All Rights Reserved
            </p>
          </footer>
        </main>

      </div>
    </div>
  );
}

export default App;