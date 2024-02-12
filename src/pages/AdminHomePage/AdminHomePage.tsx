import "./AdminHomePage.css";
import NavBar from "../../components/NavBar";
import SideMenu from "../../components/SideMenu";
import BooksContextProvider from "../../store/books/catalog/BooksContext";
import { routes } from "../../constants/routes";
import BooksTable from "./BooksTable";

type Props = {
  selectedRoute?: string;
};

const AdminHomePage = ({ selectedRoute = routes.ADMIN_HOME }: Props) => {
  return (
    <div>
      <SideMenu selectedRoute={selectedRoute} />
      <NavBar showSearchBar={false} />

      <div className="main">
        {selectedRoute === routes.ADMIN_BOOKS && (
          <BooksContextProvider>
            <BooksTable />
          </BooksContextProvider>
        )}
      </div>
    </div>
  );
};

export default AdminHomePage;
