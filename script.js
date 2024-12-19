function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "12318355" && password === "viratkohli") {
        document.getElementById("message").textContent = "";
        document.getElementById("result").innerHTML = `
        <marquee behavior="scroll" direction="left" style="font-size: 24px; color: #e8691a; font-weight: bold; margin-bottom: 20px;">
        Lovely Professional University Semester-1 Results
    </marquee>
            
            <p>Name: Thitre Jail Singh</p>
            <p>Father's Name: Thitre Jagdeesh</p>
            <p>Parent Phone Number: 8328267253</p>
            <p>Branch: Btech CSE</p>
            <p>Academic Year: 2023-2024</p>
            <p><strong>CGPA:7.2</strong></p>
            <table>
                <tr>
                    <th>Course Name</th>
                    <th>Marks</th>
                    <th>Grade(100)</th>
                </tr>
                <tr>
                    <td>CSE111</td>
                    <td>77</td>
                    <td>B+ (Good)</td>
                    </tr>
                <tr>
                    <td>MTH!74</td>
                    <td>48</d>
                    <td>D(Below Average)</td>
                </tr>
                <tr>
                    <td>INT108</td>
                    <td>69</td>
                    <td>B+ (Good)</td>
                </tr>
                <tr>
                    <td>ECE279</td>
                    <td>71</td>
                    <td>B+ (Good)</td>
                </tr>
                <tr>
                    <td>ECE249</td>
                    <td>85</td>
                    <td>A (Very Good)</td>
                </tr>
                <tr>
                    <td>CHE110</td>
                    <td>63</td>
                    <td>B (Average)</td>
                </tr>
                <tr>
                    <td>PES318</td>
                    <td>77</td>
                    <td>B+ (Good)</td>
                </tr>
            </table>
        `;
        document.getElementById("result-container").style.display = "block";
    } else {
        document.getElementById("message").textContent = "Invalid login credentials";
        document.getElementById("result-container").style.display = "none";
    }
}
