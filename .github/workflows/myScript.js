function validateForm() {
    
    const fullName = document.getElementById("fullName");
    const fatherName = document.getElementById("fatherName");
    const motherName = document.getElementById("motherName");
    const nationality = document.getElementById("nationality");
    const email = document.getElementById("email");
    const contactNo = document.getElementById("contactNo");
    const address = document.getElementById("address");
    const highestQualification = document.getElementById("highestQualification");
    const specialization = document.getElementById("specialization");
    const institution = document.getElementById("institution");
    const grade = document.getElementById("grade");
    const courseReason = document.getElementById("courseReason");
    const courseSource = document.getElementById("courseSource");
    const courseExpectations = document.getElementById("courseExpectations");

    // Validate required fields
    if (fullName.value === "") {
        alert("Please enter your Full Name.");
        fullName.focus();
        return false;
    }
    if (fatherName.value === "") {
        alert("Please enter your Father's Full Name.");
        fatherName.focus();
        return false;
    }
    if (motherName.value === "") {
        alert("Please enter your Mother's Full Name.");
        motherName.focus();
        return false;
    }
    if (nationality.value === "") {
        alert("Please enter your Nationality.");
        nationality.focus();
        return false;
    }
    if (email.value === "") {
        alert("Please enter your Email Address.");
        email.focus();
        return false;
    }
    if (contactNo.value === "") {
        alert("Please enter your Contact Number.");
        contactNo.focus();
        return false;
    }
    if (address.value === "") {
        alert("Please enter your Address.");
        address.focus();
        return false;
    }
    if (highestQualification.value === "") {
        alert("Please select your Highest Qualification.");
        highestQualification.focus();
        return false;
    }
    if (specialization.value === "") {
        alert("Please enter your Specialization.");
        specialization.focus();
        return false;
    }
    if (institution.value === "") {
        alert("Please enter your Institution Name.");
        institution.focus();
        return false;
    }
    if (grade.value === "") {
        alert("Please enter your Grade of UG&PG.");
        grade.focus();
        return false;
    }
    if (courseReason.value === "") {
        alert("Please enter your reason for joining the course.");
        courseReason.focus();
        return false;
    }
    if (courseSource.value === "") {
        alert("Please enter the source where you learned about the course.");
        courseSource.focus();
        return false;
    }
    if (courseExpectations.value === "") {
        alert("Please enter your expectations from this course.");
        courseExpectations.focus();
        return false;
    }

 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        alert("Please enter a valid email address.");
        email.focus();
        return false;
    }

    
    const contactRegex = /^\d{10}$/; 
    if (!contactRegex.test(contactNo.value)) {
        alert("Please enter a valid 10-digit contact number.");
        contactNo.focus();
        return false;
    }

    return true;
}