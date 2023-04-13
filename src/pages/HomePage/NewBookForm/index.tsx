import NewBookForm from "../../../components/FormComponents/NewBookForm";
import { useSuccessScreenContext } from "../../../store/books/success/SuccessScreenContext";
import SnackbarAlert from "../../../components/Snackbar";

const NewBookFormHomePage = () => {
  const { showed, hideSuccessScreen, successMessage, gratitudeMessage } =
    useSuccessScreenContext();

  return (
    <>
      <NewBookForm />
      <SnackbarAlert
        showed={showed}
        onClose={hideSuccessScreen}
        autoHideDuration={5000}
        title="Success!"
        description={successMessage}
        innerMessage={gratitudeMessage}
      />
    </>
  );
};

export default NewBookFormHomePage;
