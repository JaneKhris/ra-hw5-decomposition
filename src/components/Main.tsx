import { navigateMain } from "../data/data";
import Item from "./Item";
import Logo from "./Logo";
import Navigate from "./Navigate";
import SearchForm from "./SearchForm";

/**
 * Основной блок
 * 
 */
function Main() {
  return (
    <main>
      <Logo />
      <div className="main-container">
        <Navigate type="main" array={navigateMain} />
        <SearchForm />
        <Item
          type="help"
          text="Найдется все, например,"
          comment="фаза луны сегодня"
        />
      </div>
    </main>
  );
}

export default Main;
