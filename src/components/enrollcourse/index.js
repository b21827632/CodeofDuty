import { useSelector } from "react-redux";
import { ThemeState } from "../../features/theme";

import {
  Container,
  SearchContainer,
  SearchInput,
  SearchButton,
  ListContainer,
  ListItem,
  ItemInfo,
  Name,
  Instructors,
  EnrollButton,
} from "./styles/enrollcourse";
export default function EnrollCourse({ children, ...restProps }) {
  const Theme = useSelector(ThemeState).theme;

  return (
    <Container white={Theme} {...restProps}>
      {children}
    </Container>
  );
}

EnrollCourse.SearchContainer = function EnrollCourseSearchContainer({
  children,
  ...restProps
}) {
  return <SearchContainer {...restProps}>{children}</SearchContainer>;
};

EnrollCourse.SearchInput = function EnrollCourseSearchInput({ ...restProps }) {
  return <SearchInput {...restProps} />;
};

EnrollCourse.SearchButton = function EnrollCourseSearchButton({
  onClick,
  children,
  ...restProps
}) {
  return (
    <SearchButton onClick={onClick} {...restProps}>
      {children}
    </SearchButton>
  );
};

EnrollCourse.ListContainer = function EnrollCourseListContainer({
  children,
  ...restProps
}) {
  return <ListContainer {...restProps}>{children}</ListContainer>;
};

EnrollCourse.ListItem = function EnrollCourseItem({ children, ...restProps }) {
  return <ListItem {...restProps}>{children}</ListItem>;
};

EnrollCourse.ItemInfo = function EnrollCourseItemInfo({
  children,
  ...restProps
}) {
  return <ItemInfo {...restProps}>{children}</ItemInfo>;
};

EnrollCourse.Name = function EnrollCourseName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};

EnrollCourse.Instructors = function EnrollCourseInstructors({
  children,
  ...restProps
}) {
  return <Instructors {...restProps}>{children}</Instructors>;
};

EnrollCourse.EnrollButton = function EnrollCourseButton({
  onClick,
  children,
  ...restProps
}) {
  return (
    <EnrollButton onClick={onClick} {...restProps}>
      {children}
    </EnrollButton>
  );
};
