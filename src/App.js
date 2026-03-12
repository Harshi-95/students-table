import React, { useState } from "react";
import "./App.css";
import background from "./images/background.jpg";
import StudentTable from "./components/StudentTable";
import StudentForm from "./components/StudentForm";
import { initialStudents } from "./data";

function App() {

  const [students, setStudents] = useState(initialStudents);
  const [editingStudent, setEditingStudent] = useState(null);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const deleteStudent = (id) => {
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
  };

  const updateStudent = (updatedStudent) => {
    const updatedList = students.map((student) =>
      student.id === updatedStudent.id ? updatedStudent : student
    );

    setStudents(updatedList);
    setEditingStudent(null);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "40px"
      }}
    >
      <div className="container">

        <h1>Student Management System</h1>

        <StudentForm
          addStudent={addStudent}
          editingStudent={editingStudent}
          updateStudent={updateStudent}
        />

        <StudentTable
          students={students}
          deleteStudent={deleteStudent}
          setEditingStudent={setEditingStudent}
        />

      </div>
    </div>
  );
}

export default App;