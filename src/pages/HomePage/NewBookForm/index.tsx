import NewBookForm from "../../../components/NewBookForm";
import { useNewBookContext } from "../../../store/books/new/NewBookContext";
import { useSuccessScreenContext } from "../../../store/books/success/SuccessScreenContext";
import SnackbarAlert from "../../../components/Snackbar";

const NewBookFormHomePage = () => {
    const { showedNewBookForm, hideNewBookForm } = useNewBookContext();
    const { showed, hideSuccessScreen, successMessage, gratitudeMessage } = useSuccessScreenContext();

    return (
      <>
        {showedNewBookForm && (
        <>
          <div className="new-book-form-wrapper" onClick={hideNewBookForm} />
          <NewBookForm />
        </>
      )}
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
