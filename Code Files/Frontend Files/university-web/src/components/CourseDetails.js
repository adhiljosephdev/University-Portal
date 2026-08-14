import { useParams } from "react-router-dom";


function CourseDetails(){
    const { id } = useParams();

    return (
        <div>
            <h2>Course Details</h2>
            <p>Course ID: {id}</p>
        </div>
    );
}
export default CourseDetails;