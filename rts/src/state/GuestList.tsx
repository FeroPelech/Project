import { useState } from "react";

const GuestList: React.FC = () => {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState<string[]>([]);
  const onClick = () => {
    setName("");
    if (name !== "") {
      setGuests([...guests, name]);
    }
  };
  return (
    <div>
      <h3>Zoznam hostov</h3>
      <ul>
        {guests.map((host) => (
          <li key={host}>{host}</li>
        ))}
      </ul>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={onClick}>Add Guest</button>
    </div>
  );
};

export default GuestList;
