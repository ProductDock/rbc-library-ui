/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import "./NewBookForm.css";
import { useLocation, useNavigate } from "react-router";
import TextArea from "../FormComponents/TextArea";
import { successMessages } from "../../constants/successMessages";
import { useSuccessScreenContext } from "../../store/books/success/SuccessScreenContext";
import { useNewBookContext } from "../../store/books/new/NewBookContext";
import NumberInput from "./NumberInput";
import { NewBook, SelectedTopic, Topic } from "../../store/books/new/Types";
import TopicSelect from "./TopicSelect";
import SidebarFormModal from "../SidebarFormModal";
import { useBooksContext } from "../../store/books/catalog/BooksContext";
import { routes } from "../../constants/routes";
import { warningMessages } from "../../constants/warningMessages";

const NewBookForm = () => {
  const { addBook, hideNewBookForm, existingTopics, showedNewBookForm } =
    useNewBookContext();
  const { findBooks } = useBooksContext();
  const { showSuccessScreen, showWarningScreen } = useSuccessScreenContext();
  const navigate = useNavigate();
  const location = useLocation();

  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [cover, setCover] = useState<string>("");
  const [bookCopies, setBookCopies] = useState<number>(1);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [showedTopics, setShowedTopics] = useState<Topic[]>(existingTopics);
  const topics: SelectedTopic[] = [];

  const createBook = (): NewBook => {
    const book: NewBook = {
      title,
      author,
      cover,
      bookCopies,
      description,
      topics,
    };
    return book;
  };

  const hideForm = () => {
    hideNewBookForm?.();
    setSelectedTopics([]);
  };

  const onSuccessCallback = () => {
    showSuccessScreen?.(successMessages.ADD_BOOK, "");
    hideForm?.();

    if (location.pathname === routes.ADMIN_BOOKS) {
      findBooks?.();
    } else {
      navigate(`${routes.ADMIN_BOOKS}`);
    }
  };

  const onFailureCallback = () => {
    showWarningScreen?.(warningMessages.ADD_BOOK, "");
  };

  const handleSubmit = () => {
    existingTopics.forEach((t) => {
      if (selectedTopics.includes(t.name)) {
        const { id } = t;
        const topic: SelectedTopic = {
          id,
        };
        topics.push(topic);
      }
    });

    const newBook = createBook();

    addBook?.(newBook)
      .then(() => onSuccessCallback())
      .catch(() => onFailureCallback());
  };

  const isSubmitEnabled = useCallback(() => {
    return (
      author.length > 0 &&
      title.length > 0 &&
      cover.length > 0 &&
      description.length > 0
    );
  }, [author, title, cover, description]);

  useEffect(() => setShowedTopics(existingTopics), [existingTopics]);

  return (
    <SidebarFormModal
      title="Add a new book"
      submitButtonText="Add"
      submitDisabled={!isSubmitEnabled()}
      cancelButtonText="Cancel"
      open={showedNewBookForm}
      handleClose={hideForm}
      handleSubmit={handleSubmit}
    >
      <Typography className="new-book-field-title">Title</Typography>
      <TextArea
        dataTestId="new-book-title"
        maxLength={100}
        text={title}
        setText={setTitle}
        minRows={1}
        placeholder="Enter the book title"
        showTextLength={false}
      />
      <Typography className="new-book-field-title">Author</Typography>
      <TextArea
        dataTestId="new-book-author"
        maxLength={100}
        text={author}
        setText={setAuthor}
        minRows={1}
        placeholder="Who is the author of the book?"
        showTextLength={false}
      />
      <Typography className="new-book-field-title">Book cover(URL)</Typography>
      <TextArea
        dataTestId="new-book-cover"
        maxLength={255}
        text={cover}
        setText={setCover}
        minRows={1}
        placeholder="Enter a link to the book cover"
        showTextLength={false}
      />
      <Typography className="new-book-field-title">Description</Typography>
      <TextArea
        dataTestId="new-book-description"
        maxLength={1500}
        text={description}
        setText={setDescription}
        minRows={5}
        placeholder="Enter a description"
        showTextLength={false}
      />
      <Typography className="new-book-field-title">Number of copies</Typography>
      <NumberInput number={bookCopies} setNumber={setBookCopies} />
      <Typography className="new-book-field-title">Category</Typography>
      <TopicSelect
        selectedTopics={selectedTopics}
        setSelectedTopics={setSelectedTopics}
        existingTopics={existingTopics}
        showedTopics={showedTopics}
        setShowedTopics={setShowedTopics}
      />
    </SidebarFormModal>
  );
};

export default NewBookForm;
