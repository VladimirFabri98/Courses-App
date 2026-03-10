import { useSelector } from "react-redux";
import { Course } from "../../types";
import CourseCard from "./components/CourseCard/CourseCard";
import Utilities from "./components/Utilities/Utilities";
import "./Courses.css";
import { useEffect, useState } from "react";
import { fetchCourses } from "@/store/courses/thunk";
import { RootState, useAppDispatch } from "@/store";
import EmptyCourseList from "../EmptyCourseList/EmptyCourseList";
import { fetchAuthors } from "@/store/authors/thunk";
import { getCurrentUserData } from "@/store/user/thunk";

export default function Courses() {
    const [searchResult, setSearchResult] = useState<Course[]>([]);
    const dispatch = useAppDispatch();
    const { courseData, status } = useSelector(
        (state: RootState) => state.coursesSlice
    );
    const { authorsData, authorsStatus } = useSelector(
        (state: RootState) => state.authorsSlice
    );

    const { userStatus, user } = useSelector(
        (state: RootState) => state.userSlice
    );

    useEffect(() => {
        // const token = localStorage.getItem("token");
        // console.log(token);
        if (status === "idle") {
            dispatch(fetchCourses());
        }
        if (authorsStatus === "idle") {
            dispatch(fetchAuthors());
        }
        // if (userStatus === "idle" && token) {
        //     dispatch(getCurrentUserData(token));
        // }
    }, [status]);

    function handleSearch(searchString: string) {
        const filteredCourses = courseData.filter((course: Course) => {
            if (
                course.title
                    .toLowerCase()
                    .includes(searchString.toLowerCase()) ||
                course.id.toLowerCase().includes(searchString.toLowerCase())
            )
                return course;
        });

        setSearchResult(filteredCourses);
    }

    function handleSearchCleared() {
        setSearchResult([]);
    }

    return !courseData.length ? (
        <EmptyCourseList userRole={user.role} />
    ) : (
        <main className="courses-main">
            <Utilities
                onSearch={handleSearch}
                onSearchCleared={handleSearchCleared}
                userRole={user.role}
            />
            <ul className="courses-list">
                {searchResult.length !== 0
                    ? searchResult.map((course: Course) => {
                          return (
                              <CourseCard
                                  key={course.id}
                                  course={course}
                                  authors={authorsData}
                                  user={user}
                              />
                          );
                      })
                    : courseData.map((course: Course) => {
                          return (
                              <CourseCard
                                  key={course.id}
                                  course={course}
                                  authors={authorsData}
                                  user={user}
                              />
                          );
                      })}
            </ul>
        </main>
    );
}
