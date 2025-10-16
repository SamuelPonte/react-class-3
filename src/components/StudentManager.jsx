import Student from './Student'

function StudentManager() {
    // data could be from a API/database
    const listStudents = [
        { fullName: 'Joao', ageInYears: 20 },
        { fullName: 'Diogo', ageInYears: 30 },
        { fullName: 'Test', ageInYears: 0 }
    ];

    // variable that will contain HTML that we will show on screen
    let listStudentsHtml = [];

    // for each element of listStudents, we will create a Student component
    // each student component will be pushed inside the listStudentsHtml array
    listStudents.forEach((student) => {
        listStudentsHtml.push(
            <Student name={student.fullName} age={student.ageInYears} />
        );

    });

    return <>
        <hr />
        {/* show the array of student components */}
        {listStudentsHtml}
    </>;
}

export default StudentManager;