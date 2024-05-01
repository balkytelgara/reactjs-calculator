export default function Button({ value, res, setRes }) {
  return (
    <div
      className="Button"
      onClick={() => {
        if (value === "C") {
          setRes("");
        } else if (value === "=") {
          try {
            setRes(eval(res));
          } catch {
            alert("Syntax Error!");
            setRes("");
          }
        } else {
          setRes(res + value);
        }
      }}
    >
      {value}
    </div>
  );
}
