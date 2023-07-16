import {useState} from "react";

function List({ contacts }) {

  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase())
  );
});
  
  return (
    <div>

      <input placeholder="Search Contacts" value={filterText} onChange={(e) => setFilterText(e.target.value)}/>

      <ul className="myUsersList">
        {filtered.map((contact, i) => (
          <li key={i}>
            <span> {contact.fullname} </span>
            <span> {contact.phone_number} </span>
          </li>
        ))}
      </ul>

      <p className="total">
        Total contacts ({filtered.length})
      </p>

    </div>
  );
}

export default List;