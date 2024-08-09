import { useParams } from "react-router-dom";
import Container from "../../components/ui/container/Container";
import styles from "./places.module.css";
import Place from "../../components/smart/place/Place";
import Heading from "../../components/ui/heading/Heading";

function Places() {
  const { uid } = useParams();
  console.log(uid);

  const dummyPlaces = [
    {
      id: "p1",
      title: "Empire State Building",
      description: "One of the most famous sky scrapers in the world!",
      image:
        "https://www.civitatis.com/f/estados-unidos/nueva-york/entrada-empire-state-589x392.jpg",
      address: "20 W 34th St, New York, NY 10001",
      location: {
        lat: 40.7484405,
        lng: -73.9878584,
      },
      creator: "u1",
    },
    {
      id: "p2",
      title: "Empire State Building",
      description: "One of the most famous sky scrapers in the world!",
      image:
        "https://www.civitatis.com/f/estados-unidos/nueva-york/entrada-empire-state-589x392.jpg",
      address: "20 W 34th St, New York, NY 10001",
      location: {
        lat: 40.7484405,
        lng: -73.9878584,
      },
      creator: "u2",
    },
  ];

  return (
    <Container >
      <Heading
        track={[
          { title: "Bloggers", to: "/" },
          { title: "Name", to: `/${uid}/places` },
        ]}
      />
      <div className={styles.places}>
        {dummyPlaces
          .filter((place) => place.creator === uid)
          .map((place) => (
            <Place place={place} key={place.id} />
          ))}
      </div>
    </Container>
  );
}

export default Places;
