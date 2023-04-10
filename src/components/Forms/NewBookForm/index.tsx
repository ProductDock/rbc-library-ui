/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Typography } from "@mui/material";
import { useCallback, useState } from "react";
import NewBookFormTitle from "../Components/FormTitle";
import "./NewBookForm.css";
import TextArea from "../Components/TextArea";
import SubmitNewBookButton from "../Components/SubmitButton";
import CancelButton from "../Components/CancelButton";
import { successMessages } from "../../../constants/successMessages";
import { useSuccessScreenContext } from "../../../store/books/success/SuccessScreenContext";
import { useNewBookContext } from "../../../store/books/new/NewBookContext";
import NumberInput from "./NumberInput";
import { NewBook, SelectedTopic } from "../../../store/books/new/Types";
import TopicSelect from "./TopicSelect";

const NewBookForm = () => {
    const { addBook, hideNewBookForm, existingTopics } = useNewBookContext();
    const { showSuccessScreen } = useSuccessScreenContext();

    const [title, setTitle] = useState<string>("");
    const [author, setAuthor] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [cover, setCover] = useState<string>("");
    const [bookCopies, setBookCopies] = useState<number>(1);
    const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
    const topics: SelectedTopic[] = [];

    const createBook = (): NewBook => {
      const book: NewBook = {
        title,
        author,
        cover,
        bookCopies,
        description,
        topics
      };
      return book;
    };

    const hideForm = () => {
      hideNewBookForm?.();
    };

    const onSuccessCallback = () => {
      showSuccessScreen?.(successMessages.ADD_BOOK, '');
      hideForm?.();
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

      addBook?.(createBook()).then(() => onSuccessCallback());
    };

    const isSubmitEnabled = useCallback(() => {
      return author.length > 0 && title.length > 0 && cover.length > 0 && description.length > 0;
    }, [author, title, cover, description]);

    return (
      <div className="new-book-form-container">
        <div className="field-container">
          <NewBookFormTitle onSkip={hideForm} text="Add a new book" />
          <Typography className="new-book-field-title">Title</Typography>
          <TextArea dataTestId="new-book-title" maxLength={100} text={title} setText={setTitle} minRows={1} placeholder="Enter the book title" showTextLength={false} />
          <Typography className="new-book-field-title">Author</Typography>
          <TextArea dataTestId="new-book-author" maxLength={100} text={author} setText={setAuthor} minRows={1} placeholder="Who is the author of the book?" showTextLength={false} />
          <Typography className="new-book-field-title">Book cover(URL)</Typography>
          <TextArea dataTestId="new-book-cover" maxLength={100} text={cover} setText={setCover} minRows={1} placeholder="Enter a link to the book cover" showTextLength={false} />
          <Typography className="new-book-field-title">Description</Typography>
          <TextArea dataTestId="new-book-description" maxLength={1500} text={description} setText={setDescription} minRows={5} placeholder="Enter a description" showTextLength={false} />
          <Typography className="new-book-field-title">Number of copies</Typography>
          <NumberInput number={bookCopies} setNumber={setBookCopies} />
          <Typography className="new-book-field-title">Category</Typography>
          <div className="topic-select">
            <TopicSelect selectedTopics={selectedTopics} setSelectedTopics={setSelectedTopics} existingTopics={existingTopics} />
          </div>
          <div className="new-book-form-footer">
            <SubmitNewBookButton
              text="Add"
              disabled={!isSubmitEnabled()}
              onClick={handleSubmit}
            />
            <CancelButton
              text="Cancel"
              onClick={hideForm}
            />
          </div>
        </div>
      </div>
    );
};

export default NewBookForm;
