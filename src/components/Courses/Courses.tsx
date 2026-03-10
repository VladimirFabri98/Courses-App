import { useSelector } from "react-redux";
import { Course } from "../../types";
import CourseCard from "./components/CourseCard/CourseCard";
import Utilities from "./components/Utilities/Utilities";
import "./Courses.css";
import { useEffect, useState } from "react";
import { fetchCourses } from "@/store/courses/coursesSlice";
import { RootState, useAppDispatch } from "@/store";
import EmptyCourseList from "../EmptyCourseList/EmptyCourseList";
import { fetchAuthors } from "@/store/authors/authorsSlice";

export default function Courses() {
    const [searchResult, setSearchResult] = useState<Course[]>([]);
    const dispatch = useAppDispatch();
    const { courseData, status } = useSelector(
        (state: RootState) => state.coursesSlice
    );
    const { authorsData, authorsStatus } = useSelector(
        (state: RootState) => state.authorsSlice
    );

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchCourses());
        }
        if (authorsStatus === "idle") {
            dispatch(fetchAuthors());
        }
    }, [status, authorsStatus, dispatch]);

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
        <EmptyCourseList />
    ) : (
        <main className="courses-main">
            <Utilities
                onSearch={handleSearch}
                onSearchCleared={handleSearchCleared}
            />
            <ul className="courses-list">
                {searchResult.length !== 0
                    ? searchResult.map((course: Course) => {
                          return (
                              <CourseCard
                                  key={course.id}
                                  course={course}
                                  authors={authorsData}
                              />
                          );
                      })
                    : courseData.map((course: Course) => {
                          return (
                              <CourseCard
                                  key={course.id}
                                  course={course}
                                  authors={authorsData}
                              />
                          );
                      })}
            </ul>
        </main>
    );
}
