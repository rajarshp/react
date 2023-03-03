import Card from "../ui/Card";
import styles from "./UsersList.module.css";

const DisplayUsers = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.items.map((item) => {
          return (
            <Card className={styles.card}>
              <li>
                <p hidden={true}>key:{item.id}</p>
                {item.userName} is {item.userAge} years old
              </li>
            </Card>
          );
        })}
      </ul>
    </Card>
  );
};

export default DisplayUsers;
