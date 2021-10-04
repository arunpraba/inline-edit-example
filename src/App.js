import { useState } from "react";
import "./styles.css";

const Box = ({ label, isEdit, onUpdate }) => {
  if (isEdit)
    return (
      <div>
        <input value={label} onChange={onUpdate} />
      </div>
    );
  return <span>{label}</span>;
};

export default function App() {
  const [list, setList] = useState([
    { id: "1", label: "Section 1" },
    { id: "2", label: "Section 2" },
    { id: "3", label: "Section 3" },
    { id: "4", label: "Section 4" }
  ]);

  const [activeItem, setActiveItem] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const onUpdate = (e, id) => {
    setList((prevList) => {
      return prevList.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            label: e.target.value
          };
        }
        return item;
      });
    });
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button
        style={{ margin: 10 }}
        onClick={() => {
          setActiveItem(null);
          setIsEdit(false);
        }}
      >
        Make In Active
      </button>
      {list.map((item) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: 10,
            margin: 10,
            background: activeItem === item.id ? "orange" : "transparent"
          }}
        >
          <Box
            label={item.label}
            onUpdate={(e) => onUpdate(e, item.id)}
            isEdit={activeItem === item.id && isEdit}
          />
          <button style={{ margin: 10 }} onClick={() => setIsEdit(true)}>
            Edit
          </button>
          <button
            style={{ margin: 10 }}
            onClick={() =>
              setActiveItem(activeItem === item.id ? null : item.id)
            }
          >
            {activeItem === item.id ? "Make In Active" : "Make Active"}
          </button>
        </div>
      ))}
    </div>
  );
}
