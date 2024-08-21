import Navigate from "./Navigate";
import { media, navigateRates, navigateUpside } from "../data/data";
import Date from "./Date";
import Section from "./Section";
import Item from "./Item";
import Adverstiment from "./Adverstiment";

/**
 * Верхняя область
 * 
 */

function Upside() {
  return (
    <div className="upside">
      <div className="upside-container">
      <Navigate type={"upside"} array={navigateUpside} />
      <Date date={"30.07"} />
      <Section type="media">
        {media.map((item) => (
          <Item type="media" img= {item.img}text={item.text} />
        ))}
      </Section>
      <Navigate type="rates">
        {navigateRates.map((item) => (
          <Item
            type="navi"
            title={item.value}
            text={item.rate}
            comment={item.var}
          />
        ))}
      </Navigate>
      </div>
      <Adverstiment
        type="aside"
        img="#"
        title="Работа над ошибками"
        text="Смотрите на яндексе и запоминайте"
      />
    </div>
  );
}

export default Upside;
