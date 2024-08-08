import { useAuth } from "../../hooks/useAuth";
import Container from "../../components/ui/container/Container";
import Blogger from "../../components/smart/blogger/Blogger";
import styles from "./bloggers.module.css";

function Bloggers() {
  const { loggedUser } = useAuth();

  const dumbData = [
    {
      id: "u1",
      name: "Max Schwarts",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ynnYQm1WSZ6B6BNreJrhArIUaWKjD0E6dw&s",
      places: 3,
    },
  ];

  return (
    <Container>
      <div className={styles.bloggers}>
        <h1 className={styles.h1}>Bloggers</h1>
        <div className={styles.content}>
          {dumbData.map((blogger) => (
            <Blogger key={blogger.id} blogger={blogger} />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Bloggers;
