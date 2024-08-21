import { visited, map, tv, live } from "../data/data";
import Adverstiment from "./Adverstiment";
import Item from "./Item";
import Section from "./Section";
import WeatherWidget from "./WeatherWidget";

/**
 * Нижняя область
 * 
 */

function Downside() {
  return (
    <div className="downside">
      <Adverstiment type="movie" img="#" />
      <Section type="others">
        <Section type="weather" title="Погода">
          <WeatherWidget />
        </Section>
        <Section type="visited" title="Посещаемое">
          {visited.map((item) => (
            <Item type="visited" title={item.title} text={item.text} />
          ))}
        </Section>
        <Section type="map" title="Карта Германии">
          {map.map((item) => (
            <Item type="map" text={item} />
          ))}
        </Section>
        <Section type="tv" title="Телепрограмма" img="#">
          {tv.map((item) => (
            <Item type="tv" text={item.text} comment={item.comment}/>
          ))}
        </Section>
        <Section type="live" title="Эфир">
          {live.map((item) => (
            <Item type="live" img={item.img} text={item.text} comment={item.comment}/>
          ))}
        </Section>
      </Section>
    </div>
  );
}

export default Downside;
