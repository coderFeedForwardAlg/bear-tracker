export default function Button(props) {
    const {handelClick, text} = props;
    const onClick = () => {
        handelClick();
    }
    return (
        <div>
            <button style={styles.button} onClick={onClick}> <div style={styles.buttonText}>{text}</div></button>
        </div>
    );
}

const styles = {
    button: {

    backgroundColor: 'brown',
    border: "3px solid black",

      borderRadius: 10,
      padding: 10,
      minWidth: 200,
    },
    buttonText: {
      color: 'white',
      fontSize: 20
    },
}