/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Typography } from "@mui/material";
import { useCallback, useState } from "react";
import NewBookFormTitle from "./FormTitle";
import "./NewBookForm.css";
import TextArea from "./TextArea";
import SubmitNewBookButton from "./SubmitNewBookButton";
import CancelNewBookButton from "./CancelNewBookButton";
import { successMessages } from "../../constants/successMessages";
import { useSuccessScreenContext } from "../../store/books/success/SuccessScreenContext";
import { gratitudeMessages } from "../../constants/gratitudeMessages";
import { useNewBookContext } from "../../store/books/new/NewBookContext";
import NumberInput from "./NumberInput";
import { NewBook, SelectedTopic } from "../../store/books/new/Types";
import TopicSelect from "./TopicSelect";

const NewBookForm = () => {
    const { addBook, hideNewBookForm: hideAddBookForm, existingTopics } = useNewBookContext();
    const { showSuccessScreen } = useSuccessScreenContext();

    const [title, setTitle] = useState<string>("");
    const [author, setAuthor] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [coverUrl, setCoverUrl] = useState<string>("");
    const [numberOfCopies, setNumberOfCopies] = useState<number>(1);
    const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
    const topics: SelectedTopic[] = [];

    const createBook = (): NewBook => {
      const book: NewBook = {
        title,
        author,
        coverUrl,
        numberOfCopies,
        description,
        topics
      };
      return book;
    };

    const hideForm = () => {
      hideAddBookForm?.();
    };

    const onSuccessCallback = () => {
      showSuccessScreen?.(successMessages.REVIEW_BOOK, gratitudeMessages.THANK_YOU);
      hideAddBookForm?.();
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
      return author.length > 0 || title.length > 0 || description.length > 0;
    }, [author, title, description]);

    return (
      <div className="new-book-form-container">
        <div className="field-container">
          <NewBookFormTitle onSkip={hideForm} />
          <Typography className="new-book-field-title">Title</Typography>
          <TextArea maxLength={100} text={title} setText={setTitle} minRows={1} placeholder="Enter a link to the book cover" />
          <Typography className="new-book-field-title">Author</Typography>
          <TextArea maxLength={100} text={author} setText={setAuthor} minRows={1} placeholder="Enter a link to the book cover" />
          <Typography className="new-book-field-title">Book cover(URL)</Typography>
          <TextArea maxLength={100} text={coverUrl} setText={setCoverUrl} minRows={1} placeholder="Enter a link to the book cover" />
          <Typography className="new-book-field-title">Description</Typography>
          <TextArea maxLength={500} text={description} setText={setDescription} minRows={5} placeholder="Enter a description" />
          <Typography className="new-book-field-title">Number of copies</Typography>
          <NumberInput number={numberOfCopies} setNumber={setNumberOfCopies} />
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
            <CancelNewBookButton
              text="Cancel"
              onClick={hideForm}
            />
          </div>
        </div>
      </div>
    );
};

export default NewBookForm;
